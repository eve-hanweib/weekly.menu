# 一步步：把点菜项目部署到 GitHub（HTTPS 网站）

部署完成后，你会得到一个 **https://你的用户名.github.io/仓库名/** 的网址，免费且自带 HTTPS。

---

## 第一步：安装 Git（如果还没装）

1. 打开 https://git-scm.com/download/win 下载 Windows 版 Git。
2. 安装时一路「下一步」即可。
3. 安装好后，在桌面或任意文件夹空白处 **右键**，能看到 **Git Bash Here** 或 **Git GUI Here** 就说明装好了。

---

## 第二步：注册 / 登录 GitHub

1. 打开 https://github.com
2. 没有账号就点 **Sign up** 注册，有账号就 **Sign in** 登录。

---

## 第三步：在 GitHub 上新建仓库

1. 登录后，点击右上角 **+** → **New repository**。
2. **Repository name** 填英文，例如：`weekly-menu` 或 `diancai`（不要空格）。
3. 选 **Public**。
4. **不要**勾选 "Add a README file"（我们本地已有文件）。
5. 点 **Create repository**。
6. 创建好后，页面上会有一个仓库地址，类似：  
   `https://github.com/你的用户名/weekly-menu.git`  
   先**复制这个地址**，后面会用到。

---

## 第四步：在本地用 Git 上传项目

### 4.1 在项目文件夹里打开终端

- 进入你的项目文件夹：`点菜`
- 在文件夹里 **按住 Shift + 右键** → 选 **“在此处打开 PowerShell 窗口”** 或 **“在终端中打开”**  
  或者先打开终端，再执行：
  ```bash
  cd "C:\Users\hanwe\OneDrive\Desktop\点菜"
  ```
  （路径按你电脑上「点菜」所在位置改）

### 4.2 初始化 Git 并提交代码

在终端里**一条一条**执行下面命令（每行回车一次）：

```bash
git init
```

```bash
git add index.html styles.css app.js data.js supabase-config.js supabase-sync.js supabase-setup.sql cover.jpg image.jpg image2.jpg image3.jpg README.md DEPLOY.md
```

如果还想把其他文件也传上去（比如更多图片或文档），可以再执行：

```bash
git add .
```

然后提交：

```bash
git commit -m "点菜项目首次提交"
```

### 4.3 把本地仓库连到 GitHub 并推送

把下面命令里的 **你的用户名** 和 **仓库名** 换成你在第三步里创建的：

```bash
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

例如你的 GitHub 用户名是 `hanwe`，仓库名是 `weekly-menu`，就写：

```bash
git remote add origin https://github.com/hanwe/weekly-menu.git
git push -u origin main
```

第一次 `git push` 时，可能会弹出浏览器或窗口让你**登录 GitHub** 或输入**用户名 + 密码（或 Personal Access Token）**，按提示完成即可。成功后终端里会显示类似 `pushed to origin main`。

---

## 第五步：打开 GitHub Pages（生成 HTTPS 网址）

1. 在浏览器打开你的仓库页面：  
   `https://github.com/你的用户名/仓库名`
2. 点顶部的 **Settings**（设置）。
3. 左侧找到 **Pages**（页面）。
4. 在 **Source** 里：
   - 选 **Deploy from a branch**；
   - **Branch** 选 **main**，右边选 **/ (root)**；
   - 点 **Save**。
5. 等 1～2 分钟，页面上方会出现一行绿色提示，类似：  
   **Your site is live at https://你的用户名.github.io/仓库名/**

---

## 第六步：用浏览器打开你的网站

在浏览器地址栏输入：

**https://你的用户名.github.io/仓库名/**

例如：`https://hanwe.github.io/weekly-menu/`

能正常打开、能登录、能选菜，就说明部署成功了。这个地址就是你的 **HTTPS 网站**，可以发给别人用，也可以填到微信小程序的 web-view 里（需在小程序后台配置业务域名）。

---

## 常见问题

**Q：推送时提示要登录？**  
A：GitHub 已不再支持用「账号密码」推送，需要用 **Personal Access Token** 当密码用。  
在 GitHub 网页：右上角头像 → **Settings** → 最下面 **Developer settings** → **Personal access tokens** → 生成一个 token，复制下来，在 `git push` 时「密码」那里粘贴这个 token。

**Q：改了代码后想更新网站？**  
A：在「点菜」文件夹里打开终端，执行：
```bash
git add .
git commit -m "更新说明"
git push
```
推送成功后，GitHub Pages 会自动重新部署，过一两分钟刷新网页即可。

**Q：仓库名或用户名里有中文可以吗？**  
A：建议用英文，避免某些环境下的兼容问题。

---

## 需要部署的文件清单（最少这些）

| 文件 | 说明 |
|------|------|
| index.html | 主页面 |
| styles.css | 样式 |
| app.js | 主逻辑 |
| data.js | 菜品数据与常量 |
| supabase-config.js | Supabase 配置 |
| supabase-sync.js | 云端同步 |
| cover.jpg | 封面图 |
| image2.jpg | 背景图（当前使用的） |

其他如 image.jpg、image3.jpg、README.md、DEPLOY.md 等可按需一起上传。
