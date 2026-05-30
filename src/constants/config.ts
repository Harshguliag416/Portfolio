type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
  social?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  contact_info?: {
    phone?: string;
    email?: string;
    website?: string;
  };
};

export const config: TConfig = {
  html: {
    title: "Harsh Gulia — Full-Stack Developer & AI Builder",
    fullName: "Harsh Gulia",
    email: "harshguliag416@gmail.com",
  },
  hero: {
    name: "Harsh Gulia",
    p: ["I build fast web apps, AI tools", "& systems that ship"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Full-stack developer and AI builder based in New Delhi, India. I build fast web apps, AI-powered systems, and production-grade tools that actually ship. Technical Lead at Sole & Laces Official and active freelance developer with live client deployments. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
  social: {
    github: "https://github.com/harshguliag416",
    linkedin: "https://linkedin.com/in/harshguliag416",
    portfolio: "https://harsh-gulia-portfolio--harshguliag416.replit.app/",
  },
  contact_info: {
    phone: "9873073257",
    email: "harshguliag416@gmail.com",
    website: "https://harsh-gulia-portfolio--harshguliag416.replit.app/",
  },
};
