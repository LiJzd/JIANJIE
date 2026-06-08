# 个人作品集

一个可直接部署到 GitHub Pages 的静态个人作品集网站。

## 本地预览

直接打开 `index.html`，或运行：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 修改内容

主要内容在 `scripts/main.js`：

- 个人姓名和简介
- GitHub 公开仓库作品数据
- 技能方向
- 经历节点
- 联系方式

作品区会优先请求：

```text
https://api.github.com/users/LiJzd/repos?per_page=100&sort=updated
```

如果网络或 GitHub API 暂时不可用，会使用 `scripts/main.js` 里的 fallback 数据。

页面结构在 `index.html`，视觉样式在 `styles/main.css`。

## 部署到 GitHub Pages

GitHub 上可以直接上线静态网站的功能叫 **GitHub Pages**。

推荐步骤：

1. 在 GitHub 新建一个仓库。
2. 把本项目 push 到仓库。
3. 打开仓库的 `Settings`。
4. 进入 `Pages`。
5. `Build and deployment` 选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. 保存后等待 GitHub 生成访问地址。

如果仓库名是 `用户名.github.io`，访问地址通常是：

```text
https://用户名.github.io/
```

如果仓库名是普通项目名，访问地址通常是：

```text
https://用户名.github.io/仓库名/
```
