export const profile = {
  name: "Adil Sikandar",
  title: "Software Engineer & AI Engineer",
  tagline:
    "Software Engineer building scalable products and AI-powered systems.",
  headline:
    "I design and ship production software across the full stack — from e-commerce platforms and NestJS APIs to fine-tuned AI models, neural networks, and products spanning coaching, healthcare, sales automation, and voice AI.",
  label: "SOFTWARE ENGINEERING / AI / ML",
  location: "Canada",
  email: "contact@adilsikandar.dev",
  bookingUrl: "https://calendly.com/adilsikandar/lets-connect-to-discuss-project-details",
  website: "https://adilsikandar.dev",
  resumeUrl: "/resume.pdf",
  resumeFilename: "Adil-Sikandar-Resume.pdf",
  social: {
    github: "https://github.com/hafizadil123",
    linkedin: "https://www.linkedin.com/in/adil-sikandar-1643bb150/",
  },
  heroTech: [
    "React",
    "Next.js",
    "LLMs",
    "Fine-tuning",
    "PyTorch",
    "Voice AI",
    "Azure ML",
  ],
  stats: [
    { value: "10+", label: "AI products shipped" },
    { value: "DP-100", label: "Microsoft certified" },
    { value: "Fine-tuned", label: "Models in production" },
  ],
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "AI Products", href: "#ai-products" },
  { label: "Experience", href: "#experience" },
  { label: "AI Credentials", href: "#ai-background" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
] as const;

export type Project = {
  id: string;
  name: string;
  tagline: string;
  tags: string[];
  group: "enterprise" | "earlier";
  problem: string;
  architecture: string;
  role: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-ai-platform",
    name: "E-Commerce & AI Platform",
    tagline:
      "Full-stack e-commerce platform integrated with multiple fine-tuned AI models.",
    tags: ["Next.js", "NestJS", "LLMs", "Fine-tuning", "PyTorch", "E-Commerce"],
    problem:
      "A product studio needed a scalable e-commerce foundation that could power multiple AI-driven products — from sales automation to coaching — with shared infrastructure and custom model capabilities.",
    architecture:
      "Next.js and NestJS platform with modular product architecture, LLM inference services, fine-tuned model pipelines, and Azure ML integration for training and deployment workflows.",
    role:
      "Led full-stack architecture and AI engineering — e-commerce platform design, model fine-tuning, neural network integration, and production deployment across 10+ AI products.",
    outcome:
      "Production e-commerce and AI platform serving multiple live products with fine-tuned models deployed at scale.",
    group: "enterprise",
  },
  {
    id: "telecom-portal",
    name: "Customer Service Portal",
    tagline:
      "Enterprise web application for telecommunications service management.",
    tags: ["React", "Redux", "GraphQL", "NestJS", "AWS"],
    problem:
      "A major telecommunications provider needed a web application to help end users understand and manage the plans and services they purchased.",
    architecture:
      "React frontend with Redux state management, GraphQL via Apollo for data operations, and NestJS/Node.js backend services integrated with enterprise CI/CD on AWS.",
    role:
      "Contributed to frontend architecture, component design, API integration, and cross-functional delivery on an enterprise engineering team.",
    outcome:
      "Production web application deployed for customer-facing service management at scale.",
    group: "enterprise",
  },
  {
    id: "wireline-platform",
    name: "Wireline Services Platform",
    tagline:
      "Full-stack delivery across frontend and backend for a wireline product.",
    tags: ["React", "Node.js", "NestJS", "GraphQL", "Jest"],
    problem:
      "A complex wireline telecommunications product required coordinated frontend and backend engineering across multiple workstreams.",
    architecture:
      "React/Redux frontend with NestJS and Express backend services, GraphQL layer, and Jest-based unit testing integrated into the delivery pipeline.",
    role:
      "Worked across frontend and backend — leading frontend development and backend services for the wireline product.",
    outcome:
      "Delivered production features across both frontend and backend layers of the platform.",
    group: "enterprise",
  },
  {
    id: "marketplace",
    name: "Multi-Category Marketplace",
    tagline: "Marketplace platform for classified and sale products.",
    tags: ["JavaScript", "Node.js", "MongoDB", "REST"],
    problem:
      "The classified and sale market needed a unified platform where users could browse and list products across categories.",
    architecture:
      "Full-stack web application with server-side APIs, database persistence, and a responsive frontend for product discovery and listings.",
    role:
      "Designed and built the platform from concept through deployment as a full-stack developer.",
    group: "earlier",
  },
  {
    id: "news-platform",
    name: "News Aggregation Platform",
    tagline: "Centralized news discovery and aggregation platform.",
    tags: ["JavaScript", "Node.js", "REST", "MongoDB"],
    problem:
      "News consumption was fragmented across sources — users needed a single platform to discover news from multiple publishers.",
    architecture:
      "Web application with backend aggregation services and a frontend optimized for browsing and discovering news content.",
    role:
      "Built the full-stack application including backend data services and frontend user experience.",
    group: "earlier",
  },
];

