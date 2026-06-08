const profile = {
  name: "你的名字",
  email: "hello@example.com",
  github: "https://github.com/your-name",
  resume: "#",
};

const projects = [
  {
    title: "项目一：产品官网",
    summary: "从信息架构、视觉方向到前端实现，完成一个适合上线的响应式网站。",
    tags: ["HTML", "CSS", "响应式"],
    link: "#",
    theme: "linear-gradient(135deg, #00a99d, #d9f4ef)",
  },
  {
    title: "项目二：数据看板",
    summary: "把复杂信息整理成清晰的界面层级，突出关键指标和操作路径。",
    tags: ["JavaScript", "UI", "数据展示"],
    link: "#",
    theme: "linear-gradient(135deg, #ef6f61, #ffe2dc)",
  },
  {
    title: "项目三：品牌视觉",
    summary: "为一个小型品牌建立色彩、排版和页面组件，让视觉表达保持一致。",
    tags: ["视觉设计", "组件", "品牌"],
    link: "#",
    theme: "linear-gradient(135deg, #222222, #f0ece4)",
  },
];

const skills = [
  {
    title: "前端开发",
    description: "使用语义化结构、响应式 CSS 和轻量 JavaScript 实现稳定页面。",
  },
  {
    title: "交互设计",
    description: "梳理用户路径、状态反馈和界面层级，让页面更容易理解和使用。",
  },
  {
    title: "品牌视觉",
    description: "建立颜色、字体、图形和组件规则，让作品有清晰统一的气质。",
  },
];

const timeline = [
  {
    time: "现在",
    title: "正在寻找新的合作与机会",
    description: "可以承接网站、作品集、产品界面和视觉系统相关项目。",
  },
  {
    time: "近期",
    title: "完善个人项目与案例",
    description: "持续整理真实项目过程、设计决策和最终成果。",
  },
  {
    time: "过去",
    title: "积累跨设计与开发的经验",
    description: "关注从想法到上线的完整链路，而不只停留在单一环节。",
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

projectList.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <div>
          <div class="project-art" style="--project-bg: ${project.theme}"></div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-meta">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <a class="project-link" href="${project.link}" aria-label="查看 ${project.title}">查看项目</a>
      </article>
    `
  )
  .join("");

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

