/* ============================================================
   ABDULRAHIM OBAID — PORTFOLIO SCRIPTS
   Content lives in the data arrays below (EXPERIENCE, PROJECTS,
   SKILLS) so everything is editable from one place. Arabic
   overrides live in js/i18n.js, keyed by org / name.
   ------------------------------------------------------------
   1. EXPERIENCE data  → rendered into #timeline
   2. PROJECTS data    → rendered into #liveGrid / #openGrid
   3. SKILLS data      → rendered into the About skill rows
   4. i18n plumbing · theme · nav · reveals · typing · interactions
   ============================================================ */

/* ============================================================
   1. EXPERIENCE — edit here to add roles.
   accent : "blue" | "sand" | "slate"  (dot, border, hover)
   org    : also the lookup key for EXPERIENCE_AR in i18n.js
   skills : keep to 2–3 specific, non-duplicated skills.
   ============================================================ */
const EXPERIENCE = [
  {
    role: "HR Technology Projects Manager",
    org: "Barez Company",
    orgUrl: "https://barez.sa",
    date: "Jun 2026 – Present",
    sortDate: "2026-06",
    location: "Madinah",
    accent: "blue",
    tags: ["HR Technology", "Project Management"],
    desc: "Leading 4 active technology projects in parallel: two HR systems and two ERP implementations. Built the sales KPI framework that contributed to a 200% lift in sales performance, and shortened delivery cycles through structured project management and workflow automation.",
    skills: ["HR Systems Delivery", "KPI Frameworks", "Workflow Automation"],
  },
  {
    role: "KPI Consultant",
    org: "Research and Consulting Studies Institute",
    orgUrl: "",
    date: "Jun 2026 – Present",
    sortDate: "2026-06",
    location: "Madinah",
    accent: "slate",
    tags: ["Consulting", "Performance Indicators"],
    desc: "Correcting 200+ performance indicators across 6 departments covering 40+ employees, and reflecting them in automated dashboards inside Odoo.",
    skills: ["KPI Correction", "Odoo Dashboards", "Automation"],
  },
  {
    role: "Institutional Development Manager",
    org: "Finsight",
    orgUrl: "",
    date: "Jan 2022 – May 2026",
    sortDate: "2022-01",
    location: "Madinah",
    accent: "sand",
    tags: ["HR", "Organizational Development"],
    desc: "Established the HR department from zero: 30+ employment contracts aligned with Saudi labor policies, and a CO-OP training unit mentoring 10+ interns on HRIS platforms and labor-law compliance. Developed 30+ performance KPIs from data analysis, sustained sub-5% turnover, and directed talent acquisition for 20+ specialized roles.",
    skills: ["HR Department Buildout", "People Analytics", "Talent Acquisition"],
  },
  {
    role: "Institutional Development Specialist",
    org: "Arees Resort",
    orgUrl: "",
    date: "Jun 2019 – Dec 2021",
    sortDate: "2019-06",
    location: "Yanbu",
    accent: "slate",
    tags: ["Organizational Development"],
    desc: "Designed organizational structures for 6 departments with competency frameworks and job descriptions. Automated reception services, cutting night-shift operating costs by 40%, held turnover under 2%, and built 10+ performance indicators with 30 KPI-based training modules over 24 months.",
    skills: ["Org Design", "Process Automation", "Competency Frameworks"],
  },
  {
    role: "Project Manager (Volunteer)",
    org: "Madinah Society for Community Development",
    orgUrl: "",
    date: "Jan 2021 – Oct 2021",
    sortDate: "2021-01",
    location: "Madinah",
    accent: "blue",
    tags: ["Volunteering", "Content Production"],
    desc: "Produced 19 episodes on career guidance: hired and directed a content writer, a researcher, and a videographer, and delivered a professional counselling program.",
    skills: ["Production Management", "Team Building", "Career Guidance"],
  },
  {
    role: "Competency Development Specialist",
    org: "Al-Rayyan Hotel Group",
    orgUrl: "",
    date: "Oct 2018 – Oct 2019",
    sortDate: "2018-10",
    location: "Madinah",
    accent: "sand",
    tags: ["Training & Development"],
    desc: "Analyzed skill gaps through performance management, unified branch quality through training, upskilled 20+ Saudi employees, and achieved 100% of recruitment targets.",
    skills: ["Training & Development", "Skill-Gap Analysis", "Recruitment"],
  },
];

