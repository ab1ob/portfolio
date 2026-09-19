/* ============================================================
   i18n — English / Arabic localization.

   Single source of truth for every user-facing string. English is
   always the default; Arabic only activates when the visitor presses
   the language icon in the nav (see main.js).

   Structure:
   1. UI            — static chrome text (nav, headings, labels, aria
                      strings), looked up by a flat dot-path key and
                      applied via data-i18n / data-i18n-aria-label /
                      data-i18n-title attributes in index.html.
   2. EXPERIENCE_AR — keyed by the EXPERIENCE entry's exact `org`
                      string (unique per entry in main.js).
   3. PROJECTS_AR   — keyed by the PROJECTS entry's exact `name`.
   4. HERO_CODE_AR  — Arabic values for the hero code typing animation
                      (keys and punctuation stay in code form).

   A field left out of an *_AR block falls back to the English value
   already in the data array — nothing renders blank.
   ============================================================ */

const UI = {
  en: {
    "meta.title": "Abdulrahim Obaid — HR Technology",
    "meta.description": "Abdulrahim Obaid — HR Technology. Systems that automate HR operations and KPIs computed from operational data.",

    "nav.brandAria": "Abdulrahim Obaid — home",
    "nav.mainAria": "Main",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.themeToLight": "Switch to light mode",
    "nav.themeToDark": "Switch to dark mode",
    "nav.langToArabic": "التبديل إلى العربية",
    "nav.langToEnglish": "Switch to English",

    "hero.introAria": "Introduction",
    "hero.ghost": "Portfolio",
    "hero.pathLabel": "~/abdulrahim-obaid",
    "hero.name": "Abdulrahim Obaid",
    "hero.role": "HR Technology",
    "hero.value": "I help companies cut HR costs and lift employee performance — with systems that automate HR operations and KPIs computed from operational data.",
    "hero.contact": "Contact Me",
    "hero.projects": "Projects",

    "about.tabLabel": "about",
    "about.pathLabel": "about/",
    "about.title": "About Me",
    "about.bio": "I'm Abdulrahim Obaid, an HR professional of 7+ years who builds the technology side of HR: systems that automate payroll, attendance, recruitment, and custody, and performance indicators computed straight from operational data. Today I lead HR technology projects at Barez in Madinah while completing a BSc in Data Science.",
    "about.whyMeLabel": "Why me?",
    "about.whyMeText": "Because I know HR from the inside and the engineering that automates it. Years of running HR departments, paired with data science, mean the systems I build answer the problems HR teams actually have.",
    "about.experienceLabel": "Experience",
    "about.experienceValue": "7+ years in HR and organizational development",
    "about.educationLabel": "Education",
    "about.educationValue": "BSc Data Science — Islamic University (in progress)",
    "about.certsLabel": "Certifications",
    "about.certsValue": "Odoo 19 Functional · CPC · 60 SHRM PDCs · TOT",
    "about.languagesLabel": "Languages",
    "about.langArabic": "Arabic",
    "about.langEnglish": "English",
    "about.skillsHeading": "Skills",
    "about.technicalLabel": "Technical",
    "about.platformsLabel": "Saudi HR Platforms",

    "experience.tabLabel": "experience",
    "experience.pathLabel": "experience/",
    "experience.title": "Experience",
    "experience.sortAria": "Sort experience by date",
    "experience.sortNewest": "Newest first",
    "experience.sortOldest": "Oldest first",
    "experience.lede": "A timeline of my roles. Click a card to reveal the details and top skills.",
    "experience.trackLabel": "Career track",

    "projects.tabLabel": "projects",
    "projects.pathLabel": "projects/",
    "projects.title": "Projects",
    "projects.lede": "Live products and open, downloadable data systems. Click a card for details.",
    "projects.liveKicker": "Live",
    "projects.liveTitle": "Products in Production",
    "projects.liveJumpAria": "Jump to live products",
    "projects.openKicker": "Open",
    "projects.openTitle": "Data Systems — Download & Explore",
    "projects.openJumpAria": "Jump to open data systems",
    "projects.visit": "Visit site",
    "projects.repo": "Repository",

    "footer.tag": "HR Technology",
    "footer.githubAria": "GitHub profile",
    "footer.linkedinAria": "LinkedIn profile",
    "footer.emailAria": "Send me an email",
    "footer.copy": "© 2026 Abdulrahim Obaid. All rights reserved.",
  },

  ar: {
    "meta.title": "عبدالرحيم عبيد | تقنية الموارد البشرية",
    "meta.description": "عبدالرحيم عبيد، تقنية الموارد البشرية. أنظمة تؤتمت عمليات الموارد البشرية ومؤشرات أداء تحسب من بيانات التشغيل.",

    "nav.brandAria": "عبدالرحيم عبيد، الصفحة الرئيسية",
    "nav.mainAria": "التنقل الرئيسي",
    "nav.about": "من أنا",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.openMenu": "افتح القائمة",
    "nav.closeMenu": "أغلق القائمة",
    "nav.themeToLight": "التبديل إلى الوضع الفاتح",
    "nav.themeToDark": "التبديل إلى الوضع الداكن",
    "nav.langToArabic": "التبديل إلى العربية",
    "nav.langToEnglish": "Switch to English",

    "hero.introAria": "مقدمة",
    "hero.ghost": "أعمالي",
    "hero.pathLabel": "~/abdulrahim-obaid",
    "hero.name": "عبدالرحيم عبيد",
    "hero.role": "تقنية الموارد البشرية",
    "hero.value": "أساعد الشركات على خفض تكاليف الموارد البشرية ورفع أداء موظفيها، بأنظمة تؤتمت عمليات القسم ومؤشرات أداء تحسب من بيانات التشغيل مباشرة.",
    "hero.contact": "تواصل معي",
    "hero.projects": "المشاريع",

    "about.tabLabel": "من أنا",
    "about.pathLabel": "من أنا/",
    "about.title": "من أنا",
    "about.bio": "أنا عبدالرحيم عبيد، عملت في الموارد البشرية أكثر من سبع سنوات وأبني اليوم جانبها التقني: أنظمة تؤتمت الرواتب والحضور والتوظيف والعهد، ومؤشرات أداء تحسب من بيانات التشغيل مباشرة. أقود حاليا مشاريع تقنية الموارد البشرية في بارز بالمدينة المنورة وأكمل بكالوريوس علم البيانات.",
    "about.whyMeLabel": "لماذا أنا؟",
    "about.whyMeText": "لأني أعرف الموارد البشرية من الداخل وأتقن التقنية التي تؤتمتها. سنوات من إدارة أقسام الموارد البشرية مع علم البيانات تعني أن ما أبنيه يحل المشكلات التي تواجه الفرق فعلا.",
    "about.experienceLabel": "الخبرة",
    "about.experienceValue": "أكثر من 7 سنوات في الموارد البشرية والتطوير المؤسسي",
    "about.educationLabel": "التعليم",
    "about.educationValue": "بكالوريوس علم البيانات، الجامعة الإسلامية (قيد الدراسة)",
    "about.certsLabel": "الشهادات",
    "about.certsValue": "Odoo 19 Functional · CPC · 60 SHRM PDCs · TOT",
    "about.languagesLabel": "اللغات",
    "about.langArabic": "العربية",
    "about.langEnglish": "الإنجليزية",
    "about.skillsHeading": "المهارات",
    "about.technicalLabel": "تقنية",
    "about.platformsLabel": "منصات الموارد البشرية السعودية",

    "experience.tabLabel": "الخبرات",
    "experience.pathLabel": "الخبرات/",
    "experience.title": "الخبرات",
    "experience.sortAria": "رتب الخبرات حسب التاريخ",
    "experience.sortNewest": "الأحدث أولا",
    "experience.sortOldest": "الأقدم أولا",
    "experience.lede": "خط زمني لمسيرتي. اضغط أي بطاقة لعرض التفاصيل وأهم المهارات.",
    "experience.trackLabel": "التدرج الوظيفي",

    "projects.tabLabel": "المشاريع",
    "projects.pathLabel": "المشاريع/",
    "projects.title": "المشاريع",
    "projects.lede": "منتجات حية وأنظمة بيانات مفتوحة قابلة للتحميل. اضغط أي بطاقة للتفاصيل.",
    "projects.liveKicker": "حية",
    "projects.liveTitle": "منتجات في الإنتاج",
    "projects.liveJumpAria": "انتقل إلى المنتجات الحية",
    "projects.openKicker": "مفتوحة",
    "projects.openTitle": "أنظمة بيانات للتحميل والاستكشاف",
    "projects.openJumpAria": "انتقل إلى أنظمة البيانات المفتوحة",
    "projects.visit": "زيارة الموقع",
    "projects.repo": "المستودع",

    "footer.tag": "تقنية الموارد البشرية",
    "footer.githubAria": "حساب GitHub",
    "footer.linkedinAria": "حساب LinkedIn",
    "footer.emailAria": "أرسل لي رسالة بريد",
    "footer.copy": "2026 © عبدالرحيم عبيد. جميع الحقوق محفوظة.",
  },
};

