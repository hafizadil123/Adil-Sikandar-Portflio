export type AIProduct = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  tags: string[];
  users?: string;
  rating?: string;
  metricLabel?: "users" | "clients";
  status: "live" | "coming-soon";
  problem: string;
  architecture: string;
  role: string;
  outcome?: string;
  featured?: boolean;
};

export const aiPortfolio = {
  tagline: "AI product portfolio",
  description:
    "Over the last two years, a collection of AI products built on a shared e-commerce platform — fine-tuned models, neural network features, and end-to-end delivery from concept through growth.",
  stats: {
    products: "10+",
    sectors: "E-commerce, coaching, healthcare, sales, and voice AI",
    scope: "Fine-tuning, model deployment, UX, and production launch",
  },
} as const;

export const aiProducts: AIProduct[] = [
  {
    id: "ai-coaching-mobile",
    name: "AI Coaching Platform · Mobile",
    category: "Mobile Coaching",
    tagline:
      "Mobile AI coaching delivering personalized business guidance on-the-go.",
    tags: ["React Native", "LLMs", "Mobile", "AI Coaching"],
    users: "850+",
    rating: "4.5",
    status: "live",
    problem:
      "Entrepreneurs needed accessible, personalized coaching beyond desktop sessions — guidance that fits into how they actually work throughout the day.",
    architecture:
      "Cross-platform mobile application with LLM-driven coaching flows, personalized strategy recommendations, and communication training modules backed by scalable API services.",
    role:
      "Led product design and full-stack engineering — mobile UX, AI conversation flows, backend services, and production launch.",
    outcome:
      "Production mobile app with steady adoption across coaching and strategy sessions.",
    featured: true,
  },
  {
    id: "ai-receptionist",
    name: "AI Virtual Receptionist",
    category: "Customer Service",
    tagline:
      "24/7 virtual receptionist for calls, scheduling, and customer information.",
    tags: ["Voice AI", "LLMs", "Telephony", "Automation"],
    users: "420+",
    rating: "4.5",
    status: "live",
    problem:
      "Small and mid-size businesses couldn't afford round-the-clock reception coverage but lost leads when calls went unanswered.",
    architecture:
      "Real-time voice AI pipeline integrating speech recognition, LLM orchestration, and telephony APIs for natural inbound call handling.",
    role:
      "Architected and built the voice AI system — conversation design, telephony integration, and production deployment.",
    outcome: "Production deployment across customer service workflows at scale.",
  },
  {
    id: "sales-automation",
    name: "Sales Automation Platform",
    category: "Sales Automation",
    tagline:
      "Unified sales automation with AI outbound calling, inbound handling, and receptionist services.",
    tags: ["Voice AI", "Sales Automation", "LLMs", "Node.js"],
    users: "310+",
    rating: "4.4",
    status: "live",
    problem:
      "Sales teams spent disproportionate time on repetitive calling workflows instead of high-value conversations.",
    architecture:
      "Unified platform combining outbound AI calling, inbound call routing, and intelligent receptionist modules on shared conversation infrastructure.",
    role:
      "Built core platform architecture and AI calling workflows — from lead outreach automation to inbound call intelligence.",
    outcome: "Integrated outbound and inbound sales automation in production.",
  },
  {
    id: "ai-coaching-web",
    name: "AI Business Coaching Platform",
    category: "AI Coaching",
    tagline:
      "Web-based AI coaching with personalized guidance and performance analytics.",
    tags: ["Next.js", "LLMs", "Analytics", "AI Coaching"],
    users: "280+",
    rating: "4.5",
    status: "live",
    problem:
      "Business owners lacked affordable access to consistent, data-informed coaching for strategy and performance improvement.",
    architecture:
      "Web platform with LLM-powered coaching sessions, strategy recommendation engine, and performance analytics dashboard.",
    role:
      "Designed and developed the web platform — coaching UX, AI personalization layer, and analytics integration.",
    outcome: "Production web platform serving entrepreneurs with personalized AI coaching.",
  },
  {
    id: "outbound-sales-ai",
    name: "Outbound Sales AI",
    category: "Outbound Sales",
    tagline:
      "Outbound calling AI for lead generation, follow-ups, and appointment setting.",
    tags: ["Voice AI", "LLMs", "Outbound Sales", "Automation"],
    users: "190+",
    rating: "4.3",
    status: "live",
    problem:
      "Outbound sales teams needed to scale personalized follow-up calls without linearly increasing headcount.",
    architecture:
      "Specialized outbound voice AI with human-like conversation flows, CRM-aware context, and automated scheduling integrations.",
    role:
      "Engineered outbound calling pipelines and conversation orchestration for production sales teams.",
    outcome: "Automated lead generation and follow-up workflows at production scale.",
  },
  {
    id: "transcription-platform",
    name: "Multi-Source Transcription Platform",
    category: "Content Transcription",
    tagline:
      "Transcription for video, audio, podcasts, and meetings with multi-language support.",
    tags: ["Speech-to-Text", "Python", "AI", "Multi-language"],
    users: "350+",
    rating: "4.5",
    status: "live",
    problem:
      "Content creators and teams needed accurate, multi-language transcription across diverse media formats with speaker identification.",
    architecture:
      "Transcription pipeline supporting multiple input sources, speaker diarization, multi-language processing, and export workflows.",
    role:
      "Built the transcription system — media ingestion, speech processing integration, and user-facing workflows.",
    outcome: "Production transcription across video, audio, and meeting formats.",
  },
  {
    id: "healthcare-docs",
    name: "Healthcare Documentation AI",
    category: "Healthcare Analytics",
    tagline:
      "AI-powered medical charting that automates patient documentation.",
    tags: ["Healthcare AI", "NLP", "Documentation", "Python"],
    users: "95+",
    rating: "4.4",
    status: "live",
    problem:
      "Healthcare providers faced excessive administrative burden from manual patient documentation.",
    architecture:
      "AI documentation system processing clinical inputs into structured charting outputs to reduce manual entry and improve accuracy.",
    role:
      "Developed AI charting workflows and documentation automation for healthcare provider use cases.",
    outcome: "Reduced documentation overhead in clinical workflows.",
  },
  {
    id: "real-estate-intelligence",
    name: "Real Estate Intelligence Platform",
    category: "Real Estate Tech",
    tagline:
      "AI platform for property analysis, lead generation, and client communication.",
    tags: ["LLMs", "Real Estate", "Automation", "Lead Gen"],
    users: "70+",
    rating: "4.3",
    status: "live",
    problem:
      "Real estate agents needed to automate property analysis and client follow-up while maintaining personalized communication.",
    architecture:
      "Intelligence platform combining property data analysis, automated lead generation, and AI-assisted client communication.",
    role:
      "Built property analysis features and client communication automation for agent workflows.",
    outcome: "Production deployment across property analysis and lead generation.",
  },
  {
    id: "custom-ai-solutions",
    name: "Custom AI Solutions Platform",
    category: "AI Development",
    tagline:
      "Bespoke AI development — chatbots, predictive analytics, and automation systems.",
    tags: ["LLMs", "Chatbots", "Predictive Analytics", "Custom AI"],
    users: "25+",
    rating: "4.6",
    metricLabel: "clients",
    status: "live",
    problem:
      "Businesses needed tailored AI solutions — custom chatbots, analytics, and automation for specific operations.",
    architecture:
      "Delivery platform building custom AI systems — conversational agents, predictive models, and workflow automation per requirements.",
    role:
      "Led custom AI solution design and engineering across multiple industry verticals.",
    outcome: "Multiple client deployments across varied business requirements.",
  },
  {
    id: "business-messaging-ai",
    name: "Business Messaging AI",
    category: "Business Messaging",
    tagline:
      "Context-aware business texting for customer conversations and appointment reminders.",
    tags: ["LLMs", "SMS", "Automation", "Customer Service"],
    status: "coming-soon",
    problem:
      "Businesses needed intelligent SMS automation that maintains context across customer conversations.",
    architecture:
      "Messaging platform with context-aware LLM responses, appointment reminder flows, and support query automation over SMS.",
    role:
      "Designing and building the messaging automation platform — conversation context management and workflow integration.",
    outcome: "In active development ahead of public launch.",
  },
];

export const featuredAIProduct = aiProducts.find((p) => p.featured)!;