/* ============================================================
   2. PROJECTS — rendered into the two showcase grids.
   group : "live" (running products) | "open" (downloadable repos)
   name  : also the lookup key for PROJECTS_AR in i18n.js
   image : real screenshot in assets/images/projects/ (never a mockup)
   url   : shown in the browser-frame chrome bar
   ============================================================ */
const PROJECTS = [
  {
    name: "Barez Individuals",
    group: "live",
    badge: "LIVE",
    type: "ATS CV review & optimization platform",
    accent: "blue",
    image: "assets/images/projects/barezz-home.png",
    url: "barezz.com",
    link: "https://barezz.com",
    linkKey: "projects.visit",
    desc: "An ATS engine built from scratch that tells applicants how well they match a job — the same way companies screen candidates — then rewrites the CV to raise the match. The same engine powers the screening module in Barez Business.",
    role: "Product Builder",
    tags: [
      { icon: "nextdotjs", name: "Next.js" },
      { icon: "typescript", name: "TypeScript" },
      { icon: "supabase", name: "Supabase" },
      { icon: "postgresql", name: "PostgreSQL" },
    ],
  },
  {
    name: "Barez Business",
    group: "live",
    badge: "LIVE",
    type: "Multi-tenant HRIS",
    accent: "sand",
    image: "assets/images/projects/01-employees.png",
    url: "barez.sa/hr",
    link: "https://barez.sa/hr",
    linkKey: "projects.visit",
    desc: "A multi-tenant HR system: multi-currency payroll, biometric attendance, recruitment, custody, and formal letters — operational data converted into KPIs, dashboards, and decision reports.",
    role: "Product Architect",
    tags: [
      { icon: "odoo", name: "Odoo" },
      { icon: "postgresql", name: "PostgreSQL" },
      { icon: "nextdotjs", name: "Next.js" },
      { icon: "python", name: "Python" },
    ],
  },
  {
    name: "HR Dashboard",
    group: "open",
    badge: "DOWNLOAD",
    type: "Power BI · 7 pages · 23 DAX measures",
    accent: "slate",
    image: "assets/images/projects/dashboard-preview.png",
    url: "github.com/ab1ob/barez-hr-powerbi-dashboard",
    link: "https://github.com/ab1ob/barez-hr-powerbi-dashboard",
    linkKey: "projects.repo",
    desc: "Seven pages across the employee lifecycle with 23 DAX measures, in the open PBIP format, backed by demo data for 1,000 employees. Download and open directly.",
    role: "Design & build",
    tags: [
      { icon: "powerbi", name: "Power BI" },
      { text: "DAX" },
    ],
  },
  {
    name: "KPI System",
    group: "open",
    badge: "DOWNLOAD",
    type: "Excel · cockpit + indicator guide",
    accent: "sand",
    image: "assets/images/projects/kpi-cockpit.png",
    url: "github.com/ab1ob/barez-kpi-system",
    link: "https://github.com/ab1ob/barez-kpi-system",
    linkKey: "projects.repo",
    desc: "A cockpit and a documented indicator guide for five departments — every metric defined by output and impact, not impressions. Available for download.",
    role: "Design & build",
    tags: [{ icon: "excel", name: "Excel" }],
  },
  {
    name: "HR System",
    group: "open",
    badge: "DOWNLOAD",
    type: "Excel · payroll, attendance, leave",
    accent: "slate",
    image: "assets/images/projects/hrexcel-dashboard.png",
    url: "github.com/ab1ob/hr-excel-system",
    link: "https://github.com/ab1ob/hr-excel-system",
    linkKey: "projects.repo",
    desc: "A full operational HR system in Excel: payroll, attendance, and leave with GOSI and end-of-service calculations under Saudi regulations. Demo data, available for download.",
    role: "Design & build",
    tags: [{ icon: "excel", name: "Excel" }],
  },
];

