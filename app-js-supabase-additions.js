/**
 * 把本文件中的各段代码按说明复制到 app.js 的对应位置。
 * 搜索下面的「搜索」字符串即可定位。
 */

// ============================================================
// 1. 在 loadFamilyState 函数定义【后面】加：applyCloudData 函数
// 搜索: function loadFamilyState()
// 找到 loadFamilyState 的闭合 }; 之后，插入下面整段（含 function applyCloudData ... }）
// ============================================================

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


// ============================================================
// 2. 登录成功：把原来的 loadFamilyState(); showApp(); initUI(); 换成下面这段
// 搜索: loadFamilyState();\s*showApp();\s*initUI();
// 或搜索: showApp(); 然后看上下文是否是 loginForm 的 submit 里、在 loadFamilyState() 之后
// 替换为：
// ============================================================

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


// ============================================================
// 3. 创建家庭成功：把原来的 loadFamilyState(); showApp(); initUI(); 换成下面这段
// 搜索: localStorage.setItem(getFamilyStorageKey(id)
// 找到紧接着的 loadFamilyState(); showApp(); initUI(); （在 createForm 的 submit 里）
// 替换为：
// ============================================================

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


// ============================================================
// 4. saveFamilyState 里：在 localStorage.setItem(getFamilyStorageKey(currentFamilyId) 那一行之后加下面这段
// 搜索: localStorage.setItem(getFamilyStorageKey(currentFamilyId)
// 在该行和后面的 } catch (e) {} 之间插入：
// ============================================================

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


// ============================================================
// 5. 页面加载时已登录：把原来的 initUI(); 改成「先拉云端再 initUI」
// 搜索: if (currentFamilyId) \{
// 再找里面的 loadFamilyState(); 和 initUI();
// 把 loadFamilyState(); 后面紧跟的 initUI(); 改成下面这段（保留 loadFamilyState(); 在前）
// ============================================================

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
