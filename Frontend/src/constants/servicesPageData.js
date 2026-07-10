// ─────────────────────────────────────────────────────────────────────────────
// SSI Services Data
// Structure:
//   Category → { id, title, thumbnail, subCategories[] }
//   SubCategory → { id, title, subtitle, description, about, images[],
//                   benefits[], whyTake }
// ─────────────────────────────────────────────────────────────────────────────

export const SSI_SERVICES = [

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. WEB DEVELOPMENT
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Web Development",
    thumbnail: "https://res.cloudinary.com/dizlbrnag/image/upload/v1777013952/My_Tech_Stack_pdtxis.png",
    subCategories: [

  {
    id: "1-1",
    title: "Frontend Development",
    subtitle: "High-performance interfaces built for real users.",
    description: "We design and develop modern, responsive user interfaces that deliver smooth, fast, and engaging user experiences across all devices.",
    about: "At SSIB, our frontend team focuses on building production-ready interfaces that not only look good but perform exceptionally well. We transform designs into scalable web applications using modern frameworks, ensuring speed, accessibility, and long-term maintainability for your product.",
    images: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    ],
    benefits: [
      { title: "Modern UI Development", caption: "Clean, responsive interfaces built with latest technologies." },
      { title: "Mobile-First Approach", caption: "Optimised for all screen sizes and devices." },
      { title: "Fast Performance", caption: "Optimised loading speed and smooth interactions." },
      { title: "Scalable Code", caption: "Structured codebase ready for future growth." },
    ],
    whyTake: "Your frontend is the first impression of your business. We ensure it is fast, intuitive, and built to convert visitors into customers.",
  },

  {
    id: "1-2",
    title: "Backend Development",
    subtitle: "Secure and scalable systems powering your business.",
    description: "We build reliable backend systems, APIs, and databases that handle your business logic efficiently and securely.",
    about: "SSIB develops strong backend infrastructures that support your applications at scale. From API development to database management, we ensure your system remains stable, secure, and ready to handle real-world traffic and business operations.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
    ],
    benefits: [
      { title: "API Development", caption: "Structured and scalable APIs for seamless integration." },
      { title: "Secure Systems", caption: "Strong authentication and data protection." },
      { title: "Database Management", caption: "Optimised and reliable data handling." },
      { title: "System Integration", caption: "Third-party services integrated smoothly." },
    ],
    whyTake: "A strong backend ensures your application runs smoothly. We build systems that are secure, stable, and ready for growth.",
  },

  {
    id: "1-3",
    title: "Full-Stack Development",
    subtitle: "Complete web solutions from idea to deployment.",
    description: "We deliver end-to-end web applications, handling everything from frontend design to backend logic and deployment.",
    about: "SSIB provides full-stack development services where a single expert team manages the entire product lifecycle. This ensures consistency, faster delivery, and a seamless experience across all layers of your application.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
    benefits: [
      { title: "End-to-End Development", caption: "From concept to live deployment." },
      { title: "Unified Team", caption: "Single team handling frontend and backend." },
      { title: "Faster Delivery", caption: "Efficient development workflow." },
      { title: "Deployment Ready", caption: "Fully tested and production-ready solutions." },
    ],
    whyTake: "We simplify development by providing a complete solution under one roof — saving you time, cost, and coordination effort.",
  },

  {
    id: "1-4",
    title: "E-Commerce Solutions",
    subtitle: "Online stores designed to drive sales.",
    description: "We build secure and user-friendly e-commerce platforms that help businesses sell products efficiently online.",
    about: "SSIB develops e-commerce systems focused on performance and conversion. From product listings to checkout and payment integration, we create a complete online shopping experience tailored to your business needs.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    ],
    benefits: [
      { title: "Secure Payments", caption: "Integration with trusted payment gateways." },
      { title: "User-Friendly Design", caption: "Simple and smooth shopping experience." },
      { title: "Order Management", caption: "Track orders and manage inventory easily." },
      { title: "Mobile Optimised", caption: "Optimised for mobile users." },
    ],
    whyTake: "We build e-commerce platforms that not only look good but also increase your sales and customer satisfaction.",
  },

  {
    id: "1-5",
    title: "Website & CMS Development",
    subtitle: "Easy-to-manage websites for growing businesses.",
    description: "We create professional websites with CMS solutions that allow you to manage your content without technical skills.",
    about: "SSIB builds modern websites with content management systems that give you full control over your content. Whether it's a business website or portfolio, we ensure it is easy to update, fast, and SEO-friendly.",
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
    ],
    benefits: [
      { title: "Easy Content Management", caption: "Update your website without coding." },
      { title: "Custom Design", caption: "Professional and unique website layouts." },
      { title: "SEO Friendly", caption: "Optimised for better search ranking." },
      { title: "Maintenance Support", caption: "Ongoing updates and support available." },
    ],
    whyTake: "We build websites that are easy to manage, visually appealing, and designed to support your business growth.",
  },

]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. UI/UX DESIGN
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 2,
    title: "UI/UX Design",
    thumbnail: "https://res.cloudinary.com/dizlbrnag/image/upload/v1777545289/Gemini_Generated_Image_9e6v669e6v669e6v_yuidlw.webp",
    subCategories: [

      {
        id: "2-1",
        title: "UX Research & Strategy",
        subtitle: "Design decisions backed by real user evidence.",
        description: "We conduct user interviews, usability tests, competitive audits, and journey mapping to build a research foundation that makes every design decision defensible.",
        about: "SSI's UX research process begins before a single wireframe is drawn. We talk to your users, analyse your competitors, audit your existing product, and map the complete user journey. The output is a clear strategic brief that guides the entire design phase — eliminating assumptions and reducing the cost of rework later.",
        images: [
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop",
        ],
        benefits: [
          { title: "User Interviews", caption: "Direct conversations with your target users to understand real pain points and motivations." },
          { title: "Usability Testing", caption: "Moderated and unmoderated testing sessions that reveal where users struggle." },
          { title: "Competitive Analysis", caption: "Structured audit of competitor products to identify gaps and opportunities." },
          { title: "Journey Mapping", caption: "Visual maps of every touchpoint in your user's experience from discovery to retention." },
        ],
        whyTake: "Building without research is guessing. Every assumption your team makes about what users want costs money when you are wrong. SSI's research process replaces guesswork with evidence — so your design budget goes toward solving real problems, not imagined ones.",
      },

      {
        id: "2-2",
        title: "Wireframing & Prototyping",
        subtitle: "From blank page to interactive prototype — fast.",
        description: "SSI creates low and high-fidelity wireframes and interactive Figma prototypes that let you test ideas, gather feedback, and align stakeholders before a single line of code is written.",
        about: "Wireframing and prototyping is where strategy becomes tangible. SSI moves quickly from concepts to clickable flows — giving your team, investors, and users something concrete to react to. We work in Figma with a structured component approach so wireframes evolve into high-fidelity designs without starting over.",
        images: [
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Low-Fidelity Wireframes", caption: "Fast structural sketches that establish layout and information architecture." },
          { title: "Interactive Prototypes", caption: "Clickable Figma flows that simulate the real product for testing and stakeholder review." },
          { title: "User Flow Documentation", caption: "Clear maps of every path through your product from entry to goal completion." },
          { title: "Rapid Iteration", caption: "Quick feedback cycles that let us test and improve before development begins." },
        ],
        whyTake: "Finding a problem in a wireframe takes an hour to fix. Finding the same problem after it has been built takes weeks and thousands of dollars. SSI's prototyping process catches issues early, aligns your team on direction, and hands developers a clear, unambiguous blueprint.",
      },

      {
        id: "2-3",
        title: "UI Design & Design Systems",
        subtitle: "Beautiful, consistent interfaces built to scale.",
        description: "SSI designs high-fidelity UI screens and builds complete Figma design systems — component libraries, token systems, and style guides that keep your product visually consistent at any scale.",
        about: "A great UI is not just about looking good on a single screen — it is about maintaining visual and functional consistency across every screen your product will ever have. SSI builds design systems that give your team a shared visual language: reusable components, defined spacing, typography scales, colour tokens, and interaction states all documented and ready for handoff.",
        images: [
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop",
        ],
        benefits: [
          { title: "Component Library", caption: "Reusable Figma components with all variants and states documented and organised." },
          { title: "Design Tokens", caption: "Colour, spacing, typography, and shadow tokens that sync with your codebase." },
          { title: "Responsive UI Design", caption: "Every screen designed for mobile, tablet, and desktop breakpoints." },
          { title: "Developer Handoff", caption: "Annotated, spec-ready files with measurements, assets, and interaction notes." },
        ],
        whyTake: "Products that look inconsistent feel untrustworthy. A proper design system means every new feature your team ships looks like it belongs — because it is built from the same components. SSI's design systems save your team time on every future feature and keep your product looking professional as it grows.",
      },

      {
        id: "2-4",
        title: "Mobile App UI/UX",
        subtitle: "App experiences designed for how people actually use their phones.",
        description: "SSI designs iOS and Android app interfaces that follow platform conventions, feel native, and delight users — from onboarding flow to core feature screens to edge cases.",
        about: "Mobile design is not desktop design scaled down. SSI's mobile UI/UX work starts with platform guidelines (Apple HIG, Material Design) and then goes beyond them — designing for real thumb zones, real network conditions, and real usage contexts. We design every critical flow from onboarding to core experience to error states.",
        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Platform-Native Patterns", caption: "iOS and Android interfaces that feel native to each platform's conventions." },
          { title: "Onboarding Flow Design", caption: "First-run experiences that activate users and reduce early churn." },
          { title: "Gesture & Interaction Design", caption: "Swipe, tap, pinch — interactions designed for how fingers actually move." },
          { title: "Empty & Error States", caption: "Every edge case designed so users are never left confused or stranded." },
        ],
        whyTake: "App store reviews are brutally honest about bad UX. One-star reviews citing confusing navigation, slow interactions, or a frustrating onboarding flow directly kill your ratings and downloads. SSI designs mobile experiences that users rate five stars — because every detail has been considered.",
      },

      {
        id: "2-5",
        title: "UX Audit & Redesign",
        subtitle: "Fix what is broken. Improve what is good. Elevate everything.",
        description: "SSI conducts structured UX audits of existing products — identifying usability issues, conversion blockers, and accessibility gaps — then delivers a prioritised redesign roadmap.",
        about: "If your product exists already but something is not working — users drop off, metrics are flat, feedback is negative — SSI's UX audit process diagnoses exactly why. We systematically evaluate your product against heuristics, test it with users, analyse your analytics, and produce a prioritised list of issues with recommended fixes. We then execute the redesign in phases to minimise disruption.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Heuristic Evaluation", caption: "Expert review against Nielsen's 10 usability heuristics to surface structural issues." },
          { title: "Analytics Review", caption: "We dig into your data — drop-off points, rage clicks, low-engagement screens." },
          { title: "Prioritised Issue List", caption: "Every finding ranked by severity and business impact so you fix the right things first." },
          { title: "Phased Redesign", caption: "Incremental improvements delivered so your product keeps running while we improve it." },
        ],
        whyTake: "You do not always need to rebuild from scratch — sometimes you need an expert to tell you exactly what is wrong and in what order to fix it. SSI's audit process gives you clarity, prioritisation, and a concrete path to a product your users actually enjoy using.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. GRAPHIC DESIGN
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    title: "Graphic Design",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
    subCategories: [

      {
        id: "3-1",
        title: "Logo & Brand Identity",
        subtitle: "A mark that stands for something.",
        description: "SSI designs logos and complete visual identity systems — wordmarks, icons, colour palettes, typography, and brand guidelines — that give businesses a consistent, professional presence.",
        about: "A logo is the entry point of a brand, but a brand identity is the complete visual language a business speaks across every touchpoint. SSI's brand identity process starts with understanding your business, audience, and competitors — then moves through concept exploration, refinement, and final delivery of a complete brand kit including logo files, colour system, typography, and a usage guidelines document.",
        images: [
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
        ],
        benefits: [
          { title: "Logo Design", caption: "Wordmark, lettermark, icon, or combination mark — designed in vector for any size." },
          { title: "Colour System", caption: "Primary, secondary, and neutral palettes with CMYK, RGB, and HEX values defined." },
          { title: "Typography Pairing", caption: "Display and body font pairings that reflect your brand personality." },
          { title: "Brand Guidelines", caption: "A complete usage manual so every application of your brand looks intentional." },
        ],
        whyTake: "In a saturated market, the brands that win are the ones people remember and trust. A professional, cohesive identity signals competence before a single word is read. SSI builds brand identities that make small businesses look like established players and established players look like leaders.",
      },

      {
        id: "3-2",
        title: "Print & Marketing Design",
        subtitle: "Design that works in the physical world.",
        description: "Brochures, flyers, posters, banners, business cards, and packaging — SSI designs print materials that are print-ready, brand-consistent, and visually compelling.",
        about: "Digital is not everything. Print materials remain one of the most trusted forms of communication, especially in markets like Pakistan where physical presence matters. SSI designs and prepares print-ready artwork for all formats — from A5 flyers to large-format banners — ensuring correct colour modes, bleed, and resolution for professional printing results.",
        images: [
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Print-Ready Files", caption: "CMYK, 300dpi, with correct bleed and crop marks for professional print output." },
          { title: "Full Format Range", caption: "Business cards, flyers, posters, brochures, roll-up banners, and packaging." },
          { title: "Brand Consistency", caption: "Every piece is aligned with your brand guidelines for a unified physical presence." },
          { title: "Fast Turnaround", caption: "Urgent print jobs handled with quick-turn delivery without sacrificing quality." },
        ],
        whyTake: "Your printed materials are often the first physical impression of your business. A poorly designed flyer or business card signals unprofessionalism before anyone reads the content. SSI designs print materials that reflect the quality of your actual product or service.",
      },

      {
        id: "3-3",
        title: "Social Media Design",
        subtitle: "Content that stops the scroll.",
        description: "SSI designs social media content systems — post templates, story formats, ad creatives, and content calendars — that maintain brand consistency while engaging your audience.",
        about: "Social media design is not just making things look pretty — it is building a visual system your team can execute consistently across hundreds of posts. SSI designs template systems in Canva or Figma that your team can use independently, alongside custom post production for campaigns, product launches, and promotions.",
        images: [
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Post Template Systems", caption: "Editable Canva or Figma templates your team uses to maintain brand consistency." },
          { title: "Ad Creative Design", caption: "Facebook, Instagram, and Google display ad creatives sized for every placement." },
          { title: "Story & Reel Graphics", caption: "Vertical format designs optimised for Instagram and TikTok story content." },
          { title: "Campaign Packages", caption: "Complete visual packages for product launches, sales events, and promotions." },
        ],
        whyTake: "Inconsistent social media visuals make brands look disorganised and unprofessional. SSI builds social media design systems that are both beautiful and practical — so your team can post consistently without starting from scratch every time.",
      },

      {
        id: "3-4",
        title: "Packaging Design",
        subtitle: "The design that sells the product before it is opened.",
        description: "SSI designs product packaging that stands out on shelves and communicates brand quality at a glance — from concept through to print-ready dieline artwork.",
        about: "Packaging design requires balancing aesthetics, brand identity, regulatory information, and manufacturing constraints — all on a three-dimensional surface. SSI designs packaging for consumer products, food and beverage, cosmetics, and retail goods — from initial concept through to final print-ready dieline files.",
        images: [
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Dieline Artwork", caption: "Precise structural templates prepared to your manufacturer's specifications." },
          { title: "3D Mockup Visualisation", caption: "Photorealistic 3D mockups for presentation, marketing, and approval." },
          { title: "Regulatory Compliance", caption: "Space allocated correctly for ingredients, barcodes, and legal text." },
          { title: "Shelf Impact Design", caption: "Designs validated against competitor shelf presence for maximum standout." },
        ],
        whyTake: "Research consistently shows that packaging design directly influences purchase decisions — often more than the product itself. SSI designs packaging that converts browsers into buyers and makes your product look like it belongs in premium retail.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. DESKTOP APPLICATION DEVELOPMENT
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 4,
    title: "Desktop Application Development",
    thumbnail: "https://res.cloudinary.com/dizlbrnag/image/upload/v1777545882/phototune.ai_1777545850_vmo2u7.webp",
    subCategories: [

      {
        id: "4-1",
        title: "Windows Application Development",
        subtitle: "Native Windows software built for performance and reliability.",
        description: "SSI builds Windows desktop applications using Electron, C#/.NET, and WPF — from internal business tools to commercial software products distributed at scale.",
        about: "Desktop applications still dominate in enterprise, professional tools, and offline-first workflows. SSI builds Windows applications that leverage the full capability of the operating system — file system access, system tray integration, native notifications, hardware interfaces, and offline data storage. We choose the right technology for your use case: Electron for cross-platform web-technology apps, .NET/WPF for deep Windows integration.",
        images: [
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Native OS Integration", caption: "System tray, notifications, file associations, and registry access done right." },
          { title: "Offline-First Architecture", caption: "Apps that work without internet and sync when connectivity is restored." },
          { title: "Auto-Update System", caption: "Built-in update mechanisms so users always run the latest version." },
          { title: "Installer & Distribution", caption: "Professional NSIS/MSI installers ready for direct download or Windows Store." },
        ],
        whyTake: "Not every tool belongs in a browser. When your users need performance, offline access, or deep OS integration, a desktop application is the right answer. SSI builds Windows software that feels native, runs reliably, and ships with a professional installation experience.",
      },

      {
        id: "4-2",
        title: "Cross-Platform Desktop Apps",
        subtitle: "One codebase. Windows, macOS, and Linux.",
        description: "SSI builds cross-platform desktop applications with Electron and Tauri — write once, deploy to all major operating systems without sacrificing native feel.",
        about: "When your users are on a mix of Windows, macOS, and Linux, building separate native apps for each is expensive and time-consuming. SSI uses Electron (for maximum web-technology compatibility) and Tauri (for smaller bundles and better performance) to build cross-platform desktop apps from a single codebase — maintaining platform-appropriate UI conventions on each OS.",
        images: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Single Codebase", caption: "Maintain one codebase that deploys to Windows, macOS, and Linux simultaneously." },
          { title: "Web Technology Stack", caption: "Use React, Vue, or vanilla JS for UI — your web team can contribute." },
          { title: "Native API Access", caption: "File system, clipboard, notifications, and OS APIs accessible from JavaScript." },
          { title: "Smaller Bundle Sizes", caption: "Tauri-based apps ship at a fraction of Electron's size with better performance." },
        ],
        whyTake: "Supporting multiple operating systems does not have to mean maintaining multiple codebases. SSI's cross-platform approach gets your desktop application to all your users faster and keeps maintenance costs low — without making the app feel like a web page pretending to be a desktop app.",
      },

      {
        id: "4-3",
        title: "Business Management Software",
        subtitle: "Custom internal tools built for your exact workflow.",
        description: "Point-of-sale systems, inventory managers, HR tools, accounting software, and custom ERP modules — SSI builds the business software your organisation actually needs.",
        about: "Off-the-shelf business software rarely fits perfectly. SSI builds custom business management applications designed around your specific workflow, your data, and your team. From small retail POS systems to multi-branch inventory management, we build tools that reduce manual work, eliminate spreadsheet chaos, and give managers real-time visibility into operations.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Custom Workflow Design", caption: "Software built around how your team actually works, not a generic process." },
          { title: "Real-Time Reporting", caption: "Dashboards and reports that give managers instant visibility into operations." },
          { title: "Multi-User & Roles", caption: "Role-based access control so every staff member sees only what they need." },
          { title: "Data Export", caption: "Export to Excel, PDF, or CSV for accounting and compliance reporting." },
        ],
        whyTake: "Generic software forces your business to adapt to its limitations. Custom software adapts to your business. SSI builds internal tools that save your team hours every week, reduce errors, and scale with your organisation — paying for themselves many times over.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. ANDROID APPLICATION DEVELOPMENT
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 5,
    title: "Android Application Development",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    subCategories: [

      {
        id: "5-1",
        title: "Native Android Development",
        subtitle: "Pure Android. Maximum performance.",
        description: "SSI builds native Android applications in Kotlin — leveraging the full Android SDK for maximum performance, device integration, and Play Store compliance.",
        about: "Native Android development gives your app the deepest access to device capabilities and the best possible performance. SSI's Android team works in Kotlin with Jetpack Compose for modern UI, following Android architecture guidelines (MVVM, Clean Architecture) to build apps that are maintainable, testable, and scalable. From Play Store submission to post-launch maintenance, we manage the full Android lifecycle.",
        images: [
          "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Kotlin & Jetpack Compose", caption: "Modern Android development stack for concise, readable, and maintainable code." },
          { title: "Full Device Integration", caption: "Camera, GPS, Bluetooth, NFC, biometrics — all hardware APIs available natively." },
          { title: "Play Store Optimised", caption: "Proper signing, sizing, screenshots, and ASO setup for maximum discoverability." },
          { title: "MVVM Architecture", caption: "Clean, testable architecture that scales as your feature set grows." },
        ],
        whyTake: "Android accounts for over 70% of global smartphone market share. A native Android app gives your users the smoothest possible experience on their devices — with access to every hardware capability and compliance with Google's latest guidelines. SSI delivers Android apps that pass review, get installed, and get used.",
      },

      {
        id: "5-2",
        title: "Cross-Platform Mobile (Flutter)",
        subtitle: "One codebase. iOS and Android. No compromise.",
        description: "SSI builds cross-platform mobile applications with Flutter — delivering beautiful, high-performance apps for both iOS and Android from a single Dart codebase.",
        about: "Flutter has changed the cross-platform equation. Unlike earlier hybrid frameworks, Flutter compiles to native ARM code and renders using its own engine — meaning there is no performance penalty and no dependence on platform web views. SSI's Flutter team delivers apps that look and feel native on both iOS and Android while sharing 95%+ of the codebase.",
        images: [
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Single Codebase", caption: "One Flutter codebase deploys to Android, iOS, web, and desktop simultaneously." },
          { title: "Native Performance", caption: "Flutter compiles to native ARM — no JavaScript bridge, no performance bottleneck." },
          { title: "Beautiful Custom UI", caption: "Pixel-perfect custom interfaces unconstrained by platform UI component libraries." },
          { title: "Faster Time to Market", caption: "Ship to both platforms simultaneously — cutting your development timeline nearly in half." },
        ],
        whyTake: "If you need to reach both Android and iOS users without the cost of building two separate native apps, Flutter is the best answer available today. SSI's Flutter team delivers apps that users cannot tell from native — because under the hood, they perform like native.",
      },

      {
        id: "5-3",
        title: "Android App UI/UX Design",
        subtitle: "Material Design done beautifully.",
        description: "SSI designs Android application interfaces that follow Material Design 3 guidelines while expressing your brand personality — beautiful, functional, and familiar to Android users.",
        about: "Android users have expectations shaped by years of using Material Design patterns. Violating those patterns — even subtly — creates friction. SSI designs Android UIs that honour platform conventions while building in your brand's visual identity. Every screen is designed with real Android device dimensions, navigation patterns, and gesture behaviours in mind.",
        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Material Design 3", caption: "Latest Android design system with dynamic colour, updated components, and modern typography." },
          { title: "Figma Prototype", caption: "Interactive Android prototype for testing and developer handoff." },
          { title: "Dark Mode Design", caption: "Full dark mode variants designed for every screen from day one." },
          { title: "Accessibility", caption: "Touch targets, contrast ratios, and screen reader labels built into every design." },
        ],
        whyTake: "An Android app that looks out of place on Android feels untrustworthy to users. SSI designs Android experiences that feel like they belong on the platform — because they are built with the platform's own design language — while still standing out through superior visual quality.",
      },

      {
        id: "5-4",
        title: "Play Store Publishing & ASO",
        subtitle: "Get found. Get installed. Get reviewed.",
        description: "SSI handles the complete Google Play Store submission process — app signing, store listing optimisation, screenshot design, and ongoing ASO strategy to maximise organic installs.",
        about: "Publishing to the Play Store is more than uploading an APK. App Store Optimisation (ASO) — the right title, description, keywords, screenshots, and ratings strategy — directly determines how many people discover and install your app organically. SSI manages the full submission process and implements an ongoing ASO strategy to improve your store ranking over time.",
        images: [
          "",
          "",
        ],
        benefits: [
          { title: "Full Store Submission", caption: "App signing, content rating, privacy policy, and all Play Console requirements handled." },
          { title: "Screenshot & Graphic Design", caption: "Professional store screenshots and feature graphics that convert profile views to installs." },
          { title: "Keyword Optimisation", caption: "Research-backed title, short description, and long description optimised for search." },
          { title: "Rating Strategy", caption: "In-app review prompts and response strategy to build and maintain a strong rating." },
        ],
        whyTake: "Thousands of apps are submitted to the Play Store every day. Without a proper ASO strategy, yours will not be found. SSI turns your Play Store listing into a conversion asset — so the users who find your app install it, and the users who install it leave positive reviews.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. 3D MODELING & ANIMATION
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 6,
    title: "3D Modeling & Animation",
    thumbnail: "https://res.cloudinary.com/dizlbrnag/image/upload/v1777013956/Blender_for_tools_section_2_nahstt.png",
    subCategories: [

      {
        id: "6-1",
        title: "Product 3D Modeling & Rendering",
        subtitle: "Photorealistic product visuals without a photoshoot.",
        description: "SSI creates photorealistic 3D models and rendered images of physical products — for e-commerce, marketing materials, packaging mockups, and investor presentations.",
        about: "Physical product photography is expensive, inflexible, and impossible before the product exists. SSI's 3D product rendering service creates photorealistic images of your product in any environment, from any angle, with any colour or material variation — all from a 3D model. The result is indistinguishable from a professional studio photograph, at a fraction of the cost and with unlimited flexibility.",
        images: [
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=500&fit=crop",
        ],
        benefits: [
          { title: "Photorealistic Rendering", caption: "Cycles-rendered images indistinguishable from professional studio photography." },
          { title: "Material & Colour Variants", caption: "Generate every product variant from one model — no separate photoshoots per colour." },
          { title: "Pre-Production Visuals", caption: "Create marketing imagery before your product physically exists." },
          { title: "360° View Sets", caption: "Full rotation image sets for interactive e-commerce product viewers." },
        ],
        whyTake: "E-commerce products with high-quality imagery convert significantly better than those with poor photography. SSI's 3D rendering gives your product the visual presentation it deserves — at any stage of production, in any configuration, for any medium.",
      },

      {
        id: "6-2",
        title: "Architectural Visualisation",
        subtitle: "Walk through buildings before they are built.",
        description: "SSI creates architectural renders and animated walkthroughs of residential, commercial, and interior spaces — for client presentations, real estate marketing, and planning approvals.",
        about: "Architectural visualisation allows developers, architects, and real estate agents to present projects to clients with photorealistic accuracy before construction begins. SSI produces still renders, animated camera walkthroughs, and interactive 360° panoramas of architectural spaces — using reference drawings, blueprints, or design briefs as input.",
        images: [
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Exterior Renders", caption: "Photorealistic building exteriors with lighting, landscaping, and environmental context." },
          { title: "Interior Renders", caption: "Furnished interior spaces with natural and artificial lighting simulated accurately." },
          { title: "Animated Walkthrough", caption: "Cinematic camera animations that guide viewers through the space in video format." },
          { title: "360° Panoramas", caption: "Interactive panoramic views embeddable on websites for remote property tours." },
        ],
        whyTake: "Clients buy what they can see. Presenting a construction project through floor plans and technical drawings leaves too much to imagination and too little to confidence. SSI's architectural visualisation helps you close sales, secure approvals, and align stakeholders by showing them exactly what they are getting.",
      },

      {
        id: "6-3",
        title: "Character Modeling & Animation",
        subtitle: "3D characters brought to life.",
        description: "SSI models, rigs, and animates 3D characters for games, films, advertisements, and digital content — from stylised cartoon figures to realistic humanoid characters.",
        about: "Character creation is one of the most complex disciplines in 3D production. SSI's character pipeline covers the full workflow: concept to model, model to rig, rig to animation. We produce characters for real-time use in games (optimised meshes, PBR materials) and offline rendering in film and advertisement production (subdivision-ready, high-detail meshes).",
        images: [
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Character Modeling", caption: "High and low-poly character meshes in realistic and stylised aesthetics." },
          { title: "Rigging & Skinning", caption: "Animator-friendly rigs with clean weight painting for natural deformation." },
          { title: "Keyframe Animation", caption: "Walk cycles, expressions, action sequences, and cinematic performance animation." },
          { title: "Game-Ready Assets", caption: "LOD-optimised meshes with PBR material sets ready for Unity or Unreal Engine." },
        ],
        whyTake: "Memorable characters are the heart of engaging games, films, and branded content. SSI brings characters from concept to animation-ready assets — giving your project personalities that audiences connect with.",
      },

      {
        id: "6-4",
        title: "Motion Graphics & 3D Animation",
        subtitle: "Animated content that explains, engages, and sells.",
        description: "SSI produces motion graphics and 3D animated content for product explainers, social media, title sequences, advertisements, and brand storytelling.",
        about: "Motion graphics sit at the intersection of design and animation — using movement, typography, and visual elements to communicate ideas that static graphics cannot. SSI produces motion content ranging from simple logo animations to complex 3D product explainer videos, combining After Effects motion graphics with Blender 3D animation for maximum visual impact.",
        images: [
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Product Explainer Videos", caption: "Animated product demonstrations that communicate features faster than text or static images." },
          { title: "Logo Animation", caption: "Branded logo reveals and animations for video intros, presentations, and social media." },
          { title: "Social Media Content", caption: "Short-form animated content optimised for Instagram, TikTok, and YouTube." },
          { title: "Title Sequences", caption: "Cinematic opening sequences for films, events, and corporate video productions." },
        ],
        whyTake: "Video content generates dramatically more engagement than static content across every platform. SSI's motion graphics and 3D animation transform your message into content people watch, share, and remember — because moving images communicate emotion and complexity that static design simply cannot.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 7. FREELANCING & DIGITAL SERVICES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    title: "Freelancing & Digital Services",
    thumbnail: "https://res.cloudinary.com/dizlbrnag/image/upload/v1777546347/phototune.ai_1777546324_btltlz.webp",
    subCategories: [

      {
        id: "7-1",
        title: "Fiverr & Upwork Profile Setup",
        subtitle: "Launch your freelancing career the right way.",
        description: "SSI helps individuals build optimised Fiverr and Upwork profiles — gig strategy, profile copywriting, portfolio presentation, and pricing structure — to attract their first clients fast.",
        about: "Most freelancers fail not because of skill deficiency but because of poor positioning. A weak profile title, a vague gig description, or a portfolio with no structure means qualified buyers scroll past without clicking. SSI's freelancing setup service applies proven profile optimisation strategies to make your skills visible, credible, and compelling to the right buyers on Fiverr and Upwork.",
        images: [
          "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Profile Copywriting", caption: "Title, bio, and gig descriptions written to rank in search and convert visitors to buyers." },
          { title: "Gig Strategy", caption: "Which services to offer, how to package them, and how to price for your level." },
          { title: "Portfolio Structuring", caption: "How to present your work samples for maximum credibility even with zero reviews." },
          { title: "First Client Strategy", caption: "Proven tactics to land your first 3-5 reviews and break the zero-review barrier." },
        ],
        whyTake: "The difference between a freelancer who earns nothing in their first three months and one who lands their first client in week two is almost always positioning — not skill. SSI has helped dozens of students from Bannu launch successful freelancing careers on Fiverr and Upwork by getting the profile fundamentals right from day one.",
      },

      {
        id: "7-2",
        title: "Content Writing & Copywriting",
        subtitle: "Words that rank, convert, and resonate.",
        description: "SSI produces SEO content, website copy, product descriptions, email sequences, and marketing copy for businesses and freelancers serving international clients.",
        about: "Content is the fuel that powers digital marketing, SEO, and brand communication. SSI's writing team produces English-language content — blog posts, website copy, product descriptions, email campaigns, and social media captions — optimised for both search engines and human readers. We also train freelancers to offer content writing as a service on international platforms.",
        images: [
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "SEO Blog Content", caption: "Long-form articles researched and written to rank for target keywords." },
          { title: "Website Copywriting", caption: "Homepage, about, service, and landing page copy that converts visitors to leads." },
          { title: "Email Sequences", caption: "Onboarding, nurture, and sales email sequences that drive action." },
          { title: "Product Descriptions", caption: "E-commerce product copy that communicates value and drives purchase decisions." },
        ],
        whyTake: "Every business needs content and almost none of them have the time or skill to produce it consistently. Content writing is one of the most accessible freelancing services for English-proficient Pakistanis — and SSI gives you the skills and positioning to charge international rates for it.",
      },

      {
        id: "7-3",
        title: "Digital Marketing as a Service",
        subtitle: "Manage marketing campaigns for clients. Earn in dollars.",
        description: "SSI trains individuals to offer digital marketing as a freelance service — managing SEO, social media, Google Ads, and email campaigns for international and local clients.",
        about: "Digital marketing is one of the highest-demand freelancing categories globally. Businesses everywhere need help growing their online presence but cannot afford full-time marketing hires. SSI trains freelancers to position themselves as digital marketing specialists — managing campaigns, reporting results, and retaining clients on monthly packages. This service covers both the technical skills and the business development skills needed to build a sustainable freelance marketing practice.",
        images: [
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Service Packaging", caption: "How to structure your marketing services into clear, sellable packages." },
          { title: "Client Reporting", caption: "Monthly report templates that demonstrate ROI and justify retainer renewal." },
          { title: "Campaign Management", caption: "End-to-end management of SEO, social, paid ads, and email for clients." },
          { title: "Client Acquisition", caption: "How to find, pitch, and close marketing clients — locally and internationally." },
        ],
        whyTake: "Monthly retainer clients are the foundation of a sustainable freelancing income. A single digital marketing client paying a monthly retainer can replace a full-time job salary. SSI teaches you not just the marketing skills but the business skills — how to sell, retain, and grow your client base.",
      },

      {
        id: "7-4",
        title: "Data Entry & Virtual Assistant",
        subtitle: "The fastest path to your first international income.",
        description: "SSI trains individuals in professional data entry, virtual assistant skills, and remote work practices — the most accessible entry point to earning international income online.",
        about: "Data entry and virtual assistant work is the most accessible entry point to international freelancing for Pakistanis with basic computer skills. SSI trains individuals in the specific tools, communication practices, and productivity systems that international clients expect from remote workers — and helps them position themselves on Fiverr, Upwork, and LinkedIn to attract consistent work.",
        images: [
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
          "",
        ],
        benefits: [
          { title: "Professional Data Entry", caption: "Excel, Google Sheets, CRM data entry, and database management for client projects." },
          { title: "Virtual Assistant Skills", caption: "Email management, calendar scheduling, research tasks, and client communication." },
          { title: "Remote Work Tools", caption: "Slack, Notion, Trello, Zoom, and Google Workspace — the tools every remote worker needs." },
          { title: "Client Communication", caption: "Professional English communication for international clients — messages, updates, reports." },
        ],
        whyTake: "Everyone has to start somewhere. Data entry and virtual assistant work is how thousands of Pakistani freelancers earned their first international dollar — and built the reputation that allowed them to move into higher-value services. SSI gives you the foundation, the tools, and the profile to start earning online faster than any other path.",
      },
    ],
  },
];