/* ============================================================
   3. SKILLS — About-section chips. Entries with `icon` use the
   local SVG/PNG in assets/icons/technologies/; entries with only
   `text` render as text pills (no invented logos).
   ============================================================ */
const SKILLS = {
  technical: [
    { icon: "odoo", name: "Odoo", ext: "svg" },
    { icon: "powerbi", name: "Power BI", ext: "svg" },
    { icon: "excel", name: "Excel", ext: "png" },
    { icon: "postgresql", name: "PostgreSQL", ext: "svg" },
    { icon: "supabase", name: "Supabase", ext: "svg" },
    { icon: "nextdotjs", name: "Next.js", ext: "svg" },
    { icon: "typescript", name: "TypeScript", ext: "svg" },
    { icon: "python", name: "Python", ext: "svg" },
    { icon: "flask", name: "Flask", ext: "svg" },
    { icon: "github", name: "GitHub", ext: "svg" },
    { text: "DAX" },
    { text: "SQL" },
  ],
  platforms: [
    { text: "Qiwa" },
    { text: "Mudad" },
    { text: "Muqeem" },
  ],
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ============================================================
   4. LANGUAGE STATE
   English is always the first-visit default — never inferred from
   browser/device locale. Arabic only activates from an explicit
   click, then persists via localStorage.
   ============================================================ */
let lang = "en";
try {
  if (localStorage.getItem("lang") === "ar") lang = "ar";
} catch (e) {}

const t = (key) => (UI[lang] && UI[lang][key]) || UI.en[key] || key;

/* Shared reveal observer (assigned in init). Dynamic cards register
   here with a per-index stagger delay; before init it's null and
   elements just show. */
let revealObserver = null;
function registerReveal(el, delayMs) {
  el.classList.add("reveal");
  el.style.transitionDelay = `${delayMs}ms`;
  if (revealObserver) revealObserver.observe(el);
  else el.classList.add("is-visible");
}
const expAr = (org) => (lang === "ar" && EXPERIENCE_AR[org]) || {};
const projAr = (name) => (lang === "ar" && PROJECTS_AR[name]) || {};

function applyI18n() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("meta.title");
  const meta = document.getElementById("metaDescription");
  if (meta) meta.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });

  // The language button always names the OTHER language.
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    const label = lang === "ar" ? t("nav.langToEnglish") : t("nav.langToArabic");
    langBtn.setAttribute("aria-label", label);
    langBtn.setAttribute("title", label);
  }
}

/* ============================================================
   5. EXPERIENCE TIMELINE
   ============================================================ */
let sortDir = "desc";

