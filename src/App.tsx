/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Instagram,
  BookOpen,
  Youtube,
  ArrowLeft,
  Calendar,
  Clock
} from 'lucide-react';

// --- Data ---
const EXPERIENCE = [
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

const PROJECTS = [
  { title: "Decentralized Voting App", category: "Web3", image: "https://picsum.photos/seed/web3/800/600", url: "https://github.com/Gusma-crypto" },
  { title: "Proxmox Cluster VE", category: "Infrastructure", image: "https://picsum.photos/seed/proxmox/800/600", url: "https://github.com/Gusma-crypto" },
  { title: "MikroTik Hotspot System", category: "Networking", image: "https://picsum.photos/seed/mikrotik/800/600", url: "https://github.com/Gusma-crypto" },
  { title: "Next.js SaaS Platform", category: "Full-Stack", image: "https://picsum.photos/seed/saas/800/600", url: "https://github.com/Gusma-crypto" },
  { title: "Starlink Remote Setup", category: "Networking", image: "https://picsum.photos/seed/starlink/800/600", url: "https://github.com/Gusma-crypto" },
  { title: "Smart Contract Audit Tool", category: "Web3", image: "https://picsum.photos/seed/audit/800/600", url: "https://github.com/Gusma-crypto" },
];

const CATEGORIES = ["All", "Web3", "Full-Stack", "Networking", "Infrastructure"];
const BLOG_CATEGORIES = ["All", "Web3", "Infrastructure", "Networking", "Tutorial"];

const BLOG_POSTS = [
  {
    id: 'hybrid-it',
    title: "Membangun Infrastruktur Hybrid IT di 2026",
    excerpt: "Infrastruktur hybrid IT kini menjadi standar bagi perusahaan yang ingin menggabungkan fleksibilitas cloud dengan kontrol on-premise.",
    date: "March 1, 2026",
    readTime: "5 min read",
    category: "Infrastructure",
    image: "https://picsum.photos/seed/hybrid/800/400",
    file: "/posts/hybrid-it.md"
  },
  {
    id: 'web3-voting',
    title: "Masa Depan Web3 dan Decentralized Voting",
    excerpt: "Web3 bukan hanya tentang crypto, tapi tentang kedaulatan digital. Salah satu implementasi paling menarik adalah sistem voting terdesentralisasi.",
    date: "February 25, 2026",
    readTime: "7 min read",
    category: "Web3",
    image: "https://picsum.photos/seed/voting/800/400",
    file: "/posts/web3-voting.md"
  }
];

// --- Components ---

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="bg-card rounded-[32px] p-8 border border-border card-shadow sticky top-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-zinc-800 border-2 border-accent/20">
            <img 
              src="https://i.ibb.co.com/LhRj0h0t/a.jpg" 
              alt="Agus Sulistiono" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">Agus Sulistiono</h1>
          <div className="bg-zinc-800/50 px-4 py-1.5 rounded-xl text-xs font-medium text-muted mb-6 text-center">
            Hybrid IT Infrastructure & <br /> Web3 Developer
          </div>

          <div className="flex justify-center gap-5 mb-8">
            <a href="https://github.com/Gusma-crypto" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/agus-sulistiono-591747119/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:scale-110 transition-transform"><Linkedin size={20} /></a>
            <a href="https://x.com/arcmentos" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:scale-110 transition-transform"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/agusst_official/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:scale-110 transition-transform"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@gusmakreatif" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:scale-110 transition-transform"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="space-y-6 pt-6 border-t border-border">
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <Mail size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Email</p>
              <p className="text-sm truncate">agussulistionox@gmail.com</p>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/agus-sulistiono-591747119/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <Linkedin size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Linkedin</p>
              <p className="text-sm truncate">linkedin.com/in/agus-sulistiono...</p>
            </div>
          </a>

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <MapPin size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Location</p>
              <p className="text-sm">Bandar Lampung, Lampung Regency</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBlogCategory, setActiveBlogCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [postContent, setPostContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedPost) {
      const post = BLOG_POSTS.find(p => p.id === selectedPost);
      if (post) {
        setIsLoading(true);
        fetch(post.file)
          .then(res => res.text())
          .then(text => {
            setPostContent(text);
            setIsLoading(false);
          })
          .catch(err => {
            console.error("Failed to load post:", err);
            setIsLoading(false);
          });
      }
    }
  }, [selectedPost]);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const filteredPosts = activeBlogCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeBlogCategory);

  return (
    <main className="flex-1 min-w-0">
      <div className="bg-card rounded-[32px] border border-border card-shadow min-h-full overflow-hidden">
        {/* Navigation */}
        <div className="flex justify-center p-6 border-b border-border bg-zinc-900/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-batik opacity-20 pointer-events-none"></div>
          <nav className="flex gap-8 relative z-10">
            {['About', 'Portfolio', 'Blog', 'Contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedPost(null);
                }}
                className={`text-sm font-semibold transition-colors ${activeTab === tab ? 'text-accent' : 'text-muted hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="p-8 lg:p-12">
          <AnimatePresence mode="wait">
            {activeTab === 'About' && (
              <motion.section
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">About Me</h2>
                  <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
                  <h3 className="text-xl font-bold text-white mb-2">Hybrid IT Infrastructure & Web3 Developer</h3>
                  <p className="text-accent italic text-sm">"Bridging the gap between physical networks and decentralized innovation."</p>
                </div>

              <div className="space-y-6 text-muted leading-relaxed mb-12">
                <p>
                  I am a versatile IT Professional with a decade of evolution in the tech landscape. My journey began in <strong>Educational Data Management (2016)</strong>, transitioned into <strong>Satellite Network Engineering (VSAT/Starlink)</strong>, and has now converged into <strong>Full-Stack & Web3 Development</strong>.
                </p>
                <p>
                  I specialize in creating holistic technical ecosystems. I don’t just write code; I understand the entire lifecycle of data—from how it flows through <strong>MikroTik</strong> networks and stays secured on <strong>Proxmox</strong> virtualization, to how it interacts with <strong>Smart Contracts</strong> on the blockchain. Since 2025, I have been deep-diving into the <strong>Web3 ecosystem</strong>, mastering <strong>Rust</strong> and <strong>Solidity</strong> to build the next generation of decentralized applications.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center text-accent">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-2xl font-bold">Technical Stack</h3>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-900/50 text-muted uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 py-4 font-bold">Category</th>
                        <th className="px-6 py-4 font-bold">Technologies</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">Web3 (2025+)</td>
                        <td className="px-6 py-4 text-muted">Solidity, Rust (Stylus), Wagmi, Smart Contracts</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">Development</td>
                        <td className="px-6 py-4 text-muted">Next.js, React.js, Laravel, Java, C++, PHP, JavaScript</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">Networking</td>
                        <td className="px-6 py-4 text-muted">MikroTik, Starlink, VSAT, ZeroTier</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">Infrastructure</td>
                        <td className="px-6 py-4 text-muted">Proxmox VE, Docker, Nextcloud, Cloudflare Tunnel, Git</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center text-accent">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>

                <div className="relative pl-8 space-y-12">
                  <div className="timeline-line"></div>
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="relative">
                      <div className="timeline-dot"></div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                        <p className="text-sm text-muted font-medium">{exp.company}</p>
                        <p className="text-xs font-bold text-accent uppercase tracking-wider">{exp.period}</p>
                        <ul className="space-y-1 pt-2">
                          {exp.description.map((item, j) => (
                            <li key={j} className="text-sm text-muted flex items-start gap-2">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 p-8 rounded-3xl bg-zinc-900/50 border border-border text-center">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">LET'S COLLABORATE</h3>
                <p className="text-muted italic mb-8">"I build the code and the infrastructure that powers it."</p>
                <div className="flex flex-wrap justify-center gap-8">
                  <a href="mailto:agussulistionoa0@gmail.com" className="text-accent font-bold hover:underline flex items-center gap-2">
                    <Mail size={16} /> Email Me
                  </a>
                  <a href="https://www.linkedin.com/in/agus-sulistiono-591747119/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] font-bold hover:underline flex items-center gap-2">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href="https://github.com/Gusma-crypto" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline flex items-center gap-2">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="https://x.com/arcmentos" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] font-bold hover:underline flex items-center gap-2">
                    <Twitter size={16} /> Twitter
                  </a>
                  <a href="https://www.instagram.com/agusst_official/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] font-bold hover:underline flex items-center gap-2">
                    <Instagram size={16} /> Instagram
                  </a>
                  <a href="https://www.youtube.com/@gusmakreatif" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] font-bold hover:underline flex items-center gap-2">
                    <Youtube size={16} /> YouTube
                  </a>
                </div>
              </div>
              </motion.section>
            )}

            {activeTab === 'Portfolio' && (
              <motion.section
                key="portfolio"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>

              {/* Filter Categories */}
              <div className="flex flex-wrap gap-6 mb-10">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm font-medium transition-colors ${activeCategory === cat ? 'text-accent' : 'text-muted hover:text-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, i) => (
                  <motion.a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group block"
                  >
                    <div className="relative aspect-[1.4] rounded-2xl overflow-hidden mb-4 bg-zinc-800 border border-border">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white">
                          <BookOpen size={20} />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors">{project.title}</h4>
                    <p className="text-xs text-muted">{project.category}</p>
                  </motion.a>
                ))}
              </div>
              </motion.section>
            )}

            {activeTab === 'Blog' && (
              <motion.section
                key="blog"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {!selectedPost ? (
                  <>
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-4">Blog</h2>
                        <div className="w-12 h-1 bg-accent rounded-full"></div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        {BLOG_CATEGORIES.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setActiveBlogCategory(cat)}
                            className={`text-sm font-medium transition-colors ${activeBlogCategory === cat ? 'text-accent' : 'text-muted hover:text-white'}`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredPosts.map((post, i) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => setSelectedPost(post.id)}
                          className="group rounded-2xl bg-zinc-900/50 border border-border overflow-hidden hover:border-accent/50 transition-all cursor-pointer flex flex-col"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-accent text-[10px] font-bold uppercase tracking-wider border border-white/10">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 mb-3 text-[10px] text-muted uppercase tracking-widest font-bold">
                              <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                              <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                            <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                            <div className="mt-auto">
                              <span className="text-accent text-xs font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read Article <BookOpen size={14} />
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="max-w-none">
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm font-bold"
                    >
                      <ArrowLeft size={16} /> Back to Blog
                    </button>
                    
                    {isLoading ? (
                      <div className="flex items-center justify-center py-20">
                        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-none"
                      >
                        {BLOG_POSTS.find(p => p.id === selectedPost) && (
                          <div className="mb-10">
                            <div className="relative h-[300px] md:h-[400px] rounded-[32px] overflow-hidden mb-8 border border-border">
                              <img 
                                src={BLOG_POSTS.find(p => p.id === selectedPost)?.image} 
                                alt="Hero"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                              <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-4 mb-4">
                                  <span className="px-3 py-1 rounded-lg bg-accent text-white text-[10px] font-bold uppercase tracking-wider">
                                    {BLOG_POSTS.find(p => p.id === selectedPost)?.category}
                                  </span>
                                  <div className="flex items-center gap-4 text-[10px] text-white/80 uppercase tracking-widest font-bold">
                                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {BLOG_POSTS.find(p => p.id === selectedPost)?.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={12} /> {BLOG_POSTS.find(p => p.id === selectedPost)?.readTime}</span>
                                  </div>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                  {BLOG_POSTS.find(p => p.id === selectedPost)?.title}
                                </h1>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="markdown-body prose prose-invert prose-accent max-w-none">
                          <ReactMarkdown>{postContent}</ReactMarkdown>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.section>
            )}

            {activeTab === 'Contact' && (
              <motion.section
                key="contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-muted mb-8 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-accent">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase font-bold tracking-wider">Email</p>
                        <a href="mailto:agussulistionox@gmail.com" className="text-sm hover:text-accent transition-colors">agussulistionox@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-accent">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase font-bold tracking-wider">Location</p>
                        <p className="text-sm">Bandar Lampung, Lampung Regency</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form 
                  action="https://formspree.io/f/agussulistionox@gmail.com" 
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full name" 
                      required
                      className="w-full bg-zinc-800/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email address" 
                      required
                      className="w-full bg-zinc-800/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <textarea 
                    name="message"
                    placeholder="Your message" 
                    rows={5}
                    required
                    className="w-full bg-zinc-800/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/80 transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-zinc-900/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-batik opacity-80 pointer-events-none"></div>
        </div>
      </div>
    </main>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background p-6 lg:p-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