export const getServices = () =>
    [
        {
            id: 1,
            number: "(01)",
            slug: "web-design-development",
            title: "Web Design & Development",
            subtitle: "Custom websites for businesses and brands that stand out in the digital landscape.",
            href: "/services/web-design-development",
            image: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/687cd8ca09d11e7ccc05c541_Service-Image-1.webp",
            heroImages: [
                "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/6884fce7150f03a43ec5dcc8_Service-Single-1.webp",
                "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/6884fcea486e9c6d7e17039a_Service-Single-2.webp",
            ],
            richImage: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/6880c4f2bc7d9be55a25a2c1_Service-Rich-Image.webp",
            tags: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
            extraCount: 6,
        },
        {
            id: 2,
            number: "(02)",
            slug: "ux-strategy-research",
            title: "UX Strategy & Research",
            subtitle: "Custom websites for businesses and brands that stand out in the digital landscape.",
            href: "/services/ux-strategy-research",
            image: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/687cd881b6d8d84393b67a33_Service-Image-2.webp",
            heroImages: [
                "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687f735bd5d6515221b97933_Service-Item-1.webp",
                "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687f735aa15eea35bfe6c1c5_Service-Item-2.webp",
            ],
            richImage: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/6880c4f2bc7d9be55a25a2c1_Service-Rich-Image.webp",
            tags: ["UI/UX", "Desk research", "User journey", "User flow", "Mood boarding"],
            extraCount: 6,
        },
        {
            id: 3,
            number: "(03)",
            slug: "mobile-app-design",
            title: "Mobile App Design",
            subtitle: "Custom websites for businesses and brands that stand out in the digital landscape.",
            href: "/services/mobile-app-design",
            image: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/687cd8406681071a446eeb15_Service-Image-3.webp",
            heroImages: [
                "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/6880f2f0f43388fe6ca8ee1b_4a8a9e52ad167ac54d741cd13af792da_Service-Single-1.png",
                "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/6880f2f00261182681df0a72_Service-Single-2.webp",
            ],
            richImage: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/6880c4f2bc7d9be55a25a2c1_Service-Rich-Image.webp",
            tags: ["SaaS", "Mobile app", "UI/UX", "Product design", "Design system"],
            extraCount: 6,
        },
        {
            id: 4,
            number: "(04)",
            slug: "branding-identity",
            title: "Branding & Identity",
            subtitle: "Custom websites for businesses and brands that stand out in the digital landscape.",
            href: "/services/branding-identity",
            image: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/687cd7c764503b3bbf4471da_Service-Image-4.webp",
            heroImages: [
                "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687f735bd5d6515221b97933_Service-Item-1.webp",
                "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687f735aa15eea35bfe6c1c5_Service-Item-2.webp",
            ],
            richImage: "https://cdn.prod.website-files.com/687ccf19e1fe8d45c8712872/6880c4f2bc7d9be55a25a2c1_Service-Rich-Image.webp",
            tags: ["Branding", "Logo Design", "Rebranding", "Typography", "Guidelines"],
            extraCount: 6,
        },
    ]