export type Experience = {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  contributions: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    id: "ai-product-engineering",
    period: "2024 → Present",
    title: "AI Engineer & Full-Stack Lead",
    company: "AI Product Engineering Studio",
    location: "Canada",
    description:
      "Leading AI product development and e-commerce platform engineering — fine-tuning models, building neural network-powered features, and shipping production systems across 10+ AI products.",
    contributions: [
      "Built and scaled a full-stack e-commerce platform with integrated AI model infrastructure",
      "Fine-tuned and deployed multiple LLM and neural network models for production use cases",
      "Shipped AI products spanning voice AI, coaching, healthcare documentation, and sales automation",
      "Architected model training pipelines, inference services, and Azure ML deployment workflows",
      "Led end-to-end product delivery from concept and UX through engineering, launch, and growth",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "LLMs",
      "Fine-tuning",
      "Next.js",
      "NestJS",
      "Azure ML",
    ],
  },
  {
    id: "enterprise-consultancy",
    period: "2019 → 2024",
    title: "Frontend Architect",
    company: "Enterprise Software Consultancy",
    location: "Canada",
    description:
      "Leading frontend architecture and full-stack delivery for enterprise web applications, including large-scale telecommunications products.",
    contributions: [
      "Architected React applications with Redux, GraphQL, and NestJS backend integration",
      "Managed small engineering teams and participated in technical planning and security reviews",
      "Delivered production features across multiple enterprise web applications",
      "Established CI/CD pipelines using Netlify, AWS S3, and EC2",
      "Built comprehensive unit test coverage with Jest across frontend and backend services",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "NestJS",
      "GraphQL",
      "Apollo",
      "Jest",
      "AWS",
    ],
  },
  {
    id: "software-firm",
    period: "2019",
    title: "Backend Developer",
    company: "Software Engineering Firm",
    location: "Pakistan",
    description:
      "Backend engineering and research architecture focused on building scalable logic layers for business growth.",
    contributions: [
      "Developed production web applications with modern JavaScript tooling",
      "Advocated for JavaScript best practices across the engineering team",
      "Participated in technical hiring and resource evaluation",
      "Built reusable UI component libraries with Styled Components and Theme UI",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Webpack",
      "AWS",
      "Jest",
      "Enzyme",
    ],
  },
  {
    id: "tech-solutions",
    period: "2018 → 2019",
    title: "PHP Developer",
    company: "Technology Solutions Company",
    location: "Pakistan",
    description:
      "Backend development focused on Laravel applications and REST API design.",
    contributions: [
      "Built Laravel and Lumen applications with RESTful API architecture",
      "Developed backend services integrated with AWS infrastructure",
      "Applied test-driven development practices with Jest and Enzyme",
    ],
    technologies: ["PHP", "Laravel", "Lumen", "AWS", "REST", "MySQL"],
  },
];

export const certifications = [
  {
    id: "dp-100",
    name: "Azure Data Scientist Associate",
    code: "DP-100",
    issuer: "Microsoft",
    description:
      "Designing and implementing data science solutions on Azure — ML pipelines, model training, deployment, monitoring, and responsible AI.",
  },
] as const;

export const research = {
  headline: "Published AI research",
  description:
    "Graduate research in artificial intelligence and neural network-based prediction systems.",
  items: [
    {
      title:
        "Detailed Evaluation Prediction Analysis by Empowering Artificial Intelligence",
      type: "MPhil Research Thesis",
      institution: "University of Minhaj",
      year: "2022",
      highlight: "Gold Medalist · Top of Class",
      topics: [
        "Neural networks",
        "Prediction analysis",
        "Artificial intelligence",
        "Machine learning",
      ],
    },
  ],
} as const;

export const aiBackground = {
  headline: "AI engineering beyond product shipping",
  description:
    "Formal credentials, published research, and hands-on model work — fine-tuning LLMs, training neural networks, and deploying models in production.",
  pillars: [
    {
      title: "Microsoft DP-100",
      description:
        "Certified Azure Data Scientist — ML lifecycle on Azure, from experiment design and model training to deployment and monitoring.",
    },
    {
      title: "Fine-tuned models",
      description:
        "Production experience fine-tuning LLMs and transformer models for coaching, voice AI, sales automation, and domain-specific use cases.",
    },
    {
      title: "Neural networks",
      description:
        "Deep understanding of neural network architectures — from perceptrons and MLPs to GANs, transformers, and modern deep learning systems.",
    },
    {
      title: "Published research",
      description:
        "MPhil research thesis on AI-powered prediction analysis, recognized with a gold medal for academic excellence.",
    },
  ],
} as const;

