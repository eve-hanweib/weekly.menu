# 第二步：在 app.js 里加 Supabase 同步

打开你的 **app.js**，按下面 **5 处** 依次操作（用编辑器的「搜索」找位置）。

---

## 第 1 处：加 applyCloudData 函数

**搜索：** `function loadFamilyState()`

找到 **loadFamilyState** 这个函数的结尾（整段的 `};`），在**这个 `};` 的下一行**，插入下面整段：

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

---

## 第 2 处：登录成功后从云端拉数据

**搜索：** `loadFamilyState();` 和 `showApp();` 和 `initUI();` 在同一段里（在 **loginForm** 的 submit 里）

把这一段：

```js
          loadFamilyState();
          showApp();
          initUI();
```

**整体替换成：**

```js
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
            loadFamilyState();
            showApp();
            initUI();
          }
```

（注意：如果原来没有 `loadFamilyState();` 只有 `showApp(); initUI();`，就只把 `showApp(); initUI();` 换成上面这一整段，且上面里 else 里保留 `loadFamilyState(); showApp(); initUI();`。）

---

## 第 3 处：创建家庭成功后先写云端再拉数据

**搜索：** `localStorage.setItem(getFamilyStorageKey(id), JSON.stringify(data));`

在**创建家庭**的那个表单 submit 里，找到紧接着的：

```js
        loadFamilyState();
        showApp();
        initUI();
```

**整体替换成：**

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

---

## 第 4 处：每次保存时同时写 Supabase

**搜索：** `localStorage.setItem(getFamilyStorageKey(currentFamilyId), JSON.stringify(data));`

在这一行的**下一行**（在 `} catch (e) {}` 之前），插入：

```js
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

---

## 第 5 处：打开页面时已登录则先拉云端再 initUI

**搜索：** `if (currentFamilyId) {`

在文件末尾附近，找到类似这样的块：

```js
  if (currentFamilyId) {
    hideCover();
    document.getElementById('familyGate').classList.add('hidden');
    showApp();
    loadFamilyState();
    initUI();
  }
```

把其中的 **`initUI();`** 改成下面这段（保留前面的 `loadFamilyState();`）：

```js
    if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
      window.SupabaseSync.loadFromCloudAsync(currentFamilyId, function (err, row) {
        if (!err && row && row.data) {
          applyCloudData(row.data);
          saveFamilyState();
        }
        initUI();
      });
    } else {
      initUI();
    }
```

也就是原来只有一行 `initUI();` 的地方，换成上面这整段。

---

## 做完后

保存 app.js，刷新页面。用同一家庭名和密码在电脑、手机各登录一次，选菜/改菜单后应能自动同步。
