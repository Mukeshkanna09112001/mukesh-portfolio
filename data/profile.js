export const profile = {
  name: "Mukesh Kanna R",
  role: "Full-stack developer",
  intro:
    "I build healthcare and multi-tenant SaaS platforms with React, Next.js and Node.js. Right now that means an EMR used by clinics in the UAE, built to Abu Dhabi regulatory standards.",
  about: [
    "Over three years I've shipped production apps for medical colleges, diagnostic labs, schools and hospitals. Most of that work sits where data has to be kept separate and access has to be exact: role-based permissions, per-tenant query scoping, and health records that must pass regulatory review.",
    "I work with AI tools as a pair programmer. Claude Code, Cursor and Copilot help me move faster on scaffolding, refactoring and documentation, and every change still goes through my own review for correctness and security.",
  ],
  email: "mukeshkanna09112001@gmail.com",
  phone: "+91 93444 05638",
  linkedin: "https://www.linkedin.com/in/mukesh-kanna-r-951936210",
  resume: "/Mukesh_Kanna_R_Resume.pdf",
  location: "India",
};

export const experience = [
  {
    role: "Full Stack Engineer",
    company: "Neurula Technologies",
    dates: "May 2026 – Present",
    current: true,
    points: [
      "Building core modules of the EMR platform and its UAE / Abu Dhabi regulatory compliance features.",
      "Shipping full-stack features with React.js, Next.js and Node.js.",
      "Using Claude Code for agentic development and refactoring to cut turnaround on feature and integration work.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "TechParrot Innovations LLP",
    dates: "Dec 2025 – May 2026",
    points: [
      "Architected Vidhyaan, a multi-tenant EdTech platform with RBAC, JWT auth and isolated data per institution.",
      "Built fee management, student enrollment and analytics dashboards with React, Next.js, Express and MySQL.",
      "Designed REST APIs with secure per-institution data handling.",
    ],
  },
  {
    role: "Application Developer",
    company: "Aspigrow Technologies",
    dates: "Jul 2023 – Nov 2025",
    points: [
      "Built three production apps — IntegrityCE, Med Marshal and Health Marshal — across healthcare and edtech.",
      "Implemented JWT authentication, RBAC and REST APIs; integrated Strapi CMS for content management.",
      "Designed reusable Tailwind CSS components and admin dashboards for real-time monitoring.",
    ],
  },
];

export const projects = [
  {
    name: "Neurula Healthcare EMR",
    summary: "Electronic medical record platform serving healthcare facilities in the UAE, built to Abu Dhabi regulatory standards.",
    current: true,
    points: [
      "Role-based dashboards for nurses, doctors and admins, each shaped around that role's daily workflow.",
      "Designing and documenting the Finance & Accounting module.",
      "HL7 / Malaffi integration for school health screening forms, as part of Abu Dhabi compliance work.",
      "Python scripts for data processing and HL7 message integration.",
    ],
    ai: {
      tools: "Claude Code, Claude, GitHub Copilot",
      how: "Claude Code in VS Code for agentic feature work, codebase exploration, refactoring and HL7 message mapping. AI drafts of technical and compliance documentation, which I review and finalise.",
    },
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "Python", "HL7", "JWT", "RBAC", "Tailwind CSS"],
  },
  {
    name: "Vidhyaan",
    summary: "Multi-tenant EdTech platform for admissions, fee management and institutional analytics.",
    points: [
      "Multi-tenant architecture with isolated data access for each of 80+ institutions.",
      "JWT auth and RBAC for super admin, institution admin, staff and student roles.",
      "Admission, fee management and analytics dashboard modules.",
      "MySQL schema and REST APIs with per-tenant query scoping.",
    ],
    ai: {
      tools: "Claude, Cursor, GitHub Copilot",
      how: "Prototyped modules quickly with vibe-coding workflows, had AI review multi-tenant query logic for data-leak risks, and generated SQL migrations and API docs.",
    },
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "JWT", "RBAC"],
  },
  {
    name: "Med Marshal",
    summary: "Multi-lab platform with central doctor and patient management, appointments, revenue and inventory tracking.",
    points: [
      "Mongoose schemas for labs, doctors, patients, appointments and inventory.",
      "Appointment scheduling and patient records built end to end: UI, APIs and database.",
      "MongoDB aggregation pipelines behind the revenue and inventory dashboards.",
      "REST APIs for central management across multiple labs.",
    ],
    ai: {
      tools: "GitHub Copilot, ChatGPT, Cursor",
      how: "Drafted and optimised complex aggregation pipelines, generated API test cases, and prototyped dashboard components.",
    },
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    name: "IntegrityCE",
    summary: "Examination and academic portal for a medical college, with an SSR admin panel and Strapi-managed content.",
    points: [
      "SSR admin panel in Next.js and TypeScript for exam scheduling, results and academic content.",
      "35+ REST APIs in Node.js / Express backed by MySQL.",
      "Strapi CMS so non-technical staff can update content without a deployment.",
      "JWT auth with RBAC for admin, faculty and student roles.",
    ],
    ai: {
      tools: "GitHub Copilot, ChatGPT",
      how: "Scaffolded Express routes and TypeScript interfaces, generated Strapi content-type configs, and debugged SSR hydration issues with AI pair programming.",
    },
    tech: ["Next.js (SSR)", "TypeScript", "Node.js", "Express.js", "MySQL", "Strapi CMS", "Tailwind CSS"],
  },
];

export const skills = [
  ["Frontend", "React.js, Next.js (SSR, SSG, Server Actions), Vue.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Redux, Context API"],
  ["Backend", "Node.js, Express.js, Python, REST API design, MVC, microservices, middleware"],
  ["Databases", "MongoDB, Mongoose, MySQL, aggregation pipelines, schema design"],
  ["Auth & security", "JWT, role-based access control, multi-tenant architecture"],
  ["Healthcare", "HL7, Malaffi (Abu Dhabi HIE), EMR regulatory compliance"],
  ["Cloud", "AWS EC2, AWS S3"],
  ["AI-assisted dev", "Claude Code, Cursor, GitHub Copilot, ChatGPT, agentic coding workflows"],
  ["Tools", "Git, GitHub, Postman, Strapi CMS, JIRA, Trello, VS Code, Agile / Scrum"],
];

export const education = [
  { title: "B.E. Computer Science and Engineering", place: "Muthayammal Engineering College", dates: "2019 – 2023" },
  { title: "HSC", place: "Vedhha Vikass Boys Higher Secondary School", dates: "2018 – 2019" },
  { title: "SSLC", place: "S.R.V Boys Higher Secondary School", dates: "2016 – 2017" },
];

export const certifications = [
  { title: "Getting Started with DevOps on AWS", place: "Amazon Web Services" },
  { title: "Complete Git and GitHub Course", place: "Udemy" },
];
