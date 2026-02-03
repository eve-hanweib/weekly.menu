// 部署时把静态文件复制到 public，供 Vercel 输出
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const files = [
  'index.html', 'app.js', 'data.js', 'styles.css', 'supabase-config.js', 'supabase-sync.js',
  'cover.jpg', 'image2.jpg', 'image.jpg', 'image3.jpg'
];

files.forEach(name => {
  const src = path.join(__dirname, name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(publicDir, name));
  }
});

console.log('Build done: files copied to public/');
