import { citThumbnail, freelancingThumbnail, graphicDesignThumbnail, msOfficeThumbnail, threeDModellingThumbnail, videoEditingThumbnail, webDevelopmentThumbnail } from "./images";



export const coursesAllData = [
  // ─────────────────────────────────────────────
  // 1. GRAPHIC DESIGNING
  // ─────────────────────────────────────────────
  {
    id: "1",
    slug: "graphic-designing",
    category: "Design",
    featured: true,
    title: "Graphic Designing",
    subtitle: "Create. Communicate. Inspire.",
    description:
      "Master the art of visual communication using industry-standard tools. From logos to full brand identities, learn to design print and digital media that leaves a lasting impression.",
    thumbnail: graphicDesignThumbnail,
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    ],
    level: "Beginner",
    duration: "3 Months",
    students: "2.4k",
    about:
      "SSI (Skill Square Institute) Bannu brings you a hands-on Graphic Designing course crafted for students who want to enter the creative industry with real, employer-ready skills. You will work with Adobe Photoshop, Illustrator, and InDesign from day one — designing logos, posters, social media content, and print-ready brand materials. Our instructors are working designers who teach you the way the industry actually operates, not just theory.",
    whatYouLearn: [
      {
        title: "Adobe Photoshop Mastery",
        caption: "Photo retouching, compositing, digital illustrations, and professional image editing from beginner to advanced.",
      },
      {
        title: "Adobe Illustrator",
        caption: "Vector graphics, logo design, icon creation, and scalable artwork used in print and digital media.",
      },
      {
        title: "Brand Identity Design",
        caption: "Build complete brand kits including logos, color palettes, typography systems, and brand guidelines.",
      },
      {
        title: "Print & Digital Layout",
        caption: "Design posters, flyers, brochures, and social media content using correct dimensions and print standards.",
      },
      {
        title: "Typography & Color Theory",
        caption: "Understand visual hierarchy, font pairing, and how color psychology shapes effective design.",
      },
      {
        title: "Portfolio Building",
        caption: "Graduate with 6+ real-world projects ready to show clients and employers on day one.",
      },
    ],
    curriculum: [
      {
        title: "Design Foundations & Tool Setup",
        tags: ["Photoshop workspace", "Illustrator basics", "Color modes (RGB vs CMYK)", "Artboards & layers"],
      },
      {
        title: "Logo & Brand Identity",
        tags: ["Logo design process", "Vector tracing", "Brand guidelines", "Business card design"],
      },
      {
        title: "Poster & Print Design",
        tags: ["Layout principles", "Typography hierarchy", "Print-ready export", "Poster project"],
      },
      {
        title: "Social Media & Digital Graphics",
        tags: ["Platform dimensions", "Ad banner design", "Instagram post sets", "Digital mockups"],
      },
      {
        title: "Portfolio & Freelancing",
        tags: ["Behance portfolio setup", "Client communication", "Pricing your work", "Certification"],
      },
    ],
    whyEnroll:
      "Graphic design is one of the most in-demand freelance and job skills in Pakistan today. At SSI Bannu, you don't just learn software — you learn to think like a designer. Every session builds toward a portfolio project, so by the time you finish, you have real work to show. Our instructors have worked with brands across Pakistan and bring that real experience into every class. Whether you want to freelance on Fiverr, work at an agency, or start your own design studio, this course gives you the foundation to do it.",
  },

  // ─────────────────────────────────────────────
  // 2. WEB DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    id: "2",
    slug: "web-development",
    category: "Development",
    featured: false,
    title: "Web Development",
    subtitle: "Build the Internet. One Line at a Time.",
    description:
      "From a blank HTML file to a fully deployed full-stack web application. Learn HTML, CSS, JavaScript, React, and Node.js through real projects that go live on the internet.",
    thumbnail: webDevelopmentThumbnail,
    images: [
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    ],
    level: "Beginner",
    duration: "6 Months",
    students: "3.1k",
    about:
      "SSI Bannu's Web Development course is the most comprehensive technical program we offer. Starting from zero programming knowledge, students progress through frontend development, JavaScript logic, React component architecture, and backend development with Node.js and databases. Every week you ship something — a working webpage, a functional app feature, a deployed project. By month six you have a full-stack developer portfolio and the skills to apply for jobs or take freelance clients immediately.",
    whatYouLearn: [
      {
        title: "HTML & CSS",
        caption: "Structure and style websites from scratch. Learn semantic HTML, Flexbox, Grid, and responsive design.",
      },
      {
        title: "JavaScript",
        caption: "Core programming logic, DOM manipulation, events, APIs, and modern ES6+ syntax.",
      },
      {
        title: "React.js",
        caption: "Build dynamic, component-based web applications. State management, hooks, routing, and API integration.",
      },
      {
        title: "Node.js & Express",
        caption: "Server-side development, REST APIs, authentication, and connecting frontend to backend.",
      },
      {
        title: "Databases",
        caption: "MongoDB and basic SQL. Store, query, and manage data for real applications.",
      },
      {
        title: "Deployment & Git",
        caption: "Push code to GitHub, deploy projects live using Vercel and Render, and work with version control.",
      },
    ],
    curriculum: [
      {
        title: "HTML, CSS & Responsive Design",
        tags: ["Semantic HTML", "CSS Flexbox & Grid", "Mobile-first design", "Landing page project"],
      },
      {
        title: "JavaScript Fundamentals",
        tags: ["Variables & functions", "DOM manipulation", "Events & forms", "Calculator project"],
      },
      {
        title: "React.js & Modern Frontend",
        tags: ["Components & props", "useState & useEffect", "React Router", "E-commerce UI project"],
      },
      {
        title: "Backend with Node.js",
        tags: ["Express server setup", "REST API design", "JWT authentication", "User auth project"],
      },
      {
        title: "Database, Deployment & Portfolio",
        tags: ["MongoDB CRUD", "Connecting frontend + backend", "Deploying to Vercel", "Full-stack project"],
      },
    ],
    whyEnroll:
      "Web development is the highest-paying technical skill accessible without a university degree. SSI Bannu has trained over 3,000 students in web development, and our alumni are working as freelancers on Upwork, employed at tech companies in Peshawar and Islamabad, and running their own agencies. This course is structured so that even someone with zero coding experience can follow along and graduate job-ready in six months. We invest in your outcome, not just your attendance.",
  },

  // ─────────────────────────────────────────────
  // 3. 3D MODELING & ANIMATION
  // ─────────────────────────────────────────────
  {
    id: "3",
    slug: "3d-modeling",
    category: "3D Modeling",
    featured: false,
    title: "3D Modeling & Animation",
    subtitle: "Bring Imagination into Three Dimensions.",
    description:
      "Learn Blender from absolute zero and progress to professional-level 3D modeling, rendering, and animation. Create characters, product visualizations, architectural renders, and cinematic animations.",
    thumbnail: threeDModellingThumbnail,
    images: [
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&h=500&fit=crop",
    ],
    level: "Intermediate",
    duration: "4 Months",
    students: "980",
    about:
      "SSI Bannu's 3D Modeling & Animation course uses Blender — the world's most powerful free 3D software — to take students from complete beginners to creators capable of producing professional-grade 3D content. You will model real objects and characters, apply materials and lighting, render photorealistic images, and animate scenes for film, games, and product marketing. This is a creative and technical course combined — one of the most exciting skills you can build at SSI.",
    whatYouLearn: [
      {
        title: "Blender Interface & Navigation",
        caption: "Master the Blender workspace, shortcuts, viewport navigation, and core modeling tools.",
      },
      {
        title: "3D Modeling",
        caption: "Build objects, furniture, architecture, and character meshes using box modeling and sculpting techniques.",
      },
      {
        title: "Materials & Texturing",
        caption: "Apply realistic materials using Blender's shader editor. UV unwrapping and texture painting.",
      },
      {
        title: "Lighting & Rendering",
        caption: "Set up professional lighting rigs and render photorealistic images using Cycles and EEVEE.",
      },
      {
        title: "Rigging & Animation",
        caption: "Rig characters with armatures and animate them with keyframes, graph editor, and NLA strips.",
      },
      {
        title: "Product & Architectural Visualization",
        caption: "Create render-ready product shots and architectural walkthroughs for real client briefs.",
      },
    ],
    curriculum: [
      {
        title: "Blender Basics & Modeling Tools",
        tags: ["Interface overview", "Mesh editing", "Modifiers", "Simple object project"],
      },
      {
        title: "Materials, Shading & Texturing",
        tags: ["Shader nodes", "UV unwrapping", "PBR materials", "Stylized scene project"],
      },
      {
        title: "Lighting & Photorealistic Rendering",
        tags: ["HDRI lighting", "Cycles vs EEVEE", "Camera setup", "Product render project"],
      },
      {
        title: "Rigging & Character Animation",
        tags: ["Armature basics", "Weight painting", "Keyframe animation", "Character walk cycle"],
      },
      {
        title: "Final Project & Portfolio",
        tags: ["Cinematic scene", "ArtStation portfolio", "Freelancing on Fiverr", "Certification"],
      },
    ],
    whyEnroll:
      "The demand for 3D artists is exploding globally — from game studios and film production to product marketing and architecture visualization. At SSI Bannu, we teach Blender because it is free, professional, and used by studios worldwide. You will graduate with a portfolio of rendered 3D work that can earn you income on Fiverr, direct client projects, or studio employment. If you have a creative eye and want to make things that look extraordinary, this is your course.",
  },

  // ─────────────────────────────────────────────
  // 4. UI/UX DESIGN
  // ─────────────────────────────────────────────
  // {
  //   id: "4",
  //   slug: "ui-ux-design",
  //   category: "Design",
  //   featured: false,
  //   title: "UI/UX Design",
  //   subtitle: "Design Experiences. Not Just Screens.",
  //   description:
  //     "Learn to design apps and websites that people actually enjoy using. Master Figma, user research, wireframing, prototyping, and design systems used by top product teams worldwide.",
  //   thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
  //   ],
  //   level: "Beginner",
  //   duration: "3 Months",
  //   students: "1.8k",
  //   about:
  //     "SSI Bannu's UI/UX Design course teaches you the full product design process — from understanding users to shipping polished, interactive prototypes. Using Figma, the industry-standard design tool, you will learn wireframing, component design, auto-layout, prototyping, and how to build complete design systems. More importantly, you will understand the 'why' behind every design decision through user research and usability principles. This is the course for students who want to work at product companies, startups, or as freelance app designers.",
  //   whatYouLearn: [
  //     {
  //       title: "Figma Mastery",
  //       caption: "Frames, components, auto-layout, variants, and prototyping — the complete Figma workflow.",
  //     },
  //     {
  //       title: "UX Research & User Flows",
  //       caption: "Conduct user interviews, create personas, map user journeys, and validate design decisions with data.",
  //     },
  //     {
  //       title: "Wireframing & Information Architecture",
  //       caption: "Plan app structure with low-fidelity wireframes before committing to visual design.",
  //     },
  //     {
  //       title: "UI Design & Visual Hierarchy",
  //       caption: "Typography, spacing, color systems, and visual hierarchy that makes interfaces intuitive and beautiful.",
  //     },
  //     {
  //       title: "Design Systems",
  //       caption: "Build scalable component libraries with consistent tokens used across entire product interfaces.",
  //     },
  //     {
  //       title: "Prototyping & Handoff",
  //       caption: "Create interactive prototypes and prepare developer-ready files with proper annotations and specs.",
  //     },
  //   ],
  //   curriculum: [
  //     {
  //       title: "UX Foundations & Research",
  //       tags: ["User research methods", "Personas & empathy maps", "User journey mapping", "Problem statement writing"],
  //     },
  //     {
  //       title: "Wireframing & Information Architecture",
  //       tags: ["Low-fi wireframes", "Site mapping", "Navigation patterns", "App flow project"],
  //     },
  //     {
  //       title: "UI Design with Figma",
  //       tags: ["Auto-layout", "Component variants", "Color & type systems", "Mobile app UI project"],
  //     },
  //     {
  //       title: "Prototyping & Usability Testing",
  //       tags: ["Interactive flows in Figma", "Usability testing basics", "Iteration from feedback", "Web app prototype"],
  //     },
  //     {
  //       title: "Design System & Portfolio",
  //       tags: ["Component library", "Dev handoff", "Dribbble/Behance portfolio", "Certification"],
  //     },
  //   ],
  //   whyEnroll:
  //     "UI/UX designers are among the most sought-after professionals in tech, and the skill translates directly to high-paying remote work. SSI Bannu's UI/UX course is built around the same process used at companies like Google, Airbnb, and local Pakistani startups. You will finish with a complete Figma portfolio — real app designs with documented research and prototypes — that demonstrates both your thinking and your craft to any employer or client.",
  // },

  // ─────────────────────────────────────────────
  // 5. DIGITAL MARKETING
  // ─────────────────────────────────────────────
  {
    id: "5",
    slug: "digital-marketing",
    category: "Marketing",
    featured: false,
    title: "Digital Marketing",
    subtitle: "Grow Any Business Online.",
    description:
      "SEO, Google Ads, social media strategy, email marketing, and analytics. Learn to market any product or service online and deliver measurable results for businesses from Bannu to the global market.",
    thumbnail: freelancingThumbnail,
    images: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop",
    ],
    level: "Beginner",
    duration: "2 Months",
    students: "1.4k",
    about:
      "SSI Bannu's Digital Marketing course is designed for entrepreneurs, business owners, freelancers, and students who want to grow an online presence and drive real results. You will learn search engine optimization, paid advertising with Google and Meta Ads, social media content strategy, email campaigns, and how to read analytics to improve performance. Every concept is taught with local Pakistani business examples so the learning is practical and immediately applicable.",
    whatYouLearn: [
      {
        title: "SEO (Search Engine Optimization)",
        caption: "Rank websites on Google through keyword research, on-page SEO, backlink building, and technical audits.",
      },
      {
        title: "Google Ads & PPC",
        caption: "Create and manage paid search campaigns with proper bidding strategies, ad copywriting, and conversion tracking.",
      },
      {
        title: "Social Media Marketing",
        caption: "Facebook, Instagram, and TikTok strategies — organic content calendars and paid boosting campaigns.",
      },
      {
        title: "Email Marketing",
        caption: "Build email lists, design campaigns in Mailchimp, and write copy that converts subscribers to customers.",
      },
      {
        title: "Analytics & Reporting",
        caption: "Google Analytics 4, Meta Business Suite insights, and how to build reports that prove your results.",
      },
      {
        title: "Freelancing as a Marketer",
        caption: "Package your services, find clients on Fiverr and Upwork, and manage marketing retainers professionally.",
      },
    ],
    curriculum: [
      {
        title: "Digital Marketing Fundamentals",
        tags: ["Marketing funnel", "Buyer persona", "Platform overview", "Setting up Google Analytics"],
      },
      {
        title: "SEO & Content Marketing",
        tags: ["Keyword research", "On-page SEO", "Blog content strategy", "SEO audit project"],
      },
      {
        title: "Paid Advertising",
        tags: ["Google Search Ads", "Meta Ads Manager", "Campaign budgeting", "Ad copywriting"],
      },
      {
        title: "Social Media & Email",
        tags: ["Content calendar", "Instagram growth", "Mailchimp setup", "Email campaign project"],
      },
      {
        title: "Analytics, Reporting & Freelancing",
        tags: ["GA4 dashboard", "Performance reporting", "Fiverr profile setup", "Certification"],
      },
    ],
    whyEnroll:
      "Every business in the world needs digital marketing — which means this skill is never out of demand. At SSI Bannu, we teach digital marketing the practical way: you will run actual campaigns, analyze real data, and build a portfolio of results you can show clients. Whether you want to grow your own business, help local Bannu businesses reach more customers, or work remotely for international clients, this course gives you the tools and the confidence to deliver results.",
  },

  // ─────────────────────────────────────────────
  // 6. VIDEO EDITING
  // ─────────────────────────────────────────────
  {
    id: "6",
    slug: "video-editing",
    category: "Video Editing",
    featured: false,
    title: "Video Editing",
    subtitle: "Tell Stories Through the Screen.",
    description:
      "Adobe Premiere Pro and After Effects from beginner to professional. Edit YouTube videos, reels, wedding films, documentary content, and motion graphics for clients worldwide.",
    thumbnail: videoEditingThumbnail,
    images: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1536240478700-b869ad10e2f5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop",
    ],
    level: "Beginner",
    duration: "2 Months",
    students: "1.1k",
    about:
      "SSI Bannu's Video Editing course covers the full post-production pipeline using the same tools used by professional editors at studios, agencies, and YouTube channels globally. Starting with Premiere Pro for cuts, color, and audio, you progress to After Effects for motion graphics, title animations, and visual effects. Every week you complete a real editing project — a YouTube video, a reel, a short film sequence — building your editing eye and your portfolio simultaneously.",
    whatYouLearn: [
      {
        title: "Adobe Premiere Pro",
        caption: "Timeline editing, cuts, transitions, color grading, audio mixing, and exporting for every platform.",
      },
      {
        title: "After Effects & Motion Graphics",
        caption: "Animated titles, lower thirds, logo animations, and visual effects composited into video footage.",
      },
      {
        title: "Color Grading",
        caption: "Professional color correction and cinematic LUT application using Lumetri Color in Premiere.",
      },
      {
        title: "Audio Design",
        caption: "Clean dialogue, background music layering, sound effects, and export-ready audio mastering.",
      },
      {
        title: "Short-Form Content (Reels & TikTok)",
        caption: "Fast-paced vertical video editing with trending transitions, text animations, and platform optimization.",
      },
      {
        title: "Freelance Video Work",
        caption: "How to price editing projects, manage client revisions, and deliver files professionally.",
      },
    ],
    curriculum: [
      {
        title: "Premiere Pro Foundations",
        tags: ["Workspace & import", "Basic cuts & timeline", "Transitions", "YouTube video project"],
      },
      {
        title: "Color Grading & Audio",
        tags: ["Lumetri Color", "LUT application", "Audio cleanup", "Cinematic short project"],
      },
      {
        title: "After Effects Basics",
        tags: ["Compositions & layers", "Keyframe animation", "Text animations", "Logo reveal project"],
      },
      {
        title: "Reels, TikTok & Short-Form",
        tags: ["Vertical format editing", "Beat-sync cuts", "Captions & stickers", "Reel project"],
      },
      {
        title: "Portfolio & Freelancing",
        tags: ["Showreel creation", "Fiverr setup", "Client file delivery", "Certification"],
      },
    ],
    whyEnroll:
      "Video is the dominant content format on the internet and the demand for skilled editors is growing every year. From wedding videographers in KPK to YouTube channels with global audiences, the opportunities for video editors in Pakistan are enormous. SSI Bannu gives you a structured path from complete beginner to a professional editor with a showreel, a Fiverr profile, and the ability to take real clients — all in just two months of focused, practical training.",
  },

  // ─────────────────────────────────────────────
  // 7. COMPUTER IT FUNDAMENTALS (CIT)
  // ─────────────────────────────────────────────
  {
    id: "7",
    slug: "computer-it",
    category: "CIT",
    featured: false,
    title: "Computer IT Fundamentals",
    subtitle: "Your Foundation for Every Tech Career.",
    description:
      "Hardware, networking, operating systems, MS Office, and basic programming. Build the essential technical literacy needed before entering any advanced tech course or professional environment.",
    thumbnail: citThumbnail,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    ],
    level: "Beginner",
    duration: "2 Months",
    students: "2.0k",
    about:
      "SSI Bannu's Computer IT Fundamentals course is the starting point for every student who wants to enter the world of technology but doesn't know where to begin. You will learn how computers work from the hardware level up, how to manage operating systems, how to connect to networks, and how to use professional productivity software confidently. This course is also the recommended prerequisite for anyone planning to enroll in Web Development, Cybersecurity, or any other advanced technical program at SSI.",
    whatYouLearn: [
      {
        title: "Computer Hardware",
        caption: "Components of a computer — CPU, RAM, storage, motherboard — and how they work together.",
      },
      {
        title: "Operating Systems",
        caption: "Windows 10/11 setup, file management, system settings, and troubleshooting common OS issues.",
      },
      {
        title: "Networking Basics",
        caption: "How the internet works, IP addresses, routers, Wi-Fi setup, and basic network troubleshooting.",
      },
      {
        title: "MS Office Suite",
        caption: "Word documents, Excel spreadsheets, and PowerPoint presentations for professional use.",
      },
      {
        title: "Internet & Email",
        caption: "Safe browsing, professional email communication, cloud storage with Google Drive and OneDrive.",
      },
      {
        title: "Basic Programming Concepts",
        caption: "Introduction to programming logic, variables, and problem-solving — preparation for future coding courses.",
      },
    ],
    curriculum: [
      {
        title: "Hardware & Operating Systems",
        tags: ["PC components", "Windows setup", "File system management", "System troubleshooting"],
      },
      {
        title: "Networking & Internet",
        tags: ["How the internet works", "IP & DNS basics", "Wi-Fi setup", "Safe browsing"],
      },
      {
        title: "MS Office Essentials",
        tags: ["Word formatting", "Excel formulas", "PowerPoint slides", "Office project"],
      },
      {
        title: "Programming Introduction",
        tags: ["What is code?", "Variables & logic", "Intro to Python", "Simple script project"],
      },
      {
        title: "Professional Tools & Certification",
        tags: ["Google Workspace", "Cloud storage", "Email etiquette", "Certification"],
      },
    ],
    whyEnroll:
      "You cannot succeed in any modern profession without computer literacy — and SSI Bannu makes sure you build that foundation the right way. This course is recommended for students, job seekers, small business owners, and anyone in Bannu who wants to use technology confidently in their daily professional life. Complete this course and you will be fully prepared to advance into any of our specialized programs.",
  },

  // ─────────────────────────────────────────────
  // 8. MS OFFICE
  // ─────────────────────────────────────────────
  {
    id: "8",
    slug: "ms-office",
    category: "CIT",
    featured: false,
    title: "MS Office",
    subtitle: "The Professional's Essential Toolkit.",
    description:
      "Master Microsoft Word, Excel, and PowerPoint to a professional standard. Build documents, analyze data with formulas and charts, and create presentations that communicate with impact.",
    thumbnail: msOfficeThumbnail,
    images: [
      "https://images.unsplash.com/photo-1581093588401-ecbfae0caa9c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    ],
    level: "Beginner",
    duration: "3 Months",
    students: "860",
    about:
      "Microsoft Office remains the most universally required skill across every industry in Pakistan — from government offices and schools to hospitals, banks, and businesses. SSI Bannu's dedicated MS Office course goes far beyond basic typing and formatting. You will learn advanced Word features for professional documents, Excel formulas and data analysis tools used in real offices, and PowerPoint design principles that make presentations actually convincing. This course is ideal for students preparing for office jobs, government exams, or anyone wanting to work more efficiently.",
    whatYouLearn: [
      {
        title: "Microsoft Word — Advanced",
        caption: "Styles, tables of contents, mail merge, track changes, and print-ready professional document formatting.",
      },
      {
        title: "Microsoft Excel — Formulas & Functions",
        caption: "SUM, VLOOKUP, IF, COUNTIF, pivot tables, and data analysis tools used in real office environments.",
      },
      {
        title: "Excel Data Visualization",
        caption: "Charts, conditional formatting, and dashboard layouts to present data clearly and professionally.",
      },
      {
        title: "Microsoft PowerPoint",
        caption: "Slide design principles, animations, slide masters, and presenting to an audience with confidence.",
      },
      {
        title: "Google Workspace Integration",
        caption: "Google Docs, Sheets, and Slides as alternatives — and how to work across both ecosystems.",
      },
      {
        title: "Professional Productivity",
        caption: "Keyboard shortcuts, file organization, cloud backup, and time-saving habits used by office professionals.",
      },
    ],
    curriculum: [
      {
        title: "Microsoft Word Mastery",
        tags: ["Document formatting", "Styles & headings", "Tables & lists", "Professional report project"],
      },
      {
        title: "Excel Fundamentals",
        tags: ["Spreadsheet basics", "SUM, AVERAGE, IF", "Sorting & filtering", "Budget sheet project"],
      },
      {
        title: "Excel Advanced",
        tags: ["VLOOKUP & HLOOKUP", "Pivot tables", "Charts & graphs", "Data dashboard project"],
      },
      {
        title: "PowerPoint & Presentations",
        tags: ["Slide master", "Animations & transitions", "Design principles", "Business pitch project"],
      },
      {
        title: "Google Workspace & Certification",
        tags: ["Google Docs & Sheets", "Cloud collaboration", "Final assessment", "Certification"],
      },
    ],
    whyEnroll:
      "MS Office proficiency is listed as a requirement in the majority of job postings across Pakistan — in government, private sector, NGOs, and international organizations. SSI Bannu's MS Office course goes beyond surface-level training to give you the advanced skills that actually get you hired and make you valuable in any organization. Whether you are preparing for a government job exam, a corporate career, or freelance data entry work, this course is your most practical investment.",
  },

  // ─────────────────────────────────────────────
  // 9. CYBERSECURITY BASICS
  // ─────────────────────────────────────────────
  // {
  //   id: "9",
  //   slug: "cybersecurity",
  //   category: "CIT",
  //   featured: false,
  //   title: "Cybersecurity Basics",
  //   subtitle: "Protect Systems. Defend the Digital World.",
  //   description:
  //     "Network security, ethical hacking fundamentals, threat detection, and system hardening. Learn to think like an attacker so you can defend like a professional.",
  //   thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop",
  //   ],
  //   level: "Advanced",
  //   duration: "4 Months",
  //   students: "720",
  //   about:
  //     "SSI Bannu's Cybersecurity Basics course introduces students to one of the fastest-growing and highest-paying fields in global technology. You will learn how attackers compromise systems — and more importantly, how to stop them. Covering networking fundamentals, ethical hacking concepts, common vulnerability types, and security hardening practices, this course prepares you for entry-level cybersecurity roles and globally recognized certifications like CompTIA Security+. Note: a basic understanding of computers and networking is recommended before enrolling.",
  //   whatYouLearn: [
  //     {
  //       title: "Networking for Security",
  //       caption: "TCP/IP, protocols, firewalls, VPNs, and how network architecture affects security posture.",
  //     },
  //     {
  //       title: "Common Threats & Attack Types",
  //       caption: "Phishing, malware, SQL injection, man-in-the-middle attacks, and social engineering explained.",
  //     },
  //     {
  //       title: "Ethical Hacking Fundamentals",
  //       caption: "Penetration testing concepts, reconnaissance, scanning with Nmap, and responsible disclosure.",
  //     },
  //     {
  //       title: "System Hardening",
  //       caption: "Securing Windows and Linux systems, user access control, patch management, and firewall rules.",
  //     },
  //     {
  //       title: "Cryptography Basics",
  //       caption: "Encryption, hashing, SSL/TLS, and how cryptography protects data in transit and at rest.",
  //     },
  //     {
  //       title: "Security Tools",
  //       caption: "Hands-on use of Wireshark, Kali Linux tools, and basic SIEM concepts for threat monitoring.",
  //     },
  //   ],
  //   curriculum: [
  //     {
  //       title: "Networking & Security Foundations",
  //       tags: ["OSI model", "TCP/IP basics", "Firewalls & VPNs", "Network scanning with Nmap"],
  //     },
  //     {
  //       title: "Threats, Attacks & Vulnerabilities",
  //       tags: ["Malware types", "Phishing simulation", "OWASP Top 10", "Vulnerability assessment"],
  //     },
  //     {
  //       title: "Ethical Hacking Introduction",
  //       tags: ["Penetration testing phases", "Kali Linux setup", "Basic exploitation concepts", "CTF challenge"],
  //     },
  //     {
  //       title: "System Hardening & Cryptography",
  //       tags: ["Windows & Linux hardening", "Encryption basics", "Password security", "Hardening checklist project"],
  //     },
  //     {
  //       title: "Security Tools & Career Path",
  //       tags: ["Wireshark analysis", "CompTIA Security+ overview", "Bug bounty intro", "Certification"],
  //     },
  //   ],
  //   whyEnroll:
  //     "Cybersecurity professionals are among the highest-paid people in the tech industry globally, and Pakistan's demand for trained security talent is growing rapidly as businesses move online. SSI Bannu's Cybersecurity course gives you the foundation to pursue entry-level security analyst roles, prepare for internationally recognized certifications, or participate in bug bounty programs that pay in dollars. If you are technical, detail-oriented, and want a career with global earning potential, this course is your starting point.",
  // },
];




