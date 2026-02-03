# 用 Supabase 实现「同一账号任意设备自动同步」

按下面步骤做完后，任何人、任何设备用**同一家庭名 + 同一密码**登录，都会自动看到同一份选菜、菜单、采购和自定义菜品。

---

## 一、在 Supabase 建表和配置

### 1. 注册与建项目

1. 打开 https://supabase.com 注册/登录。
2. 点击 **New project**，选组织、填项目名（如 `menu-app`）、设数据库密码，选区域后创建。
3. 等项目状态为 **Active**。

### 2. 建表

1. 左侧点 **SQL Editor**。
2. 点 **New query**，把本仓库里的 **`supabase-setup.sql`** 全部复制进去，点 **Run**。
3. 看到成功即可（会创建 `family_data` 表）。

### 3. 拿到 URL 和 anon key

1. 左侧点 **Project Settings**（齿轮）→ **API**。
2. 记下：
   - **Project URL**（如 `https://xxxxx.supabase.co`）
   - **anon public**  key（一长串 JWT）

### 4. 填到项目里

打开项目里的 **`supabase-config.js`**，把上面两个值填进去：

```js
window.SUPABASE_CONFIG = {
  url: 'https://你的项目.supabase.co',
  anonKey: '你的 anon public key'
};
```

保存。

---

## 二、在页面里引入脚本

在 **index.html** 的 `<body>` 里，保证顺序是：**先 data.js，再 Supabase 相关，最后 app.js**。例如：

```html
<script src="data.js"></script>
<script src="supabase-config.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase-sync.js"></script>
<script src="app.js"></script>
```

这样 Supabase 客户端和同步逻辑会在 app.js 之前加载好。

---

## 三、在 app.js 里接上 Supabase（三处修改）

下面三处都接好后，就会变成：**先读云端，再写云端**；未配置 Supabase 时仍只用本地 localStorage。

### 1. 登录成功后：从云端拉数据并应用

找到 **登录表单提交** 的地方（例如 `loginForm.addEventListener('submit', ...)`），在 `currentFamilyId = id` 且 `loadFamilyState()` 之后，加上「若配置了 Supabase 就从云端拉一次并覆盖本地」：

```js
// 在 loadFamilyState(); 和 showApp(); 之间插入：
if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
  window.SupabaseSync.loadFromCloudAsync(id, function (err, row) {
    if (!err && row && row.data) {
      applyCloudData(row.data);
      var pe = getPeopleInput();
      if (pe && row.data.people != null) pe.value = Math.min(20, Math.max(1, row.data.people));
    }
    showApp();
    initUI();
  });
} else {
  showApp();
  initUI();
}
```

并把原来的 `showApp(); initUI();` 删掉或只保留在上面的 else 分支里，避免执行两次。

### 2. 创建家庭成功后：先确保云端有一行，再拉数据

找到 **创建家庭表单提交** 的地方，在 `localStorage.setItem(getFamilyStorageKey(id), ...)` 和 `loadFamilyState(); showApp(); initUI();` 之后，改成：

```js
if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
  window.SupabaseSync.ensureFamilyRow(id, name, function (err, ok) {
    window.SupabaseSync.loadFromCloudAsync(id, function (e2, row) {
      if (!e2 && row && row.data) applyCloudData(row.data);
      loadFamilyState();
      showApp();
      initUI();
    });
  });
} else {
  loadFamilyState();
  showApp();
  initUI();
}
```

（没有配置 Supabase 时仍走原来的 `loadFamilyState(); showApp(); initUI();`。）

### 3. 定义 applyCloudData 并在进入应用时拉一次云端

在 app.js 里找个地方（例如在 `loadFamilyState` 附近）加上：

```js
function applyCloudData(data) {
  if (!data) return;
  selections = data.selections || {};
  customDishes = data.customDishes || [];
  shoppingHave = data.shoppingHave || {};
  archivedMenus = data.archivedMenus || [];
  shoppingExtraItems = data.shoppingExtraItems || [];
  shoppingExtraHave = data.shoppingExtraHave || {};
  dishOverrides = data.dishOverrides || {};
  if (data.people != null) currentPeopleCount = Math.min(20, Math.max(1, data.people));
  if (data.familyName) currentFamilyName = data.familyName;
}
```

在 **已登录状态下进入应用** 时（例如从封面点进去、或刷新页面时已经 `currentFamilyId` 存在），在调用 `loadFamilyState()` 之后加一次「若配置了 Supabase 就从云端拉数据并应用」：

```js
// 在 if (currentFamilyId) { loadFamilyState(); initUI(); ... } 里，loadFamilyState() 之后加：
if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
  window.SupabaseSync.loadFromCloudAsync(currentFamilyId, function (err, row) {
    if (!err && row && row.data) {
      applyCloudData(row.data);
      saveFamilyState(); // 顺便写回本地，便于离线
    }
    initUI();
  });
} else {
  initUI();
}
```

这样每次打开应用都会先以云端为准，再渲染界面。

### 4. 每次保存时写入云端

找到 **saveFamilyState** 函数，在它里面在写 localStorage 之后加一段「若配置了 Supabase 就再写云端」：

```js
// 在 saveFamilyState 里，localStorage.setItem(...) 之后加：
if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
  var payload = {
    familyName: currentFamilyName,
    people: getPeople(),
    selections: selections,
    customDishes: customDishes,
    shoppingHave: typeof shoppingHave !== 'undefined' ? shoppingHave : {},
    archivedMenus: archivedMenus,
    shoppingExtraItems: shoppingExtraItems,
    shoppingExtraHave: shoppingExtraHave,
    dishOverrides: dishOverrides
  };
  window.SupabaseSync.saveToCloud(currentFamilyId, currentFamilyName, payload, function (err) {
    if (err) console.warn('Supabase save failed:', err);
  });
}
```

这样任意设备上的修改都会写回 Supabase，其他设备下次打开或重新拉取就会看到同一份数据。

---

## 四、自检清单

- [ ] Supabase 里已运行 `supabase-setup.sql`，存在表 `family_data`。
- [ ] `supabase-config.js` 里已填 `url` 和 `anonKey`。
- [ ] `index.html` 里已按顺序引入：data.js → supabase-config.js → Supabase CDN → supabase-sync.js → app.js。
- [ ] app.js 里已加 `applyCloudData`，并在登录、创建家庭、进入应用时用 `loadFromCloudAsync`，在 `saveFamilyState` 里用 `saveToCloud`。

完成后：**同一家庭名 + 同一密码** 在电脑、手机、不同浏览器登录，都会自动看到同一份数据；未配置 Supabase 时仍只使用本地数据。
