export default {
  metadata: {
    title: "Qingjia Tsang | Full Stack Developer",
    description: "Portfolio of Qingjia Tsang - A passionate full stack developer specializing in modern web technologies",
    keywords: "full stack development,frontend development,React,Next.js,TypeScript,Hono.js",

    ogImage: "/assets/og-image-en.png",
    ogTitle: "Qingjia Tsang | Full Stack Developer",
    ogDescription: "Portfolio of Qingjia Tsang - A passionate full stack developer specializing in modern web technologies",
    ogImageAlt: "Qingjia Tsang Portfolio",

    twitterTitle: "Qingjia Tsang | Full Stack Developer",
    twitterDescription: "Portfolio of Qingjia Tsang - A passionate full stack developer specializing in modern web technologies",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Qingjia Tsang",
    role: "Fullstack Developer",
    description: "Building modern web applications",
  },
  about: {
    title: "Introduction",
    subtitle: "Overview",
    introduction: "I'm a Full Stack Developer with extensive experience in web development. I specialize in building high-performance, scalable applications and stay passionate about emerging technologies. With expertise in frontend development and a strong background in building full-stack applications using Next.js and Hono.js, I also have solid experience in cloud deployment. I maintain a constant drive for learning new technologies and am dedicated to delivering optimal technical solutions.",
    tags: {
      frontend: "Frontend Developer",
      quickLearner: "Quick Learner",
      backend: "Backend Developer",
      techEnthusiast: "Tech Enthusiast",
    },
    professional: {
      title: "Professional Experience",
      description: "With 2.5 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.",
    },
    learning: {
      title: "Continuous Learning",
      description: "I'm passionate about staying up-to-date with emerging technologies and best practices, constantly expanding my knowledge through hands-on projects and research.",
    },
    location: {
      title: "I'm very flexible with time zone communications & locations",
      description: "I'm based in Guangzhou, China and open to remote work worldwide.",
      languages: {
        english: "🇬🇧 Professional English (PTE 63) - Code documentation & async communication",
        mandarin: "🇨🇳 Native Mandarin - Technical localization expertise",
        cantonese: "🇭🇰 Native Cantonese - Regional market adaptation",
      },
    },
    passion: {
      title: "My Passion for Coding",
      description: "I love solving problems and building things through code. Programming isn't just my profession — it's my passion. I'm passionate about writing clean, maintainable code that follows best practices and design principles. Code quality and readability are always my top priorities.",
    },
    resume: {
      downloadCv: "Download CV",
      downloading: "Downloading...",
      downloadSuccess: "CV downloaded successfully 📄",
      downloadError: "Download failed, please try again later 😢",
      downloadEnglish: "Download English CV",
      downloadChinese: "Download Chinese CV",
    },
    contact: {
      title: "Contact Me",
    },
  },
  tech: {
    title: "Tech Stacks",
  },
  experience: {
    title: "Experience",
    items: {
      selfTaught: {
        title: "Self-taught Web Developer Journey",
        desc: "My journey into frontend development began with a passion for learning and coding. As an autodidact, I regularly watched technical YouTube channels like Syntax, Wes Bos, Jack Herrington, Hamed Bahram, Dave Gray, and many others to deepen my knowledge (I'm grateful for their valuable content and guidance). Through practical application, I developed strong skills in React.js and JavaScript, while staying up-to-date with the latest tech trends by reading articles on Medium and DEV Community. This relentless pursuit of learning and embracing new technologies has shaped me into a capable and adaptable developer.",
      },
      desktop: {
        title: "Desktop App Developer",
        desc: "Built a cross-platform desktop application with React.js & Electron. Focused on performance optimization for native-like experiences, real-time features via WebSocket, and type-safe API integrations with TypeScript, Zod.",
      },
      freelance: {
        title: "Freelance App Development Project",
        desc: "Led the full development lifecycle of a custom application for a client. Focused on building scalable and maintainable code while ensuring optimal performance and user engagement.",
      },
      lead: {
        title: "Lead Frontend Developer",
        desc: "Led a team of frontend developers in designing and maintaining user-facing features for a range of projects using modern frontend technologies like Next.js, Zustand, and TailwindCSS. Successfully collaborated with backend teams to integrate APIs and optimize application performance.",
      },
    },
  },
  works: {
    title: "Recent Projects",
    liveSite: "Live Demo",
    projects: {
      slack: {
        title: "Slack Clone - Video Call & Real-time Chat Application",
        des: "A real-time team communication application built with Next.js, TailwindCSS, Tanstack Query, Framer Motion, Convex, Clerk, and Stream. Features peer-to-peer video calling functionality.",
      },
      estate: {
        title: "EstateHub - Real Estate Platform",
        des: "A real estate application developed using Next.js, Kinde, Prisma, Supabase, and Stripe. Enables users to search, add/edit/delete properties, view property details, and complete transactions.",
      },
      note: {
        title: "NoteBot - AI-Powered Note-Taking App",
        des: "A note-taking application integrated with AI and Pinecone vector embeddings, allowing users to interact intelligently with their note content.",
      },
      cv: {
        title: "AICV - AI Resume Builder (Monorepo)",
        des: "An AI-integrated resume builder using React.js, Tanstack Router, Tanstack Query, Hono.js, Drizzle ORM, and Auth.js. Helps users create and optimize professional resumes based on job descriptions and user backgrounds.",
      },
    },
  },
  contact: {
    title: "Let's talk",
    description: "Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.",
    form: {
      name: {
        label: "Name",
        placeholder: "e.g., John Doe",
      },
      email: {
        label: "Email Address",
        placeholder: "e.g., john.doe@gmail.com",
      },
      message: {
        label: "Message",
        placeholder: "Share your thoughts or questions...",
      },
      submit: {
        sending: "Sending...",
        default: "Send Message",
      },
      success: "Thank you for your message 😃",
      error: "I didn't receive your message 😢",
    },
  },
} as const;