function renderTimeline() {
  const list = document.getElementById("timeline");
  if (!list) return;

  const items = [...EXPERIENCE].sort((a, b) =>
    sortDir === "desc"
      ? b.sortDate.localeCompare(a.sortDate)
      : a.sortDate.localeCompare(b.sortDate)
  );

  list.innerHTML = items.map((item) => {
    const ar = expAr(item.org);
    const role = ar.role || item.role;
    const org = ar.org || item.org;
    const date = ar.date || item.date;
    const desc = ar.desc || item.desc;
    const tags = ar.tags || item.tags;
    const skills = ar.skills || item.skills;
    const orgHtml = item.orgUrl
      ? `<a href="${esc(item.orgUrl)}" target="_blank" rel="noopener">${esc(org)}</a>`
      : esc(org);

    return `
    <li class="tl-item tl-item--${item.accent}">
      <div class="tl-dot" aria-hidden="true"></div>
      <div class="tl-card">
        <button class="tl-card__head" aria-expanded="false">
          <span class="tl-card__role">${esc(role)}</span>
          <span class="tl-card__org">${orgHtml}</span>
          <span class="tl-card__date">${esc(date)}</span>
          <span class="tl-card__tags">${tags.map((tg) =>
            `<span class="pill pill--${item.accent}">${esc(tg)}</span>`).join("")}</span>
        </button>
        <div class="tl-card__body">
          <div class="tl-card__body-inner">
            <p class="tl-card__desc">${esc(desc)}</p>
            <div class="tl-skills">${skills.map((sk) =>
              `<span class="pill pill--${item.accent}">${esc(sk)}</span>`).join("")}</div>
          </div>
        </div>
      </div>
    </li>`;
  }).join("");

  // Expand/collapse
  list.querySelectorAll(".tl-card__head").forEach((head) => {
    head.addEventListener("click", () => {
      const card = head.closest(".tl-card");
      const open = !card.classList.contains("is-open");
      card.classList.toggle("is-open", open);
      head.setAttribute("aria-expanded", String(open));
    });
  });

  // Staggered scroll-in entrance (also fires immediately on re-sort,
  // since the section is already in view)
  list.querySelectorAll(".tl-item").forEach((el, i) => registerReveal(el, 70 * i));
}

/* ============================================================
   6. PROJECTS SHOWCASE
   ============================================================ */
function renderTagOrIcon(tag) {
  if (tag.icon) {
    const ext = tag.ext || (tag.icon === "excel" ? "png" : "svg");
    return `<span class="tech-icon" tabindex="0" aria-label="${esc(tag.name)}" data-tip="${esc(tag.name)}">
      <img src="assets/icons/technologies/${esc(tag.icon)}.${ext}" alt="" aria-hidden="true" width="22" height="22" loading="lazy"></span>`;
  }
  return `<span class="tech-pill">${esc(tag.text)}</span>`;
}

function renderProjects() {
  const grids = {
    live: document.getElementById("liveGrid"),
    open: document.getElementById("openGrid"),
  };
  if (!grids.live || !grids.open) return;
  grids.live.innerHTML = "";
  grids.open.innerHTML = "";

  PROJECTS.forEach((p) => {
    const ar = projAr(p.name);
    const name = ar.name || p.name;
    const type = ar.type || p.type;
    const desc = ar.desc || p.desc;
    const role = ar.role || p.role;

    const card = document.createElement("article");
    card.className = `proj-card proj-card--${p.accent}`;
    card.innerHTML = `
      <div class="browser" aria-hidden="true">
        <div class="browser__bar">
          <span class="browser__dot"></span><span class="browser__dot"></span><span class="browser__dot"></span>
          <span class="browser__url">${esc(p.url)}</span>
        </div>
        <div class="browser__screen">
          <img src="${esc(p.image)}" alt="" loading="lazy">
          <!-- Cover slides toward the reading direction on hover/focus/
               open, revealing the real screenshot underneath. -->
          <div class="proj-cover proj-cover--${p.accent}">
            <span class="proj-cover__ghost">${esc(name.charAt(0))}</span>
            <span class="proj-cover__name">${esc(name)}</span>
            <span class="proj-cover__type">${esc(type)}</span>
            <span class="proj-cover__cue">
              <svg viewBox="0 0 24 24" width="15" height="15"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </div>
        </div>
      </div>
      <button class="proj-card__head" aria-expanded="false">
        <span class="proj-card__toprow">
          <span class="proj-card__name">${esc(name)}</span>
          <span class="proj-card__badge">${esc(p.badge)}</span>
        </span>
        <span class="proj-card__type">${esc(type)}</span>
      </button>
      <div class="proj-card__body">
        <div class="proj-card__body-inner">
          <p class="proj-card__desc">${esc(desc)}</p>
          <p class="proj-card__role">${esc(role)}</p>
          <div class="proj-card__tags">${p.tags.map(renderTagOrIcon).join("")}</div>
          <div class="proj-card__actions">
            <a class="btn btn--small btn--solid" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(t(p.linkKey))}</a>
          </div>
        </div>
      </div>`;

    const head = card.querySelector(".proj-card__head");
    head.addEventListener("click", () => {
      const open = !card.classList.contains("is-open");
      card.classList.toggle("is-open", open);
      head.setAttribute("aria-expanded", String(open));
    });

    grids[p.group].appendChild(card);
    registerReveal(card, 90 * (grids[p.group].children.length - 1));
  });
}

