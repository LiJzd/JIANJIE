const profile = {
  name: "LiJzd",
  email: "ljjjzd@qq.com",
  github: "https://github.com/LiJzd",
  resume: "#",
};

const githubUser = "LiJzd";

const selectedProjects = [
  {
    repo: "liangtouwu02",
    title: "智慧养殖监测系统",
    summary: "面向养殖场景的全栈系统，整合前端看板、后端服务、Python AI 分析与健康预警。",
    tags: ["AI", "FastAPI", "Spring Boot"],
    cover: "assets/projects/liangtouwu02-cover.svg",
    operation: "PROJECT 01",
    theme: "linear-gradient(135deg, #1a1a1a, #f2efe7)",
  },
  {
    repo: "paper-agent-pipeline",
    title: "论文 Agent Pipeline",
    summary: "多智能体学术写作流水线，覆盖需求分析、文献检索、写作、润色、PPT 和交付。",
    tags: ["Agent", "论文工作流", "Python"],
    cover: "assets/projects/paper-agent-cover.svg",
    operation: "PROJECT 02",
    theme: "linear-gradient(135deg, #d50000, #ffded8)",
  },
  {
    repo: "Obsidian-LLM-WIKI",
    title: "Obsidian LLM Wiki",
    summary: "围绕 Obsidian 与大模型构建的知识库工具，把笔记、问答和知识整理连接起来。",
    tags: ["LLM", "Wiki", "知识管理"],
    cover: "assets/projects/obsidian-llm-cover.svg",
    operation: "PROJECT 03",
    theme: "linear-gradient(135deg, #111111, #e8e8e8)",
  },
  {
    repo: "MingChao--IF",
    title: "明朝历史 IF 引擎",
    summary: "基于大语言模型与 RAG 的历史平行推演项目，支持分支剧情、角色档案和知识检索。",
    tags: ["RAG", "历史推演", "FastAPI"],
    cover: "assets/projects/mingchao-if-cover.svg",
    operation: "PROJECT 04",
    theme: "linear-gradient(135deg, #8f0000, #f6c6ba)",
  },
];

const fallbackRepos = selectedProjects.map((project, index) => ({
  name: project.repo,
  description: project.summary,
  language: project.tags.at(-1) || "Code",
  html_url: `https://github.com/LiJzd/${project.repo}`,
  homepage: project.repo === "JIANJIE" ? "https://lijzd.github.io/JIANJIE/" : null,
  archived: false,
  pushed_at: new Date(Date.UTC(2026, 5, 8 - index)).toISOString(),
  updated_at: new Date(Date.UTC(2026, 5, 8 - index)).toISOString(),
}));

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
    description: "作品集只展示更能代表方向的精选项目，其余仓库保留在 GitHub 中继续沉淀。",
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
const sectionKeys = document.querySelectorAll(".section-key");
const introSequence = document.querySelector("#intro-sequence");
const skipIntro = document.querySelector("[data-skip-intro]");
const trackedSections = ["top", "projects", "skills", "about", "contact"]
  .map((id) => document.querySelector(id === "top" ? "main" : `#${id}`))
  .filter(Boolean);

document.title = `${profile.name} | 个人作品集`;
document.querySelector("#year").textContent = new Date().getFullYear();

const removeIntro = () => {
  if (!introSequence) return;
  introSequence.classList.add("intro-dismissing");
  window.setTimeout(() => introSequence.remove(), 2000);
};

if (introSequence) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    introSequence.remove();
  } else {
    const startIntro = () => {
      introSequence.classList.add("intro-ready");
      window.setTimeout(removeIntro, 4000);
    };
    if (document.readyState === "complete") {
      window.requestAnimationFrame(startIntro);
    } else {
      window.addEventListener("load", () => window.requestAnimationFrame(startIntro), { once: true });
    }
    skipIntro.addEventListener("click", removeIntro);
  }
}

const languageColors = {
  CSS: "#00a99d",
  JavaScript: "#f0be4d",
  Python: "#3572a5",
  TypeScript: "#3178c6",
  HTML: "#ef6f61",
  Code: "#ffb4a8",
};

const formatDate = (value) => {
  if (!value) return "最近更新";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
};

const repoByName = (repos) =>
  repos.reduce((lookup, repo) => {
    lookup[repo.name] = repo;
    return lookup;
  }, {});

const normalizeProject = (project, repo, index) => {
  const language = repo?.language || fallbackRepos[index]?.language || "Code";

  return {
    id: project.repo,
    title: project.title,
    summary: project.summary,
    tags: project.tags,
    cover: project.cover,
    link: repo?.html_url || `https://github.com/${githubUser}/${project.repo}`,
    homepage: repo?.homepage || null,
    language,
    updatedAt: formatDate(repo?.pushed_at || repo?.updated_at || fallbackRepos[index]?.updated_at),
    theme: project.theme,
    operation: project.operation,
  };
};

let renderedProjects = [];
let revealObserver;

