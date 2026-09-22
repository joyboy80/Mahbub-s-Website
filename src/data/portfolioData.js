export const personalInfo = {
  fullName: "Mahbubur Rahman",
  nickname: "Joy",
  headline: "Computer Science Undergraduate • Software Developer • ML Engineer • Research Enthusiast",
  shortBio: "Building software, exploring intelligent systems, and learning through research. Constantly pushing boundaries from full-stack web platforms to machine learning and natural language processing pipelines.",
  motto: "Build → Learn → Research → Experiment → Grow",
  aboutParagraphs: [
    "I am an undergraduate student in the Department of Computer Science & Engineering at Chittagong University of Engineering & Technology (CUET), currently in Level 3, Term 2 with a CGPA of 3.58 / 4.00.",
    "My technical journey bridges the gap between robust software engineering and applied artificial intelligence. I enjoy architecting end-to-end applications—from reactive user interfaces to reliable backend systems—while delving deeply into Machine Learning, Deep Learning, and Natural Language Processing.",
    "Currently, I am expanding my practical knowledge as a Machine Learning Engineering Intern at Flyrank AI, where I work on machine learning models and NLP-driven data workflows. Alongside academics and engineering, I actively contribute to student leadership and community initiatives across tech, photography, and cultural clubs."
  ],
  university: {
    name: "Chittagong University of Engineering & Technology (CUET)",
    short: "CUET",
    department: "Computer Science & Engineering",
    levelTerm: "Level 3, Term 2",
    cgpa: "3.58 / 4.00",
    expectedGrad: "2027",
    website: "https://cuet.ac.bd/",
    location: "Chattogram, Bangladesh"
  },
  hometown: "Subarnachar, Noakhali, Chittagong, Bangladesh",
  currentLocation: "Chattogram, Bangladesh",
  avatarUrl: "/pic.jpg",
  cvUrl: "/cv.pdf",
  status: "🟢 Open for Collaborations & Research Discussions"
};

export const educationList = [
  {
    institution: "Chittagong University of Engineering & Technology (CUET)",
    shortName: "CUET",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Currently Pursuing (Level 3, Term 2)",
    graduation: "Expected Graduation: 2027",
    result: "CGPA: 3.58 / 4.00",
    location: "Chattogram, Bangladesh",
    website: "https://cuet.ac.bd/",
    type: "Undergraduate Degree",
    highlights: [
      "Core Coursework: Data Structures, Algorithms, OOP, Database Systems, Operating Systems, Machine Learning Foundations",
      "Department of Computer Science & Engineering"
    ]
  },
  {
    institution: "Notre Dame College, Dhaka",
    shortName: "NDC",
    degree: "Higher Secondary Certificate (HSC)",
    period: "Completed",
    result: "GPA: 5.00 / 5.00",
    location: "Dhaka, Bangladesh",
    website: "https://ndc.edu.bd/",
    type: "Higher Secondary",
    highlights: [
      "Group: Science",
      "Member of Notre Dame Photography Club & Math Club"
    ]
  },
  {
    institution: "Noakhali Zilla School",
    shortName: "NZS",
    degree: "Secondary School Certificate (SSC)",
    period: "Completed",
    result: "GPA: 5.00 / 5.00",
    location: "Noakhali, Bangladesh",
    website: "http://www.nzs.edu.bd/",
    type: "Secondary School",
    highlights: [
      "Group: Science",
      "Regional Hockey Team Member"
    ]
  }
];

export const experienceList = [
  {
    company: "Flyrank AI",
    position: "Machine Learning Engineering Intern",
    period: "Present",
    employmentType: "Remote / Internship",
    website: "https://flyrank.ai",
    badgeColor: "cyan",
    responsibilities: [
      "Assisting in the design, training, and evaluation of machine learning models to enhance product workflows.",
      "Collaborating with cross-functional teams to integrate NLP algorithms and optimize data processing pipelines."
    ],
    techStack: ["Python", "Machine Learning", "NLP", "Scikit-Learn", "Data Processing", "Model Evaluation"]
  }
];

export const skillCategories = [
  {
    id: "languages",
    label: "Languages / Core"
  },
  {
    id: "ml_ai",
    label: "ML & Data Science"
  },
  {
    id: "frontend",
    label: "Frontend Dev"
  },
  {
    id: "backend",
    label: "Backend & Systems"
  },
  {
    id: "databases",
    label: "Databases & Cloud"
  },
  {
    id: "tools",
    label: "Tools & Systems"
  }
];

