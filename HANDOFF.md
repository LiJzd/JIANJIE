# 交接记录

## 当前状态

- 项目已初始化为个人作品集静态网站。
- 当前目录原本为空且不是 Git 仓库，已初始化 Git 并推送到 GitHub。
- 网站可通过直接打开 `index.html` 或本地静态服务预览。
- 远程仓库：`https://github.com/LiJzd/JIANJIE.git`

## 最近完成

- 将联系邮箱从占位 `hello@example.com` 替换为用户提供的 `ljjjzd@qq.com`，联系区文案、发送邮件按钮和咨询草稿 `mailto` 均使用新邮箱。
- 参考 `https://asia.sega.com/p3r/cn/` 的开场节奏与蓝黑高对比视觉，新增原创全屏开场动画：斜切切片、扫描圆环、倒计时、标题闪入、自动退场和 SKIP 按钮。
- 开场动画退场计时改为页面 `load` 后启动，避免字体/网络请求较慢时过早退场；系统 `prefers-reduced-motion: reduce` 时直接移除开场层。
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

- 使用 Web 读取 P3R 官网参考，确认其首屏包含前置短句和主视觉开场结构，本轮只借鉴节奏与视觉语言，不迁移官网素材。
- 使用 `node --check scripts/main.js` 验证脚本语法。
- 使用 Browser 插件验证 `http://127.0.0.1:8010/`：开场层出现，中段标题可见，5 秒后自动移除，首页可见，SKIP 按钮可提前移除开场层，控制台无 error/warn。
- 使用 Browser 插件验证邮箱：页面文本包含 `ljjjzd@qq.com`，发送邮件按钮初始 `href` 为 `mailto:ljjjzd@qq.com`。
- 使用 Browser 插件临时移动端视口 `390x1000` 验证：开场层和 SKIP 可见，无横向溢出。
- 使用 Codex 运行时 Playwright/Chromium 保存截图并复核：桌面开场中段 `portfolio-intro-frame-live.png`、退场后首页 `portfolio-after-intro.png`、移动端开场 `portfolio-intro-mobile.png`。
- 使用 Playwright/Chromium 验证 `prefers-reduced-motion: reduce`：开场层直接移除，首页可见。
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
- 本轮截图验证文件位于系统临时目录：`C:\Users\lost\AppData\Local\Temp\portfolio-intro-frame-live.png`、`portfolio-after-intro.png`、`portfolio-intro-mobile.png`，以及上一轮 `portfolio-desktop.png`、`portfolio-projects-3.png`、`portfolio-contact-2.png`、`portfolio-mobile.png`。

## 未完成事项

- 替换头像或个人视觉、社交链接。
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
