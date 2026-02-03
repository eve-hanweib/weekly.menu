// ========== 导出/导入功能：把下面代码合并到 app.js ==========
// 1. 在 bindAccountModal() 或 init 里绑定按钮（在 refreshAccountPage 或类似位置调用 bindExportImport）
// 2. 确保 HTML 里已有：accountExportBtn, accountImportBtn, accountImportInline, accountImportInput, accountImportConfirmBtn, accountImportCancelBtn

function exportFamilyData() {
  if (!currentFamilyId) return;
  var people = getPeople();
  var data = {
    familyName: currentFamilyName,
    people: people,
    selections: selections,
    customDishes: customDishes,
    shoppingHave: typeof shoppingHave !== 'undefined' ? shoppingHave : {},
    archivedMenus: archivedMenus,
    shoppingExtraItems: shoppingExtraItems,
    shoppingExtraHave: shoppingExtraHave,
    dishOverrides: dishOverrides,
    _exportedAt: Date.now()
  };
  var json = JSON.stringify(data);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(json).then(function () {
      alert(t('exportSuccess'));
    }).catch(function () {
      fallbackCopyExport(json);
    });
  } else {
    fallbackCopyExport(json);
  }
}

function fallbackCopyExport(json) {
  var ta = document.createElement('textarea');
  ta.value = json;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    alert(t('exportSuccess'));
  } catch (e) {
    alert('Export: ' + json.substring(0, 200) + '...\n(Full data in console)');
    console.log('Export data:', json);
  }
  document.body.removeChild(ta);
}

function importFamilyData() {
  var inputEl = document.getElementById('accountImportInput');
  var inlineEl = document.getElementById('accountImportInline');
  if (!inputEl || !inlineEl) return;
  var raw = (inputEl.value || '').trim();
  if (!raw) {
    inlineEl.classList.add('hidden');
    return;
  }
  var data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    alert(t('alertImportInvalid'));
    return;
  }
  if (!data || typeof data.familyName === 'undefined') {
    alert(t('alertImportInvalid'));
    return;
  }
  if (!currentFamilyId) {
    alert(t('alertImportInvalid'));
    return;
  }
  selections = data.selections || {};
  customDishes = data.customDishes || [];
  shoppingHave = data.shoppingHave || {};
  archivedMenus = data.archivedMenus || [];
  shoppingExtraItems = data.shoppingExtraItems || [];
  shoppingExtraHave = data.shoppingExtraHave || {};
  dishOverrides = data.dishOverrides || {};
  if (data.people != null) {
    currentPeopleCount = Math.min(20, Math.max(1, data.people));
    var pe = getPeopleInput();
    if (pe) pe.value = currentPeopleCount;
  }
  saveFamilyState();
  inputEl.value = '';
  inlineEl.classList.add('hidden');
  alert(t('importSuccess'));
  renderWeekGrid();
  renderMenu();
  renderShopping();
  refreshAccountPage();
}

function bindExportImport() {
  var exportBtn = document.getElementById('accountExportBtn');
  var importBtn = document.getElementById('accountImportBtn');
  var inlineEl = document.getElementById('accountImportInline');
  var inputEl = document.getElementById('accountImportInput');
  var confirmBtn = document.getElementById('accountImportConfirmBtn');
  var cancelBtn = document.getElementById('accountImportCancelBtn');
  if (exportBtn) exportBtn.addEventListener('click', exportFamilyData);
  if (importBtn) {
    importBtn.addEventListener('click', function () {
      if (inlineEl) {
        inlineEl.classList.toggle('hidden');
        if (inputEl) inputEl.value = '';
      }
    });
  }
  if (confirmBtn) confirmBtn.addEventListener('click', importFamilyData);
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      if (inlineEl) inlineEl.classList.add('hidden');
      if (inputEl) inputEl.value = '';
    });
  }
}

// 在 bindAccountModal() 末尾或 DOMContentLoaded 里调用一次: bindExportImport();