// ─────────────────────────────────────────────────────────────────────────────
// 2. getServicesPageHeader()
//
// Hero heading + subtitle text at the top of /services listing page.
// ─────────────────────────────────────────────────────────────────────────────
export const getServicesPageHeader = () => ({
    heading: "All Our Services",
    subtitle: "Explore all the ways we help businesses grow — from strategy and design to execution and beyond.",
});


// ─────────────────────────────────────────────────────────────────────────────
// 3. getServiceCategories()
//
// The 4 grouped categories on the /services listing page.
// Each category has:
//   id          — unique number
//   title       — category name (matches getServices() title)
//   slug        — links back to main service detail
//   images      — [img1, img2] shown beside the sub-service list
//   subServices — array of individual sub-service rows
//     └── number  — "(01)" etc.
//     └── title   — sub-service name
//     └── slug    — URL slug for sub-service detail page
//     └── href    — full path
// ─────────────────────────────────────────────────────────────────────────────
export const getServiceCategories = [
    {
        id: 1,
        title: "UX Strategy & Research",
        slug: "ux-strategy-research",
        images: [
            "/images/services/UI-UX.webp",
        ],
        subServices: [
            { number: "(01)", title: "User Research", slug: "user-research", href: "/services/user-research" },
            { number: "(02)", title: "UX Audits", slug: "ux-audits", href: "/services/ux-audits" },
            { number: "(03)", title: "Wireframing & Prototyping", slug: "wireframing-prototyping", href: "/services/wireframing-prototyping" },
            { number: "(04)", title: "User Testing", slug: "user-testing", href: "/services/user-testing" },
        ],
    },
    {
        id: 2,
        title: "Mobile App Design",
        slug: "mobile-app-design",
        images: [
            "/images/services/Mobile-app-design.webp",
        ],
        subServices: [
            { number: "(01)", title: "iOS & Android UI Design", slug: "ios-android-ui-design", href: "/services/ios-android-ui-design" },
            { number: "(02)", title: "Onboarding Experience Design", slug: "onboarding-experience-design", href: "/services/onboarding-experience-design" },
            { number: "(03)", title: "Microinteraction & Animation", slug: "microinteraction-animation", href: "/services/microinteraction-animation" },
            { number: "(04)", title: "App Redesign", slug: "app-redesign", href: "/services/app-redesign" },
        ],
    },
    {
        id: 3,
        title: "Branding & Identity",
        slug: "branding-identity",
        images: [
            "/images/services/branding.webp",

        ],
        subServices: [
            { number: "(01)", title: "Logo & Visual Identity", slug: "logo-visual-identity", href: "/services/logo-visual-identity" },
            { number: "(02)", title: "Brand Strategy", slug: "brand-strategy", href: "/services/brand-strategy" },
            { number: "(03)", title: "Social Media Branding", slug: "social-media-branding", href: "/services/social-media-branding" },
            { number: "(04)", title: "Brand Guidelines", slug: "brand-guidelines", href: "/services/brand-guidelines" },
        ],
    },
    {
        id: 4,
        title: "Web Design & Development",
        slug: "web-design-development",
        images: [
            "/images/services/web-design.webp",
        ],
        subServices: [
            { number: "(01)", title: "Custom Website Design", slug: "custom-website-design", href: "/services/custom-website-design" },
            { number: "(02)", title: "Webflow Development", slug: "webflow-development", href: "/services/webflow-development" },
            { number: "(03)", title: "Landing Page Design", slug: "landing-page-design", href: "/services/landing-page-design" },
            { number: "(04)", title: "Website Redesign", slug: "website-redesign", href: "/services/website-redesign" },
        ],
    },
];