const projectOffsets = ["#ffb4a8", "#c6c6c7", "#d50000", "#ffffff"];
const projectSkews = ["-3deg", "3deg", "-2deg", "4deg"];

function registerRevealTargets(targets) {
  if (!revealObserver) return;
  targets.forEach((target, index) => {
    if (target.dataset.revealReady) return;
    target.dataset.revealReady = "true";
    target.classList.add("scroll-reveal");
    target.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
    revealObserver.observe(target);
  });
}

const renderProjects = (repos) => {
  const availableRepos = repoByName(repos.filter((repo) => !repo.archived));
  const projects = selectedProjects.map((project, index) =>
    normalizeProject(project, availableRepos[project.repo], index)
  );
  renderedProjects = projects;

  projectList.innerHTML = projects
    .map(
      (project, index) => `
      <article
        class="project-card"
        data-project-id="${project.id}"
        style="--project-bg: ${project.theme}; --offset: ${projectOffsets[index % projectOffsets.length]}; --skew: ${projectSkews[index % projectSkews.length]}"
      >
        <div>
          <figure class="project-art" data-code="${project.operation}">
            <img src="${project.cover}" alt="${project.title} 项目封面" loading="lazy">
          </figure>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-stats" aria-label="项目技术和更新时间">
            <span><i style="--dot: ${languageColors[project.language] || "#686868"}"></i>${project.language}</span>
            <span>${project.updatedAt}</span>
          </div>
          <div class="project-meta">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <div class="project-links">
          <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer" aria-label="查看 ${project.title} GitHub 仓库" data-stop-card>GitHub 仓库</a>
          ${project.homepage ? `<a class="project-link secondary-link" href="${project.homepage}" target="_blank" rel="noreferrer" data-stop-card>在线预览</a>` : ""}
        </div>
      </article>
    `
    )
    .join("");

  attachProjectCards();
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

const modal = document.querySelector("#project-modal");
const modalArt = document.querySelector("#modal-art");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalTags = document.querySelector("#modal-tags");
const modalLinks = document.querySelector("#modal-links");
const modalOperation = document.querySelector("#modal-operation");

function attachProjectCards() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-stop-card]")) return;
      const project = renderedProjects.find((item) => item.id === card.dataset.projectId);
      if (project) openProjectModal(project);
    });
  });
  registerRevealTargets(document.querySelectorAll(".project-card"));
}

function openProjectModal(project) {
  modalArt.style.setProperty("--project-bg", project.theme);
  modalArt.innerHTML = `<img src="${project.cover}" alt="${project.title} 项目封面">`;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.summary;
  modalOperation.textContent = `PROJECT DETAIL / ${project.language}`;
  modalTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalLinks.innerHTML = `
    <a class="button primary" href="${project.link}" target="_blank" rel="noreferrer">GitHub 仓库</a>
    ${project.homepage ? `<a class="button secondary" href="${project.homepage}" target="_blank" rel="noreferrer">在线预览</a>` : ""}
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  modal.hidden = true;
  modalArt.innerHTML = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeProjectModal();
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

const consultPanel = document.querySelector(".consult-panel");
const consultSubmit = document.querySelector(".consult-submit");
const consultStatus = document.querySelector(".consult-status");
const mailLink = contactActions.querySelector('a[href^="mailto:"]');

consultSubmit.addEventListener("click", () => {
  const type = consultPanel.querySelector("select").value;
  const name = consultPanel.querySelector("input").value.trim() || "未填写称呼";
  const brief = consultPanel.querySelector("textarea").value.trim() || "我想咨询一个项目需求。";
  const subject = `项目咨询：${type}`;
  const body = [`称呼：${name}`, `咨询类型：${type}`, "", "需求简述：", brief].join("\n");

  mailLink.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  consultStatus.textContent = "咨询草稿已生成，可以点击左侧“发送邮件”。";
});

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

const setActiveKey = (id) => {
  sectionKeys.forEach((key) => {
    key.classList.toggle("active", key.dataset.sectionKey === id);
  });
};

const updateScrollEffects = () => {
  const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / scrollMax));
  const probeY = window.scrollY + window.innerHeight * 0.46;
  const current = trackedSections.reduce((active, section) => {
    const sectionTop = section.id === "top" ? 0 : section.offsetTop;
    return probeY >= sectionTop ? section : active;
  }, trackedSections[0]);

  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
  document.documentElement.style.setProperty("--scroll-px", `${Math.round(window.scrollY)}px`);
  setActiveKey(current?.id || "top");
};

revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.14,
  }
);

registerRevealTargets(document.querySelectorAll(".hero-copy, .hero-visual, .section-heading, .skill-item, .about-copy, .timeline li, .contact"));
registerRevealTargets(document.querySelectorAll(".project-card"));
updateScrollEffects();

window.addEventListener("scroll", updateScrollEffects, { passive: true });
window.addEventListener("resize", updateScrollEffects);

window.addEventListener("load", () => {
  updateScrollEffects();
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  setTimeout(() => {
    target.scrollIntoView({ block: "start" });
    updateScrollEffects();
  }, 120);
});
