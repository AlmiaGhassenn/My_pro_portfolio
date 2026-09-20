// All UI string translations for EN, IT, AR

export type Locale = "en" | "it" | "ar";

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hello, I'm",
      roles: ["Full Stack Developer", "React & Wordpress Specialist"],
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
      resume: "Resume",
      scroll: "Scroll",
    },
    // About
    about: {
      label: "About",
      title: "Get to know me",
      yearsExp: "Years Experience",
      projectsShipped: "Projects Shipped",
      happyClients: "Happy Clients",
      location: "Location",
      email: "Email",
      connect: "Connect",
    },
    // Projects
    projects: {
      label: "Portfolio",
      title: "Featured Projects",
      openNewTab: "Open in new tab",
    },
    // Skills
    skills: {
      label: "Expertise",
      title: "Skills & Technologies",
    },
    // Experience
    experience: {
      label: "Career",
      title: "Experience",
    },
    // Contact
    contact: {
      label: "Contact",
      title: "Get In Touch",
      subtitle: "Have a project idea or just want to chat? I'd love to hear from you.",
      emailMe: "Email me",
      phoneMe: "Call / WhatsApp me",
      basedIn: "Based in",
      findMe: "Find me on",
      name: "Name",
      emailField: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sent: "Message Sent!",
    },
    // Footer
    footer: {
      builtWith: "Built with",
      using: "using Next.js",
    },
    // Data
    data: {
      title: "Full Stack Web Developer",
      tagline: "Building beautiful and functional web experiences",
      about: `I'm a passionate web developer with 2+ years of experience building scalable applications. I specialize in modern JavaScript frameworks and creating seamless user experiences. When I'm not coding, you'll find me contributing to open-source projects or writing about web development.`,
      location: "Messina, Italy",
      phone: "+39 352 251 9692",
      projects: {
        1: { description: "Professional landing page for Taxiks - Elegant and corporate design." },
        2: { description: "E-commerce application featuring product catalog and shopping cart functionality." },
        3: { description: "Medical esthétique platform for beauty and wellness services in Italy." },
        4: { description: "Professional landing page for Procom Tunisia - Elegant and corporate design." },
        5: { description: "Educational platform and website for Ibnou Soulayman institution." },
      },
      experience: {
        0: { role: "Freelance Web Developer", company: "Multiple Clients", description: "Worked with various clients to build custom websites and web applications, delivering high-quality solutions on time." },
        1: { role: "Full Stack Developer", company: "Unicom Digital Agency", description: "Built and maintained multiple client projects using modern web technologies." },
        2: { role: "Junior Developer", company: "ReoTech", description: "Started career building responsive websites and learning best practices." },
      },
      skillCategories: {
        "Frontend": "Frontend",
        "Backend": "Backend",
        "CMS & Platforms": "CMS & Platforms",
        "Tools": "Tools",
      },
    },
  },

  it: {
    nav: {
      home: "Home",
      about: "Chi Sono",
      projects: "Progetti",
      skills: "Competenze",
      experience: "Esperienza",
      contact: "Contatti",
    },
    hero: {
      greeting: "Ciao, sono",
      roles: ["Sviluppatore Full Stack", "Specialista React & WordPress"],
      viewWork: "Vedi i Miei Lavori",
      getInTouch: "Contattami",
      resume: "CV",
      scroll: "Scorri",
    },
    about: {
      label: "Chi Sono",
      title: "Scopri di più su di me",
      yearsExp: "Anni di Esperienza",
      projectsShipped: "Progetti Completati",
      happyClients: "Clienti Soddisfatti",
      location: "Posizione",
      email: "Email",
      connect: "Social",
    },
    projects: {
      label: "Portfolio",
      title: "Progetti In Evidenza",
      openNewTab: "Apri in una nuova scheda",
    },
    skills: {
      label: "Competenze",
      title: "Competenze & Tecnologie",
    },
    experience: {
      label: "Carriera",
      title: "Esperienza Lavorativa",
    },
    contact: {
      label: "Contatti",
      title: "Mettiti in Contatto",
      subtitle: "Hai un'idea per un progetto o vuoi fare una chiacchierata? Mi farebbe piacere sentirti.",
      emailMe: "Inviami un'email",
      phoneMe: "Chiama / WhatsApp",
      basedIn: "Sede a",
      findMe: "Trovami su",
      name: "Nome",
      emailField: "Email",
      message: "Messaggio",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "tua@email.com",
      messagePlaceholder: "Raccontami del tuo progetto...",
      send: "Invia Messaggio",
      sent: "Messaggio Inviato!",
    },
    footer: {
      builtWith: "Realizzato con",
      using: "usando Next.js",
    },
    data: {
      title: "Sviluppatore Web Full Stack",
      tagline: "Creazione di esperienze web eleganti e funzionali",
      about: `Sono uno sviluppatore web appassionato con oltre 2 anni di esperienza nella realizzazione di applicazioni scalabili. Sono specializzato nei framework JavaScript moderni e nella creazione di esperienze utente fluide. Quando non programmo, mi trovi a contribuire a progetti open source o a scrivere di sviluppo web.`,
      location: "Messina, Italia",
      phone: "+39 352 251 9692",
      projects: {
        1: { description: "Landing page professionale per Taxiks - Design elegante e aziendale." },
        2: { description: "Applicazione e-commerce con catalogo prodotti e funzionalità carrello." },
        3: { description: "Piattaforma per medicina estetica e servizi di benessere in Italia." },
        4: { description: "Landing page professionale per Procom Tunisia - Design elegante e aziendale." },
        5: { description: "Piattaforma educativa e sito web per l'istituto Ibnou Soulayman." },
      },
      experience: {
        0: { role: "Sviluppatore Web Freelance", company: "Clienti Diversi", description: "Lavorato con diversi clienti per realizzare siti e applicazioni web su misura, consegnando soluzioni di alta qualità nei tempi stabiliti." },
        1: { role: "Sviluppatore Full Stack", company: "Unicom Digital Agency", description: "Sviluppato e mantenuto diversi progetti per clienti utilizzando tecnologie web moderne." },
        2: { role: "Sviluppatore Junior", company: "ReoTech", description: "Iniziato la carriera realizzando siti web responsive e apprendendo le migliori pratiche." },
      },
      skillCategories: {
        "Frontend": "Frontend",
        "Backend": "Backend",
        "CMS & Platforms": "CMS & Piattaforme",
        "Tools": "Strumenti",
      },
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "حولي",
      projects: "المشاريع",
      skills: "المهارات",
      experience: "الخبرة",
      contact: "اتصل بي",
    },
    hero: {
      greeting: "مرحباً، أنا",
      roles: ["مطور Full Stack", "متخصص React & Wordpress"],
      viewWork: "شاهد أعمالي",
      getInTouch: "تواصل معي",
      resume: "السيرة الذاتية",
      scroll: "مرر لأسفل",
    },
    about: {
      label: "حولي",
      title: "تعرف عليّ",
      yearsExp: "سنوات الخبرة",
      projectsShipped: "مشاريع منجزة",
      happyClients: "عملاء سعداء",
      location: "الموقع",
      email: "البريد الإلكتروني",
      connect: "تواصل",
    },
    projects: {
      label: "أعمالي",
      title: "المشاريع المميزة",
      openNewTab: "فتح في نافذة جديدة",
    },
    skills: {
      label: "الخبرات",
      title: "المهارات والتقنيات",
    },
    experience: {
      label: "المسيرة المهنية",
      title: "الخبرة المهنية",
    },
    contact: {
      label: "اتصل بي",
      title: "تواصل معي",
      subtitle: "هل لديك فكرة مشروع أو ترغب في الدردشة؟ يسعدني سماعك.",
      emailMe: "راسلني",
      phoneMe: "اتصل / واتساب",
      basedIn: "مقيم في",
      findMe: "تجدني على",
      name: "الاسم",
      emailField: "البريد الإلكتروني",
      message: "الرسالة",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك@مثال.com",
      messagePlaceholder: "أخبرني عن مشروعك...",
      send: "إرسال الرسالة",
      sent: "تم الإرسال!",
    },
    footer: {
      builtWith: "صُنع بـ",
      using: "باستخدام Next.js",
    },
    data: {
      title: "مطور ويب Full Stack",
      tagline: "بناء تجارب ويب جميلة وعملية",
      about: `أنا مطور ويب شغوف بخبرة تزيد عن سنتين في بناء تطبيقات قابلة للتوسع. أتخصص في أطر عمل JavaScript الحديثة وإنشاء تجارب مستخدم سلسة. عندما لا أكون منشغلاً بالبرمجة، ستجدني أساهم في مشاريع مفتوحة المصدر أو أكتب عن تطوير الويب.`,
      location: "مسينا، إيطاليا",
      phone: "+39 352 251 9692",
      projects: {
        1: { description: "صفحة هبوط لـ Taxiks - تصميم احترافي وحديث يعرض خدمات الشركة." },
        2: { description: "تطبيق تجارة إلكترونية يتضمن كتالوج منتجات ووظيفة سلة التسوق." },
        3: { description: "منصة طب تجميلي لخدمات التجميل والعافية في إيطاليا." },
        4: { description: "صفحة هبوط احترافية لشركة بروكم تونس — تصميم أنيق ومؤسساتي." },
        5: { description: "منصة تعليمية وموقع إلكتروني لمؤسسة ابن سليمان." },
      },
      experience: {
        0: { role: "مطور ويب مستقل", company: "عملاء متعددون", description: "عملت مع عملاء مختلفين لبناء مواقع وتطبيقات ويب مخصصة، وتقديم حلول عالية الجودة في الوقت المحدد." },
        1: { role: "مطور Full Stack", company: "Unicom Digital Agency", description: "بنيت وصنت مشاريع عملاء متعددة باستخدام تقنيات ويب حديثة." },
        2: { role: "مطور مبتدئ", company: "ReoTech", description: "بدأت مسيرتي المهنية ببناء مواقع ويب متجاوبة وتعلم أفضل الممارسات." },
      },
      skillCategories: {
        "Frontend": "الواجهة الأمامية",
        "Backend": "الواجهة الخلفية",
        "CMS & Platforms": "أنظمة إدارة المحتوى",
        "Tools": "الأدوات",
      },
    },
  },
} as const;

export type Translations = typeof translations.en;
