@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========== 同步到 GitHub ==========
echo.

if not exist .git (
    echo [1/4] 初始化 Git...
    git init
    git branch -M main
    echo.
)

echo [2/4] 添加所有文件...
git add .

echo [3/4] 提交...
git status
set /p MSG="请输入本次提交说明（直接回车则用默认说明）: "
if "%MSG%"=="" set MSG=更新点菜项目
git commit -m "%MSG%" 2>nul || git commit -m "更新点菜项目"

echo.
echo [4/4] 推送到 GitHub...
if not exist .git\refs\remotes\origin (
    echo.
    echo 首次推送需要先添加远程仓库，请到 GitHub 新建仓库后复制地址，然后执行：
    echo   git remote add origin https://github.com/你的用户名/仓库名.git
    echo   git push -u origin main
    echo.
    pause
    exit /b 0
)

git push

echo.
echo 完成。
pause
