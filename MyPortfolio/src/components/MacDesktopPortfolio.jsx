import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Brain,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  GitFork,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import profile from "../assets/Profile.JPG";

const APP_ORDER = ["about", "projects", "skills", "experience", "contact"];

const INITIAL_POSITION = {
  about: { x: 80, y: 100 },
  projects: { x: 150, y: 130 },
  skills: { x: 220, y: 160 },
  experience: { x: 110, y: 190 },
  contact: { x: 260, y: 210 },
};

const GRID_SIZE = 24;
const SNAP_EDGE_THRESHOLD = 72;
const SNAP_TOP_THRESHOLD = 54;
const TOP_CENTER_MIN = 0.35;
const TOP_CENTER_MAX = 0.65;

const getViewportBounds = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const margin = 12;
  const topOffset = 56;
  const bottomDock = 92;

  return {
    x: margin,
    y: topOffset,
    width: Math.max(320, vw - margin * 2),
    height: Math.max(260, vh - topOffset - bottomDock),
  };
};

const getSnapLayout = (mode) => {
  const bounds = getViewportBounds();
  const halfWidth = Math.floor((bounds.width - 12) / 2);
  const halfHeight = Math.floor((bounds.height - 12) / 2);

  if (mode === "fullscreen") return bounds;

  if (mode === "left-half") {
    return { x: bounds.x, y: bounds.y, width: halfWidth, height: bounds.height };
  }

  if (mode === "right-half") {
    return {
      x: bounds.x + bounds.width - halfWidth,
      y: bounds.y,
      width: halfWidth,
      height: bounds.height,
    };
  }

  if (mode === "top-half") {
    return { x: bounds.x, y: bounds.y, width: bounds.width, height: halfHeight };
  }

  return null;
};

const detectSnapMode = (point) => {
  const vw = window.innerWidth;

  if (point.y <= SNAP_TOP_THRESHOLD) {
    const ratioX = point.x / vw;
    if (ratioX >= TOP_CENTER_MIN && ratioX <= TOP_CENTER_MAX) {
      return "fullscreen";
    }
    return "top-half";
  }

  if (point.x <= SNAP_EDGE_THRESHOLD) return "left-half";
  if (point.x >= vw - SNAP_EDGE_THRESHOLD) return "right-half";

  return "normal";
};

const appMeta = {
  about: {
    label: "Finder",
    title: "About Me",
  },
  projects: {
    label: "Folder",
    title: "Projects",
  },
  skills: {
    label: "Terminal",
    title: "Skills",
  },
  experience: {
    label: "Notes",
    title: "Experience",
  },
  contact: {
    label: "Mail",
    title: "Contact",
  },
};

const aboutStats = [
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "25+", label: "Happy Clients" },
  { icon: Zap, value: "99%", label: "Success Rate" },
  { icon: TrendingUp, value: "3+", label: "Years Experience" },
];

const aboutExpertise = [
  {
    icon: Globe,
    title: "AI & ML Engineering",
    desc: "Deploying intelligent systems with ML model integration, REST APIs, and containerized services for production environments.",
  },
  {
    icon: Cpu,
    title: "Cloud & DevOps",
    desc: "Architecting cloud infrastructure (AWS, Azure), CI/CD pipelines, Kubernetes orchestration, and Infrastructure as Code with Terraform.",
  },
  {
    icon: Rocket,
    title: "Networking & Security",
    desc: "Implementing secure network architectures, VPC design, load balancing, and applying security best practices (OWASP, TLS, IAM).",
  },
];

