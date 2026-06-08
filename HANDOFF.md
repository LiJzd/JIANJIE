# 交接记录

## 当前状态

- 项目已初始化为个人作品集静态网站。
- 当前目录原本为空且不是 Git 仓库，已初始化 Git 并推送到 GitHub。
- 网站可通过直接打开 `index.html` 或本地静态服务预览。
- 远程仓库：`https://github.com/LiJzd/JIANJIE.git`

## 最近完成

- 增加强滚动动效：区块/项目卡片滚入时带位移、斜切、模糊和旋转入场。
- 增加随滚动变化的红色反射光束层，使用 `--scroll-progress` 驱动延伸和位移。
- 增加右侧琴键式区域导航，当前区域对应小标题会伸长；移动端隐藏，避免遮挡内容。
- 修复顶部导航右上角被遮挡/滚动定位不稳定的问题：移除 sticky header 容器上的 transform，仅保留内部斜切风格。
- 将网站 UI 调整为参考 `https://github.com/LiJzd/ZUOPINGJI.git` 的黑红高对比、斜切、硬阴影、半调网点风格。
- 保留正常作品集内容表达：项目、技能、关于、联系；没有迁移 `ZUOPINGJI` 的剧情化“劫案/预告信”项目展示文案。
- 项目卡片仍从 GitHub 公开仓库动态读取，点击卡片可打开正常“项目详情”弹窗。
- 从 GitHub 公开仓库接口读取 `LiJzd` 的仓库列表，并把所有公开仓库放进作品区。
- 作品区现在包含：`JIANJIE`、`Obsidian-LLM-WIKI`、`liangtouwu02`、`paper-agent-pipeline`、`MingChao--IF`、`---`。
- 为 GitHub API 不可用的情况增加 fallback 仓库数据。
- 创建协作上下文文件：`AGENTS.md`、`HANDOFF.md`、`TODO.md`、`docs/DECISIONS.md`。
- 创建作品集网站首版：
  - 顶部导航
  - 首屏介绍和行动按钮
  - 精选项目
  - 技能方向
  - 关于与经历
  - 联系区和页脚
- 增加 GitHub Pages 部署说明。
- 保存设计概念图到 `assets/concepts/portfolio-concept.png`。
- 添加远程 `origin` 并推送 `main` 分支。

## 当前分支 / Commit

- 分支：`main`
- 最新 commit：执行 `git log --oneline -1` 查看最终哈希。

## 重要文件

- `index.html`
- `styles/main.css`
- `scripts/main.js`
- `assets/concepts/portfolio-concept.png`
- `README.md`

## 验证结果

- 使用 Chrome headless 验证桌面视口 `1440x1200`：右上角导航完整可见，右侧琴键导航显示。
- 使用 Chrome headless 验证移动端视口 `390x1000`：琴键导航隐藏，首屏内容无裁切。
- 使用 DOM dump 验证 `section-key` 和项目卡片 `scroll-reveal` 类已挂载。
- 使用 Chrome headless 验证桌面视口 `1440x1200` 的 `ZUOPINGJI` 风格 UI。
- 使用 Chrome headless 验证移动端视口 `390x1000`，修复了小屏首屏文案裁切。
- 使用 `node --check scripts/main.js` 验证脚本语法。
- 使用 GitHub API 获取 `LiJzd` 公开仓库列表，返回 6 个仓库。
- 使用 Chrome headless `--dump-dom` 验证 6 个仓库标题和 GitHub 链接已渲染。
- `python -m http.server 8000 --bind 127.0.0.1` 本地服务返回 200。
- 使用 Chrome headless 验证桌面视口 `1440x1000`。
- 使用 Chrome headless 验证移动端视口 `390x844`。
- 已检查首屏、下一节露出、移动端断行、项目/技能/联系区域结构。
- Browser 插件未暴露可用打开/截图工具，本轮使用 Chrome headless 作为 fallback。

## 未完成事项

- 替换真实邮箱、头像或个人视觉、社交链接。
- 在 GitHub Pages 中启用 `main` 分支 `/root` 部署。
- 根据真实项目截图或封面图片替换当前代码生成的项目视觉。
- 如需更贴近 `ZUOPINGJI`，可继续补充更复杂的 WebGL/Shader 背景，但保持项目展示内容正常。

## 已知问题

- 当前内容为可编辑占位内容，不代表用户真实经历。
- GitHub Pages 需要在 GitHub 仓库设置中手动启用。

## 给下一个 Agent 的提醒

- 每次接手先读本文件、`TODO.md`、`docs/DECISIONS.md`、`AGENTS.md` 和最近 5 个 commit。
- 如果用户提供真实资料，优先只改 `scripts/main.js` 和必要的文案。
