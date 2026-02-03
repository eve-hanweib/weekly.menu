// 菜品数据：无预设，仅由用户添加；分类供添加时选择
const DISH_CATEGORIES = [
  { id: 'pork', label: '猪鸡' },
  { id: 'beef', label: '牛羊' },
  { id: 'seafood', label: '海鲜' },
  { id: 'veg', label: '蔬菜' },
  { id: 'staple', label: '主食' },
  { id: 'soup', label: '汤' },
  { id: 'out', label: '外食' }
];

const DISHES = [];

const DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const MEALS = [
  { id: 'breakfast', label: '早餐' },
  { id: 'lunch', label: '午餐' },
  { id: 'dinner', label: '晚餐' }
];
// 每餐最多菜品数：早餐 3，午餐/晚餐 8
const MEAL_MAX = { breakfast: 3, lunch: 8, dinner: 8 };

// 采购清单：配料（米面油、饺子皮、面包等）与调料只显示名称不显示数量；其余为食材
const SEASONINGS = ['盐', '酱油', '料酒', '醋', '淀粉', '食用油', '香油', '冰糖', '八角', '桂皮', '生姜', '小葱', '蒜', '葱姜', '沙拉酱', '米', '面', '面粉', '饺子皮', '吐司面包', '面包'];

// 肉类：按半公斤/一公斤显示（不精确到克）
const MEAT_NAMES = ['排骨', '牛腱子', '牛里脊', '猪肉馅', '鱼', '虾仁'];

// 蔬菜：按个或棵显示（克转个/棵时用的大致比例，如 白菜 约 300 克/棵）
const VEGETABLE_GRAM_TO_UNIT = {
  '白菜': { unit: '棵', gramsPerUnit: 300 },
  '上海青': { unit: '棵', gramsPerUnit: 150 },
  '空心菜': { unit: '把', gramsPerUnit: 200 }
};
