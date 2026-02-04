(function () {
  'use strict';

  var LANG_KEY = 'weeklyMenu_lang';
  var currentLang = (function () { try { return localStorage.getItem(LANG_KEY) || 'zh'; } catch (e) { return 'zh'; } })();
  var I18N = {
    zh: {
      pageTitle: '一周点菜', appTitle: 'Weekly Menu', coverOrder: '→ Order',
      familyAccount: '家庭账号', familyDesc: '创建账号后，家庭成员可用同一账号登录一起编辑菜单',
      createFamily: '创建家庭', login: '登录', familyName: '家庭名称', password: '密码', people: '用餐人数',
      createAndEnter: '创建并进入', loginBtn: '登录', namePlaceholder: '如：小明家', passwordPlaceholder: '设置密码',
      namePlaceholderLogin: '家庭名称', passwordPlaceholderLogin: '密码',
      navSelect: '选菜', navMenu: '菜单', navShopping: '采购清单', navAccount: '账号',
      prevWeek: '上一周', nextWeek: '下一周',
      day1: '周一', day2: '周二', day3: '周三', day4: '周四', day5: '周五', day6: '周六', day7: '周日',
      meal_breakfast: '早餐', meal_lunch: '午餐', meal_dinner: '晚餐',
      peopleLabel: '用餐人数', addBtn: '+ 添加', random: '随机',
      menuNamePlaceholder: '菜单名称（可选）', save: '保存', done: '完成',
      menuEmpty1: '还没有选择任何菜品', menuEmpty2: '在「选菜」页选择日期并为早中晚添加菜品',
      shoppingList: '采购清单', ingredients: '食材', seasonings: '配料', otherPurchase: '其他购买',
      shoppingEmptyHint: '暂无，请先在「选菜」页选择本周菜品。', seasoningEmpty: '暂无',
      extraPlaceholder: '如：纸巾、洗洁精…', extraAdd: '添加', extraEmpty: '可添加日用品等',
      accountSettings: '账号设置', currentFamily: '当前家庭', clickToEdit: '（点击修改）',
      familyHint: '家庭成员使用相同名称与密码登录即可一起编辑', newNamePlaceholder: '新家庭名称',
      confirmPwPlaceholder: '当前密码确认', saveName: '保存名字', cancel: '取消',
      viewSavedMenus: '查看保存菜单', deleteSavedHint: '删除不需要的已保存菜单', noSavedMenus: '暂无已保存的菜单',
      passwordLabel: '密码', changePw: '修改', logout: '退出登录', changePwTitle: '修改密码',
      currentPw: '当前密码', newPw: '新密码', confirmPw: '再次输入新密码', confirm: '确定',
      selectDish: '选择菜品', addDish: '添加新菜品', editDish: '编辑菜品', dishName: '菜品名称', category: '分类',
      uploadImage: '上传图片', ingredientsFor2: '食材（以2人份填写）', addIngredient: '＋ 添加食材',
      seasoningsLabel: '配料（只写名称）', addSeasoning: '＋ 添加配料', saveBtn: '保存',
      namePlaceholderDish: '如：青椒肉丝', namePlaceholderShort: '名称', qtyPlaceholder: '用量', seasoningPlaceholder: '如：盐、酱油',
      addFillingDumpling: '添加饺子口味', addFillingBun: '添加包子馅料', fillingName: '口味名称', fillingNameBun: '馅料名称',
      fillingPlaceholderDumpling: '如：韭菜鸡蛋', fillingPlaceholderBun: '如：豆沙',
      clickSelectImage: '点击选择本地图片', changeImageOptional: '更换图片（可选）', imageLabel: '图片', close: '关闭',
      cat_pork: '猪鸡', cat_beef: '牛羊', cat_seafood: '海鲜', cat_veg: '蔬菜', cat_staple: '主食', cat_soup: '汤', cat_out: '外食',
      delete: '删除', unnamed: '未命名', addNewDish: '添加新菜品', addNewFilling: '添加新馅料', back: '← 返回', remove: '删除',
      selectedCount: '已选', alertWrongCred: '账号或密码错误', alertEnterName: '请输入新家庭名称', alertWrongPw: '当前密码错误',
      alertAccountTaken: '该家庭名称与密码组合已被使用，请换一个名称或密码',
      alertNameAlreadyTaken: '该家庭名称已被使用，请换一个名称',
      alertNotRegistered: '该账号未注册，请先创建家庭',
      alertNameUnchanged: '名称未改变', alertSaveFail: '保存失败', alertNameUpdated: '账号名字已修改',
      confirmDiscard: '确定完成并清空当前所有选菜与采购勾选？', alertMenuSaved: '菜单已保存',
      alertEnterDishName: '请输入菜品名称', alertEnterFillingName: '请输入口味或馅料名称', alertEnterNewPw: '请输入新密码',
      alertPwMismatch: '两次输入的新密码不一致', alertPwUpdated: '密码已修改', alertPwChangeFail: '修改失败',
      confirmDeleteDish: '确定删除该菜品？', unit_pc: '个', unit_kg: '公斤', unit_g: '克',
      syncFail: '同步失败，请检查网络后重试', syncRetry: '正在重新同步…'
    },
    en: {
      pageTitle: 'Weekly Menu', appTitle: 'Weekly Menu', coverOrder: '→ Order',
      familyAccount: 'Family Account', familyDesc: 'Create an account so family members can log in to edit the menu together.',
      createFamily: 'Create', login: 'Login', familyName: 'Family Name', password: 'Password', people: 'People',
      createAndEnter: 'Create & Enter', loginBtn: 'Login', namePlaceholder: 'e.g. Smith Family', passwordPlaceholder: 'Set password',
      namePlaceholderLogin: 'Family name', passwordPlaceholderLogin: 'Password',
      navSelect: 'Select', navMenu: 'Menu', navShopping: 'Shopping', navAccount: 'Account',
      prevWeek: 'Prev', nextWeek: 'Next',
      day1: 'Mon', day2: 'Tue', day3: 'Wed', day4: 'Thu', day5: 'Fri', day6: 'Sat', day7: 'Sun',
      meal_breakfast: 'Breakfast', meal_lunch: 'Lunch', meal_dinner: 'Dinner',
      peopleLabel: 'People', addBtn: '+ Add', random: 'Random',
      menuNamePlaceholder: 'Menu name (optional)', save: 'Save', done: 'Done',
      menuEmpty1: 'No dishes selected yet', menuEmpty2: 'Go to Select and add dishes for each meal',
      shoppingList: 'Shopping List', ingredients: 'Ingredients', seasonings: 'Seasonings', otherPurchase: 'Other',
      shoppingEmptyHint: 'None. Select dishes on Select page first.', seasoningEmpty: 'None',
      extraPlaceholder: 'e.g. tissues, soap…', extraAdd: 'Add', extraEmpty: 'Add items',
      accountSettings: 'Account', currentFamily: 'Family', clickToEdit: '(tap to edit)', familyHint: 'Share the same name and password.',
      newNamePlaceholder: 'New family name', confirmPwPlaceholder: 'Current password', saveName: 'Save', cancel: 'Cancel',
      viewSavedMenus: 'Saved menus', deleteSavedHint: 'Delete saved menus', noSavedMenus: 'No saved menus',
      passwordLabel: 'Password', changePw: 'Change', logout: 'Log out', changePwTitle: 'Change password',
      currentPw: 'Current password', newPw: 'New password', confirmPw: 'Confirm new password', confirm: 'OK',
      selectDish: 'Select dish', addDish: 'Add dish', editDish: 'Edit dish', dishName: 'Dish name', category: 'Category',
      uploadImage: 'Upload image', ingredientsFor2: 'Ingredients (for 2 servings)', addIngredient: '+ Add ingredient',
      seasoningsLabel: 'Seasonings (name only)', addSeasoning: '+ Add seasoning', saveBtn: 'Save',
      namePlaceholderDish: 'e.g. Pepper steak', namePlaceholderShort: 'Name', qtyPlaceholder: 'Qty', seasoningPlaceholder: 'e.g. salt, soy sauce',
      addFillingDumpling: 'Add filling', addFillingBun: 'Add filling', fillingName: 'Filling name', fillingNameBun: 'Filling name',
      fillingPlaceholderDumpling: 'e.g. Chive & egg', fillingPlaceholderBun: 'e.g. Red bean',
      clickSelectImage: 'Tap to choose image', changeImageOptional: 'Change image (optional)', imageLabel: 'Image', close: 'Close',
      cat_pork: 'Pork/Chicken', cat_beef: 'Beef/Lamb', cat_seafood: 'Seafood', cat_veg: 'Veg', cat_staple: 'Staple', cat_soup: 'Soup', cat_out: 'Out',
      delete: 'Delete', unnamed: 'Untitled', addNewDish: 'Add dish', addNewFilling: 'Add filling', back: '← Back', remove: 'Remove',
      selectedCount: 'Selected', alertWrongCred: 'Wrong name or password', alertEnterName: 'Enter new family name', alertWrongPw: 'Wrong password',
      alertAccountTaken: 'This family name and password are already in use. Please choose a different name or password.',
      alertNameAlreadyTaken: 'This family name is already taken. Please choose a different name.',
      alertNotRegistered: 'This account is not registered. Please create a family first.',
      alertNameUnchanged: 'Name unchanged', alertSaveFail: 'Save failed', alertNameUpdated: 'Name updated',
      confirmDiscard: 'Clear all selections and checkmarks?', alertMenuSaved: 'Menu saved',
      alertEnterDishName: 'Enter dish name', alertEnterFillingName: 'Enter filling name', alertEnterNewPw: 'Enter new password',
      alertPwMismatch: 'Passwords do not match', alertPwUpdated: 'Password updated', alertPwChangeFail: 'Failed to update',
      confirmDeleteDish: 'Delete this dish?', unit_pc: 'pc(s)', unit_kg: 'kg', unit_g: 'g',
      syncFail: 'Sync failed. Please check network and try again.', syncRetry: 'Retrying sync…'
    }
  };
  function t(key) {
    var lang = I18N[currentLang];
    if (lang && lang[key] !== undefined) return lang[key];
    return I18N.zh[key] || key;
  }
  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    applyI18n();
  }
  function applyI18n() {
    document.title = t('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (k) el.textContent = t(k); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) { var k = el.getAttribute('data-i18n-placeholder'); if (k) el.placeholder = t(k); });
    document.querySelectorAll('option[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (k) el.textContent = t(k); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { var k = el.getAttribute('data-i18n-aria'); if (k) el.setAttribute('aria-label', t(k)); });
    document.querySelectorAll('.lang-switcher').forEach(function (wrap) {
      wrap.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
        btn.textContent = btn.dataset.lang === 'zh' ? '中文' : 'English';
      });
    });
    var cw = document.querySelector('.calendar-weekdays');
    if (cw && cw.children.length === 7) { for (var i = 0; i < 7; i++) cw.children[i].textContent = t('day' + (i + 1)); }
    var app = document.getElementById('app');
    if (app && !app.classList.contains('hidden') && typeof renderWeekGrid === 'function') {
      renderWeekGrid();
      if (typeof renderCalendar === 'function') renderCalendar();
      if (typeof renderMenu === 'function') renderMenu();
      if (typeof renderShopping === 'function') renderShopping();
      if (typeof refreshAccountPage === 'function') refreshAccountPage();
    }
  }
  function bindLangSwitchers() {
    document.querySelectorAll('.lang-switcher').forEach(function (wrap) {
      wrap.querySelectorAll('.lang-btn').forEach(function (btn) { btn.addEventListener('click', function () { setLang(btn.dataset.lang); }); });
    });
  }

  var FAMILY_STORAGE_PREFIX = 'weeklyMenu_family_';
  var CURRENT_FAMILY_KEY = 'weeklyMenu_currentFamilyId';
  var currentFamilyId = null;
  var currentFamilyName = '';
  var shoppingHave = {};
  var archivedMenus = [];
  var shoppingExtraItems = [];
  var shoppingExtraHave = {};
  var dishOverrides = {};

  function familyHash(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) h = ((h << 5) - h) + str.charCodeAt(i) | 0;
    return (h >>> 0).toString(36);
  }
  function getFamilyStorageKey(id) { return FAMILY_STORAGE_PREFIX + id; }

  function loadFamilyState() {
    if (!currentFamilyId) return;
    try {
      var raw = localStorage.getItem(getFamilyStorageKey(currentFamilyId));
      if (!raw) return;
      var data = JSON.parse(raw);
      selections = data.selections || {};
      if (data.people != null) currentPeopleCount = Math.min(20, Math.max(1, data.people));
      var pe = getPeopleInput();
      if (pe) pe.value = currentPeopleCount;
      customDishes = data.customDishes || [];
      if (data.shoppingHave) shoppingHave = data.shoppingHave;
      if (data.familyName) currentFamilyName = data.familyName;
      archivedMenus = data.archivedMenus || [];
      shoppingExtraItems = data.shoppingExtraItems || [];
      shoppingExtraHave = data.shoppingExtraHave || {};
      dishOverrides = data.dishOverrides || {};
    } catch (e) {}
  }

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

  function saveFamilyState() {
    if (!currentFamilyId) return;
    try {
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
        dishOverrides: dishOverrides
      };
      localStorage.setItem(getFamilyStorageKey(currentFamilyId), JSON.stringify(data));
      if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
        window.SupabaseSync.saveToCloud(currentFamilyId, currentFamilyName, data, function (err) {
          if (err) {
            console.warn('Supabase save failed:', err);
            if (!saveFamilyState._retrying) {
              saveFamilyState._retrying = true;
              alert(t('syncFail'));
              setTimeout(function () {
                saveFamilyState._retrying = false;
                saveFamilyState();
              }, 2000);
            }
          }
        });
      }
    } catch (e) {}
  }

  function migrateFamilyToNewId(newId, newData) {
    try {
      localStorage.setItem(getFamilyStorageKey(newId), JSON.stringify(newData));
      localStorage.removeItem(getFamilyStorageKey(currentFamilyId));
      currentFamilyId = newId;
      localStorage.setItem(CURRENT_FAMILY_KEY, newId);
      if (newData.familyName) currentFamilyName = newData.familyName;
    } catch (e) { return false; }
    return true;
  }

  function showApp() {
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('familyGate').classList.add('hidden');
  }
  function showFamilyGate() {
    document.getElementById('familyGate').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');
  }
  function hideCover() { document.getElementById('cover').classList.add('hidden'); }

  function getPeopleInput() {
    var w = document.getElementById('weekGrid');
    return w ? w.querySelector('#people') : document.getElementById('people');
  }
  function getPeople() {
    var p = getPeopleInput();
    return p ? Math.min(20, Math.max(1, parseInt(p.value, 10) || 2)) : currentPeopleCount;
  }

  function bindFamilyGate() {
    document.querySelectorAll('.family-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        var t = tab.dataset.tab;
        document.querySelectorAll('.family-tab').forEach(function (x) { x.classList.toggle('active', x.dataset.tab === t); });
        document.getElementById('familyCreateForm').classList.toggle('hidden', t !== 'create');
        document.getElementById('familyLoginForm').classList.toggle('hidden', t !== 'login');
      });
    });
    var createForm = document.getElementById('familyCreateForm');
    if (createForm) {
      createForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (document.getElementById('familyName').value || '').trim();
        var password = (document.getElementById('familyPassword').value || '');
        var people = Math.min(20, Math.max(1, parseInt(document.getElementById('familyPeople').value, 10) || 2));
        if (!name) return;
        var id = familyHash(name + '|' + password);

        function proceedWithCreate() {
          currentFamilyId = id;
          currentFamilyName = name;
          var data = { familyName: name, people: people, selections: {}, customDishes: [], shoppingHave: {}, archivedMenus: [], shoppingExtraItems: [], shoppingExtraHave: {}, dishOverrides: {} };
          try {
            localStorage.setItem(getFamilyStorageKey(id), JSON.stringify(data));
            localStorage.setItem(CURRENT_FAMILY_KEY, id);
          } catch (err) { return; }
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
        }

        function doCreate() {
          if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
            window.SupabaseSync.checkFamilyNameExists(name, function (err, exists) {
              if (err) { console.error('Error checking family name:', err); return; }
              if (exists) {
                alert(t('alertNameAlreadyTaken'));
                return;
              }
              proceedWithCreate();
            });
          } else {
            if (localStorage.getItem(getFamilyStorageKey(id))) {
              alert(t('alertAccountTaken'));
              return;
            }
            proceedWithCreate();
          }
        }

        if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
          window.SupabaseSync.loadFromCloudAsync(id, function (err, row) {
            if (!err && row) {
              alert(t('alertAccountTaken'));
              return;
            }
            doCreate();
          });
        } else {
          if (localStorage.getItem(getFamilyStorageKey(id))) {
            alert(t('alertAccountTaken'));
            return;
          }
          doCreate();
        }
      });
    }
    var loginForm = document.getElementById('familyLoginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (document.getElementById('loginName').value || '').trim();
        var password = (document.getElementById('loginPassword').value || '');
        if (!name) return;
        var id = familyHash(name + '|' + password);
        try {
          if (window.SupabaseSync && window.SupabaseSync.isConfigured()) {
            // 必须云端存在该账号才允许登录，未注册则提示先创建
            window.SupabaseSync.loadFromCloudAsync(id, function (err, row) {
              if (err || !row) {
                alert(t('alertNotRegistered'));
                return;
              }
              currentFamilyId = id;
              currentFamilyName = (row.family_name || name).trim() || name;
              if (row.data) applyCloudData(row.data);
              loadFamilyState();
              var pe = getPeopleInput();
              if (pe && row.data && row.data.people != null) pe.value = Math.min(20, Math.max(1, row.data.people));
              showApp();
              initUI();
            });
            return;
          }
          var raw = localStorage.getItem(getFamilyStorageKey(id));
          if (!raw) {
            alert(t('alertWrongCred'));
            return;
          }
          currentFamilyId = id;
          var data = JSON.parse(raw);
          currentFamilyName = data.familyName || name;
          loadFamilyState();
          showApp();
          initUI();
        } catch (err) { alert(t('alertWrongCred')); }
      });
    }
  }

  var selections = {};
  var currentPeopleCount = 2;
  var currentViewDate = new Date();
  var currentDayIndex = 0;

  function getMonday(d) {
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
    return x;
  }
  var calendarWindowStart = getMonday(currentViewDate);
  var CALENDAR_WEEKS = 3;
  var CALENDAR_DAYS = CALENDAR_WEEKS * 7;

  function dateKey(d) {
    var y = d.getFullYear(), m = d.getMonth(), day = d.getDate();
    return y + '-' + (m + 1).toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
  }
  function getWeekDates(d) {
    var mon = getMonday(d);
    var out = [];
    for (var i = 0; i < 7; i++) out.push(new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + i));
    return out;
  }
  function getSelectionArray(key) { return selections[key] || []; }
  function getMaxForMeal(mealId) { return MEAL_MAX[mealId] || 8; }
  function formatShortDate(d) {
    if (currentLang === 'en') return (d.getMonth() + 1) + '/' + d.getDate();
    return (d.getMonth() + 1) + '月' + d.getDate() + '日';
  }

  var weekGridEl = document.getElementById('weekGrid');
  function removeDish(key, index) {
    var arr = getSelectionArray(key);
    arr.splice(index, 1);
    if (currentFamilyId) saveFamilyState();
    renderWeekGrid();
  }

  function renderWeekGrid() {
    if (!weekGridEl) return;
    weekGridEl.innerHTML = '';
    var weekDates = getWeekDates(currentViewDate);
    var dayIndex = currentDayIndex;
    var d = weekDates[dayIndex];
    var keyPrefix = dateKey(d);
    var dayName = t('day' + (dayIndex + 1));
    var label = formatShortDate(d) + ' ' + dayName;
    var card = document.createElement('div');
    card.className = 'day-card';
    var peopleVal = Math.min(20, Math.max(1, currentPeopleCount));
    card.innerHTML = '<div class="day-header">' +
      '<span class="day-header-label">' + label + '</span>' +
      '<button type="button" class="day-random-btn">' + t('random') + '</button>' +
      '</div>' +
      '<div class="day-people">' +
      '<label for="people">' + t('peopleLabel') + '</label>' +
      '<input type="number" id="people" min="1" max="20" value="' + peopleVal + '" />' +
      '</div>';
    var mealsWrap = document.createElement('div');
    MEALS.forEach(function (meal) {
      var key = keyPrefix + '-' + meal.id;
      var arr = getSelectionArray(key);
      var max = getMaxForMeal(meal.id);
      var row = document.createElement('div');
      row.className = 'meal-row';
      row.innerHTML = '<span class="meal-label">' + t('meal_' + meal.id) + '</span>';
      var slotWrap = document.createElement('div');
      slotWrap.className = 'meal-slot';
      arr.forEach(function (dishId, index) {
        var dish = getDishById(dishId);
        if (!dish) return;
        var chip = document.createElement('span');
        chip.className = 'slot-chip';
        chip.innerHTML = '<img class="slot-img" src="' + (dish.image || '') + '" alt="" /><span class="slot-name">' + (dish.name || '') + '</span>' +
          '<button type="button" class="slot-remove" aria-label="' + t('remove') + '" data-key="' + key + '" data-index="' + index + '">&times;</button>';
        slotWrap.appendChild(chip);
      });
      if (arr.length < max) {
        var addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.className = 'slot-btn slot-add';
        addBtn.dataset.dayIndex = dayIndex;
        addBtn.dataset.mealId = meal.id;
        addBtn.textContent = t('addBtn');
        slotWrap.appendChild(addBtn);
      }
      row.appendChild(slotWrap);
      mealsWrap.appendChild(row);
    });
    card.appendChild(mealsWrap);
    weekGridEl.appendChild(card);

    weekGridEl.querySelectorAll('.slot-add').forEach(function (btn) {
      btn.addEventListener('click', function () { openModal(parseInt(btn.dataset.dayIndex, 10), btn.dataset.mealId); });
    });
    weekGridEl.querySelectorAll('.slot-remove').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        removeDish(btn.dataset.key, parseInt(btn.dataset.index, 10));
      });
    });
    var randomBtn = weekGridEl.querySelector('.day-random-btn');
    if (randomBtn) randomBtn.addEventListener('click', applyRandomForDay);
    peopleInput = getPeopleInput();
  }

  var peopleInput = null;
  var calendarDaysEl = document.getElementById('calendarDays');
  var calendarMonthLabelEl = document.getElementById('calendarMonthLabel');

  function renderCalendar() {
    if (!calendarDaysEl) return;
    var start = new Date(calendarWindowStart.getFullYear(), calendarWindowStart.getMonth(), calendarWindowStart.getDate());
    var end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + CALENDAR_DAYS - 1);
    calendarMonthLabelEl.textContent = formatShortDate(start) + ' – ' + formatShortDate(end);
    var cells = [];
    var d = new Date(start);
    function isToday(x) {
      var n = new Date();
      return x.getFullYear() === n.getFullYear() && x.getMonth() === n.getMonth() && x.getDate() === n.getDate();
    }
    function isSameDay(a, b) {
      return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }
    for (var i = 0; i < CALENDAR_DAYS; i++) {
      var cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'calendar-day';
      if (isToday(d)) cell.classList.add('today');
      if (isSameDay(d, currentViewDate)) cell.classList.add('selected');
      cell.textContent = d.getDate();
      cell.dataset.date = dateKey(d);
      cell.addEventListener('click', function (ev) {
        var key = ev.currentTarget.dataset.date;
        var parts = key.split('-');
        var clicked = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        currentViewDate = clicked;
        currentDayIndex = (clicked.getDay() + 6) % 7;
        renderWeekGrid();
        renderCalendar();
      });
      cells.push(cell);
      d.setDate(d.getDate() + 1);
    }
    calendarDaysEl.innerHTML = '';
    cells.forEach(function (c) { calendarDaysEl.appendChild(c); });
  }

  function bindCalendarNav() {
    var prevBtn = document.getElementById('calendarPrev');
    var nextBtn = document.getElementById('calendarNext');
    if (prevBtn) prevBtn.addEventListener('click', function () {
      calendarWindowStart.setDate(calendarWindowStart.getDate() - 7);
      renderCalendar();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      calendarWindowStart.setDate(calendarWindowStart.getDate() + 7);
      renderCalendar();
    });
  }

  var currentPage = 1;
  function goToPage(n) {
    if (n < 1 || n > 4) return;
    currentPage = n;
    document.querySelectorAll('.panel').forEach(function (p) {
      p.classList.toggle('active', parseInt(p.dataset.page, 10) === n);
    });
    document.querySelectorAll('.bottom-nav-item[data-page]').forEach(function (btn) {
      btn.classList.toggle('active', parseInt(btn.dataset.page, 10) === n);
    });
    if (n === 2) renderMenu();
    if (n === 3) renderShopping();
    if (n === 4) refreshAccountPage();
  }
  function bindPageNav() {
    document.querySelectorAll('.bottom-nav-item[data-page]').forEach(function (btn) {
      btn.addEventListener('click', function () { goToPage(parseInt(btn.dataset.page, 10)); });
    });
  }

  var customDishes = [];
  function getAllDishes() { return DISHES.concat(customDishes); }
  function getDishById(id) {
    if (typeof id !== 'string') return null;
    if (dishOverrides[id]) {
      var o = dishOverrides[id];
      var base = DISHES.find(function (x) { return x.id === id; }) || (id.indexOf('|') > 0 ? null : customDishes.find(function (x) { return x.id === id; }));
      if (!base && id.indexOf('|') > 0) {
        var baseId = id.slice(0, id.indexOf('|'));
        base = DISHES.find(function (x) { return x.id === baseId; });
      }
      var ingredients = [];
      if (Array.isArray(o.ingredients) && o.ingredients.length) ingredients = o.ingredients;
      else if (base && base.fillings && id.indexOf('|') > 0) {
        var fid = id.slice(id.indexOf('|') + 1);
        var f = base.fillings.find(function (x) { return x.id === fid; });
        if (f && f.ingredients) ingredients = f.ingredients;
      } else if (base && base.ingredients) ingredients = base.ingredients;
      return {
        id: id,
        name: o.name || (base && base.name) || '',
        image: o.image || (base && base.image) || '',
        category: base ? base.category : 'veg',
        ingredients: ingredients
      };
    }
    var d = DISHES.find(function (x) { return x.id === id; });
    if (d) return d;
    return customDishes.find(function (x) { return x.id === id; });
  }
  function getSelectableDishIds() {
    var ids = [];
    getAllDishes().forEach(function (d) {
      if (d.isFillingOnly) ids.push(d.id);
      else if (d.fillings && d.fillings.length) d.fillings.forEach(function (f) { ids.push(d.id + '|' + f.id); });
      else ids.push(d.id);
    });
    return ids;
  }
  var MEAT_CATEGORIES = ['pork', 'beef', 'seafood'];
  function pickRandomDishIds(categoryFilter, count) {
    var filter = typeof categoryFilter === 'string' ? [categoryFilter] : categoryFilter;
    var selectableIds = getSelectableDishIds();
    var pool = [];
    selectableIds.forEach(function (id) {
      var dish = getDishById(id);
      if (dish && filter.indexOf(dish.category) >= 0) pool.push(id);
    });
    if (pool.length === 0) return [];
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    return pool.slice(0, count);
  }
  function applyRandomForDay() {
    var weekDates = getWeekDates(currentViewDate);
    var d = weekDates[currentDayIndex];
    var keyPrefix = dateKey(d);
    selections[keyPrefix + '-breakfast'] = pickRandomDishIds('staple', 1);
    selections[keyPrefix + '-lunch'] = pickRandomDishIds(MEAT_CATEGORIES, 1).concat(pickRandomDishIds('veg', 1));
    selections[keyPrefix + '-dinner'] = pickRandomDishIds(MEAT_CATEGORIES, 1).concat(pickRandomDishIds('veg', 1));
    if (currentFamilyId) saveFamilyState();
    renderWeekGrid();
  }

  var currentCategoryId = DISH_CATEGORIES[0].id;
  var dishModal = document.getElementById('dishModal');
  var modalTitle = document.getElementById('modalTitle');
  var dishCategoryTabsEl = document.getElementById('dishCategoryTabs');
  var dishGridEl = document.getElementById('dishGrid');
  var currentSlot = null;
  var fillingPickerType = null;

  function openModal(dayIndex, mealId) {
    currentSlot = { dayIndex: dayIndex, mealId: mealId };
    fillingPickerType = null;
    var weekDates = getWeekDates(currentViewDate);
    var d = weekDates[dayIndex];
    var keyPrefix = dateKey(d);
    var key = keyPrefix + '-' + mealId;
    var arr = getSelectionArray(key);
    var max = getMaxForMeal(mealId);
    modalTitle.textContent = formatShortDate(d) + ' ' + t('day' + (dayIndex + 1)) + ' · ' + t('meal_' + mealId) + ' (' + t('selectedCount') + ' ' + arr.length + '/' + max + ')';
    dishCategoryTabsEl.innerHTML = '';
    DISH_CATEGORIES.forEach(function (cat) {
      var tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'dish-category-tab' + (cat.id === currentCategoryId ? ' active' : '');
      tab.textContent = t('cat_' + cat.id);
      tab.dataset.category = cat.id;
      tab.addEventListener('click', function () {
        currentCategoryId = cat.id;
        renderDishGrid(cat.id);
        dishCategoryTabsEl.querySelectorAll('.dish-category-tab').forEach(function (t) { t.classList.toggle('active', t.dataset.category === cat.id); });
      });
      dishCategoryTabsEl.appendChild(tab);
    });
    renderDishGrid(currentCategoryId);
    dishModal.classList.add('open');
  }

  function renderDishGrid(categoryId) {
    currentCategoryId = categoryId;
    if (!dishGridEl) return;
    dishGridEl.innerHTML = '';
    var allDishes = getAllDishes();
    var dishesInCat = allDishes.filter(function (d) { return d.category === categoryId && !d.isFillingOnly; });
    dishesInCat.forEach(function (dish) {
      var display = getDishById(dish.id);
      var card = document.createElement('div');
      card.className = 'dish-card';
      card.innerHTML = '<div class="dish-img-wrap"><img src="' + (display.image || '') + '" alt="" loading="lazy" /><span class="dish-name">' + (display.name || '') + '</span></div>' +
        '<button type="button" class="dish-card-edit" aria-label="' + t('close') + '">✎</button>';
      card.querySelector('.dish-card-edit').addEventListener('click', function (ev) {
        ev.stopPropagation();
        openEditDishModal(dish.id);
      });
      card.addEventListener('click', function () {
        if (dish.fillings && dish.fillings.length) {
          fillingPickerType = dish.id;
          openFillingPicker(dish);
        } else {
          var key = dateKey(getWeekDates(currentViewDate)[currentSlot.dayIndex]) + '-' + currentSlot.mealId;
          var arr = getSelectionArray(key);
          if (arr.length < getMaxForMeal(currentSlot.mealId)) {
            arr.push(dish.id);
            selections[key] = arr;
            if (currentFamilyId) saveFamilyState();
            renderWeekGrid();
            dishModal.classList.remove('open');
          }
        }
      });
      dishGridEl.appendChild(card);
    });
    var addCard = document.createElement('div');
    addCard.className = 'dish-card dish-card-add';
    addCard.innerHTML = '<div class="dish-img-wrap dish-add-placeholder">＋<span class="dish-name">' + t('addNewDish') + '</span></div>';
    addCard.addEventListener('click', function () { openAddDishModal(); });
    dishGridEl.appendChild(addCard);
  }

  function openFillingPicker(baseDish) {
    if (!baseDish || !baseDish.fillings) return;
    dishGridEl.innerHTML = '';
    var backBtn = document.createElement('button');
    backBtn.type = 'button';
    backBtn.className = 'dish-back-btn';
    backBtn.textContent = t('back');
    backBtn.addEventListener('click', function () {
      fillingPickerType = null;
      renderDishGrid(baseDish.category);
    });
    dishGridEl.appendChild(backBtn);
    baseDish.fillings.forEach(function (f) {
      var fid = baseDish.id + '|' + f.id;
      var display = getDishById(fid);
      var card = document.createElement('div');
      card.className = 'dish-card';
      card.innerHTML = '<div class="dish-img-wrap"><img src="' + (display.image || baseDish.image || '') + '" alt="" /><span class="dish-name">' + (display.name || f.name || '') + '</span></div><button type="button" class="dish-card-edit">✎</button>';
      card.querySelector('.dish-card-edit').addEventListener('click', function (e) { e.stopPropagation(); openEditDishModal(fid); });
      card.addEventListener('click', function () {
        var key = dateKey(getWeekDates(currentViewDate)[currentSlot.dayIndex]) + '-' + currentSlot.mealId;
        var arr = getSelectionArray(key);
        if (arr.length < getMaxForMeal(currentSlot.mealId)) {
          arr.push(fid);
          selections[key] = arr;
          if (currentFamilyId) saveFamilyState();
          renderWeekGrid();
          dishModal.classList.remove('open');
        }
      });
      dishGridEl.appendChild(card);
    });
    var addFillingCard = document.createElement('div');
    addFillingCard.className = 'dish-card dish-card-add';
    addFillingCard.innerHTML = '<div class="dish-img-wrap dish-add-placeholder">＋<span class="dish-name">' + t('addNewFilling') + '</span></div>';
    addFillingCard.addEventListener('click', function () { openAddFillingModal(baseDish.id); });
    dishGridEl.appendChild(addFillingCard);
  }

  dishModal.querySelector('.modal-backdrop').addEventListener('click', function () { dishModal.classList.remove('open'); });
  dishModal.querySelector('.modal-close').addEventListener('click', function () { dishModal.classList.remove('open'); });

  function saveCustomDishes() {
    if (currentFamilyId) saveFamilyState();
    else try { localStorage.setItem('weeklyMenuCustomDishes', JSON.stringify(customDishes)); } catch (e) {}
  }

  /** 压缩图片 dataURL，减小云端 payload，避免同步失败。maxW 默认 600，quality 默认 0.85 */
  function compressImageDataUrl(dataUrl, callback) {
    if (!dataUrl || typeof dataUrl !== 'string') { if (callback) callback(dataUrl || ''); return; }
    var maxW = 600;
    var quality = 0.85;
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      try {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        if (w <= maxW && h <= maxW) { if (callback) callback(dataUrl); return; }
        var scale = maxW / Math.max(w, h);
        var cw = Math.round(w * scale);
        var ch = Math.round(h * scale);
        var canvas = document.createElement('canvas');
        canvas.width = cw;
        canvas.height = ch;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, cw, ch);
        var out = canvas.toDataURL('image/jpeg', quality);
        if (callback) callback(out);
      } catch (e) {
        if (callback) callback(dataUrl);
      }
    };
    img.onerror = function () { if (callback) callback(dataUrl); };
    img.src = dataUrl;
  }

  var addDishModal = document.getElementById('addDishModal');
  var addDishForm = document.getElementById('addDishForm');
  var addDishName = document.getElementById('addDishName');
  var addDishCategory = document.getElementById('addDishCategory');
  var addDishImage = document.getElementById('addDishImage');
  var addDishFileHint = document.getElementById('addDishFileHint');
  var addDishIngredientsEl = document.getElementById('addDishIngredients');
  var addDishIngredientsBlock = document.getElementById('addDishIngredientsBlock');
  var addSeasoningBtn = document.getElementById('addSeasoningBtn');
  var addDishSeasoningsEl = document.getElementById('addDishSeasonings');

  function getIngredientRowHtml() {
    return '<div class="ingredient-row ingredient-row-with-qty">' +
      '<input type="text" class="ingredient-name" placeholder="' + t('namePlaceholderShort') + '" />' +
      '<input type="number" class="ingredient-qty" min="0" step="0.1" placeholder="' + t('qtyPlaceholder') + '" />' +
      '<select class="ingredient-unit"><option value="个">' + t('unit_pc') + '</option><option value="公斤">' + t('unit_kg') + '</option><option value="克">' + t('unit_g') + '</option></select>' +
      '<button type="button" class="ingredient-remove" aria-label="' + t('remove') + '">&times;</button></div>';
  }
  function getSeasoningRowHtml() {
    return '<div class="seasoning-row"><input type="text" class="seasoning-name" placeholder="' + t('seasoningPlaceholder') + '" /><button type="button" class="ingredient-remove seasoning-remove" aria-label="' + t('remove') + '">&times;</button></div>';
  }

  if (addDishIngredientsEl) {
    addDishIngredientsEl.innerHTML = getIngredientRowHtml();
    addDishIngredientsEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('ingredient-remove') && addDishIngredientsEl.children.length > 1) e.target.closest('.ingredient-row').remove();
    });
    document.getElementById('addIngredientBtn').addEventListener('click', function () {
      var div = document.createElement('div');
      div.innerHTML = getIngredientRowHtml();
      addDishIngredientsEl.appendChild(div.firstElementChild);
    });
  }
  if (addDishSeasoningsEl) {
    addDishSeasoningsEl.innerHTML = getSeasoningRowHtml();
    addDishSeasoningsEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('seasoning-remove') && addDishSeasoningsEl.children.length > 1) e.target.closest('.seasoning-row').remove();
    });
    if (addSeasoningBtn) addSeasoningBtn.addEventListener('click', function () {
      var div = document.createElement('div');
      div.innerHTML = getSeasoningRowHtml();
      addDishSeasoningsEl.appendChild(div.firstElementChild);
    });
  }

  function toggleAddDishIngredientsForOut() {
    var isOut = addDishCategory && addDishCategory.value === 'out';
    if (addDishIngredientsBlock) addDishIngredientsBlock.style.display = isOut ? 'none' : '';
  }
  function openAddDishModal() {
    addDishName.value = '';
    addDishCategory.value = currentCategoryId;
    addDishImage.value = '';
    if (addDishFileHint) addDishFileHint.textContent = t('clickSelectImage');
    addDishIngredientsEl.innerHTML = getIngredientRowHtml();
    addDishSeasoningsEl.innerHTML = getSeasoningRowHtml();
    toggleAddDishIngredientsForOut();
    addDishModal.classList.add('open');
  }
  function closeAddDishModal() { addDishModal.classList.remove('open'); }
  document.getElementById('addDishBackdrop').addEventListener('click', closeAddDishModal);
  document.getElementById('addDishClose').addEventListener('click', closeAddDishModal);
  if (addDishCategory) addDishCategory.addEventListener('change', toggleAddDishIngredientsForOut);

  if (addDishForm) {
    addDishForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (addDishName.value || '').trim();
      if (!name) { alert(t('alertEnterDishName')); return; }
      var cat = addDishCategory.value || 'veg';
      var ingredients = [];
      if (cat !== 'out') {
        addDishIngredientsEl.querySelectorAll('.ingredient-row').forEach(function (row) {
          var n = (row.querySelector('.ingredient-name').value || '').trim();
          if (!n) return;
          var u = (row.querySelector('.ingredient-unit').value || '个').trim();
          var q = parseFloat(row.querySelector('.ingredient-qty').value) || 1;
          ingredients.push({ name: n, unit: u, perServe: q });
        });
        addDishSeasoningsEl.querySelectorAll('.seasoning-row').forEach(function (row) {
          var n = (row.querySelector('.seasoning-name').value || '').trim();
          if (n) ingredients.push({ name: n, unit: '调料', perServe: 0 });
        });
      }
      var img = '';
      if (addDishImage.files && addDishImage.files[0]) {
        var reader = new FileReader();
        reader.onload = function () {
          compressImageDataUrl(reader.result, function (compressed) {
            customDishes.push({ id: 'custom-' + Date.now(), name: name, category: cat, image: compressed, ingredients: ingredients });
            saveCustomDishes();
            if (currentFamilyId) saveFamilyState();
            closeAddDishModal();
            renderDishGrid(currentCategoryId);
          });
        };
        reader.readAsDataURL(addDishImage.files[0]);
      } else {
        customDishes.push({ id: 'custom-' + Date.now(), name: name, category: cat, image: '', ingredients: ingredients });
        saveCustomDishes();
        if (currentFamilyId) saveFamilyState();
        closeAddDishModal();
        renderDishGrid(currentCategoryId);
      }
    });
  }

  var editDishModal = document.getElementById('editDishModal');
  var editDishForm = document.getElementById('editDishForm');
  var editDishName = document.getElementById('editDishName');
  var editDishImagePreview = document.getElementById('editDishImagePreview');
  var editDishImageFile = document.getElementById('editDishImageFile');
  var editDishImageHint = document.getElementById('editDishImageHint');
  var editDishIngredientsEl = document.getElementById('editDishIngredients');
  var editDishSeasoningsEl = document.getElementById('editDishSeasonings');
  var editDishIngredientsBlock = document.getElementById('editDishIngredientsBlock');
  var editingDishId = null;

  function getEditIngredientRowHtml() {
    return '<div class="ingredient-row ingredient-row-with-qty">' +
      '<input type="text" class="ingredient-name" placeholder="' + t('namePlaceholderShort') + '" />' +
      '<input type="number" class="ingredient-qty" min="0" step="0.1" placeholder="' + t('qtyPlaceholder') + '" />' +
      '<select class="ingredient-unit"><option value="个">' + t('unit_pc') + '</option><option value="公斤">' + t('unit_kg') + '</option><option value="克">' + t('unit_g') + '</option></select>' +
      '<button type="button" class="ingredient-remove" aria-label="' + t('remove') + '">&times;</button></div>';
  }

  function resetEditIngredientRows(ingredients) {
    if (!editDishIngredientsEl) return;
    var all = Array.isArray(ingredients) ? ingredients : [];
    var ingList = all.filter(function (ing) { return ing.unit !== '调料'; });
    var seaList = all.filter(function (ing) { return ing.unit === '调料'; });
    if (ingList.length === 0) ingList = [{ name: '', unit: '个', perServe: 1 }];
    editDishIngredientsEl.innerHTML = '';
    ingList.forEach(function (ing) {
      var div = document.createElement('div');
      div.innerHTML = getEditIngredientRowHtml();
      var row = div.firstElementChild;
      row.querySelector('.ingredient-name').value = ing.name || '';
      var u = ing.unit || '个';
      if (u !== '个' && u !== '公斤' && u !== '克') u = '个';
      row.querySelector('.ingredient-unit').value = u;
      row.querySelector('.ingredient-qty').value = ing.perServe != null ? ing.perServe : '';
      editDishIngredientsEl.appendChild(row);
    });
    editDishSeasoningsEl.innerHTML = '';
    (seaList.length ? seaList : [{ name: '' }]).forEach(function (s) {
      var div = document.createElement('div');
      div.innerHTML = getSeasoningRowHtml();
      editDishSeasoningsEl.appendChild(div.firstElementChild);
      editDishSeasoningsEl.lastElementChild.querySelector('.seasoning-name').value = s.name || '';
    });
  }

  function collectEditIngredients() {
    var list = [];
    editDishIngredientsEl.querySelectorAll('.ingredient-row').forEach(function (row) {
      var n = (row.querySelector('.ingredient-name').value || '').trim();
      if (!n) return;
      var u = (row.querySelector('.ingredient-unit').value || '个').trim();
      var q = parseFloat(row.querySelector('.ingredient-qty').value) || 1;
      list.push({ name: n, unit: u, perServe: q <= 0 ? 1 : q });
    });
    editDishSeasoningsEl.querySelectorAll('.seasoning-row').forEach(function (row) {
      var n = (row.querySelector('.seasoning-name').value || '').trim();
      if (n) list.push({ name: n, unit: '调料', perServe: 0 });
    });
    return list;
  }

  function openEditDishModal(id) {
    var dish = getDishById(id);
    if (!dish) return;
    editingDishId = id;
    editDishName.value = dish.name || '';
    editDishImagePreview.src = dish.image || '';
    editDishImagePreview.style.display = dish.image ? 'block' : 'none';
    editDishImageFile.value = '';
    if (editDishImageHint) editDishImageHint.textContent = t('changeImageOptional');
    resetEditIngredientRows(dish.ingredients);
    var isOut = dish.category === 'out';
    if (editDishIngredientsBlock) editDishIngredientsBlock.style.display = isOut ? 'none' : '';
    editDishModal.classList.add('open');
  }
  function closeEditDishModal() {
    editingDishId = null;
    editDishModal.classList.remove('open');
  }

  function deleteEditedDish() {
    if (!editingDishId) return;
    if (!confirm(t('confirmDeleteDish'))) return;
    var id = editingDishId;
    Object.keys(selections).forEach(function (mealKey) {
      selections[mealKey] = selections[mealKey].filter(function (dishId) {
        return dishId !== id && dishId.indexOf(id + '|') !== 0;
      });
    });
    if (id.indexOf('custom-') === 0) {
      customDishes = customDishes.filter(function (d) { return d.id !== id; });
    } else {
      delete dishOverrides[id];
      Object.keys(dishOverrides).filter(function (k) { return k.indexOf(id + '|') === 0; }).forEach(function (k) { delete dishOverrides[k]; });
    }
    saveFamilyState();
    closeEditDishModal();
    renderDishGrid(currentCategoryId);
    renderWeekGrid();
    if (fillingPickerType) {
      var base = DISHES.find(function (d) { return d.id === fillingPickerType; });
      if (base) openFillingPicker(base);
    }
  }

  document.getElementById('editDishDeleteBtn').addEventListener('click', deleteEditedDish);
  document.getElementById('editDishBackdrop').addEventListener('click', closeEditDishModal);
  document.getElementById('editDishClose').addEventListener('click', closeEditDishModal);
  editDishIngredientsEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('ingredient-remove') && editDishIngredientsEl.children.length > 1) e.target.closest('.ingredient-row').remove();
  });
  editDishSeasoningsEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('seasoning-remove') && editDishSeasoningsEl.children.length > 1) e.target.closest('.seasoning-row').remove();
  });
  document.getElementById('editDishIngredientBtn').addEventListener('click', function () {
    var div = document.createElement('div');
    div.innerHTML = getEditIngredientRowHtml();
    editDishIngredientsEl.appendChild(div.firstElementChild);
  });
  document.getElementById('editDishSeasoningBtn').addEventListener('click', function () {
    var div = document.createElement('div');
    div.innerHTML = getSeasoningRowHtml();
    editDishSeasoningsEl.appendChild(div.firstElementChild);
  });

  if (editDishForm) {
    editDishForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!editingDishId) return;
      var name = (editDishName.value || '').trim();
      if (!name) { alert(t('alertEnterDishName')); return; }
      var current = getDishById(editingDishId);
      var ingredients = (current && current.category === 'out') ? [] : collectEditIngredients();
      var newImage = current ? current.image : '';
      if (editDishImageFile.files && editDishImageFile.files[0]) {
        var reader = new FileReader();
        reader.onload = function () {
          compressImageDataUrl(reader.result, function (compressed) {
            if (editingDishId.indexOf('custom-') === 0) {
              var custom = customDishes.find(function (d) { return d.id === editingDishId; });
              if (custom) { custom.name = name; custom.image = compressed; custom.ingredients = ingredients; }
            } else {
              dishOverrides[editingDishId] = { name: name, image: compressed, ingredients: ingredients };
            }
            saveFamilyState();
            closeEditDishModal();
            renderDishGrid(currentCategoryId);
          });
        };
        reader.readAsDataURL(editDishImageFile.files[0]);
      } else {
        if (editingDishId.indexOf('custom-') === 0) {
          var custom = customDishes.find(function (d) { return d.id === editingDishId; });
          if (custom) { custom.name = name; custom.image = newImage; custom.ingredients = ingredients; }
        } else {
          dishOverrides[editingDishId] = { name: name, image: newImage, ingredients: ingredients };
        }
        saveFamilyState();
        closeEditDishModal();
        renderDishGrid(currentCategoryId);
      }
    });
  }

  var addFillingModal = document.getElementById('addFillingModal');
  var addFillingForm = document.getElementById('addFillingForm');
  var addFillingName = document.getElementById('addFillingName');
  function openAddFillingModal(baseId) {
    document.getElementById('addFillingModalTitle').textContent = t('addFillingDumpling');
    document.getElementById('addFillingNameLabel').textContent = t('fillingName');
    addFillingName.placeholder = t('fillingPlaceholderDumpling');
    addFillingName.value = '';
    addFillingModal.classList.add('open');
  }
  addFillingModal.querySelector('.modal-backdrop').addEventListener('click', function () { addFillingModal.classList.remove('open'); });
  addFillingModal.querySelector('.modal-close').addEventListener('click', function () { addFillingModal.classList.remove('open'); });
  if (addFillingForm) {
    addFillingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (addFillingName.value || '').trim();
      if (!name) { alert(t('alertEnterFillingName')); return; }
      customDishes.push({
        id: 'custom-' + Date.now(),
        name: '饺子（' + name + '）',
        category: 'staple',
        image: '',
        isFillingOnly: true,
        ingredients: []
      });
      saveCustomDishes();
      if (currentFamilyId) saveFamilyState();
      addFillingModal.classList.remove('open');
      renderDishGrid(currentCategoryId);
      if (fillingPickerType) {
        var base = DISHES.find(function (d) { return d.id === fillingPickerType; });
        if (base) openFillingPicker(base);
      }
    });
  }

  var menuViewEl = document.getElementById('menuView');
  function renderMenu() {
    if (!menuViewEl) return;
    menuViewEl.innerHTML = '';
    var hasAny = false;
    var weekDates = getWeekDates(currentViewDate);
    for (var i = 0; i < 7; i++) {
      var d = weekDates[i];
      var keyPrefix = dateKey(d);
      var dayHasSelection = MEALS.some(function (meal) { return getSelectionArray(keyPrefix + '-' + meal.id).length > 0; });
      if (!dayHasSelection) continue;
      hasAny = true;
      var dayEl = document.createElement('div');
      dayEl.className = 'menu-day';
      dayEl.innerHTML = '<div class="menu-day-title">' + formatShortDate(d) + ' ' + t('day' + (i + 1)) + '</div>';
      var mealsEl = document.createElement('div');
      mealsEl.className = 'menu-meals';
      MEALS.forEach(function (meal) {
        var key = keyPrefix + '-' + meal.id;
        var arr = getSelectionArray(key);
        if (arr.length === 0) return;
        var mealEl = document.createElement('div');
        mealEl.className = 'menu-meal';
        mealEl.innerHTML = '<span class="menu-meal-label">' + t('meal_' + meal.id) + '</span>';
        var dishesWrap = document.createElement('div');
        dishesWrap.className = 'menu-dishes';
        arr.forEach(function (dishId) {
          var dish = getDishById(dishId);
          if (!dish) return;
          var chip = document.createElement('span');
          chip.className = 'menu-dish-chip';
          chip.innerHTML = '<img src="' + (dish.image || '') + '" alt="" />' + (dish.name || '');
          dishesWrap.appendChild(chip);
        });
        mealEl.appendChild(dishesWrap);
        mealsEl.appendChild(mealEl);
      });
      dayEl.appendChild(mealsEl);
      menuViewEl.appendChild(dayEl);
    }
    if (!hasAny) menuViewEl.innerHTML = '<div class="empty-state"><p>' + t('menuEmpty1') + '</p><p>' + t('menuEmpty2') + '</p></div>';
  }

  var shoppingViewEl = document.getElementById('shoppingView');
  var MEAL_DISH_COEFF = { 1: 1.0, 2: 1.0, 3: 0.85, 4: 0.75, 5: 0.65 };
  function formatShoppingItem(name, unit, qty) {
    var displayQty = Math.ceil(qty);
    var displayUnit = unit;
    if (MEAT_NAMES && MEAT_NAMES.indexOf(name) >= 0 && unit === '克') {
      displayQty = Math.max(1, Math.ceil(qty / 1000));
      displayUnit = '公斤';
    } else if (VEGETABLE_GRAM_TO_UNIT && VEGETABLE_GRAM_TO_UNIT[name] && unit === '克') {
      var cfg = VEGETABLE_GRAM_TO_UNIT[name];
      displayQty = Math.max(1, Math.ceil(qty / cfg.gramsPerUnit));
      displayUnit = cfg.unit;
    }
    return { displayQtyStr: String(displayQty), displayUnit: displayUnit };
  }

  function renderShopping() {
    if (!shoppingViewEl) return;
    var people = getPeople();
    var ingredientTotals = {};
    var seasoningNames = {};
    Object.keys(selections).forEach(function (mealKey) {
      var arr = getSelectionArray(mealKey);
      if (!arr.length) return;
      var coeff = MEAL_DISH_COEFF[arr.length] !== undefined ? MEAL_DISH_COEFF[arr.length] : 0.6;
      arr.forEach(function (dishId) {
        var dish = getDishById(dishId);
        if (!dish || !dish.ingredients) return;
        dish.ingredients.forEach(function (ing) {
          if (ing.unit === '调料' || (SEASONINGS && SEASONINGS.indexOf(ing.name) >= 0)) {
            seasoningNames[ing.name] = true;
            return;
          }
          var qty = (ing.perServe || 0) * (people / 2) * coeff;
          if (qty <= 0) return;
          var key = ing.name + '|' + (ing.unit || '');
          if (!ingredientTotals[key]) ingredientTotals[key] = { name: ing.name, unit: ing.unit || '', qty: 0 };
          ingredientTotals[key].qty += qty;
        });
      });
    });
    var list = Object.values(ingredientTotals).sort(function (a, b) { return a.name.localeCompare(b.name, 'zh-CN'); });
    var seasoningList = Object.keys(seasoningNames).sort(function (a, b) { return a.localeCompare(b, 'zh-CN'); });

    shoppingViewEl.innerHTML = '';
    var header = document.createElement('div');
    header.className = 'shopping-header';
    header.innerHTML = '<h2>' + t('shoppingList') + '</h2>';
    shoppingViewEl.appendChild(header);
    var wrap = document.createElement('div');
    wrap.className = 'shopping-sections';

    var sectionIng = document.createElement('div');
    sectionIng.className = 'shopping-section';
    sectionIng.innerHTML = '<h3 class="shopping-section-title">' + t('ingredients') + '</h3>';
    var listIng = document.createElement('div');
    listIng.className = 'shopping-list';
    if (list.length === 0) {
      listIng.innerHTML = '<div class="shopping-empty">' + t('shoppingEmptyHint') + '</div>';
    } else {
      list.forEach(function (item) {
        var fmt = formatShoppingItem(item.name, item.unit, item.qty);
        var have = !!shoppingHave[item.name + '|' + fmt.displayUnit];
        var row = document.createElement('div');
        row.className = 'shopping-item' + (have ? ' have' : '');
        row.innerHTML = '<label class="shopping-item-row"><input type="checkbox" class="shopping-have-cb" data-name="' + item.name + '" data-unit="' + fmt.displayUnit + '" ' + (have ? 'checked' : '') + ' /><span class="shopping-item-name">' + item.name + '</span><span class="shopping-item-qty">' + fmt.displayQtyStr + ' ' + fmt.displayUnit + '</span></label>';
        listIng.appendChild(row);
        row.querySelector('.shopping-have-cb').addEventListener('change', function () {
          shoppingHave[item.name + '|' + fmt.displayUnit] = this.checked;
          if (!this.checked) delete shoppingHave[item.name + '|' + fmt.displayUnit];
          saveFamilyState();
          row.classList.toggle('have', this.checked);
        });
      });
    }
    sectionIng.appendChild(listIng);
    wrap.appendChild(sectionIng);

    var sectionSea = document.createElement('div');
    sectionSea.className = 'shopping-section';
    sectionSea.innerHTML = '<h3 class="shopping-section-title">' + t('seasonings') + '</h3>';
    var listSea = document.createElement('div');
    listSea.className = 'shopping-list';
    if (seasoningList.length === 0) listSea.innerHTML = '<div class="shopping-empty">' + t('seasoningEmpty') + '</div>';
    else {
      seasoningList.forEach(function (name) {
        var have = !!shoppingHave[name + '|调料'];
        var row = document.createElement('div');
        row.className = 'shopping-item' + (have ? ' have' : '');
        row.innerHTML = '<label class="shopping-item-row"><input type="checkbox" class="shopping-have-cb" data-name="' + name + '" data-seasoning="1" ' + (have ? 'checked' : '') + ' /><span class="shopping-item-name">' + name + '</span></label>';
        listSea.appendChild(row);
        row.querySelector('.shopping-have-cb').addEventListener('change', function () {
          if (this.checked) shoppingHave[name + '|调料'] = true;
          else delete shoppingHave[name + '|调料'];
          saveFamilyState();
          row.classList.toggle('have', this.checked);
        });
      });
    }
    sectionSea.appendChild(listSea);
    wrap.appendChild(sectionSea);

    var sectionExtra = document.createElement('div');
    sectionExtra.className = 'shopping-section';
    sectionExtra.innerHTML = '<h3 class="shopping-section-title">' + t('otherPurchase') + '</h3>';
    var extraInput = document.createElement('input');
    extraInput.type = 'text';
    extraInput.className = 'shopping-extra-input';
    extraInput.placeholder = t('extraPlaceholder');
    var extraAddBtn = document.createElement('button');
    extraAddBtn.type = 'button';
    extraAddBtn.className = 'page-nav-btn shopping-extra-add-btn';
    extraAddBtn.textContent = t('extraAdd');
    extraAddBtn.addEventListener('click', function () {
      var text = (extraInput.value || '').trim();
      if (!text) return;
      shoppingExtraItems.push({ id: 'ex-' + Date.now(), text: text });
      extraInput.value = '';
      saveFamilyState();
      renderShopping();
    });
    sectionExtra.appendChild(extraInput);
    sectionExtra.appendChild(extraAddBtn);
    var listExtra = document.createElement('div');
    listExtra.className = 'shopping-list';
    if (shoppingExtraItems.length === 0) listExtra.innerHTML = '<div class="shopping-empty">' + t('extraEmpty') + '</div>';
    else {
      shoppingExtraItems.forEach(function (item, idx) {
        var row = document.createElement('div');
        row.className = 'shopping-item';
        row.innerHTML = '<label class="shopping-item-row"><input type="checkbox" class="shopping-have-cb" data-extra-id="' + item.id + '" ' + (shoppingExtraHave[item.id] ? 'checked' : '') + ' /><span class="shopping-item-name">' + item.text + '</span></label><button type="button" class="shopping-extra-remove" data-idx="' + idx + '">&times;</button>';
        listExtra.appendChild(row);
        row.querySelector('.shopping-have-cb').addEventListener('change', function () {
          shoppingExtraHave[item.id] = this.checked;
          saveFamilyState();
        });
        row.querySelector('.shopping-extra-remove').addEventListener('click', function () {
          shoppingExtraItems.splice(parseInt(this.dataset.idx, 10), 1);
          delete shoppingExtraHave[item.id];
          saveFamilyState();
          renderShopping();
        });
      });
    }
    sectionExtra.appendChild(listExtra);
    wrap.appendChild(sectionExtra);
    shoppingViewEl.appendChild(wrap);
  }

  function refreshAccountPage() {
    document.getElementById('accountFamilyName').textContent = currentFamilyName || '—';
    document.getElementById('accountRenameInline').classList.add('hidden');
    document.getElementById('accountNameEditHint').style.display = '';
    renderSavedMenusList();
  }

  function renderSavedMenusList() {
    var listEl = document.getElementById('savedMenusList');
    if (!listEl) return;
    if (archivedMenus.length === 0) {
      listEl.innerHTML = '<p class="account-hint">' + t('noSavedMenus') + '</p>';
      return;
    }
    listEl.innerHTML = archivedMenus.map(function (m, i) {
      return '<div class="saved-menu-item"><span class="saved-menu-name">' + (m.name || t('unnamed')) + '</span><span class="saved-menu-meta">' + (m.savedAt ? m.savedAt.substring(0, 10) : '') + '</span><button type="button" class="saved-menu-delete" data-index="' + i + '">' + t('delete') + '</button></div>';
    }).join('');
    listEl.querySelectorAll('.saved-menu-delete').forEach(function (btn) {
      btn.addEventListener('click', function () {
        archivedMenus.splice(parseInt(btn.dataset.index, 10), 1);
        saveFamilyState();
        renderSavedMenusList();
      });
    });
  }

  document.getElementById('accountFamilyName').addEventListener('click', function () {
    document.getElementById('accountRenameInline').classList.remove('hidden');
    document.getElementById('accountNameEditHint').style.display = 'none';
  });
  document.getElementById('accountRenameCancel').addEventListener('click', function () {
    document.getElementById('accountRenameInline').classList.add('hidden');
    document.getElementById('accountNameEditHint').style.display = '';
  });
  document.getElementById('accountRenameBtn').addEventListener('click', function () {
    var newName = (document.getElementById('accountNewName').value || '').trim();
    var password = (document.getElementById('accountNamePassword').value || '');
    if (!newName) { alert(t('alertEnterName')); return; }
    if (familyHash(currentFamilyName + '|' + password) !== currentFamilyId) { alert(t('alertWrongPw')); return; }
    var newId = familyHash(newName + '|' + password);
    if (newId === currentFamilyId) { alert(t('alertNameUnchanged')); return; }
    var data = { familyName: newName, people: getPeople(), selections: selections, customDishes: customDishes, shoppingHave: shoppingHave, archivedMenus: archivedMenus, shoppingExtraItems: shoppingExtraItems, shoppingExtraHave: shoppingExtraHave, dishOverrides: dishOverrides };
    if (!migrateFamilyToNewId(newId, data)) { alert(t('alertSaveFail')); return; }
    currentFamilyName = newName;
    saveFamilyState();
    document.getElementById('accountFamilyName').textContent = newName;
    document.getElementById('accountRenameInline').classList.add('hidden');
    document.getElementById('accountNameEditHint').style.display = '';
    alert(t('alertNameUpdated'));
  });

  document.getElementById('accountChangePwBtn').addEventListener('click', function () {
    document.getElementById('accountPwModal').classList.add('open');
  });
  document.getElementById('accountPwModalSubmit').addEventListener('click', function () {
    var currentPw = document.getElementById('accountCurrentPw').value || '';
    var newPw = document.getElementById('accountNewPw').value || '';
    var newPw2 = document.getElementById('accountNewPw2').value || '';
    if (familyHash(currentFamilyName + '|' + currentPw) !== currentFamilyId) { alert(t('alertWrongPw')); return; }
    if (!newPw) { alert(t('alertEnterNewPw')); return; }
    if (newPw !== newPw2) { alert(t('alertPwMismatch')); return; }
    var newId = familyHash(currentFamilyName + '|' + newPw);
    var data = { familyName: currentFamilyName, people: getPeople(), selections: selections, customDishes: customDishes, shoppingHave: shoppingHave, archivedMenus: archivedMenus, shoppingExtraItems: shoppingExtraItems, shoppingExtraHave: shoppingExtraHave, dishOverrides: dishOverrides };
    if (!migrateFamilyToNewId(newId, data)) { alert(t('alertPwChangeFail')); return; }
    currentFamilyId = newId;
    saveFamilyState();
    document.getElementById('accountPwModal').classList.remove('open');
    alert(t('alertPwUpdated'));
  });
  document.getElementById('accountPwModalCancel').addEventListener('click', function () { document.getElementById('accountPwModal').classList.remove('open'); });
  document.getElementById('accountPwModalBackdrop').addEventListener('click', function () { document.getElementById('accountPwModal').classList.remove('open'); });

  document.getElementById('menuArchiveBtn').addEventListener('click', function () {
    var nameInput = document.getElementById('savedMenuNameInput');
    var name = (nameInput && nameInput.value || '').trim() || (new Date().toISOString().slice(0, 10));
    archivedMenus.push({ name: name, savedAt: new Date().toISOString(), selections: JSON.parse(JSON.stringify(selections)) });
    saveFamilyState();
    nameInput.value = '';
    alert(t('alertMenuSaved'));
  });
  document.getElementById('menuDiscardBtn').addEventListener('click', function () {
    if (!confirm(t('confirmDiscard'))) return;
    selections = {};
    shoppingHave = {};
    shoppingExtraHave = {};
    saveFamilyState();
    renderWeekGrid();
    renderMenu();
    if (currentPage === 3) renderShopping();
  });
  document.getElementById('shoppingDiscardBtn').addEventListener('click', function () {
    if (!confirm(t('confirmDiscard'))) return;
    selections = {};
    shoppingHave = {};
    shoppingExtraHave = {};
    saveFamilyState();
    renderWeekGrid();
    renderMenu();
    renderShopping();
  });

  document.getElementById('accountLogout').addEventListener('click', function () {
    try { localStorage.removeItem(CURRENT_FAMILY_KEY); } catch (e) {}
    currentFamilyId = null;
    currentFamilyName = '';
    goToPage(1);
    showFamilyGate();
    document.getElementById('app').classList.add('hidden');
  });

  function initUI() {
    currentDayIndex = (new Date().getDay() + 6) % 7;
    calendarWindowStart = getMonday(currentViewDate);
    renderCalendar();
    renderWeekGrid();
    bindCalendarNav();
    bindPageNav();
    weekGridEl.addEventListener('change', function (e) {
      if (e.target.id === 'people') {
        currentPeopleCount = Math.min(20, Math.max(1, parseInt(e.target.value, 10) || 2));
        saveFamilyState();
      }
    });
  }

  document.getElementById('coverEntry').addEventListener('click', function () {
    hideCover();
    if (currentFamilyId) {
      loadFamilyState();
      showApp();
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
    } else {
      showFamilyGate();
    }
  });

  bindFamilyGate();
  bindLangSwitchers();
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  applyI18n();

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && currentFamilyId && window.SupabaseSync && window.SupabaseSync.isConfigured()) {
      saveFamilyState();
    }
  });

  try { currentFamilyId = localStorage.getItem(CURRENT_FAMILY_KEY); } catch (e) {}
  if (currentFamilyId) {
    try {
      var raw = localStorage.getItem(getFamilyStorageKey(currentFamilyId));
      if (raw) {
        var data = JSON.parse(raw);
        currentFamilyName = data.familyName || '';
      }
    } catch (e) {}
    hideCover();
    document.getElementById('familyGate').classList.add('hidden');
    showApp();
    loadFamilyState();
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
  }
})();