const projects = [
  {
    title: "CampusEase - Accommodation & Transport Finder",
    description:
      "A smart platform for students to find housing and transport around campus with location-based filtering.",
    role: "Full Stack Developer",
    outcome: "Reduced search friction for student onboarding.",
    tags: ["Java", "MySQL", "Web", "Location Services"],
    github: null,
    demo: null,
    featured: true,
    stats: { stars: 42, forks: 11 },
  },
  {
    title: "PerfectCV - AI-Powered Resume Improver",
    description:
      "AI-powered resume analysis with actionable suggestions for structure, keywords, and formatting.",
    role: "AI Developer",
    outcome: "Improved resume quality and interview readiness.",
    tags: ["Python", "GPT-4", "spaCy", "NLP", "AI"],
    github: "https://github.com/Dhivanujan/MiniProject-PerfectCV",
    demo: null,
    featured: true,
    stats: { stars: 58, forks: 15 },
  },
  {
    title: "Network Packet Analyzer",
    description:
      "A low-level networking tool for TCP/IP packet capture and traffic anomaly inspection.",
    role: "Systems Developer",
    outcome: "Improved network monitoring and troubleshooting visibility.",
    tags: ["Linux", "Networking", "TCP/IP", "Security"],
    github: "https://github.com/Dhivanujan/Network-Packet-Analyzer",
    demo: null,
    featured: false,
    stats: { stars: 33, forks: 7 },
  },
  {
    title: "Smart Mall Management System",
    description:
      "A digital mall operations platform for shops, inventory, parking, and customer service workflows.",
    role: "Software Developer",
    outcome: "Improved operational efficiency for administrators.",
    tags: ["JavaScript", "Database", "System Design"],
    github: "https://github.com/Dhivanujan/Smart-Mall-Management-System",
    demo: null,
    featured: false,
    stats: { stars: 26, forks: 6 },
  },
  {
    title: "Smart Firewall Controller",
    description:
      "Automated SSH log monitoring and dynamic IP blocking to mitigate brute-force attacks.",
    role: "Cybersecurity Developer",
    outcome: "Automated hardening for Linux server environments.",
    tags: ["Python", "Linux", "Cybersecurity", "iptables"],
    github: "https://github.com/Dhivanujan/Firewall-Rule-Manager",
    demo: null,
    featured: true,
    stats: { stars: 20, forks: 4 },
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance app to track expenses, categories, and trends with visual summaries.",
    role: "Frontend Developer",
    outcome: "Better spending awareness through clear dashboards.",
    tags: ["JavaScript", "React", "Chart.js"],
    github: "https://github.com/Dhivanujan/Expense-Tracker-Web-App",
    demo: null,
    featured: false,
    stats: { stars: 20, forks: 4 },
  },
  {
    title: "Wearero - Clothing E-commerce Platform",
    description:
      "An e-commerce platform built to improve browsing, product management, and user engagement.",
    role: "Full Stack Developer",
    outcome: "Delivered a scalable shopping workflow foundation.",
    tags: ["Web Development", "JavaScript", "Database"],
    github: "https://github.com/Dhivanujan/Wearero",
    demo: null,
    featured: false,
    stats: { stars: 24, forks: 5 },
  },
];

