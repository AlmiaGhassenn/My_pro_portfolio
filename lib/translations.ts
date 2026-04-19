// All UI string translations for EN, FR, AR

export type Locale = "en" | "fr" | "ar";

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
      roles: ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast", "Next.js Developer"],
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
      location: "Bizerte, Tunisia",
      projects: {
        1: { description: "Landing page for MDF - Professional and modern design showcasing company services." },
        2: { description: "E-commerce application featuring product catalog and shopping cart functionality." },
        3: { description: "Medical esthétique platform for beauty and wellness services in Italy." },
        4: { description: "Professional landing page for IBF Consulting TN - Elegant and corporate design." },
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

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      experience: "Expérience",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      roles: ["Développeur Full Stack", "Spécialiste React", "Passionné UI/UX", "Développeur Next.js"],
      viewWork: "Voir mes projets",
      getInTouch: "Me contacter",
      resume: "CV",
      scroll: "Défiler",
    },
    about: {
      label: "À propos",
      title: "Apprenez à me connaître",
      yearsExp: "Années d'expérience",
      projectsShipped: "Projets livrés",
      happyClients: "Clients satisfaits",
      location: "Localisation",
      email: "Email",
      connect: "Réseaux",
    },
    projects: {
      label: "Portfolio",
      title: "Projets en vedette",
      openNewTab: "Ouvrir dans un nouvel onglet",
    },
    skills: {
      label: "Expertise",
      title: "Compétences & Technologies",
    },
    experience: {
      label: "Carrière",
      title: "Expérience",
    },
    contact: {
      label: "Contact",
      title: "Contactez-moi",
      subtitle: "Vous avez une idée de projet ou envie de discuter ? Je serais ravi d'échanger avec vous.",
      emailMe: "Envoyez-moi un email",
      basedIn: "Basé à",
      findMe: "Retrouvez-moi sur",
      name: "Nom",
      emailField: "Email",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      messagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer le message",
      sent: "Message envoyé !",
    },
    footer: {
      builtWith: "Créé avec",
      using: "avec Next.js",
    },
    data: {
      title: "Développeur Web Full Stack",
      tagline: "Créer des expériences web belles et fonctionnelles",
      about: `Je suis un développeur web passionné avec plus de 2 ans d'expérience dans la création d'applications évolutives. Je me spécialise dans les frameworks JavaScript modernes et la création d'expériences utilisateurs fluides. Quand je ne code pas, vous me trouverez en train de contribuer à des projets open-source ou d'écrire sur le développement web.`,
      location: "Bizerte, Tunisie",
      projects: {
        1: { description: "Page d'atterrissage pour MDF - Design professionnel et moderne présentant les services de l'entreprise." },
        2: { description: "Application e-commerce avec catalogue de produits et panier d'achat." },
        3: { description: "Plateforme de médecine esthétique pour les services de beauté et bien-être en Italie." },
        4: { description: "Page d'atterrissage professionnelle pour IBF Consulting TN - Design élégant et corporate." },
      },
      experience: {
        0: { role: "Développeur Web Freelance", company: "Plusieurs clients", description: "Travaillé avec divers clients pour créer des sites web et applications web sur mesure, livrant des solutions de qualité en temps voulu." },
        1: { role: "Développeur Full Stack", company: "Unicom Digital Agency", description: "Construit et maintenu plusieurs projets clients utilisant des technologies web modernes." },
        2: { role: "Développeur Junior", company: "ReoTech", description: "Début de carrière en construisant des sites web responsives et en apprenant les bonnes pratiques." },
      },
      skillCategories: {
        "Frontend": "Frontend",
        "Backend": "Backend",
        "CMS & Platforms": "CMS & Plateformes",
        "Tools": "Outils",
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
      roles: ["مطور Full Stack", "متخصص React", "عاشق UI/UX", "مطور Next.js"],
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
      location: "بنزرت، تونس",
      projects: {
        1: { description: "صفحة هبوط لـ MDF - تصميم احترافي وحديث يعرض خدمات الشركة." },
        2: { description: "تطبيق تجارة إلكترونية يتضمن كتالوج منتجات ووظيفة سلة التسوق." },
        3: { description: "منصة طب تجميلي لخدمات التجميل والعافية في إيطاليا." },
        4: { description: "صفحة هبوط احترافية لـ IBF Consulting TN - تصميم أنيق واحترافي." },
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