/* ============================================================
   7. SKILL ICON ROWS
   ============================================================ */
function renderSkillIcons() {
  const targets = {
    technical: document.getElementById("technicalSkills"),
    platforms: document.getElementById("platformsSkills"),
  };
  Object.entries(targets).forEach(([key, el]) => {
    if (!el) return;
    el.innerHTML = SKILLS[key].map(renderTagOrIcon).join("");
  });
}

/* ============================================================
   8. HERO CODE TYPING
   Segments carry a token class for syntax color. Arabic mode swaps
   the values (HERO_CODE_AR) but keys/punctuation stay code-form.
   Reduced motion renders the full block instantly.
   ============================================================ */
function heroSegments() {
  const v = (key, en) => (lang === "ar" && HERO_CODE_AR[key]) || en;
  return [
    { t: "const ", c: "tok-kw" }, { t: "abdulrahim" }, { t: " = {\n" },
    { t: "  role", c: "tok-key" }, { t: ": " }, { t: `"${v("role", "HR Technology")}"`, c: "tok-str" }, { t: ",\n" },
    { t: "  base", c: "tok-key" }, { t: ": " }, { t: `"${v("base", "Madinah, KSA")}"`, c: "tok-str" }, { t: ",\n" },
    { t: "  experience", c: "tok-key" }, { t: ": " }, { t: `"${v("experience", "7+ years in HR")}"`, c: "tok-str" }, { t: ",\n" },
    { t: "  education", c: "tok-key" }, { t: ": " }, { t: `"${v("education", "BSc Data Science")}"`, c: "tok-str" }, { t: ",\n" },
    { t: "  building", c: "tok-key" }, { t: ": [" }, { t: '"barezz.com"', c: "tok-str" }, { t: ", " }, { t: '"barez.sa"', c: "tok-str" }, { t: "],\n" },
    { t: "  results", c: "tok-key" }, { t: ": {\n" },
    { t: "    turnover", c: "tok-key" }, { t: ": " }, { t: `"${v("turnover", "< 5%")}"`, c: "tok-str" }, { t: ",\n" },
    { t: "    nightShiftCosts", c: "tok-key" }, { t: ": " }, { t: `"${v("nightShiftCosts", "-40%")}"`, c: "tok-str" }, { t: ",\n" },
    { t: "    kpisDesigned", c: "tok-key" }, { t: ": " }, { t: `"${v("kpis", "30+")}"`, c: "tok-str" }, { t: "\n" },
    { t: "  }\n" },
    { t: "};" },
  ];
}

let typingToken = 0; // invalidates an in-flight animation on language switch

function typeHeroCode() {
  const target = document.getElementById("typedCode");
  if (!target) return;
  const myToken = ++typingToken;
  const segments = heroSegments();
  target.innerHTML = "";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    target.innerHTML = segments.map((s) =>
      s.c ? `<span class="${s.c}">${esc(s.t)}</span>` : esc(s.t)).join("");
    return;
  }

  let si = 0, ci = 0;
  let currentSpan = null;

  const step = () => {
    if (myToken !== typingToken) return; // a newer run took over
    if (si >= segments.length) return;
    const seg = segments[si];
    if (ci === 0 && seg.c) {
      currentSpan = document.createElement("span");
      currentSpan.className = seg.c;
      target.appendChild(currentSpan);
    }
    const ch = seg.t[ci];
    if (seg.c) currentSpan.appendChild(document.createTextNode(ch));
    else target.appendChild(document.createTextNode(ch));
    ci++;
    if (ci >= seg.t.length) { si++; ci = 0; currentSpan = null; }
    setTimeout(step, ch === "\n" ? 60 : 18);
  };
  step();
}