export const skillsList = [
  // Languages
  { name: "C", category: "languages", icon: "Code2", level: "Academic & Systems" },
  { name: "C++", category: "languages", icon: "Cpu", level: "DSA & Problem Solving" },
  { name: "C#", category: "languages", icon: "Hash", level: "Application Development" },
  { name: "Python", category: "languages", icon: "Terminal", level: "ML & Backend Core" },
  { name: "JavaScript (ES6+)", category: "languages", icon: "FileCode", level: "Full-Stack Web" },
  { name: "Bash Scripting", category: "languages", icon: "TerminalSquare", level: "Automation & Unix" },

  // ML & AI
  { name: "Machine Learning", category: "ml_ai", icon: "BrainCircuit", level: "Supervised & Unsupervised" },
  { name: "Deep Learning", category: "ml_ai", icon: "Layers", level: "Neural Architectures" },
  { name: "NLP", category: "ml_ai", icon: "MessageSquareCode", level: "Text Processing & Embeddings" },
  { name: "Scikit-Learn", category: "ml_ai", icon: "Workflow", level: "Modeling & Evaluation" },
  { name: "Pandas", category: "ml_ai", icon: "Table2", level: "Data Wrangling" },
  { name: "NumPy", category: "ml_ai", icon: "Binary", level: "Numerical Computations" },
  { name: "Matplotlib & Seaborn", category: "ml_ai", icon: "BarChart3", level: "Data Visualization" },

  // Frontend
  { name: "ReactJS", category: "frontend", icon: "Atom", level: "SPA & UI State" },
  { name: "Vanilla JavaScript", category: "frontend", icon: "FileCode2", level: "DOM & Core Web" },
  { name: "Tailwind CSS", category: "frontend", icon: "Sparkles", level: "Modern Utility Styling" },
  { name: "Bootstrap", category: "frontend", icon: "LayoutGrid", level: "Responsive Layouts" },
  { name: "HTML5 & CSS3", category: "frontend", icon: "Boxes", level: "Semantic Markup & Glassmorphism" },

  // Backend
  { name: "Node.js & Express", category: "backend", icon: "Server", level: "REST APIs & Middleware" },
  { name: "Spring Boot", category: "backend", icon: "ShieldAlert", level: "Enterprise Java Services" },
  { name: "FastAPI", category: "backend", icon: "Zap", level: "High-Performance Python APIs" },

  // Databases & Cloud
  { name: "MongoDB", category: "databases", icon: "Database", level: "NoSQL Document Storage" },
  { name: "MySQL", category: "databases", icon: "FileSpreadsheet", level: "Relational DB & Queries" },
  { name: "Supabase", category: "databases", icon: "CloudLightning", level: "Cloud PostgreSQL & Auth" },

  // Tools & Systems
  { name: "Git & GitHub", category: "tools", icon: "GitBranch", level: "Version Control & Collaboration" },
  { name: "Linux / Unix Shell", category: "tools", icon: "Terminal", level: "CLI & Workflow Automation" },
  { name: "LaTeX", category: "tools", icon: "FileText", level: "Technical Documentation" },
  { name: "Microsoft Word", category: "tools", icon: "FileCheck", level: "Professional Documentation" }
];

export const researchInterests = {
  quote: "I am interested in exploring how machine learning, deep learning, and natural language processing can be applied to solve practical problems and build intelligent systems.",
  focusAreas: [
    {
      title: "Machine Learning & Deep Learning",
      icon: "Brain",
      tag: "Intelligent Architectures",
      description: "Investigating feature representations, model training efficiency, and real-world evaluation methodologies for applied ML tasks."
    },
    {
      title: "Natural Language Processing (NLP)",
      icon: "Sparkles",
      tag: "Text & Semantics",
      description: "Exploring text classification, tokenization, semantic search pipelines, and practical integration of NLP algorithms into real-world applications."
    },
    {
      title: "Data-Driven Systems & Automation",
      icon: "Workflow",
      tag: "System Design",
      description: "Bridging the bridge between algorithmic intelligence and reliable software pipelines with optimized data ingestion and processing."
    },
    {
      title: "Applied AI for Public & Campus Utilities",
      icon: "Network",
      tag: "Practical Problem Solving",
      description: "Developing intelligent campus tools and transit solutions that use computational methods to address everyday bottlenecks."
    }
  ]
};

