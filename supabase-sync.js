/**
 * Supabase 云端同步：同一账号在任何设备登录自动看到同一份数据
 * 使用前：1. 在 Supabase 运行 supabase-setup.sql  2. 在 supabase-config.js 填写 url 和 anonKey
 * 在 index.html 中在 data.js 之后、app.js 之前引入：supabase-config.js, supabase CDN, supabase-sync.js
 */
(function () {
  'use strict';

  var supabase = null;
  var TABLE = 'family_data';

  function init() {
    var cfg = window.SUPABASE_CONFIG;
    if (!cfg || !cfg.url || !cfg.anonKey) return false;
    if (window.supabase) {
      supabase = window.supabase.createClient(cfg.url, cfg.anonKey);
      return true;
    }
    return false;
  }

  /** 异步从云端加载，回调 (err, row) row 为 { data, family_name } 或 null */
  function loadFromCloudAsync(familyId, callback) {
    if (!familyId) {
      if (callback) callback(null, null);
      return;
    }
    if (!supabase && !init()) {
      if (callback) callback(null, null);
      return;
    }
    supabase.from(TABLE).select('data, family_name').eq('id', familyId).single()
      .then(function (res) {
        if (callback) callback(res.error ? res.error.message : null, res.data || null);
      })
      .catch(function (err) {
        if (callback) callback(err && err.message ? err.message : 'network error', null);
      });
  }

  /** 保存到云端，data 为完整状态对象，callback(err) */
  function saveToCloud(familyId, familyName, data, callback) {
    if (!familyId) {
      if (callback) callback('no family id');
      return;
    }
    if (!supabase && !init()) {
      if (callback) callback('supabase not configured');
      return;
    }
    var row = {
      id: familyId,
      family_name: familyName || '',
      data: data || {},
      updated_at: new Date().toISOString()
    };
    supabase.from(TABLE).upsert(row, { onConflict: 'id' })
      .then(function (res) {
        if (callback) callback(res.error ? res.error.message : null);
      })
      .catch(function (err) {
        if (callback) callback(err && err.message ? err.message : 'network error');
      });
  }

  /** 检查家庭名称是否已存在，callback(err, exists) */
  function checkFamilyNameExists(familyName, callback) {
    if (!familyName) {
      if (callback) callback(null, false);
      return;
    }
    if (!supabase && !init()) {
      if (callback) callback(null, false);
      return;
    }
    supabase.from(TABLE).select('id').eq('family_name', familyName).limit(1)
      .then(function (res) {
        if (callback) callback(res.error ? res.error.message : null, !res.error && res.data && res.data.length > 0);
      })
      .catch(function (err) {
        if (callback) callback(err && err.message ? err.message : 'network error', false);
      });
  }

  /** 确保该家庭在云端有一条记录（新建家庭时调用），无则插入空数据 */
  function ensureFamilyRow(familyId, familyName, callback) {
    if (!familyId) {
      if (callback) callback(null, false);
      return;
    }
    if (!supabase && !init()) {
      if (callback) callback(null, false);
      return;
    }
    var emptyData = {
      familyName: familyName || '',
      people: 2,
      selections: {},
      customDishes: [],
      shoppingHave: {},
      archivedMenus: [],
      shoppingExtraItems: [],
      shoppingExtraHave: {},
      dishOverrides: {}
    };
    var row = {
      id: familyId,
      family_name: familyName || '',
      data: emptyData,
      updated_at: new Date().toISOString()
    };
    supabase.from(TABLE).upsert(row, { onConflict: 'id' })
      .then(function (res) {
        if (callback) callback(res.error ? res.error.message : null, !res.error);
      })
      .catch(function (err) {
        if (callback) callback(err && err.message ? err.message : 'error', false);
      });
  }

  window.SupabaseSync = {
    init: init,
    isConfigured: function () { return !!(window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url && window.SUPABASE_CONFIG.anonKey); },
    loadFromCloudAsync: loadFromCloudAsync,
    saveToCloud: saveToCloud,
    checkFamilyNameExists: checkFamilyNameExists,
    ensureFamilyRow: ensureFamilyRow
  };
})();