/* ============================================================
   9. BOOT + INTERACTIONS
   ============================================================ */
(function init() {
  /* ---- Theme: the inline <head> script already set data-theme
     pre-paint; this only wires the toggle. ---- */
  const themeBtn = document.getElementById("themeToggle");
  const syncThemeAria = () => {
    const cur = document.documentElement.getAttribute("data-theme");
    themeBtn.setAttribute("aria-label", cur === "dark" ? t("nav.themeToLight") : t("nav.themeToDark"));
    themeBtn.setAttribute("aria-pressed", String(cur === "light"));
  };
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncThemeAria();
  });

  /* ---- Language toggle: swaps dictionaries and re-renders all
     dynamic content in place. ---- */
  document.getElementById("langToggle").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderAll();
  });

  /* ---- Burger menu ---- */
  const burger = document.getElementById("navBurger");
  const navEl = document.querySelector(".nav nav");
  burger.addEventListener("click", () => {
    const open = !navEl.classList.contains("is-open");
    navEl.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? t("nav.closeMenu") : t("nav.openMenu"));
  });
  navEl.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      navEl.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---- Active nav tab per visible section ---- */
  const tabs = [...document.querySelectorAll(".nav__tabs .tab")];
  const sections = tabs
    .map((tab) => document.querySelector(tab.getAttribute("href")))
    .filter(Boolean);
  const tabObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      tabs.forEach((tab) =>
        tab.classList.toggle("is-active", tab.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-30% 0px -55% 0px" });
  sections.forEach((s) => tabObserver.observe(s));

  /* ---- Scroll reveals (shared with dynamic cards via registerReveal) ---- */
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---- Scroll-driven layers: reading-progress bar, ghost-title
     parallax, timeline line drawing itself. All transform/height
     writes batched in one rAF; skipped entirely under reduced
     motion (CSS also hides the two progress elements). ---- */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const progressBar = document.getElementById("scrollProgress");
    const ghost = document.getElementById("heroGhost");
    const tlProgress = document.getElementById("timelineProgress");
    const timelineEl = document.getElementById("timeline");
    let ticking = false;

    const applyScrollFx = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;

      const max = document.documentElement.scrollHeight - vh;
      progressBar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;

      // Ghost drifts up at a fraction of scroll speed and thins out
      if (y < vh * 1.5) {
        ghost.style.transform = `translateY(${y * -0.22}px)`;
        ghost.style.opacity = String(Math.max(0, 0.55 - (y / vh) * 0.45));
      }

      // Timeline spine fills as the viewport moves through the section
      const rect = timelineEl.getBoundingClientRect();
      const total = rect.height - 12;
      const passed = Math.min(total, Math.max(0, vh * 0.75 - rect.top));
      tlProgress.style.height = `${passed}px`;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(applyScrollFx); }
    }, { passive: true });
    applyScrollFx();
  }

  /* ---- Group kicker smooth-jump (Projects headers) ---- */
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const el = document.getElementById(btn.getAttribute("data-scroll-to"));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ---- Sort buttons ---- */
  document.querySelectorAll(".exp-sort__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.sort === sortDir) return;
      sortDir = btn.dataset.sort;
      document.querySelectorAll(".exp-sort__btn").forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      renderTimeline();
    });
  });

  function renderAll() {
    applyI18n();
    syncThemeAria();
    renderTimeline();
    renderProjects();
    renderSkillIcons();
    typeHeroCode();
  }

  renderAll();
})();
