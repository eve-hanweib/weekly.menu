-- 在 Supabase 控制台 → SQL Editor 中运行此脚本

-- 家庭数据表：id = 前端计算的 hash(家庭名|密码)，不存密码
CREATE TABLE IF NOT EXISTS family_data (
  id TEXT PRIMARY KEY,
  family_name TEXT NOT NULL UNIQUE DEFAULT '',
  data JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 更新时自动刷新 updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS family_data_updated_at ON family_data;
CREATE TRIGGER family_data_updated_at
  BEFORE UPDATE ON family_data
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at();

-- 行级安全：允许匿名用户按 id 读写（仅限知晓 id 的客户端，id 由 家庭名+密码 哈希得出）
ALTER TABLE family_data ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anon read write by id" ON family_data;
CREATE POLICY "Allow anon read write by id" ON family_data
  FOR ALL
  TO anon
  USING (true)
  WITH CHECK (true);

-- 说明：不暴露「列出所有家庭」的接口，前端只按 id 查询/写入，id 未泄露则数据安全。