export const projectsList = [
  {
    id: "safar",
    title: "Safar: Smart Bus Tracker & Management System",
    isFlagship: true,
    tagline: "Intelligent University Transit & Fleet Scheduling System",
    description: "A comprehensive university transportation management solution engineered to simplify bus scheduling, passenger management, reservations, and real-time transit coordination. Features interactive map routing and transit analytics to enhance the daily commuting experience.",
    techStack: ["React.js", "Node.js", "Express", "Leaflet/Maps", "CSS3"],
    githubUrl: "https://github.com/joyboy80/Jaatra",
    demoNote: "Active Repository",
    highlights: [
      "Engineered live route mapping and passenger timetable notifications",
      "Optimized client-side rendering for real-time location mapping",
      "Centralized digital scheduling for university transit coordination"
    ],
    accentGlow: "from-sky-500/20 via-blue-500/10 to-indigo-500/20"
  },
  {
    id: "cuet-lost-found",
    title: "CUET Lost & Found Box",
    isFlagship: false,
    tagline: "Campus-Wide Retrieval & Item Reporting Platform",
    description: "A centralized web platform designed for CUET students to report, categorize, discover, and recover lost or found belongings across campus. Streamlines lost property tracking with automated statuses and secure user authentication.",
    techStack: ["Vanilla JS", "Node.js", "Express", "MongoDB", "CSS3"],
    githubUrl: "https://github.com/joyboy80/Cuet-Lost---Found-Box",
    demoNote: "Active Repository",
    highlights: [
      "Real-time search filtering by item category and location",
      "User authentication and automated status updating for item verification",
      "Lightweight responsive frontend with RESTful Express/MongoDB backend"
    ],
    accentGlow: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20"
  },
  {
    id: "biometrics-attendance",
    title: "Smart Biometrics Attendance Tracker",
    isFlagship: false,
    tagline: "Full-Stack Automated Biometric Attendance Platform",
    description: "An automated attendance management system integrating biometric verification with an enterprise-grade backend. Provides secure role-based access control dashboards for instructors and administrators to track real-time records and generate reports.",
    techStack: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/joyboy80/AttendanceTracker",
    demoNote: "Active Repository",
    highlights: [
      "Architected responsive React frontend state management with Spring Boot REST APIs",
      "Role-based access control (RBAC) dashboards for attendance verification",
      "Relational MySQL schema design for auditable attendance records and reporting"
    ],
    accentGlow: "from-purple-500/20 via-violet-500/10 to-pink-500/20"
  },
  {
    id: "edusync",
    title: "EduSync",
    isFlagship: false,
    tagline: "CLI Administrative Utility & Automation Script",
    description: "A lightweight Unix shell script utility designed to automate student administrative tasks, manage academic directory structures, and streamline file workflows across Linux/Unix development environments.",
    techStack: ["Bash Scripting", "Unix Shell", "Linux CLI"],
    githubUrl: "https://github.com/joyboy80/EduSync",
    demoNote: "Active Repository",
    highlights: [
      "Automates directory scaffolds, file permissions, and environment setup",
      "Reduces manual administrative overhead for academic workspaces",
      "Employs robust POSIX shell commands and error handling"
    ],
    accentGlow: "from-amber-500/20 via-orange-500/10 to-yellow-500/20"
  }
];

export const leadershipAndActivities = [
  {
    role: "Assistant Publication Secretary",
    organization: "CUET Photographic Society (CUETPS)",
    status: "Present",
    category: "Leadership & Media",
    location: "CUET",
    facebookUrl: "https://www.facebook.com/cuetphotographicsociety",
    description: "Leading publication designs, visual media coordination, and event coverage for the premier photography society at CUET."
  },
  {
    role: "Work & Planning Secretary",
    organization: "Bashundhara Shuvosangho — CUET Section",
    status: "Present",
    category: "Social Impact & Planning",
    location: "CUET",
    facebookUrl: "https://www.facebook.com/Bashundhara.Shuvosangho.Cuet.Branch",
    description: "Directing strategic event planning, social outreach programs, and community welfare initiatives."
  },
  {
    role: "Active General Member",
    organization: "IEEE Computer Society CUET Student Branch Chapter",
    status: "Present",
    category: "Technical Society",
    location: "CUET",
    facebookUrl: "https://www.facebook.com/ieeecscuetsb",
    description: "Engaged in computing workshops, international technical events, and peer tech exchange sessions."
  },
  {
    role: "Active General Member",
    organization: "CUET Computer Club",
    status: "Present",
    category: "Computing & Development",
    location: "CUET",
    facebookUrl: "https://www.facebook.com/cuetcomputerclub",
    description: "Participating in programming seminars, competitive development showcases, and technical discussions."
  },
  {
    role: "Member",
    organization: "Notre Dame Photography Club (NDPC)",
    status: "Alumni Member",
    category: "Creative Arts",
    location: "Dhaka",
    facebookUrl: "https://www.facebook.com/ndpc17.official",
    description: "Cultivated a strong eye for visual composition, digital framing, and creative storytelling."
  },
  {
    role: "Member",
    organization: "Notre Dame College Math Club (NDMC)",
    status: "Alumni Member",
    category: "Mathematics & Analytical",
    location: "Dhaka",
    facebookUrl: "https://www.facebook.com/official.ndmc",
    description: "Participated in analytical problem-solving sessions, mathematical logic circles, and olympiad discussions."
  },
  {
    role: "Regional Hockey Team Member",
    organization: "Noakhali Zilla School Sports",
    status: "School Extracurricular Achievement",
    category: "Athletics & Sports",
    location: "Noakhali",
    facebookUrl: null,
    description: "Represented school in regional hockey championships, fostering athletic discipline, resilience, and teamwork."
  }
];

export const contactDetails = {
  email: "mrahmanjoy986@gmail.com",
  phone: "+880 1616273501",
  rawPhone: "01616273501",
  whatsappNumber: "+880 1616273501",
  whatsappUrl: "https://wa.me/8801616273501",
  location: "Chattogram, Bangladesh",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/joyboy80",
      username: "@joyboy80",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mahbubur-rahman-8a8489321/",
      username: "Mahbubur Rahman",
      icon: "Linkedin"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/mahbubur.rahman.joy.438756/",
      username: "Mahbubur Rahman Joy",
      icon: "Facebook"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_pyr_i_dine_/?hl=en-in",
      username: "@_pyr_i_dine_",
      icon: "Instagram"
    }
  ]
};
