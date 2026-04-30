// ══════════════════════════════════════════════
// PORTFOLIO CONTENT — All data in one place
// ══════════════════════════════════════════════

const env = process.env;

export const LINKS = {
  githubProfile: env.NEXT_PUBLIC_GITHUB_PROFILE_URL || 'https://github.com',
  summarizerRepo: env.NEXT_PUBLIC_GITHUB_SUMMARIZER_URL || env.NEXT_PUBLIC_GITHUB_PROFILE_URL || 'https://github.com',
  weatherSongRepo: env.NEXT_PUBLIC_GITHUB_WEATHER_RECOMMENDER_URL || env.NEXT_PUBLIC_GITHUB_PROFILE_URL || 'https://github.com',
  linkedin: env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
  x: env.NEXT_PUBLIC_X_URL || 'https://x.com',
  email: env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com',
} as const;

export const MAIL_TO = `mailto:${LINKS.email}`;

export const SITE = {
  name: 'Saravanabhavan S',
  initials: 'SB',
  title: 'Saravanabhavan S — Backend & AI Developer',
  description: 'Backend-focused developer building scalable systems, GenAI applications, and cloud-based products.',
  roles: ['Backend Developer', 'AI Developer', 'System Architect'] as const,
  tagline: 'Available for opportunities',
} as const;

export const ABOUT = {
  bio: [
    "I am a backend-focused developer passionate about building scalable systems, GenAI applications, and cloud-based products. I enjoy working with APIs, authentication systems, backend architecture, and deployment pipelines.",
    "I have experience developing FastAPI and Node.js applications, integrating frontend and backend systems, and deploying projects using Docker, AWS EC2, Nginx, and Vercel.",
    "I am also interested in AI and GenAI technologies, including LangChain, RAG pipelines, LLM-based applications, vector databases, transcription systems, and analytics dashboards. Currently, I am exploring distributed systems, backend optimization, and advanced AI workflows.",
  ],
  terminal: {
    fileName: 'saravanabhavan.json',
    content: {
      name: 'Saravanabhavan S',
      role: 'Backend & AI Developer',
      location: 'India 🇮🇳',
      languages: ['Python', 'JavaScript', 'C++'],
      interests: ['GenAI', 'System Design', 'Backend Architecture'],
      education: 'Sathyabama Institute of Science and Technology',
      fun_fact: "I debug with print statements and I'm not sorry 🤷",
    },
  },
} as const;

export const STATS = [
  { value: 4, suffix: '+', label: 'Projects Built' },
  { value: 100, suffix: '+', label: 'GitHub Contributions' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '+', label: 'Years Learning' },
] as const;

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  featured: boolean;
  animationId?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'EchoScore',
    subtitle: 'GenAI Powered Customer Support Quality Auditor',
    description: 'GenAI-powered platform for auditing customer support chats and calls. Implemented LLM-based scoring, RAG pipeline, transcription, compliance analysis, and an analytics dashboard.',
    tech: ['Python', 'FastAPI', 'LangChain', 'Whisper', 'React', 'Milvus'],
    github: LINKS.summarizerRepo,
    live: 'https://echoscore-sigma.vercel.app/',
    featured: true,
    animationId: 'echoscore',
  },
  {
    title: 'Vibecast',
    subtitle: 'Context-Aware Music Recommendation Platform',
    description: 'Full-stack weather-aware music platform with FastAPI backend, React frontend, and MongoDB. Recommends songs via a multi-factor scoring engine using weather, mood, time, temperature, and user preferences.',
    tech: ['FastAPI', 'React', 'MongoDB', 'OpenWeather API', 'JWT', 'Tailwind CSS'],
    github: LINKS.weatherSongRepo,
    live: 'https://vibecast-web.vercel.app/',
    featured: true,
    animationId: 'vibecast',
  },
  {
    title: 'Cyber Shield Network Security',
    subtitle: 'Enterprise Network Architecture',
    description: 'Worked on network security architecture, attack surface analysis, secure remote access, DNS filtering, firewall policies, and VPN-based access models.',
    tech: ['Packet Tracer', 'Firewall', 'VPN', 'DNS Filtering'],
    github: LINKS.githubProfile,
    live: null,
    featured: false,
  },
  {
    title: 'AR/VR Planetarium',
    subtitle: 'Interactive 3D Space Experience',
    description: 'Interactive Unity-based planetarium system with clickable planets, animated orbits, info panels, comet system, and realistic 3D environment.',
    tech: ['Unity', 'C#', '3D UI', 'Interaction System'],
    github: LINKS.githubProfile,
    live: null,
    featured: false,
  },
  {
    title: 'Line Following Robot',
    subtitle: 'Autonomous Navigation System',
    description: 'Built an autonomous line-following robot using IR sensors and microcontroller logic. The robot detects path direction and adjusts motor movement automatically.',
    tech: ['Arduino', 'IR Sensors', 'Embedded C', 'Motors'],
    github: LINKS.githubProfile,
    live: null,
    featured: false,
  },
  {
    title: 'CNN Image Classification',
    subtitle: 'Deep Learning Vision Model',
    description: 'Built an image classification model using Convolutional Neural Networks for identifying and classifying images. Worked on preprocessing, training, evaluation, and prediction.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'NumPy'],
    github: LINKS.githubProfile,
    live: null,
    featured: false,
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  current: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  link?: string;
}