const skillsData = [
  {
    category: "Artificial Intelligence & Data",
    icon: Brain,
    items: [
      "Machine Learning (Supervised/Unsupervised) - 75%",
      "Deep Learning Concepts (CNN, RNN, Transformers) - 70%",
      "NLP (spaCy, Hugging Face) - 72%",
      "Model Deployment (REST APIs, Docker) - 80%",
      "NumPy & Pandas - 85%",
      "Model Evaluation & Optimization - 75%",
    ],
  },
  {
    category: "Networking & Systems",
    icon: Network,
    items: [
      "TCP/IP & OSI Model - 85%",
      "Routing & Switching (Static, OSPF) - 75%",
      "DNS, DHCP, NAT - 80%",
      "Network Security Fundamentals - 78%",
      "Load Balancing - 72%",
      "Cloud Networking (VPC, Subnets, Gateways) - 80%",
    ],
  },
  {
    category: "Web Development",
    icon: Code2,
    items: [
      "HTML5, CSS3, JavaScript (ES6+) - 90%",
      "React.js & Next.js - 88%",
      "Node.js & Express.js - 85%",
      "REST APIs & JWT Authentication - 87%",
      "Responsive Design & Accessibility - 90%",
      "Performance Optimization - 82%",
    ],
  },
  {
    category: "DevOps & Automation",
    icon: Workflow,
    items: [
      "Linux & Shell Scripting - 82%",
      "Git, GitHub, GitLab - 90%",
      "CI/CD (GitHub Actions, GitLab CI) - 80%",
      "Docker & Docker Compose - 85%",
      "Kubernetes (Core Concepts) - 75%",
      "Monitoring (Prometheus, Grafana) - 70%",
    ],
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: [
      "AWS (EC2, S3, IAM, VPC, RDS, Lambda) - 82%",
      "Azure (VMs, Storage, Networking) - 75%",
      "GCP (Compute Engine, Cloud Storage) - 70%",
      "Infrastructure as Code (Terraform) - 76%",
      "Serverless Architecture - 72%",
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    items: [
      "MySQL & PostgreSQL - 80%",
      "MongoDB - 82%",
      "Database Design & Optimization - 78%",
      "Cloud Storage & Backup Strategies - 75%",
    ],
  },
  {
    category: "Security & Best Practices",
    icon: Shield,
    items: [
      "Authentication & Authorization - 85%",
      "Secure API Design - 82%",
      "OWASP Top 10 Awareness - 80%",
      "Secrets Management - 78%",
      "HTTPS & TLS Fundamentals - 85%",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Briefcase,
    items: [
      "VS Code & IntelliJ - 95%",
      "Postman & API Testing - 90%",
      "Cloud CLI & Dashboards - 85%",
      "Jira, Trello, Agile/Scrum - 80%",
      "Markdown & OpenAPI/Swagger - 88%",
    ],
  },
];

const educationData = [
  {
    title: "BSc (Hons) in Software Engineering",
    period: "2023 - Present",
    description:
      "Comprehensive focus on software development, programming fundamentals, database management, and system design principles.",
    highlights: [
      "Software Development & Programming",
      "Database Design & Management",
      "System Architecture & Design",
      "Agile Methodologies",
    ],
  },
  {
    title: "NVQ Level 4 - Computer Network Technician",
    period: "2022",
    description:
      "Hands-on practical training in networking technologies, hardware maintenance, troubleshooting, and system administration.",
    highlights: [
      "Network Configuration & Maintenance",
      "Hardware Troubleshooting",
      "System Administration",
      "Technical Support",
    ],
  },
  {
    title: "G.C.E. Advanced Level (A/L)",
    period: "2021",
    description:
      "Successfully completed Advanced Level examinations, building a strong foundation for higher education.",
    highlights: [],
  },
  {
    title: "G.C.E. Ordinary Level (O/L)",
    period: "2018",
    description: "Completed Ordinary Level examinations with a strong academic record.",
    highlights: [],
  },
];

const careerObjective = {
  description:
    "Passionate and dedicated Software Engineering student actively seeking an internship opportunity to apply academic knowledge in real-world projects.",
  fields: ["Software Engineering", "Cloud Computing", "Networking"],
  strengths: [
    "Strong problem-solving and analytical skills",
    "Eager to learn and adapt to new technologies",
    "Solid foundation in programming and system design",
    "Hands-on experience through academic projects and technical training",
    "Excellent communication and teamwork abilities",
  ],
};

const contactInfo = [
  {
    label: "Email",
    value: "dhivanujan2002@gmail.com",
    href: "mailto:dhivanujan2002@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/dhivanujan-nesiah-a56a94240/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Check my code",
    href: "https://github.com/Dhivanujan",
    icon: Github,
  },
];

const WindowContent = ({ id }) => {
  if (id === "about") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Dhivanujan Nesiah</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            I am an AI, Cloud, and DevOps focused software engineer passionate about building intelligent and resilient
            production systems. My work spans ML integration, cloud-native infrastructure, and secure automation.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white/70 p-3.5 dark:border-slate-700 dark:bg-slate-900/45"
            >
              <stat.icon className="mb-2 h-4 w-4 text-indigo-500" />
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {aboutExpertise.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/45"
            >
              <item.icon className="mb-2 h-5 w-5 text-indigo-500" />
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-1 text-xs leading-6 text-slate-600 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "projects") {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Project Portfolio</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white/75 p-4 dark:border-slate-700 dark:bg-slate-900/45"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                {project.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-1 text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </span>
                ) : null}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{project.role}</p>
              <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              <p className="mt-2 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[11px] font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                {project.outcome}
              </p>
              <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {project.stats.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  {project.stats.forks}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white/80 px-2 py-0.5 text-[10px] text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs font-semibold">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500">Private</span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (id === "skills") {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Skills & Technologies</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-200 bg-white/75 p-4 dark:border-slate-700 dark:bg-slate-900/45"
            >
              <div className="mb-2 flex items-center gap-2">
                <group.icon className="h-4 w-4 text-indigo-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{group.category}</h3>
              </div>
              <ul className="space-y-1.5 text-xs leading-6 text-slate-600 dark:text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "experience") {
    return (
      <div className="space-y-5">
        <div className="rounded-xl border border-slate-200 bg-white/75 p-4 dark:border-slate-700 dark:bg-slate-900/45">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-amber-500" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">Career Objective</h3>
          </div>
          <p className="text-xs leading-6 text-slate-600 dark:text-slate-300">{careerObjective.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {careerObjective.fields.map((field) => (
              <span
                key={field}
                className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
              >
                {field}
              </span>
            ))}
          </div>
          <ul className="mt-3 space-y-1.5 text-xs leading-6 text-slate-600 dark:text-slate-300">
            {careerObjective.strengths.map((strength) => (
              <li key={strength} className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          {educationData.map((edu) => (
            <article
              key={`${edu.title}-${edu.period}`}
              className="rounded-xl border border-slate-200 bg-white/75 p-4 dark:border-slate-700 dark:bg-slate-900/45"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{edu.title}</h3>
                <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <GraduationCap className="h-3 w-3" />
                  {edu.period}
                </span>
              </div>
              <p className="text-xs leading-6 text-slate-600 dark:text-slate-300">{edu.description}</p>
              {edu.highlights.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {edu.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-slate-200 bg-white/80 px-2 py-0.5 text-[10px] text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Contact</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {contactInfo.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-xl border border-slate-200 bg-white/75 p-4 transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-900/45 dark:hover:bg-slate-900/65"
          >
            <item.icon className="mb-2 h-4 w-4 text-indigo-500" />
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.label}</p>
            <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">{item.value}</p>
          </a>
        ))}
      </div>

      <form className="space-y-3 rounded-xl border border-slate-200 bg-white/75 p-4 dark:border-slate-700 dark:bg-slate-900/45">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <textarea
          rows={4}
          placeholder="Your message..."
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Send Message
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
};

const MacIcon = ({ type }) => {
  const renderIcon = () => {
    if (type === "about") {
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 rounded-xl shadow-lg">
          <defs>
            <linearGradient id="finderBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6fc8ff" />
              <stop offset="100%" stopColor="#2f79ff" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#finderBlue)" />
          <path d="M32 8v48" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="2" />
          <circle cx="24" cy="27" r="3" fill="#0b2b67" />
          <circle cx="41" cy="27" r="3" fill="#0b2b67" />
          <path d="M20 41c4 4 20 4 24 0" stroke="#0b2b67" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        </svg>
      );
    }

    if (type === "projects") {
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 rounded-xl shadow-lg">
          <defs>
            <linearGradient id="folderTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffd36c" />
              <stop offset="100%" stopColor="#f59f2b" />
            </linearGradient>
          </defs>
          <rect x="4" y="16" width="56" height="42" rx="9" fill="#d9851c" />
          <path d="M4 24h56v26a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V24z" fill="url(#folderTop)" />
          <path d="M8 18c0-3 2-5 5-5h11l4 5H8z" fill="#ffe29a" />
        </svg>
      );
    }

    if (type === "skills") {
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 rounded-xl shadow-lg">
          <rect x="3" y="3" width="58" height="58" rx="13" fill="#151924" />
          <rect x="7" y="10" width="50" height="44" rx="7" fill="#0f131d" stroke="#2c3448" />
          <path d="M17 32l7-7M17 32l7 7" stroke="#64b4ff" strokeWidth="3" strokeLinecap="round" />
          <path d="M33 40h12" stroke="#7fd18f" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    }

    if (type === "experience") {
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 rounded-xl shadow-lg">
          <rect x="4" y="4" width="56" height="56" rx="12" fill="#ffd86b" />
          <rect x="10" y="12" width="44" height="40" rx="6" fill="#fff4cb" />
          <path d="M16 24h30M16 31h24M16 38h20" stroke="#d39a2c" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="50" cy="49" r="4" fill="#ffcc4d" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11 rounded-xl shadow-lg">
        <defs>
          <linearGradient id="mailBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6a9eff" />
            <stop offset="100%" stopColor="#235dff" />
          </linearGradient>
        </defs>
        <rect x="4" y="8" width="56" height="48" rx="10" fill="url(#mailBlue)" />
        <path d="M10 18l22 17 22-17" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 48l16-14M54 48L38 34" fill="none" stroke="#dbe9ff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <div className="relative flex items-center justify-center">
      {renderIcon()}
      <span className="absolute -bottom-1.5 h-1 w-4 rounded-full bg-black/30 blur-[2px]" aria-hidden="true" />
    </div>
  );
};

const DesktopWindow = ({
  id,
  zIndex,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onPositionCommit,
  onPreviewChange,
  state,
  children,
}) => {
  const meta = appMeta[id];

  const isSnapped = state.snapMode !== "normal";
  const dragEnabled = !isSnapped;
  const snapLayout = isSnapped ? getSnapLayout(state.snapMode) : null;
  const bodyHeight = snapLayout ? Math.max(160, snapLayout.height - 44) : null;

  const onDragEnd = (_, info) => {
    if (!dragEnabled) return;

    const snapMode = detectSnapMode(info.point);
    if (snapMode !== "normal") {
      onPositionCommit(id, { snapMode });
      onPreviewChange(null);
      return;
    }

    const snappedX = Math.round(info.point.x / GRID_SIZE) * GRID_SIZE;
    const snappedY = Math.round(info.point.y / GRID_SIZE) * GRID_SIZE;

    onPositionCommit(id, {
      x: Math.max(20, snappedX),
      y: Math.max(80, snappedY),
      snapMode: "normal",
    });
    onPreviewChange(null);
  };

  const onDrag = (_, info) => {
    if (!dragEnabled) return;
    const mode = detectSnapMode(info.point);
    onPreviewChange(mode === "normal" ? null : mode);
  };

  return (
    <motion.div
      drag={dragEnabled}
      dragMomentum={false}
      dragElastic={0.08}
      dragListener={dragEnabled}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      initial={{ opacity: 0, scale: 0.95, x: state.x, y: state.y }}
      animate={{
        opacity: 1,
        scale: 1,
        x: isSnapped ? snapLayout?.x ?? state.x : state.x,
        y: isSnapped ? snapLayout?.y ?? state.y : state.y,
      }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.22 }}
      onMouseDown={() => onFocus(id)}
      className="absolute"
      style={{ zIndex }}
    >
      <div
        className="w-[min(92vw,860px)] overflow-hidden rounded-2xl border border-white/15 bg-white/78 shadow-[0_30px_70px_rgba(2,6,23,0.35)] backdrop-blur-2xl dark:bg-slate-950/78"
        style={snapLayout ? { width: `${snapLayout.width}px`, height: `${snapLayout.height}px` } : undefined}
      >
        <div className="flex h-11 cursor-move items-center justify-between border-b border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-200 px-4 dark:border-white/10 dark:from-slate-800 dark:to-slate-900">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-3 w-3 rounded-full bg-[#ff5f57]"
              aria-label={`Close ${meta.title}`}
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
            />
            <button
              type="button"
              className="h-3 w-3 rounded-full bg-[#febc2e]"
              aria-label={`Minimize ${meta.title}`}
              onClick={(e) => {
                e.stopPropagation();
                onMinimize(id);
              }}
            />
            <button
              type="button"
              className="h-3 w-3 rounded-full bg-[#28c840]"
              aria-label={`${state.snapMode === "fullscreen" ? "Restore" : "Maximize"} ${meta.title}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleMaximize(id);
              }}
            />
          </div>
          <p className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">{meta.title}</p>
          <div className="w-10" aria-hidden="true" />
        </div>

        <div className="max-h-[70vh] overflow-auto p-5 sm:p-6" style={bodyHeight ? { maxHeight: `${bodyHeight}px` } : undefined}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const Dock = ({ openWindow, openIds, focusedId, hoveredIndex, setHoveredIndex, bounceId, isMobile }) => {
  return (
    <div className={`fixed z-50 ${isMobile ? "bottom-3 left-3 right-3" : "bottom-4 left-1/2 -translate-x-1/2 px-3 sm:bottom-5"}`}>
      <div className={`flex ${isMobile ? "justify-between" : "items-end"} gap-2 overflow-x-auto rounded-2xl border border-white/20 bg-white/14 px-3 py-2 backdrop-blur-2xl dark:bg-slate-900/50`}>
        {APP_ORDER.map((id, index) => {
          const isOpen = openIds.includes(id);
          const isFocused = focusedId === id;
          const distance = hoveredIndex == null ? 99 : Math.abs(hoveredIndex - index);
          const hoverScale = distance === 0 ? 1.35 : distance === 1 ? 1.2 : distance === 2 ? 1.08 : 1;
          const shouldBounce = bounceId === id;

          return (
            <motion.button
              key={id}
              type="button"
              onClick={() => openWindow(id)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={isMobile ? undefined : { y: -8 }}
              className={`group relative flex flex-col items-center justify-end ${isMobile ? "min-w-[58px]" : ""}`}
              aria-label={`Open ${appMeta[id].title}`}
              title={appMeta[id].label}
            >
              <motion.div
                animate={{
                  scale: isFocused ? Math.max(1.2, hoverScale) : isOpen ? Math.max(1.08, hoverScale) : hoverScale,
                  y: shouldBounce ? [0, -14, 0, -6, 0] : 0,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <MacIcon type={id} />
              </motion.div>
              <span
                className="mt-2 h-1.5 w-1.5 rounded-full bg-white/90"
                style={{ opacity: isOpen ? 1 : 0 }}
                aria-hidden="true"
              />
              <span className={`pointer-events-none ${isMobile ? "mt-1 text-[10px] text-white/90 opacity-100" : "absolute -top-7 rounded-md bg-slate-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900"}`}>
                {appMeta[id].label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

const ThemeSwitch = ({ isDark, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed right-4 top-4 z-50 rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-xs font-semibold text-slate-100 backdrop-blur-xl transition-colors hover:bg-white/20 dark:text-slate-100"
      aria-label="Toggle theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

const SnapPreview = ({ mode }) => {
  if (!mode) return null;
  const layout = getSnapLayout(mode);
  if (!layout) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      className="pointer-events-none absolute z-10 rounded-2xl border border-blue-300/65 bg-blue-400/18 backdrop-blur-sm dark:border-blue-300/35 dark:bg-blue-500/14"
      style={{
        left: layout.x,
        top: layout.y,
        width: layout.width,
        height: layout.height,
      }}
    />
  );
};

const MobileWindow = ({ id, onClose, onMinimize, children }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/78 shadow-[0_18px_50px_rgba(2,6,23,0.35)] backdrop-blur-2xl dark:bg-slate-950/78">
        <div className="flex h-11 items-center justify-between border-b border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-200 px-4 dark:border-white/10 dark:from-slate-800 dark:to-slate-900">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-3 w-3 rounded-full bg-[#ff5f57]"
              aria-label={`Close ${appMeta[id].title}`}
              onClick={() => onClose(id)}
            />
            <button
              type="button"
              className="h-3 w-3 rounded-full bg-[#febc2e]"
              aria-label={`Minimize ${appMeta[id].title}`}
              onClick={() => onMinimize(id)}
            />
            <span className="h-3 w-3 rounded-full bg-[#28c840] opacity-70" aria-hidden="true" />
          </div>
          <p className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">{appMeta[id].title}</p>
          <div className="w-10" aria-hidden="true" />
        </div>

        <div className="max-h-[calc(100vh-300px)] overflow-auto p-4">{children}</div>
      </div>
    </motion.div>
  );
};

const MacDesktopPortfolio = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });

  const [openWindows, setOpenWindows] = useState([]);
  const [focusedId, setFocusedId] = useState(null);
  const [windowOrder, setWindowOrder] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [bounceId, setBounceId] = useState(null);
  const [snapPreviewMode, setSnapPreviewMode] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [mobileActiveApp, setMobileActiveApp] = useState(null);
  const [windowState, setWindowState] = useState(() =>
    APP_ORDER.reduce((acc, id) => {
      acc[id] = {
        x: INITIAL_POSITION[id].x,
        y: INITIAL_POSITION[id].y,
        minimized: false,
        snapMode: "normal",
      };
      return acc;
    }, {})
  );

  const visibleWindows = useMemo(
    () => openWindows.filter((id) => !windowState[id]?.minimized),
    [openWindows, windowState]
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMobileActiveApp(null);
    }
  }, [isMobile]);

  const openWindow = (id) => {
    setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setWindowState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        minimized: false,
      },
    }));
    if (isMobile) {
      setMobileActiveApp(id);
    }
    setFocusedId(id);
    setWindowOrder((prev) => [...prev.filter((item) => item !== id), id]);
    setBounceId(id);
    window.setTimeout(() => setBounceId(null), 700);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((item) => item !== id));
    setWindowOrder((prev) => prev.filter((item) => item !== id));
    setFocusedId((prev) => (prev === id ? null : prev));
    setMobileActiveApp((prev) => (prev === id ? null : prev));
  };

  const minimizeWindow = (id) => {
    setWindowState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        minimized: true,
      },
    }));
    setFocusedId((prev) => (prev === id ? null : prev));
    setMobileActiveApp((prev) => (prev === id ? null : prev));
    setBounceId(id);
    window.setTimeout(() => setBounceId(null), 700);
  };

  const toggleMaximize = (id) => {
    setWindowState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        snapMode: prev[id].snapMode === "fullscreen" ? "normal" : "fullscreen",
        minimized: false,
      },
    }));
    focusWindow(id);
  };

  const commitPosition = (id, nextPos) => {
    setWindowState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        x: nextPos.x ?? prev[id].x,
        y: nextPos.y ?? prev[id].y,
        snapMode: nextPos.snapMode ?? prev[id].snapMode,
      },
    }));
  };

  const focusWindow = (id) => {
    setFocusedId(id);
    setWindowOrder((prev) => [...prev.filter((item) => item !== id), id]);
  };

  const zIndexFor = (id) => 20 + windowOrder.indexOf(id);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#e7edf8] via-[#d7e6ff] to-[#c7d5f2] font-sans text-slate-900 dark:from-[#070a11] dark:via-[#0f1624] dark:to-[#04060c] dark:text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 14%, rgba(14,165,233,0.28), transparent 32%), radial-gradient(circle at 78% 10%, rgba(37,99,235,0.22), transparent 30%), radial-gradient(circle at 60% 72%, rgba(16,185,129,0.18), transparent 35%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <ThemeSwitch isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />

      <div className="relative z-20 mx-3 mt-3 flex h-8 items-center justify-between rounded-xl border border-white/25 bg-white/30 px-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/35 sm:mx-6 sm:px-4">
        <p className="text-[11px] font-semibold tracking-wide text-slate-700 dark:text-slate-300">PortfolioOS</p>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">Dhivanujan Nesiah</p>
      </div>

      <div className={`relative w-full ${isMobile ? "min-h-screen px-3 pb-32 pt-14" : "h-[calc(100vh-44px)] overflow-hidden px-3 pt-10 sm:px-6"}`}>
        <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`w-full max-w-5xl rounded-[28px] border border-white/25 bg-white/16 p-4 backdrop-blur-2xl dark:bg-slate-900/35 ${isMobile ? "mt-0" : "mt-4 p-6"}`}
          >
            <div className={`grid items-center gap-5 ${isMobile ? "grid-cols-1" : "md:grid-cols-[1.3fr_1fr]"}`}>
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-semibold text-slate-50">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI / Cloud / DevOps Engineer
                </p>
                <h1 className={`mt-3 font-bold leading-tight text-white ${isMobile ? "text-2xl" : "text-3xl sm:text-4xl"}`}>
                  Dhivanujan Nesiah
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-100/90">
                  Crafting intelligent and resilient software systems with strong focus on production readiness,
                  scalability, and secure cloud-native delivery.
                </p>
              </div>
              <div className={`flex ${isMobile ? "justify-start" : "justify-center md:justify-end"}`}>
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`relative overflow-hidden rounded-[26px] border border-white/35 bg-slate-900/60 shadow-[0_20px_60px_rgba(2,6,23,0.55)] ${isMobile ? "h-40 w-32" : "h-52 w-44"}`}
                >
                  <img src={profile} alt="Dhivanujan portrait" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {isMobile ? (
          <div className="relative z-20 mt-64 sm:mt-72">
            <AnimatePresence mode="wait">
              {mobileActiveApp ? (
                <MobileWindow id={mobileActiveApp} onClose={closeWindow} onMinimize={minimizeWindow}>
                  <WindowContent id={mobileActiveApp} />
                </MobileWindow>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="rounded-2xl border border-white/20 bg-white/15 p-5 text-center backdrop-blur-xl"
                >
                  <p className="text-sm font-medium text-slate-100">Tap an app in the dock to open your portfolio sections.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <>
            <AnimatePresence>
              <SnapPreview mode={snapPreviewMode} />

              {visibleWindows.map((id) => (
                <DesktopWindow
                  key={id}
                  id={id}
                  zIndex={zIndexFor(id)}
                  state={windowState[id]}
                  onFocus={focusWindow}
                  onClose={closeWindow}
                  onMinimize={minimizeWindow}
                  onToggleMaximize={toggleMaximize}
                  onPositionCommit={commitPosition}
                  onPreviewChange={setSnapPreviewMode}
                >
                  <WindowContent id={id} />
                </DesktopWindow>
              ))}
            </AnimatePresence>

            {visibleWindows.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <p className="rounded-xl border border-white/20 bg-white/15 px-5 py-3 text-sm font-medium text-slate-100 backdrop-blur-xl dark:text-slate-200">
                  Open an app from the Dock to explore the portfolio.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Dock
        openWindow={openWindow}
        openIds={openWindows}
        focusedId={focusedId}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
        bounceId={bounceId}
        isMobile={isMobile}
      />
    </div>
  );
};

export default MacDesktopPortfolio;