/* ============================================================
   2. EXPERIENCE_AR — keyed by the EXPERIENCE entry's `org`.
   Org names verified against the person's own usage; org names with
   no established Arabic form are transliterated conservatively.
   ============================================================ */
const EXPERIENCE_AR = {
  "Barez Company": {
    role: "مدير مشاريع تقنية الموارد البشرية",
    org: "شركة بارز",
    date: "يونيو 2026 حتى الآن",
    tags: ["تقنية الموارد البشرية", "إدارة مشاريع"],
    desc: "أقود 4 مشاريع تقنية نشطة بالتوازي: نظامان للموارد البشرية وتطبيقان لأنظمة ERP. بنيت نموذج مؤشرات المبيعات الذي ساهم في رفع أداء المبيعات 200%، وقصرت دورات التسليم عبر إدارة مشاريع منظمة وأتمتة سير العمل.",
    skills: ["تسليم أنظمة الموارد البشرية", "نماذج مؤشرات الأداء", "أتمتة سير العمل"],
  },
  "Research and Consulting Studies Institute, Islamic University": {
    role: "استشاري مؤشرات أداء",
    org: "معهد البحوث والدراسات الاستشارية بالجامعة الإسلامية",
    date: "يونيو 2026 حتى الآن",
    tags: ["استشارات", "مؤشرات أداء"],
    desc: "أصحح أكثر من 200 مؤشر أداء لست إدارات تغطي أكثر من 40 موظفا، وأعكسها في لوحات بيانات مؤتمتة داخل نظام أودو.",
    skills: ["تصحيح مؤشرات الأداء", "لوحات أودو", "الأتمتة"],
  },
  "Finsight": {
    role: "مدير التطوير المؤسسي",
    org: "فينسايت",
    date: "يناير 2022 إلى مايو 2026",
    tags: ["موارد بشرية", "تطوير مؤسسي"],
    desc: "أسست قسم الموارد البشرية من الصفر: أكثر من 30 عقد عمل متوافقا مع نظام العمل ولوائحه، ووحدة تدريب تعاوني احتضنت أكثر من 10 متدربين. طورت أكثر من 30 مؤشر أداء من تحليل البيانات، وحافظت على معدل دوران أقل من 5%، وأدرت استقطاب أكثر من 20 وظيفة تخصصية.",
    skills: ["تأسيس أقسام الموارد البشرية", "تحليلات القوى العاملة", "استقطاب المواهب"],
  },
  "Arees Resort": {
    role: "أخصائي تطوير مؤسسي",
    org: "منتجع أريس",
    location: "ينبع",
    date: "يونيو 2019 إلى ديسمبر 2021",
    tags: ["تطوير مؤسسي"],
    desc: "صممت الهياكل التنظيمية لستة أقسام مع أطر الجدارات والأوصاف الوظيفية. أتمتت خدمات الاستقبال فانخفضت تكاليف الوردية الليلية 40%، وحافظت على دوران أقل من 2%، وبنيت أكثر من 10 مؤشرات أداء و30 حقيبة تدريبية مبنية عليها خلال 24 شهرا.",
    skills: ["التصميم التنظيمي", "أتمتة العمليات", "أطر الجدارات"],
  },
  "Madinah Society for Community Development": {
    role: "مدير مشروع (تطوع)",
    org: "جمعية تنمية المجتمع بالمدينة المنورة",
    date: "يناير 2021 إلى أكتوبر 2021",
    tags: ["تطوع", "إنتاج محتوى"],
    desc: "أنتجت 19 حلقة في الإرشاد المهني، ووظفت وأدرت كاتب محتوى وباحثا ومصور فيديو، وقدمت برنامج إرشاد مهني متخصصا.",
    skills: ["إدارة الإنتاج", "بناء الفريق", "الإرشاد المهني"],
  },
  "Al-Rayyan Hotel Group": {
    role: "أخصائي تطوير الجدارات",
    org: "مجموعة فنادق الريان",
    date: "أكتوبر 2018 إلى أكتوبر 2019",
    tags: ["تدريب وتطوير"],
    desc: "حللت فجوات المهارات عبر إدارة الأداء، ووحدت جودة الخدمة بين الفروع بالتدريب، وطورت مهارات أكثر من 20 موظفا سعوديا، وحققت مستهدفات التوظيف 100%.",
    skills: ["التدريب والتطوير", "تحليل فجوات المهارات", "التوظيف"],
  },
};