export const expertise = {
  "AI / Machine Learning": [
    "Python",
    "PyTorch",
    "Transformers",
    "LLMs",
    "Fine-tuning",
    "Neural Networks",
    "Azure ML",
    "Voice AI",
    "AI Agents",
  ],
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "GraphQL",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "NestJS",
    "Express",
    "REST",
    "GraphQL",
    "Apollo",
    "PHP",
    "Laravel",
  ],
  Data: ["PostgreSQL", "MongoDB", "MySQL"],
  "Cloud / Infrastructure": [
    "AWS",
    "Docker",
    "CI/CD",
    "Netlify",
    "EC2",
    "S3",
    "CloudFront",
  ],
} as const;

export const education = [
  {
    degree: "MPhil (Computer Science)",
    institution: "University of Minhaj",
    location: "Lahore, Pakistan",
    year: "2022",
  },
  {
    degree: "BS Software Engineering",
    institution: "COMSATS University",
    location: "Lahore, Pakistan",
    year: "2014",
  },
  {
    degree: "Intermediate",
    institution: "Model Degree College",
    location: "Lahore, Pakistan",
    year: "2014",
  },
] as const;

export const about = {
  paragraphs: [
    "I started in web development and UI design, building my foundation through hands-on work on client projects and early-stage products. Over time, I moved from frontend development into full-stack engineering — taking on backend systems, API design, and cloud infrastructure.",
    "Over the last two years, I've focused heavily on AI product engineering — building a full-stack e-commerce platform and shipping 10+ AI products with fine-tuned models for coaching, healthcare, sales automation, voice AI, and content tools.",
    "My AI work is backed by formal training: Microsoft DP-100 certification (Azure Data Scientist Associate), an MPhil in Computer Science with published research on AI-powered prediction analysis, and hands-on experience fine-tuning LLMs and neural network models in production.",
    "Previously, I spent five years as a Frontend Architect at an enterprise software consultancy in Canada, delivering large-scale web applications for telecommunications and enterprise clients — React frontends, NestJS backends, GraphQL APIs, and production CI/CD on AWS.",
    "I also share technical writing on LinkedIn, including a 30-day series breaking down neural networks, transformers, and the ideas behind modern AI — from perceptrons and backpropagation to GANs and gradient descent.",
    "I'm motivated by difficult technical problems: the kind that require thoughtful architecture, clean code, and systems that hold up in production.",
  ],
} as const;

export const philosophy = {
  headline: "Building software for the AI-native era.",
  description:
    "I work at the intersection of software engineering, artificial intelligence, automation, and product development — designing systems where traditional application logic meets intelligent, model-driven capabilities.",
  concepts: [
    "LLM fine-tuning",
    "Neural network training",
    "Voice AI & telephony",
    "AI agents & automation",
    "Azure ML pipelines",
    "Production model deployment",
  ],
  flow: ["User", "Application", "Agent", "Tools", "Data", "Model"],
} as const;

export const writing = {
  headline: "Writing & Ideas",
  description:
    "Technical thinking on AI, system design, and modern engineering — shared publicly as I learn and build.",
  topics: [
    "Neural networks & deep learning",
    "Fine-tuning & transformers",
    "Backpropagation & gradient descent",
    "GANs & generative models",
    "Azure ML & model deployment",
    "AI agents & automation",
  ],
  note: "Follow my technical writing on LinkedIn for ongoing posts on AI, machine learning, and engineering.",
  link: "https://www.linkedin.com/in/adil-sikandar-1643bb150/recent-activity/all/",
} as const;

export const github = {
  username: "hafizadil123",
  headline: "Building in public",
  description:
    "Open-source tools, starter kits, and experiments — from error handling SDKs to AI automation projects.",
  repositories: [
    {
      name: "ad-error-handler-sdk",
      description: "Node.js error handling SDK for consistent error management.",
      language: "JavaScript",
      url: "https://github.com/hafizadil123/ad-error-handler-sdk",
    },
    {
      name: "ad-mobile-ui-library",
      description: "TypeScript UI component library for mobile-first applications.",
      language: "TypeScript",
      url: "https://github.com/hafizadil123/ad-mobile-ui-library",
    },
    {
      name: "ai-scraper",
      description: "Python-based intelligent data extraction tooling.",
      language: "Python",
      url: "https://github.com/hafizadil123/ai-scraper",
    },
    {
      name: "mern-code-generator",
      description: "Code generation tooling for MERN stack applications.",
      language: "JavaScript",
      url: "https://github.com/hafizadil123/mern-code-generator",
    },
    {
      name: "ad-starterkit",
      description: "Starter kit for bootstrapping new JavaScript projects.",
      language: "JavaScript",
      url: "https://github.com/hafizadil123/ad-starterkit",
    },
  ],
} as const;

export const contact = {
  headline: "Have a difficult engineering problem?",
  description:
    "Whether you're stuck on architecture, shipping an AI product, or need a full-stack partner — book a call or email. I respond to every message.",
  services: [
    "AI systems & model fine-tuning",
    "E-commerce platforms",
    "Web applications",
    "Backend architecture",
    "Full-stack product engineering",
  ],
} as const;