export const COURSES_DATA = [
  {
    id: "1",
    slug: "graphic-designing",
    category: "Design",
    title: "Graphic Designing",
    description: "Master Adobe Photoshop, Illustrator & InDesign. Build logos, posters, brand identities and print-ready designs from scratch.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
    level: "Beginner",
    duration: "3 Months",
    students: "2.4k",
    featured: true,
  },
  {
    id: "2",
    slug: "web-development",
    category: "Development",
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React and Node.js. Build fully functional full-stack websites and deploy them live.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=500&fit=crop",
    level: "Intermediate",
    duration: "6 Months",
    students: "3.1k",
    featured: false,
  },
  {
    id: "3",
    slug: "3d-modeling",
    category: "3D Modeling",
    title: "3D Modeling & Animation",
    description: "Learn Blender from zero to professional. Create 3D models, rigged characters, product renders and cinematic animations.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=500&fit=crop",
    level: "Intermediate",
    duration: "4 Months",
    students: "980",
    featured: false,
  },
  {
    id: "4",
    slug: "ui-ux-design",
    category: "Design",
    title: "UI/UX Design",
    description: "Design beautiful, user-centred interfaces using Figma. Learn wireframing, prototyping, design systems and user research.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop",
    level: "Beginner",
    duration: "3 Months",
    students: "1.8k",
    featured: false,
  },
  {
    id: "5",
    slug: "digital-marketing",
    category: "Marketing",
    title: "Digital Marketing",
    description: "SEO, social media strategy, Google Ads, email campaigns and analytics. Grow any business online from Bannu to global.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
    level: "Beginner",
    duration: "2 Months",
    students: "1.4k",
    featured: false,
  },
  {
    id: "6",
    slug: "video-editing",
    category: "Video Editing",
    title: "Video Editing",
    description: "Adobe Premiere Pro & After Effects. Edit reels, YouTube content, cinematic films and motion graphics professionally.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
    level: "Beginner",
    duration: "2 Months",
    students: "1.1k",
    featured: false,
  },
  {
    id: "7",
    slug: "computer-it",
    category: "CIT",
    title: "Computer IT Fundamentals",
    description: "Hardware, networking, MS Office, operating systems and basic programming. Your foundation for every tech career.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    level: "Beginner",
    duration: "2 Months",
    students: "2.0k",
    featured: false,
  },
  {
    id: "8",
    slug: "ms-office",
    category: "CIT",
    title: "MS OFFICE",
    description: "Master Microsoft Office applications including Word, Excel, and PowerPoint for professional productivity.",
    image: "https://images.unsplash.com/photo-1581093588401-ecbfae0caa9c?w=800&h=500&fit=crop",
    level: "Intermediate",
    duration: "3 Months",
    students: "860",
    featured: false,
  },
  {
    id: "9",
    slug: "cybersecurity",
    category: "CIT",
    title: "Cybersecurity Basics",
    description: "Network security, ethical hacking fundamentals, threat detection and system hardening. Protect digital infrastructure.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    level: "Advanced",
    duration: "4 Months",
    students: "720",
    featured: false,
  },
];


