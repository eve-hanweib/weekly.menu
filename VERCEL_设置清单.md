# Vercel 部署 404 排查清单

部署后若出现 404，请按下面逐项检查。

---

## 1. 确认 GitHub 仓库结构

在浏览器打开你的 GitHub 仓库（例如 `https://github.com/eve-hanweib/weekly-menu`）。

- **正确**：一打开仓库就看到 `index.html`、`package.json`、`app.js` 等（和根目录同级）。
- **错误**：先看到一个文件夹（例如「点菜」），要点进去才看到 `index.html`。

若是「错误」情况，在 Vercel 里要把 **Root Directory** 填成那个文件夹名（例如 `点菜`）。

---

## 2. Vercel 项目设置（必改）

打开 Vercel 项目 → **Settings** → **General**，找到 **Build and Output Settings**：

1. 点 **Override** 打开覆盖（三个选项都勾选或逐个编辑）。
2. **Build Command**：留空，或填 `npm run build`。
3. **Output Directory**：**必须填一个点** **`.`**（表示用仓库根目录作为网站根目录）。
4. **Install Command**：可留空。
5. 保存。

---

## 3. Root Directory

在 **Settings** → **General** 里：

- 若 `index.html` 在**仓库根目录**：**Root Directory** 留空或填 **`.`**。
- 若 `index.html` 在**子文件夹**里：**Root Directory** 填该文件夹名（例如 `点菜`）。

---

## 4. 查看本次部署日志

1. 打开 **Deployments**，点进**最新一次**部署。
2. 看顶上的状态是 **Ready** 还是 **Error**。
3. 点 **Building** 或 **View Function Logs** 打开构建日志，看有没有报错（例如找不到文件、build 失败）。

把报错内容复制下来，便于排查。

---

## 5. 确认访问的网址

用**默认域名**访问，不要用自定义域名（避免域名没配置好导致 404）：

**https://你的项目名.vercel.app**

例如：`https://weekly-menu.vercel.app` 或页面上显示的 `https://xxx-xxx.vercel.app`。

---

## 6. 重新上传并部署

1. 确认本地「点菜」文件夹里有：`index.html`、`package.json`、`vercel.json`、`app.js`、`styles.css`、`data.js`、`supabase-config.js`、`supabase-sync.js`、`cover.jpg`、`image2.jpg`。
2. 在 GitHub 仓库里**删掉**根目录下所有旧文件（或新建一个空仓库）。
3. **Add file** → **Upload files**，把上面这些文件**全选**后拖进去上传（不要多套一层「点菜」文件夹）。
4. 提交后，到 Vercel 的 **Deployments** 里点 **Redeploy**，或等自动部署完成。
5. 再次用 **https://你的项目名.vercel.app** 打开。

---

若按上面做完仍是 404，请把这两样发出来：
- GitHub 仓库打开后的**截图**（能看到根目录文件列表）。
- Vercel 该次部署的 **Build Logs** 最后几行（或截图）。
