const profile = {
  name: "LiJzd",
  email: "hello@example.com",
  github: "https://github.com/LiJzd",
  resume: "#",
};

const githubUser = "LiJzd";

const fallbackRepos = [
  {
    name: "JIANJIE",
    description: "个人作品集网站，使用静态 HTML/CSS/JavaScript 构建并部署到 GitHub Pages。",
    language: "CSS",
    html_url: "https://github.com/LiJzd/JIANJIE",
    homepage: "https://lijzd.github.io/JIANJIE/",
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: "2026-06-08T10:46:12Z",
    updated_at: "2026-06-08T10:46:16Z",
  },
  {
    name: "Obsidian-LLM-WIKI",
    description: "围绕 Obsidian 和 LLM 构建的知识库/Wiki 工具项目。",
    language: "JavaScript",
    html_url: "https://github.com/LiJzd/Obsidian-LLM-WIKI",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: "2026-06-06T12:15:04Z",
    updated_at: "2026-06-06T12:15:08Z",
  },
  {
    name: "liangtouwu02",
    description: "智慧农业生猪监测系统，包含前端、后端和 Python AI 服务。",
    language: "Python",
    html_url: "https://github.com/LiJzd/liangtouwu02",
    homepage: null,
    stargazers_count: 0,
    forks_count: 1,
    pushed_at: "2026-06-01T04:22:33Z",
    updated_at: "2026-06-01T04:22:37Z",
  },
  {
    name: "paper-agent-pipeline",
    description: "适用于 Claude Code 的论文生成工作流，帮助一键生成格式完善的作业论文。",
    language: "Python",
    html_url: "https://github.com/LiJzd/paper-agent-pipeline",
    homepage: null,
    stargazers_count: 10,
    forks_count: 1,
    pushed_at: "2026-05-15T08:48:28Z",
    updated_at: "2026-05-31T08:27:43Z",
  },
  {
    name: "MingChao--IF",
    description: "基于大语言模型与 RAG 技术的明朝历史 IF 线模拟引擎。",
    language: "Python",
    html_url: "https://github.com/LiJzd/MingChao--IF",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: "2026-05-01T13:35:01Z",
    updated_at: "2026-05-01T13:35:05Z",
  },
  {
    name: "---",
    description: "读题批注工具：在读题过程中选中文字并记录批注和思考。",
    language: "JavaScript",
    html_url: "https://github.com/LiJzd/---",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: "2026-03-04T10:45:37Z",
    updated_at: "2026-03-04T10:45:41Z",
  },
];

const repoEnhancements = {
  JIANJIE: {
    description: "个人作品集网站，使用静态 HTML/CSS/JavaScript 构建并部署到 GitHub Pages。",
    tags: ["Portfolio", "GitHub Pages", "静态网站"],
    theme: "linear-gradient(135deg, #00a99d, #d9f4ef)",
  },
  "Obsidian-LLM-WIKI": {
    description: "围绕 Obsidian 和 LLM 构建的知识库/Wiki 工具项目。",
    tags: ["LLM", "Wiki", "知识管理"],
    theme: "linear-gradient(135deg, #ef6f61, #ffe2dc)",
  },
  liangtouwu02: {
    description: "智慧农业生猪监测系统，包含多智能体对话、数据分析、健康预警和租户隔离。",
    tags: ["AI", "FastAPI", "Spring Boot"],
    theme: "linear-gradient(135deg, #222222, #f0ece4)",
  },
  "paper-agent-pipeline": {
    description: "多智能体学术论文自动写作系统，覆盖需求分析、文献搜索、写作、润色、PPT 和交付。",
    tags: ["Agent", "论文工作流", "Python"],
    theme: "linear-gradient(135deg, #00a99d, #f7f5f1)",
  },
  "MingChao--IF": {
    description: "基于大语言模型与 RAG 技术的明朝历史平行推演引擎，支持动态分叉和角色档案。",
    tags: ["RAG", "FastAPI", "历史推演"],
    theme: "linear-gradient(135deg, #ef6f61, #222222)",
  },
  "---": {
    description: "读题批注工具：在读题过程中选中文字并记录批注和思考。",
    tags: ["JavaScript", "批注", "学习工具"],
    theme: "linear-gradient(135deg, #f0be4d, #ffffff)",
  },
};

