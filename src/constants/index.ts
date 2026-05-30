import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full-Stack Web Development",
    icon: web,
  },
  {
    title: "AI & ML Integration",
    icon: mobile,
  },
  {
    title: "Freelance Client Websites",
    icon: backend,
  },
  {
    title: "Automation & Scripting",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: javascript,
  },
  {
    name: "FastAPI",
    icon: nodejs,
  },
  {
    name: "Flask",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQLite",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "TensorFlow",
    icon: threejs,
  },
  {
    name: "MediaPipe",
    icon: html,
  },
  {
    name: "Ollama",
    icon: nodejs,
  },
  {
    name: "GSAP",
    icon: html,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Java",
    icon: css,
  },
  {
    name: "C++",
    icon: css,
  },
];

const experiences: TExperience[] = [
  {
    title: "Technical Leader",
    companyName: "Sole & Laces Official",
    icon: meta,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Leading technical operations for a sneaker retail business on mydukaan.io.",
      "Built a full inventory automation pipeline with 1,635 lines of Python — fuzzy matching, image scraping, bulk uploader.",
      "Developing Antigravity — an AI-powered store management system using FastAPI, React, Vite, and SQLite.",
      "Managed CSV bulk upload pipelines for 1,351+ product rows with size formatting and SKU deduplication.",
    ],
  },
  {
    title: "Freelance Web Developer",
    companyName: "Self-Employed",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Delivered production websites for logistics and business clients — HHT Freight Group and Bridgerton International.",
      "Custom-coded builds using HTML, CSS, JS — no WordPress or templates.",
      "Implemented Google Apps Script form backends, GitHub Pages hosting, and Cloudflare tunnel deployments.",
      "Service plan: Rs.10,000 one-time + Rs.3,500/month care plan.",
    ],
  },
  {
    title: "HackIndia 2026 Participation",
    companyName: "HackIndia",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Participated in HackIndia 2026 - India's Biggest Web3 AI Hackathon.",
      "Competed with developers across India in innovative tech challenges.",
      "Demonstrated expertise in Web3 and AI technologies.",
      "Certificate of Participation from HackIndia organizers.",
    ],
  },
  {
    title: "AI-ML Certification Program",
    companyName: "EventDevX",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 17, 2026",
    points: [
      "Successfully participated in AI-ML Certification Program by EventDevX.",
      "Completed comprehensive training in artificial intelligence and machine learning.",
      "Certificate ID: EDVX-BP6B-UFDA-R7FH",
      "Verified through EventDevX Community Infrastructure Platform.",
    ],
  },
  {
    title: "Voyager Blitz, HackIndia Spark-4",
    companyName: "KCC Institute & HackerRank",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 21, 2026",
    points: [
      "Actively participated in Voyager Blitz hackathon hosted on HackerRank.",
      "Competed in HackIndia Spark-4 event organized by KCC Institute.",
      "Demonstrated problem-solving and coding skills in competitive environment.",
      "Received Certificate of Participation from KCC Institute and HackerRank.",
    ],
  },
  {
    title: "Python Certification",
    companyName: "GUVI Geek Networks (HCL & Google Partner)",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 26, 2025",
    points: [
      "Successfully completed Python certification program by GUVI Geek Networks.",
      "GUVI is an HCL and Google for Education Partner with ISO 9001:27001 certification.",
      "Certificate ID: s0E706TC5I242I9J25",
      "Verified at www.guvi.in/certificate",
    ],
  },
  {
    title: "Development of Agentic AI - Phase 1",
    companyName: "Multiverz",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "November 28, 2025",
    points: [
      "Participated as Board Advisor in Development of Agentic AI challenge.",
      "Contributed to Phase 1 of agentic AI development initiative.",
      "Worked on cutting-edge AI agent architecture and design patterns.",
      "Certified by Multiverz under Director Vinny Nijhon.",
    ],
  },
  {
    title: "PBEL Equivalent to Virtual Internship - AI",
    companyName: "IBM Developer Skills Network",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 20, 2025",
    points: [
      "Successfully completed IBM's PBEL (Project Based Experiential Learning) AI internship program.",
      "Gained hands-on experience in AI and machine learning concepts through practical projects.",
      "Certified by IBM Developer Skills Network with passing grade.",
      "Certificate ID: PBELAI1IN - Verified at ibmmooc.skillsnetwork.site",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Harsh delivered a complete logistics website that exceeded our expectations. The interactive US map, contact forms, and clean dark theme made us look like an enterprise company from day one. Professional, fast, and reliable.",
    name: "HHT Freight Group",
    designation: "Logistics Client",
    company: "HHT Freight Solutions",
    image: "hht",
  },
  {
    testimonial:
      "The website Harsh built for us has the perfect balance of corporate professionalism and modern design. The amber and charcoal theme is exactly what we wanted. Delivered on time with zero revisions needed.",
    name: "Bridgerton International",
    designation: "Freight & Logistics Client",
    company: "Bridgerton International",
    image: "bridgerton",
  },
  {
    testimonial:
      "Working with Harsh was an absolute pleasure. His technical expertise in AI and machine learning is exceptional. He delivered a production-ready system that exceeded all our expectations. Highly recommended!",
    name: "Rajesh Kumar",
    designation: "Product Manager",
    company: "",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    testimonial:
      "Harsh's ability to turn complex requirements into elegant solutions is remarkable. The automation pipeline he built saved us countless hours. His attention to detail and commitment to quality is unmatched.",
    name: "Priya Sharma",
    designation: "Operations Lead",
    company: "",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "I've worked with many developers, but Harsh stands out for his problem-solving skills and dedication. He doesn't just code—he understands the business needs and delivers solutions that truly matter.",
    name: "Amit Patel",
    designation: "Business Consultant",
    company: "",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "ISL Bridge",
    description:
      "Indian Sign Language AI translator with 96-98% accuracy. Built with React Native, Flask, TensorFlow, and MediaPipe. Submitted at Open Innovation Hackathon under Team Alpha. Dataset acquired from IIT researchers.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "JARVIS",
    description:
      "Fully offline AI assistant on Windows. Voice commands via faster-whisper, hand gesture control via MediaPipe, TTS via edge-tts. Multi-gesture support, 100% local — zero internet required.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Ollama",
        color: "green-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "Antigravity",
    description:
      "AI-powered sneaker store management system. FastAPI + React + Vite + SQLite with SSE streaming, inventory management, image pipeline, and an AI routing system with cloud + local Ollama fallback.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "HHT Freight Group",
    description:
      "Full logistics company website with interactive SVG US map, Google Sheets form backend, Google Apps Script API, and dark navy/neon green theme. Live on GitHub Pages.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://hhtfreightgroup.com/",
  },
  {
    name: "Bridgerton International",
    description:
      "Corporate freight company website with deep charcoal and electric amber theme. Cloudflare tunnel deployment, professional invoice system, AI-generated logo assets.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Cloudflare",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://bridgertoninternational.org/",
  },
  {
    name: "VoiceLegal",
    description:
      "AI-powered Indian legal assistant. Ask legal questions in natural language and get accurate answers. Built with React, Node.js, MongoDB, and GPT-4o via GitHub Models.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "GPT-4o",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "Bot Forge",
    description:
      "1,635-line Python automation system for Sole & Laces. Fuzzy matching, image scraping, bulk CSV uploader for mydukaan.io with EU/UK size formatting and SKU deduplication across 1,351+ rows.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Automation",
        color: "green-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "ML Price Predictor",
    description:
      "Machine learning model for price prediction using scikit-learn. Data preprocessing, feature engineering, model training and evaluation pipeline.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "MERN E-Commerce",
    description:
      "Full-stack e-commerce platform built on the MERN stack. Product listings, cart, auth, order management, and admin dashboard.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "Java Task Manager",
    description:
      "Desktop task management application built in Java. CRUD operations, task prioritization, and deadline tracking with a clean GUI.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
      {
        name: "Desktop App",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "Faceless YouTube Automation",
    description:
      "Semi-automated content pipeline for a self-improvement YouTube channel. Python pipeline using ElevenLabs TTS, Pexels API for footage, edge-tts, and CapCut for final edit.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ElevenLabs",
        color: "green-text-gradient",
      },
      {
        name: "Automation",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "AI Global Routing System",
    description:
      "Persistent background service (localhost:9000) that auto-classifies queries and routes to cloud models — Groq, OpenRouter, Mistral, Cohere, DeepSeek — with local Ollama fallback.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Ollama",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
  {
    name: "Retire Pro",
    description:
      "Professional networking platform built for retired individuals. Users can apply for roles, offer mentorship, share industry expertise, and connect with organizations seeking experienced advisors — like LinkedIn but built for retirement-age professionals.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/harshguliag416",
  },
];

export { services, technologies, experiences, testimonials, projects };
