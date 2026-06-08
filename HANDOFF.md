# 交接记录

## 当前状态

- 项目已初始化为个人作品集静态网站。
- 当前目录原本为空且不是 Git 仓库，已初始化 Git 并推送到 GitHub。
- 网站可通过直接打开 `index.html` 或本地静态服务预览。
- 远程仓库：`https://github.com/LiJzd/JIANJIE.git`

## 最近完成

- 按用户反馈将作品区从“展示所有公开仓库”改为“精选 4 个代表项目”：`liangtouwu02`、`paper-agent-pipeline`、`Obsidian-LLM-WIKI`、`MingChao--IF`。
- 移除作品卡片中的 GitHub 星标数量和 fork 数量，仅保留主要语言与更新时间。
- 新增 4 张项目封面视觉资产到 `assets/projects/`，项目卡片和详情弹窗都会显示封面图。
- 联系区新增“咨询入口”表单，可填写咨询类型、称呼和需求简述；点击“生成咨询草稿”会更新邮件按钮的 `mailto` 草稿，不会自动发送信息。
- 修复右侧琴键导航的当前区域判断：改为基于滚动位置和区块 `offsetTop` 计算，不再依赖不稳定的 IntersectionObserver 区域交叠结果；中小屏隐藏，避免遮挡内容。
- 修复项目卡片封面加入后正文可读性问题：卡片偏移层改为 `box-shadow`，避免浅色层压到正文背景。
- 增加强滚动动效：区块/项目卡片滚入时带位移、斜切、模糊和旋转入场。
- 增加随滚动变化的红色反射光束层，使用 `--scroll-progress` 驱动延伸和位移。
- 增加右侧琴键式区域导航，当前区域对应小标题会伸长；移动端隐藏，避免遮挡内容。
- 修复顶部导航右上角被遮挡/滚动定位不稳定的问题：移除 sticky header 容器上的 transform，仅保留内部斜切风格。
- 将网站 UI 调整为参考 `https://github.com/LiJzd/ZUOPINGJI.git` 的黑红高对比、斜切、硬阴影、半调网点风格。
- 保留正常作品集内容表达：项目、技能、关于、联系；没有迁移 `ZUOPINGJI` 的剧情化“劫案/预告信”项目展示文案。
- 项目卡片仍从 GitHub 公开仓库动态读取链接、语言和更新时间，点击卡片可打开正常“项目详情”弹窗。
- 从 GitHub 公开仓库接口读取 `LiJzd` 的仓库列表，但只展示精选项目。
- 作品区现在包含：`liangtouwu02`、`paper-agent-pipeline`、`Obsidian-LLM-WIKI`、`MingChao--IF`。
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
- `assets/projects/*.svg`
- `assets/concepts/portfolio-concept.png`
- `README.md`

## 验证结果

- 使用 `node --check scripts/main.js` 验证脚本语法。
- 使用 Browser 插件打开 `http://127.0.0.1:8010/` 验证页面标题、非空渲染、4 个项目卡片、4 张项目图片、无星标文本、咨询面板可见、控制台无 error/warn。
- Browser 插件当前无法通过自动化滚轮/锚点改变 `scrollY`，本轮使用 Codex 运行时 Playwright/Chromium 作为滚动交互验证 fallback。
- 使用 Playwright/Chromium 桌面视口 `1440x1000` 验证：作品区 4 个精选项目、4 张封面图、无星标文本；滚动到 `projects`/`skills`/`about`/`contact` 时右侧 active key 分别正确变化，`--scroll-progress` 同步递增。
- 使用 Playwright/Chromium 桌面视口 `1440x1000` 验证咨询表单：填写称呼和需求后点击“生成咨询草稿”，状态提示出现，邮件按钮 `mailto` 带 subject/body 草稿。
- 使用 Playwright/Chromium 移动端视口 `390x1000` 验证：4 个项目和 4 张图片仍渲染，右侧琴键导航隐藏，无横向滚动，无星标文本。
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
- 本轮截图验证文件位于系统临时目录：`C:\Users\lost\AppData\Local\Temp\portfolio-desktop.png`、`portfolio-projects-3.png`、`portfolio-contact-2.png`、`portfolio-mobile.png`。

## 未完成事项

- 替换真实邮箱、头像或个人视觉、社交链接。
- 在 GitHub Pages 中启用 `main` 分支 `/root` 部署。
- 根据真实项目截图替换当前生成的项目封面视觉。
- 如需更贴近 `ZUOPINGJI`，可继续补充更复杂的 WebGL/Shader 背景，但保持项目展示内容正常。

## 已知问题

- 当前内容为可编辑占位内容，不代表用户真实经历。
- GitHub Pages 需要在 GitHub 仓库设置中手动启用。

## 给下一个 Agent 的提醒

- 每次接手先读本文件、`TODO.md`、`docs/DECISIONS.md`、`AGENTS.md` 和最近 5 个 commit。
- 如果用户提供真实资料，优先只改 `scripts/main.js` 和必要的文案。
- 作品区当前是有意精选展示，不再自动展示全部公开仓库；如需调整展示项目，改 `scripts/main.js` 的 `selectedProjects`。