const skills = [
  {
    title: "AI 工程",
    description: "把大模型、RAG、多智能体和工具调用串成可运行、可验证的工作流。",
  },
  {
    title: "Web 全栈",
    description: "使用前后端框架、数据库和部署链路完成从界面到服务的应用交付。",
  },
  {
    title: "知识系统",
    description: "围绕论文、Wiki、学习批注和内容生产，构建能复用的知识工具。",
  },
];

const timeline = [
  {
    time: "现在",
    title: "持续迭代 GitHub 公开项目",
    description: "作品集会同步展示公开仓库，优先呈现近期维护和可链接查看的项目。",
  },
  {
    time: "近期",
    title: "集中在 AI 工作流与应用系统",
    description: "包括论文生成流水线、知识库工具、智慧农业监测和历史推演系统。",
  },
  {
    time: "过去",
    title: "把作业、项目和兴趣做成工程作品",
    description: "将学习场景中的需求沉淀为脚本、网页、服务和自动化流程。",
  },
];

const projectList = document.querySelector("#project-list");
const skillList = document.querySelector("#skill-list");
const timelineList = document.querySelector("#timeline");
const contactActions = document.querySelector("#contact-actions");
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector("#mobile-nav");

document.title = `${profile.name} | 个人作品集`;
document.querySelector("#footer-name").textContent = profile.name;
document.querySelector("#year").textContent = new Date().getFullYear();

const languageColors = {
  CSS: "#00a99d",
  JavaScript: "#f0be4d",
  Python: "#3572a5",
  TypeScript: "#3178c6",
  HTML: "#ef6f61",
};

const formatDate = (value) => {
  if (!value) return "最近更新";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
};

const normalizeRepo = (repo, index) => {
  const enhancement = repoEnhancements[repo.name] || {};
  const language = repo.language || "Code";
  const fallbackThemes = [
    "linear-gradient(135deg, #00a99d, #d9f4ef)",
    "linear-gradient(135deg, #ef6f61, #ffe2dc)",
    "linear-gradient(135deg, #222222, #f0ece4)",
    "linear-gradient(135deg, #f0be4d, #ffffff)",
  ];

  return {
    title: repo.name,
    summary: enhancement.description || repo.description || "GitHub 公开项目，点击可查看源码、提交记录和项目详情。",
    tags: enhancement.tags || [language, "GitHub", "公开仓库"],
    link: repo.html_url,
    homepage: repo.homepage,
    language,
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
    updatedAt: formatDate(repo.pushed_at || repo.updated_at),
    theme: enhancement.theme || fallbackThemes[index % fallbackThemes.length],
  };
};

const renderProjects = (repos) => {
  const projects = repos
    .filter((repo) => !repo.archived)
    .sort((a, b) => new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at))
    .map(normalizeRepo);

  projectList.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <div>
          <div class="project-art" style="--project-bg: ${project.theme}"></div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-stats">
            <span><i style="--dot: ${languageColors[project.language] || "#686868"}"></i>${project.language}</span>
            <span>★ ${project.stars}</span>
            <span>⑂ ${project.forks}</span>
            <span>${project.updatedAt}</span>
          </div>
          <div class="project-meta">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <div class="project-links">
          <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer" aria-label="查看 ${project.title} GitHub 仓库">GitHub 仓库</a>
          ${project.homepage ? `<a class="project-link secondary-link" href="${project.homepage}" target="_blank" rel="noreferrer">在线预览</a>` : ""}
        </div>
      </article>
    `
    )
    .join("");
};

renderProjects(fallbackRepos);

fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`)
  .then((response) => {
    if (!response.ok) throw new Error("GitHub API unavailable");
    return response.json();
  })
  .then(renderProjects)
  .catch(() => {
    renderProjects(fallbackRepos);
  });

skillList.innerHTML = skills
  .map(
    (skill) => `
      <article class="skill-item">
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
      </article>
    `
  )
  .join("");

timelineList.innerHTML = timeline
  .map(
    (item) => `
      <li>
        <time>${item.time}</time>
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </li>
    `
  )
  .join("");

contactActions.innerHTML = `
  <a class="button primary" href="mailto:${profile.email}">发送邮件</a>
  <a class="button secondary" href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a>
  <a class="button secondary" href="${profile.resume}">简历</a>
`;

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    mobileNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
