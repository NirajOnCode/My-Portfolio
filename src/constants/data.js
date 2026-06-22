export const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

export const TYPED_ROLES = [
  "Frontend Developer",
  "Aspiring Full Stack Developer",
  "UI/UX Enthusiast",
  "Fresher",
];

export const SKILLS = {
  Languages: ["JavaScript (ES6+)", "Java", "HTML5", "CSS3", "SQL"],
  "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Tailwind CSS", "GSAP", "Bootstrap"],
  Databases: ["SQL (DBMS)", "MySQL"],
  "Tools & Others": ["Git", "GitHub", "REST APIs", "VS Code", "Responsive Design"],
  "Core Subjects": ["DSA", "OOPs", "OS", "DBMS"],
};

export const EXPERIENCE = {
  role: "MERN Stack Intern",
  company: "Solitaire Infosys Pvt. Ltd.",
  location: "Mohali, Punjab",
  period: "Jan 2026 – Present",
  points: [
    "Developed responsive web applications and reusable UI components using React.js and modern JavaScript (ES6+), collaborating with designers and backend engineers on REST API integration and production-ready debugging.",
    "Contributed as a core team member on Charge Share, a peer-to-peer EV charging platform — engineered the complete booking-to-payment lifecycle with wallet pre-auth holds, real-time session tracking, and Supabase Realtime for host notifications.",
    "Implemented OTP-based mobile authentication, an interactive Leaflet.js map for real-time charger availability, a host dashboard, and Row-Level Security (RLS) for data privacy — solving India-specific EV infrastructure gaps.",
  ],
};

export const PROJECTS = [
  {
    title: "EV Charge Share Platform",
    stack: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Leaflet.js"],
    period: "Mar 2026 – Present",
    points: [
      "Peer-to-peer EV charging platform connecting EV drivers with home chargers across India, targeting infrastructure gaps in Tier-2 cities.",
      "Supabase Realtime host approval notifications and Row-Level Security for data privacy.",
      "Booking-to-payment lifecycle with wallet pre-auth holds, real-time session tracking, and automatic settlement.",
      "Interactive Leaflet.js + OpenStreetMap map with real-time charger availability markers.",
    ],
    github: "https://github.com/NirajOnCode",
    live: "https://charge-share-eight.vercel.app",
  },
  {
    title: "Employee Management System",
    stack: ["React.js", "Tailwind CSS", "Local Storage"],
    period: "Jan 2026 – Feb 2026",
    points: [
      "Full CRUD employee management app (Add, Edit, Delete, View) with React state management.",
      "Dashboard with search, pagination, and filters for efficient data navigation.",
      "Built with React Hooks (useState, useEffect, useContext, useRef) and localStorage persistence — no backend.",
    ],
    github: "https://github.com/NirajOnCode",
    live: "https://employee-management-system-blue-zeta.vercel.app",
  },
  {
    title: "3D Interactive Website",
    stack: ["React.js", "Tailwind CSS", "GSAP", "Three.js"],
    period: "Jun 2025 – Jul 2025",
    points: [
      "Immersive 3D brand experience with interactive models, scroll-driven GSAP animation, and smooth adaptive camera transitions.",
      "Dynamic lighting, texture mapping, and optimized rendering with React Three Fiber.",
    ],
    github: "https://github.com/NirajOnCode",
    live: "https://3-d-animation-website-bice.vercel.app",
  },
  {
    title: "Weather Checker Website",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    period: "Jul 2024 – Aug 2024",
    points: [
      "Real-time weather dashboard fetching live data for any city via a public REST API.",
      "Clean, responsive UI with input validation and robust error handling.",
    ],
    github: "https://github.com/NirajOnCode",
    live: "https://weather-checker-site.vercel.app",
  },
  {
    title: "Indian Tourism Website",
    stack: ["HTML", "CSS", "JavaScript"],
    period: "Jan 2023 – Mar 2023",
    points: [
      "Visually engaging tourism platform showcasing India's top destinations with smooth scroll effects and responsive layouts.",
    ],
    github: "https://github.com/NirajOnCode",
    live: "https://indian-tourism-site.vercel.app",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Information Technology",
    school: "Rayat Bahra Professional University, Hoshiarpur, Punjab",
    period: "2022 – 2026",
    score: "CGPA 7.0",
  },
  {
    degree: "Senior Secondary",
    school: "S.D Senior Secondary School, Hoshiarpur, Punjab",
    period: "2022",
    score: "79.5%",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Java & SQL (Core Java and Database using MySQL)",
    issuer: "RBIENT, Mohali Career Point",
    year: "2023",
  },
  {
    title: "Cloud Computing Training",
    issuer: "Alpha School of Rayat Bahra Group (RBIENT)",
    year: "2023",
  },
];

export const CONTACT = {
  email: "niraj99155@gmail.com",
  phone: "+91-8699002686",
  github: "https://github.com/NirajOnCode",
  linkedin: "https://linkedin.com/in/niraj-kumar-60796831a",
};
