import { motion } from 'motion/react';
import { Terminal, Code, Database, Brain, Rocket, Construction, ArrowRight, Mail, MapPin, Github, Linkedin, MessageCircle, Phone, ExternalLink, ShieldCheck, Layers, RocketIcon, Trophy } from 'lucide-react';

// --- Components ---

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-background">
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Animated Lighting Glows */}
      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="lighting-glow -top-[10%] -left-[10%] bg-primary-green/20"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="lighting-glow -bottom-[10%] -right-[10%] bg-secondary-cyan/20"
      />

      {/* Stars/Dust Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 2000, 
            y: Math.random() * 2000,
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 1.5
          }}
          animate={{ 
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{ 
            duration: 3 + Math.random() * 5, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{ 
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/[0.02] backdrop-blur-xl border-b border-white/10">
    <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
      <div className="font-plus-jakarta text-2xl font-bold tracking-tighter text-white">
        HG<span className="text-primary-green">.</span>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {['STACK', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-jetbrains-mono text-xs font-bold text-on-surface-variant hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card px-6 py-2 rounded-xl font-jetbrains-mono text-xs font-bold text-primary-green border border-primary-green/20 hover:border-primary-green transition-all cursor-pointer shadow-[0_0_20px_rgba(99,102,241,0.1)]"
      >
        HIRE ME
      </motion.button>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6 lg:px-12">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-green/5 blur-[160px] rounded-full -z-10" />
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-3 lg:row-span-2 glass-card p-12 flex flex-col justify-center relative overflow-hidden group"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl group-hover:bg-primary-green/20 transition-all" />
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-green/20 bg-primary-green/5">
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            <span className="font-jetbrains-mono text-[10px] text-primary-green uppercase tracking-widest">Available for Freelance</span>
          </div>
          <h1 className="font-plus-jakarta text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-secondary-cyan">Future</span>, <br />One Line at a Time.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl">
            Delivering Premium Freelance Solutions as a Full-Stack Architect. Specializing in AI integrations and high-performance architectural systems.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-vibrant flex items-center gap-2 group"
            >
              VIEW PROJECTS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              DOWNLOAD CV
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:col-span-1 lg:row-span-1 glass-card p-4 relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700"
      >
        <img 
          alt="Harsh Gulia" 
          className="w-full h-full object-cover rounded-2xl" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uikJhLqXATbMCgCycpXlDfu6yOuparWL7PDZVXhsJJAs-XBKxaOWsTpg03GO5k55_LZ2cMS-5TQjGS_Jdg3Sbqdl9azelyMxeZK72spgc3t7F5aj0dMNNX8bX4sIb-rx22HvLkhWJ1KrcWeaXFL0_FN0_dUSitvu1UE0VRHaJ189bEkkAWNKomF6PuxzPLPaBKri91nPOuWcy3ewhSQgXxhw7abaPRcaghD6TkxRDDko02SqGZaXJpbKDArI0lQDE7Gvg87haACJw" 
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-1 lg:row-span-1 glass-card p-6 flex flex-col justify-center gap-4"
      >
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 bg-primary-green/10 rounded-xl flex items-center justify-center text-primary-green">
            <Rocket size={20} />
          </div>
          <span className="font-jetbrains-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Active Status</span>
        </div>
        <div className="text-xl font-bold text-white">Full-Stack Architect</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
          <span className="font-jetbrains-mono text-[10px] text-primary-green">Online & Ready</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { value: '100+', label: 'LEETCODE SOLVED', color: 'text-primary-green', icon: <Code size={20} />, trend: '+12 This Week' },
    { value: '7+', label: 'CERTIFICATIONS', color: 'text-secondary-cyan', icon: <ShieldCheck size={20} />, trend: 'Cloud Native' },
    { value: '98%', label: 'ACCURACY RATE', color: 'text-primary-green', icon: <Trophy size={20} />, trend: 'Top Percentile' },
    { value: '2+', label: 'PAID CLIENTS', color: 'text-secondary-cyan', icon: <Mail size={20} />, trend: 'Global Reach' },
  ];

  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between min-h-[180px] group"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 bg-zinc-800 rounded-2xl ${stat.color} group-hover:bg-zinc-700 transition-colors`}>
                  {stat.icon}
                </div>
                <span className="font-jetbrains-mono text-[8px] text-primary-green bg-primary-green/10 px-2 py-1 rounded-full uppercase tracking-tighter">{stat.trend}</span>
              </div>
              <div>
                <h3 className={`font-plus-jakarta text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
                <p className="font-jetbrains-mono text-[10px] text-on-surface-variant tracking-widest mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutStack = () => {
  const skills = [
    { title: 'LANGUAGES', icon: <Code size={20} />, tech: 'Python, Java, C++, JavaScript, HTML/CSS, SQL', color: 'text-primary-green' },
    { title: 'FRAMEWORKS', icon: <Terminal size={20} />, tech: 'React, React Native, Node.js, Express, Flask, MediaPipe', color: 'text-secondary-cyan' },
    { title: 'DATABASES', icon: <Database size={20} />, tech: 'MongoDB, MySQL, PostgreSQL, Redis', color: 'text-primary-green' },
    { title: 'AI / ML / OPS', icon: <Brain size={20} />, tech: 'Neural Networks, scikit-learn, TensorFlow, Git, Docker', color: 'text-secondary-cyan' },
    { title: 'DEVOPS / TOOLS', icon: <Rocket size={20} />, tech: 'AWS, Vercel, CI/CD, EAS Build, Postman, Selenium', color: 'text-primary-green' },
    { title: 'CONCEPTS', icon: <Construction size={20} />, tech: 'DSA, OOP, REST APIs, Web Automation, Agile', color: 'text-secondary-cyan' },
  ];

  return (
    <section id="stack" className="py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 lg:row-span-2 glass-card p-10 flex flex-col justify-between overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 blur-2xl" />
          <div className="space-y-6 relative z-10">
            <div className="inline-block px-4 py-1 glass-card border-secondary-cyan/30 rounded-full font-jetbrains-mono text-[10px] text-secondary-cyan">IDENTITY</div>
            <h2 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight">
              Engineering with <br /><span className="text-primary-green">Surgical Precision.</span>
            </h2>
            <p className="text-on-surface-variant text-lg">
              Independent consultant and architect building robust digital systems. My approach combines architectural excellence with cutting-edge AI implementation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8 relative z-10">
            {['ARCHITECT', 'CS ENGINEER', 'AI ENTHUSIAST'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-surface-variant rounded-full font-jetbrains-mono text-[10px] border border-white/5">{tag}</span>
            ))}
          </div>
        </motion.div>
        
        {skills.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 flex flex-col justify-between group hover:border-primary-green/30"
          >
            <div className={`p-2 w-fit bg-zinc-800 rounded-xl ${skill.color} mb-4`}>{skill.icon}</div>
            <div>
              <h4 className="font-jetbrains-mono text-[10px] font-bold tracking-widest text-zinc-300">{skill.title}</h4>
              <p className="font-jetbrains-mono text-[10px] text-on-surface-variant leading-relaxed mt-2">{skill.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'ISL Bridge',
      desc: 'Real-time Indian Sign Language translator achieving 96-98% accuracy using Dense Neural Networks and MediaPipe.',
      badge: 'ML / MOBILE',
      tags: ['REACT NATIVE', 'FLASK', 'TENSORFLOW'],
      img: 'https://lh3.googleusercontent.com/aida/ADBb0ujJ9iLdBFkr14FUNmg2P4CU-19VMJ4j-vYODOuIGEe17ChWXdHcF7oSGWv7bA-tUN7a3KWmJbRS7aVEmXO48wz1Ohq66eo0Oi7qyHsS_x8KnNHy_aQd1ebus0onetUBgKmwM8NOzfDcYZZfsJhjdRoBPMK4V6ZP3StG3LiVmOxMnQp_sf7GXPvcesnTsNlqM6XJO0O0BAhppjjf4izrrJ39m9DhYkgA3BvKzUAPcdIDaO0TPdzXTLHT1d16ohc31zJq6A3-Z5cSdQ',
      accent: 'text-primary-green',
      border: 'border-primary-green/30'
    },
    {
      title: 'JARVIS',
      desc: 'Local AI Assistant for Windows using Llama 3.2, faster-whisper, and hand tracking for gesture control.',
      badge: 'AI AGENT',
      tags: ['OLLAMA', 'PYTHON', 'MEDIAPIPE'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1YGXIN0hc2QT8FPLaWTaPQeoBFs43HRBeoCYkws2Yg6quQyTUY4jNhHNl21_nHPbsZnuZgicoEPNrYCDqb4MlTFuBmWBNvlbeViTxiGB0sDa2e4A331uQ32ViBoeK1jcebKB3m0OvQysjE0V6YbwvbRtFaVPZMhWjtf5quDj_xnxvYCH3e0Ipj-QfbmP5z2TRUa8EBD5OLHqwNpllJxq9HIgGClpqdXZKyGKdRa-Jxy7G6mJ2Vp4lxmgOjO3Fij58FLeICAw50tI',
      accent: 'text-secondary-cyan',
      border: 'border-secondary-cyan/30'
    },
    {
      title: 'VoiceLegal',
      desc: 'AI-powered legal awareness assistant supporting voice input, targeting underserved populations with limited literacy.',
      badge: 'WEB / AI',
      tags: ['REACT', 'NODE.JS', 'GPT-4O'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJQIA5YTwzN3Y2C6JUi5lzJbftWR4PTGNRUc6oM05WdXgu_3FFZ2VnJgJSsEVMEXT7g4yf477Gu_uCawwkb4SONSdAoEzV99mnTJbFyyYhifddsEtUHXiiqjtcG-ok-9ENQxA1JJ_xOTYCfFPiMocjG9wrkNeqTzSlXtZnOWLM7z3SKTQWQPxzZ4TF3eWNd3fN2r9TI7-NFLcb2PFx1_14ndxH50rhTqI3YUSMITfxjzWocIXmXKOx436-7U19sBcRvEmMfBRLhlc',
      accent: 'text-primary-green',
      border: 'border-primary-green/30'
    },
    {
      title: 'Sole & Laces Automation',
      desc: 'Automated inventory comparison pipeline reducing sneakers business manual matching time by 80%.',
      badge: 'AUTOMATION',
      tags: ['PYTHON', 'OPENPYXL', 'GPT API'],
      img: null,
      accent: 'text-secondary-cyan',
      border: 'border-secondary-cyan/30'
    }
  ];

  const moreProjects = [
    { title: 'ValueNet', desc: 'Price prediction service (85% accuracy) using scikit-learn regressor.', badge: 'ML' },
    { title: 'HyperStore', desc: 'Custom full-stack MERN e-commerce with user auth and tracking.', badge: 'MERN' },
    { title: 'Task System', desc: 'Desktop JavaFX application with user role management.', badge: 'JAVA' },
    { title: 'Freelance Web', desc: 'Production-ready business sites for global clients.', badge: 'WEB' },
  ];

  return (
    <section id="projects" className="py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="md:col-span-2 glass-card p-10 flex flex-col justify-center">
            <div className="inline-block px-4 py-1 glass-card border-primary-green/30 rounded-full font-jetbrains-mono text-[10px] text-primary-green mb-4 w-fit">PORTFOLIO</div>
            <h2 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-on-surface-variant max-w-sm">
              From sophisticated AI agents to high-performance automation pipelines.
            </p>
          </div>
          {projects.slice(0, 2).map((project, i) => (
            <motion.div 
              key={i}
              className="glass-card group overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.img} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <ExternalLink size={20} className="text-white" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-plus-jakarta font-bold text-white">{project.title}</h3>
                  <span className={`font-jetbrains-mono text-[8px] ${project.accent} uppercase`}>{project.badge}</span>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-1">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.slice(2).map((project, i) => (
            <motion.div 
              key={i}
              className="md:col-span-2 glass-card group overflow-hidden md:flex"
            >
              <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-zinc-800 flex items-center justify-center">
                {project.img ? (
                  <img alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.img} referrerPolicy="no-referrer" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-on-surface-variant">
                    <Rocket size={40} className="opacity-20" />
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-30">Automation System</span>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-plus-jakarta text-xl font-bold text-white">{project.title}</h3>
                  <span className={`font-jetbrains-mono text-[9px] ${project.accent} px-2 py-1 border ${project.border} rounded-lg`}>{project.badge}</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{project.desc}</p>
                <div className="flex gap-4">
                   <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-jetbrains-mono text-[9px] text-on-surface-variant uppercase">{tag}</span>
                    ))}
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Github size={16} className="text-on-surface-variant cursor-pointer hover:text-white" />
                    <ExternalLink size={16} className="text-on-surface-variant cursor-pointer hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {moreProjects.map((project, i) => (
            <div key={i} className="glass-card p-6 flex flex-col justify-between group hover:border-secondary-cyan/30">
              <div className="flex justify-between items-start">
                <h4 className="font-plus-jakarta font-bold text-white">{project.title}</h4>
                <span className="font-jetbrains-mono text-[8px] text-secondary-cyan">{project.badge}</span>
              </div>
              <p className="text-[10px] text-on-surface-variant mt-2">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Sole & Laces Official',
      company: 'Founder & Technical Lead',
      period: '2024 - PRESENT',
      desc: 'Founded sneaker business on mydukaan.io; built internal automation/OS pipelines in-house using Python.',
      icon: <RocketIcon size={20} />,
      color: 'text-primary-green',
    },
    {
      title: 'Freelance Architect',
      company: 'Global Clients',
      period: '2023 - PRESENT',
      desc: 'Designed and high-performance AI-driven web apps and scalable cloud infrastructures.',
      icon: <Layers size={20} />,
      color: 'text-secondary-cyan',
    },
    {
      title: 'HackIndia & Competitions',
      company: 'Team Alpha / Top Finisher',
      period: '2023 - 2026',
      desc: 'Competed in HackIndia 2026 (India\'s biggest Web3 & AI Hackathon); consistently ranked in top 20%.',
      icon: <Trophy size={20} />,
      color: 'text-primary-green',
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 glass-card border-secondary-cyan/30 rounded-full font-jetbrains-mono text-[10px] text-secondary-cyan mb-4">JOURNEY</div>
          <h2 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white">Professional Experience</h2>
        </div>
        <div className="relative space-y-12 before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-green before:via-secondary-cyan before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background ${exp.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                {exp.icon}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5 hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="font-plus-jakarta text-lg font-bold text-white">{exp.title}</h3>
                  <time className="font-jetbrains-mono text-[10px] text-on-surface-variant bg-white/5 px-2 py-0.5 rounded w-fit">{exp.period}</time>
                </div>
                <div className={`font-jetbrains-mono text-[10px] ${exp.color} mb-2 uppercase tracking-widest`}>{exp.company}</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Credentials = () => {
  const certs = [
    { issuer: 'HCL TechBee', title: 'Industry Technology Cert.', color: 'text-primary-green' },
    { issuer: 'IBM', title: 'AI Foundations', color: 'text-secondary-cyan' },
    { issuer: 'INTERNSHALA', title: 'AI & Automation Training', color: 'text-primary-green' },
    { issuer: 'GUVI', title: 'Python for Data Science', color: 'text-secondary-cyan' },
    { issuer: 'BE10X', title: 'AI Tools & ChatGPT', color: 'text-primary-green' },
    { issuer: 'IEEE EDS MAIT', title: 'Generative AI Cert.', color: 'text-secondary-cyan' },
    { issuer: 'HACKINDIA', title: 'Web3 & AI Certificate', color: 'text-primary-green' },
    { issuer: 'KCC ITM', title: 'B.Tech CSE (8.5 GPA)', color: 'text-secondary-cyan' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-12 text-center">Verified Credentials</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center gap-4 group"
            >
              <div className={`w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors ${cert.color}`}>
                <ShieldCheck size={32} />
              </div>
              <div className="text-center">
                <h4 className="font-jetbrains-mono text-[10px] font-bold text-white">{cert.issuer}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter leading-tight mt-1">{cert.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-12 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 glass-card p-12 space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-plus-jakarta text-5xl md:text-7xl font-extrabold text-white"
        >
          Let's build <br /><span className="text-secondary-cyan">something.</span>
        </motion.h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="w-full bg-zinc-800 border border-white/5 rounded-2xl p-5 outline-none text-white focus:border-secondary-cyan transition-all" />
            <input type="email" placeholder="Email Address" className="w-full bg-zinc-800 border border-white/5 rounded-2xl p-5 outline-none text-white focus:border-secondary-cyan transition-all" />
          </div>
          <select className="w-full bg-zinc-800 border border-white/5 rounded-2xl p-5 outline-none text-white appearance-none focus:border-secondary-cyan transition-all">
            <option>Project: Architecture & Dev</option>
            <option>Project: AI Integration</option>
          </select>
          <textarea rows={4} placeholder="Your vision..." className="w-full bg-zinc-800 border border-white/5 rounded-2xl p-5 outline-none text-white resize-none focus:border-secondary-cyan transition-all" />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full btn-vibrant"
          >
            SEND TRANSMISSION
          </motion.button>
        </form>
      </div>
      <div className="space-y-4">
        <div className="glass-card p-8 space-y-6">
          <h4 className="font-plus-jakarta text-xl font-bold text-white">Direct Line</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary-green/10 rounded-xl flex items-center justify-center text-primary-green"><Mail size={18} /></div>
              <p className="text-on-surface-variant text-sm">harsh.gulia@outlook.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary-cyan/10 rounded-xl flex items-center justify-center text-secondary-cyan"><MapPin size={18} /></div>
              <p className="text-on-surface-variant text-sm">New Delhi, India</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 bg-gradient-to-br from-surface to-secondary-cyan/10">
          <h4 className="font-plus-jakarta text-xl font-bold text-white mb-4">Quick Chat</h4>
          <p className="text-xs text-on-surface-variant mb-6">Prefer instant messaging? Reach out on WhatsApp for a faster response.</p>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919873072357?text=Hey%20I%20have%20gone%20through%20your%20portfolio%20and%20I%20am%20interested%20to%20reach%20out"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-jetbrains-mono font-bold hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
          >
            <MessageCircle size={20} />
            WHATSAPP ME
          </motion.a>
        </div>
        <div className="glass-card p-8 bg-gradient-to-br from-surface to-primary-green/10">
          <h4 className="font-plus-jakarta text-xl font-bold text-white mb-6">Socials</h4>
          <div className="grid grid-cols-3 gap-2">
            {[
              { Icon: Phone, href: 'tel:+919873072357' },
              { Icon: Github, href: 'https://github.com/Harshguliag416' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/harshguliag416/' }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square glass-card rounded-2xl flex items-center justify-center hover:text-primary-green transition-colors cursor-pointer bg-zinc-800/50"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
      <div className="font-plus-jakarta text-xl font-bold text-white uppercase tracking-tighter">
        Harsh <span className="text-secondary-cyan">Gulia</span>
      </div>
      <div className="flex justify-center gap-8">
        {[
          { label: 'CALL', href: 'tel:+919873072357' },
          { label: 'GITHUB', href: 'https://github.com/Harshguliag416' },
          { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/harshguliag416/' }
        ].map(item => (
          <a 
            key={item.label} 
            href={item.href} 
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains-mono text-[10px] text-on-surface-variant hover:text-secondary-cyan font-bold transition-all tracking-widest"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="space-y-2 opacity-50">
        <p className="font-jetbrains-mono text-[10px] text-on-surface-variant">© 2024 HARSH GULIA // ALL RIGHTS RESERVED</p>
        <p className="font-jetbrains-mono text-[8px] text-on-surface-variant tracking-widest uppercase">Built with Precision • New Delhi • v2.0.28</p>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="selection:bg-primary-green/30 selection:text-white relative">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <AboutStack />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