export interface Achievement {
  title: string;
  details: string;
  period?: string;
  link?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Infosys Springboard Internship 6.0',
    company: 'Infosys',
    period: '2026',
    description: 'Worked on a GenAI-based auditing platform involving LLM scoring, RAG pipeline, backend APIs, transcription, and dashboard integration.',
    highlights: [
      'Developed GenAI capabilities for automated auditing',
      'Integrated RAG pipelines and LLM scoring workflows',
      'Built backend APIs and connected transcription services',
    ],
    tech: ['Python', 'FastAPI', 'GenAI', 'LLMs', 'RAG'],
    current: true,
  },
  {
    role: 'Cisco Cybersecurity Virtual Internship',
    company: 'Cisco',
    period: '2025',
    description: 'Worked on network security design, attack surface analysis, secure access models, filtering policies, and VPN configuration.',
    highlights: [
      'Designed robust network security architectures',
      'Configured VPNs and implemented DNS filtering',
      'Analyzed attack surfaces and defined firewall policies',
    ],
    tech: ['Network Security', 'Firewalls', 'VPN'],
    current: false,
  },
  {
    role: 'Backend Developer',
    company: 'Startup Project',
    period: '2024',
    description: 'Worked on backend API development, authentication system, funding module, team management module, and database integration.',
    highlights: [
      'Engineered core backend APIs and authentication flows',
      'Developed funding and team management modules',
      'Designed and optimized database schemas',
    ],
    tech: ['Node.js', 'NoSQL', 'Databases', 'Authentication'],
    current: false,
  },
  {
    role: 'IEEE Robotics & Automation Society',
    company: 'IEEE RAS',
    period: '2023 — Present',
    description: 'Active member participating in robotics-related activities and technical events. Organized 5+ technical events, workshops, and student engagement activities.',
    highlights: [
      'Organized 5+ technical events and workshops',
      'Led student engagement activities',
    ],
    tech: ['Robotics', 'IoT', 'Embedded Systems'],
    current: true,
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'OCI 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: 'Feb 2026',
  },
  {
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: 'Mar 2026',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2025',
  },
  {
    title: 'Responsive Website, Static Website, Databases, Python Foundations',
    issuer: 'NXTWAVE',
    year: '2024-2025',
  },
  {
    title: 'Essentials Pathway',
    issuer: 'Unity',
    year: '2024-2025',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Sathyabama Luminary Award 2026',
    details: 'Recognized for all-round excellence in academics, technical skills, leadership, and contributions to the student community.',
    period: '2026',
  },
  {
    title: 'IEEE Robotics & Automation Society',
    details: 'Active member and co-organizer of 5+ technical events, workshops, and student engagement activities.',
    period: '2023 - Present',
  },
  {
    title: 'Class Ambassador',
    details: 'Represented students, bridged faculty-student communication, and coordinated class academic activities and events.',
    period: '2023 - Present',
  },
  {
    title: 'Malaysia Bootcamp (USIM)',
    details: 'Completed an international IoT, AI, and Robotics bootcamp with 6 modules and a capstone project in a cross-cultural team.',
    period: '2024',
  },
];

export const TECH_LOGOS = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'FastAPI', 'Flask', 'Express.js', 'Docker', 'AWS',
  'MongoDB', 'MySQL', 'TensorFlow', 'LangChain', 'Linux',
  'Nginx', 'Vercel', 'GitHub', 'Figma', 'Tailwind CSS',
] as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Stack', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SECTIONS = ['hero', 'about', 'work', 'tech', 'experience', 'contact'] as const;
