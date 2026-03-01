import { ExperienceItem, ProjectItem, ProfileData } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "IT Support Specialist & Network Engineer",
    company: "Infrastructure & Network Specialist",
    period: "2020 – Present",
    description: [
      "Infrastructure: Expertly manage MikroTik and Starlink integrations to ensure 99.9% connectivity uptime for critical operations.",
      "Virtualization: Deploy and maintain Proxmox VE environments to optimize server resources and scalability.",
      "Cloud & Security: Implement Nextcloud for private data sovereignty, and Cloudflare Tunnel & ZeroTier for secure, encrypted remote access.",
      "Data Integrity: Oversee automated backup systems and application maintenance to guarantee business continuity."
    ]
  },
  {
    title: "Full-Stack & Web3 Developer (Freelance)",
    company: "Self-employed",
    period: "2019 – Present",
    description: [
      "Web3 Specialization (Active Deep-Dive): Developing Smart Contracts using Solidity and Rust (Stylus). Integrating decentralized front-ends with Wagmi and Ethers.js.",
      "Web2 Excellence: Building robust, responsive web applications using Next.js, React.js, Laravel, and CodeIgniter.",
      "End-to-End Delivery: Handling the full development cycle, from UI/UX prototyping to final server deployment and optimization."
    ]
  },
  {
    title: "Field Engineer",
    company: "CV Danenda Mega Pratama (Vendor Lintasarta)",
    period: "2018 – 2019",
    description: [
      "Satellite Systems: Managed on-site installation and maintenance of VSAT and wireless network equipment.",
      "SLA Management: Troubleshooting complex network issues in high-pressure environments to meet strict service level agreements."
    ]
  },
  {
    title: "School IT Administrator (Operator)",
    company: "2016 – 2017",
    period: "2016 – 2017",
    description: [
      "Data Management: Managed national education databases (Dapodik) and school information systems.",
      "Foundation: Established a strong foundation in database accuracy and administrative IT workflows within the education sector."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  { title: "Decentralized Voting App", category: "Web3", image: "/assets/images/voting-app.jpg", url: "https://github.com/Gusma-crypto" },
  { title: "Proxmox Cluster VE", category: "Infrastructure", image: "/assets/images/proxmox.jpg", url: "https://github.com/Gusma-crypto" },
  { title: "MikroTik Hotspot System", category: "Networking", image: "/assets/images/mikrotik.jpg", url: "https://github.com/Gusma-crypto" },
  { title: "Next.js SaaS Platform", category: "Full-Stack", image: "/assets/images/saas.jpg", url: "https://github.com/Gusma-crypto" },
  { title: "Starlink Remote Setup", category: "Networking", image: "/assets/images/starlink.jpg", url: "https://github.com/Gusma-crypto" },
  { title: "Smart Contract Audit Tool", category: "Web3", image: "/assets/images/audit.jpg", url: "https://github.com/Gusma-crypto" },
];

export const CATEGORIES = ["All", "Web3", "Full-Stack", "Networking", "Infrastructure"];

export const PROFILE_DATA: ProfileData = {
  name: "Agus Sulistiono",
  title: "Hybrid IT Infrastructure & Web3 Developer",
  tagline: "\"Bridging the gap between physical networks and decentralized innovation.\"",
  email: "agussulistionoa0@gmail.com",
  location: "Garut, West Java, Indonesia",
  linkedin: "https://www.linkedin.com/in/agus-sulistiono-591747119/",
  github: "https://github.com/Gusma-crypto",
  twitter: "https://x.com/arcmentos",
  instagram: "https://www.instagram.com/agusst_official/",
  youtube: "https://www.youtube.com/@gusmakreatif",
  profileImage: "https://i.ibb.co.com/LhRj0h0t/a.jpg"
};