// Usage:
//   const service = getServiceBySlug("mobile-app-design");
// ─────────────────────────────────────────────────────────────────────────────
export const getServiceById = (id) => {
    return getServices().find((s) => { return Number(s.id) == Number(id) }) ?? null;
}


// ─────────────────────────────────────────────────────────────────────────────
// 5. getServiceBenefits()
//
// The 4 benefits bullets — identical on ALL 4 service detail pages.
// Each benefit:
//   title   — bold label
//   body    — description text
// ─────────────────────────────────────────────────────────────────────────────
export const getServiceBenefits = () => [
    {
        title: "Expert-Led",
        body: "Our team brings years of experience designing for digital products across industries. We know what works—and what delights.",
    },
    {
        title: "User-First",
        body: "We champion the user's needs at every step, ensuring intuitive navigation, clarity, and minimal friction.",
    },
    {
        title: "Quality Assurance",
        body: "We test rigorously to ensure each interaction feels natural and every experience delivers on its promise.",
    },
    {
        title: "Efficient & Scalable",
        body: "We create design systems and reusable components that speed up development while maintaining consistency.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. getServiceBodyContent()
//
// The rich-text body content — identical on ALL 4 service detail pages.
// Structured as separate named sections so each can be rendered independently.
//
// Sections:
//   aboutHeading       — "About This Service?"
//   aboutParagraph1    — First body paragraph
//   aboutParagraph2    — Second body paragraph
//   tuningHeading      — "Tuning in to what really matters?"
//   tuningParagraph1   — First paragraph under tuning heading
//   tuningParagraph2   — Second paragraph
//   whyHeading         — "why you should take the service"
//   whyParagraph1      — First paragraph
//   whyParagraph2      — Second paragraph
//   whyParagraph3      — Third paragraph
// ─────────────────────────────────────────────────────────────────────────────
export const getServiceBodyContent = () => ({
    aboutHeading: "About This Service?",

    aboutParagraph1:
        "Our UX design process starts with a deep understanding of your users, goals, and product vision. We collaborate closely with you to define clear objectives, explore user behavior, and translate insights into meaningful design solutions. Whether it's a fresh idea or a redesign of an existing experience, we ensure every screen we design adds clarity, usability, and business value.",

    aboutParagraph2:
        "From SaaS platforms to mobile apps, we design scalable, user-friendly interfaces that turn complex workflows into intuitive journeys.",

    tuningHeading: "Tuning in to what really matters?",

    tuningParagraph1:
        "We don't just design what looks good—we design what works. Through research, empathy mapping, user flows, and testing, we decode what your users truly need. From onboarding to engagement to retention, we craft digital experiences that serve real business outcomes.",

    tuningParagraph2:
        "Whether it's improving usability, increasing conversions, or reducing churn, our goal is always the same: creating intuitive, accessible, and enjoyable experiences that people want to come back to. We believe that great UX isn't just a feature—it's the foundation of a successful product.",

    whyHeading: "why you should take the service",

    whyParagraph1:
        "Your product's experience is often the difference between users staying—or bouncing. We help you build clarity, trust, and emotional connection through smart design.",

    whyParagraph2:
        "Whether you're launching something new or improving an existing product, our UX team delivers tailored design strategies that balance creativity with practicality. From early wireframes to pixel-perfect prototypes, we focus on what matters most—your users.",

    whyParagraph3:
        "Let's turn your ideas into experiences people love.",
});

// ─────────────────────────────────────────────────────────────────────────────
// 7. getServiceCTAImages()
//
// The floating/scrolling images used in the CTA section at the bottom
// of every service detail page (same images as the homepage CTA section).
//
// left  — column that scrolls UP
// right — column that scrolls DOWN
// ─────────────────────────────────────────────────────────────────────────────
export const getServiceCTAImages = () => ({
    left: [
        {
            id: 1,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf32d2784720960d2a3d5_39690a3e16a833b356da9726ca829c8c_Cta-Image-3.webp",
            alt: "CTA image 3",
        },
        {
            id: 2,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf63fe07bbbdecbe828a0_43d2b8e3667a5385895a5ad7d564addb_Cta-1.webp",
            alt: "CTA image 1",
        },
        {
            id: 3,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf3249ecf4c4ba9766b4b_9d88df76e699f2ac94a694baf1daa3cb_Cta-Image-2.webp",
            alt: "CTA image 2",
        },
        {
            id: 4,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf32a0221c9c836685a9e_2ff276475e08410e1691334ff75e4628_Cta-Image-1.webp",
            alt: "CTA image 1",
        },
    ],
    right: [
        {
            id: 1,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf323d6b1328624a1f629_c7a39e289b9488c9823c7a3203ed941a_Cta-Image-5.webp",
            alt: "CTA image 5",
        },
        {
            id: 2,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf32d41cc245f5cea0572_34ba61276a6fa94c26aeb4a0895ceec3_Cta-Image-4.webp",
            alt: "CTA image 4",
        },
        {
            id: 3,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf323d6b1328624a1f629_c7a39e289b9488c9823c7a3203ed941a_Cta-Image-5.webp",
            alt: "CTA image 5",
        },
        {
            id: 4,
            src: "https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687cf32d41cc245f5cea0572_34ba61276a6fa94c26aeb4a0895ceec3_Cta-Image-4.webp",
            alt: "CTA image 4",
        },
    ],
});