// Data fucntions 

// "What You'll Learn" — 4 outcome items shown in the right column.
export function getCourseOutcomes() {
  return [
    {
      title: "Industry-Ready Skills",
      body: "Every lesson is built around real tools and real workflows used by professionals in the field today.",
    },
    {
      title: "Project-Based Learning",
      body: "You won't just watch — you'll build. Every module ends with a hands-on project added to your portfolio.",
    },
    {
      title: "Mentor Support",
      body: "Get direct guidance from experienced instructors who review your work and answer questions.",
    },
    {
      title: "Certificate of Completion",
      body: "Receive a verified certificate recognized by local and international employers upon finishing the course.",
    },
  ];
}

// Course curriculum — 5 modules. Shared across all courses.
// Replace with per-slug curriculum data when backend is ready.
export function getCourseCurriculum() {
  return [
    {
      id: 1,
      number: "(01)",
      title: "Getting Started & Foundations",
      topics: [
        "Course overview and setup",
        "Understanding the core tools",
        "Industry standards and best practices",
        "Your first hands-on exercise",
      ],
    },
    {
      id: 2,
      number: "(02)",
      title: "Core Concepts & Techniques",
      topics: [
        "Deep dive into fundamental concepts",
        "Step-by-step technique walkthroughs",
        "Common mistakes and how to avoid them",
        "Mini project: applying what you've learned",
      ],
    },
    {
      id: 3,
      number: "(03)",
      title: "Intermediate Skills & Workflows",
      topics: [
        "Professional workflow setup",
        "Advanced techniques in practice",
        "Speed and efficiency tips",
        "Real-world case study breakdown",
      ],
    },
    {
      id: 4,
      number: "(04)",
      title: "Advanced Applications",
      topics: [
        "Complex real-world scenarios",
        "Problem-solving strategies",
        "Polish and quality refinement",
        "Portfolio project: full brief",
      ],
    },
    {
      id: 5,
      number: "(05)",
      title: "Career, Freelancing & Next Steps",
      topics: [
        "Building your portfolio",
        "Freelancing and client acquisition",
        "Job market guidance",
        "Course graduation & certification",
      ],
    },
  ];
}

// Body content — about + enroll paragraphs.
export function getCourseBodyContent() {
  return {
    aboutHeading: "About This Course",

    aboutParagraph1:
      "This course is built around one goal: getting you job-ready as fast as possible without cutting corners on quality. Every lesson is hands-on, every project is real, and every concept is taught the way professionals actually use it in the field.",

    aboutParagraph2:
      "Whether you're a complete beginner or looking to level up existing skills, this course gives you the practical foundation, portfolio pieces, and confidence to start working professionally.",

    enrollHeading: "Why Enroll in This Course?",

    enrollParagraph1:
      "Most courses teach theory. This one teaches practice. You'll spend the majority of your time building real projects, solving real problems, and developing the kind of intuition that only comes from doing the work.",

    enrollParagraph2:
      "Our instructors are active professionals — not just teachers. They bring current industry knowledge into every lesson, ensuring what you learn is relevant and in-demand right now.",

    enrollParagraph3:
      "Enroll today. Your career starts here.",
  };
}