/* ============================================================
   3. PROJECTS_AR — keyed by the PROJECTS entry's `name`.
   ============================================================ */
const PROJECTS_AR = {
  "Barez Individuals": {
    name: "بارز أفراد",
    type: "منصة تقييم وتحسين السير الذاتية",
    desc: "محرك ATS بنيته من الصفر يخبر المتقدم بدرجة توافقه مع الوظيفة بنفس طريقة فرز الشركات، ثم يعيد كتابة سيرته لرفع التوافق. المحرك نفسه يشغل وحدة الفرز في بارز أعمال.",
    role: "بانى المنتج",
  },
  "Barez Business": {
    name: "بارز أعمال",
    type: "نظام موارد بشرية متعدد الشركات",
    desc: "نظام HRIS متعدد الشركات: رواتب متعددة العملات، حضور بالبصمة الحيوية، توظيف، عهد، وخطابات رسمية. مبني على بيانات تشغيل حقيقية تتحول إلى مؤشرات وتقارير قرار.",
    role: "مهندس المنتج",
  },
  "HR Dashboard": {
    name: "لوحة الموارد البشرية",
    type: "Power BI",
    desc: "7 صفحات تغطي دورة حياة الموظف كاملة، 23 مقياس DAX، بصيغة PBIP المفتوحة، مع بيانات تجريبية لألف موظف. متاحة للتحميل والفتح مباشرة.",
    role: "تصميم وبناء",
  },
  "KPI System": {
    name: "نظام مؤشرات الأداء",
    type: "Excel",
    desc: "لوحة قيادة ودليل مؤشرات موثق لخمسة أقسام، كل مؤشر معرف من المخرجات والأثر لا من الانطباعات. متاح للتحميل.",
    role: "تصميم وبناء",
  },
  "HR System": {
    name: "نظام الموارد البشرية",
    type: "Excel",
    desc: "نظام تشغيلي كامل: رواتب وحضور وإجازات مع حسابات التأمينات ونهاية الخدمة وفق الأنظمة السعودية، ببيانات تجريبية. متاح للتحميل.",
    role: "تصميم وبناء",
  },
};

/* ============================================================
   4. HERO_CODE_AR — Arabic values for the typed hero code. Keys,
   braces, and quotes stay in code form (LTR); only values translate.
   ============================================================ */
const HERO_CODE_AR = {
  role: "تقنية الموارد البشرية",
  base: "المدينة المنورة",
  experience: "7 سنوات في HR",
  education: "بكالوريوس علم البيانات",
  turnover: "أقل من 5%",
  nightShiftCosts: "-40%",
  kpis: "30+",
};
