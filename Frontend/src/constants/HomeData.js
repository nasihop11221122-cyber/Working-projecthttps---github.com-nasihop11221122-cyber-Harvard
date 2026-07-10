// HERO SECTION
export const HeroData = {
    title: "UIX, Development and branding",
    subtitle: "A creative studio crafting bold, user-focused digital experiences.",
    description:
        "We blend strategy, design, and innovation to help brands stand out and grow.",
    cta: {
        label: "Let talk",
        link: "/contact",
    },
    image: "hero-image.jpg",
};

// ABOUT SECTION
export const AboutData = {
  heading: "Excellence in Education",
highlight: "building tomorrow's global leaders",

description: {
    strong: "A tradition of academic distinction.",
    span1: "Transforming ambitious students through",
    span2: "exceptional teaching, groundbreaking research, and a collaborative learning environment that fosters innovation and critical thinking.",
    span3: "Preparing graduates to make a meaningful impact in every field.",
},
    stats: {
    projectsCompleted: "50+",
    note: "Over 50 world-class courses and academic programs empowering students with practical knowledge and lifelong learning skills.",
},
    clientsMarquee: ["client1.png", "client2.png", "client3.png"],
    image: '/images/Projects/Principle.jfif',
};

// PROJECTS SECTION

// SERVICES SECTION
export const ServicesData = {
    Title: "See our all services",

    ServicesList: [
        {
            id: 1,
            number: "(01)",
            title: "Web Design & Development",
            href: "/services/web-design-development",
            image:
                "https://res.cloudinary.com/dzo12ba3f/image/upload/v1778055529/file_emojnx.webp",
            // First 4 shown as tags, rest collapsed into +N
            tags: ["Web Design", "Web development", "No code", "Web flow", "Style guide"],
            extraCount: 6,
        },
        {
            id: 2,
            number: "(02)",
            title: "UX Strategy & Research",
            href: "/services/ux-strategy-research",
            image:
                "https://res.cloudinary.com/dzo12ba3f/image/upload/v1778055526/file_wgzgug.webp",
            tags: ["UI/UX", "Desk research", "User journey", "User flow", "Mood boarding"],
            extraCount: 6,
        },
        {
            id: 3,
            number: "(03)",
            title: "Mobile App Design",
            href: "/services/mobile-app-design",
            image:
                "https://res.cloudinary.com/dzo12ba3f/image/upload/v1778055528/file_slyixn.webp",
            tags: ["SaaS", "Mobile app", "UI/UX", "Product design", "Design system"],
            extraCount: 6,
        },
        {
            id: 4,
            number: "(04)",
            title: "Branding & Identity",
            href: "/services/branding-identity",
            image:
                "https://res.cloudinary.com/dzo12ba3f/image/upload/v1778055527/file_o1mjon.webp",
            tags: ["Branding", "Logo Design", "Rebranding", "Typography", "Guidelines"],
            extraCount: 6,
        },
    ],
}


// TEAM SECTION
export const TeamData = {
    heading: "Meet the experts",
    subtitle: "behind gence",
    Members: [
        {
            id: 1,
            name: "Syed Kamran Khan",
            role: "Owner Of Harvard Schools System",
            image: "/images/Projects/Principle.jfif",
            hoverImage: "/images/Projects/Principle.jfif",
        },
        {
            id: 2,
            name: "Engr Ahmed Hameed",
            role: "Co-Founder",
            image: "https://i.pinimg.com/736x/44/35/d2/4435d276fc536aa1f360d2b3a49ca9f8.jpg",
            hoverImage: "https://i.pinimg.com/736x/44/35/d2/4435d276fc536aa1f360d2b3a49ca9f8.jpg",
        },
        {
            id: 3,
            name: "Mr Wahab",
            role: "CIT Instructor",
            image: "https://i.pinimg.com/736x/84/e5/52/84e55226c8b7e628f7878a1d386004ab.jpg",
            hoverImage: "https://i.pinimg.com/736x/84/e5/52/84e55226c8b7e628f7878a1d386004ab.jpg",
        },
        {
            id: 4,
            name: "M Ibrahim Khan",
            role: "Senior Team Leader",
            image: "https://i.pinimg.com/736x/22/aa/f3/22aaf35049d7cd8b7bf48fa85f397d00.jpg",
            hoverImage: "https://i.pinimg.com/736x/22/aa/f3/22aaf35049d7cd8b7bf48fa85f397d00.jpg",
        },
        {
            id: 5,
            name: "Mr Azam",
            role: "Managing Director",
            image: "https://i.pinimg.com/736x/48/c9/23/48c923a329096a72b59c8e16b3771aa1.jpg",
            hoverImage: "https://i.pinimg.com/736x/48/c9/23/48c923a329096a72b59c8e16b3771aa1.jpg",
        },
        {
            id: 6,
            name: "Mr Abid Khan",
            role: "Project Manager",
            image: "https://i.pinimg.com/736x/af/ec/5f/afec5fd5f1b41e103947872f46669be6.jpg",
            hoverImage: "https://i.pinimg.com/736x/af/ec/5f/afec5fd5f1b41e103947872f46669be6.jpg",
        },
        // {
        //     id: 7,
        //     name: "Mason Clark",
        //     role: "Product Operations Director",
        //     image: "images/team/team-7.webp",
        //     hoverImage: "images/team/team-7.webp",
        // },
        // {
        //     id: 8,
        //     name: "Isabella Lewis",
        //     role: "Product QA Lead",
        //     image: "/images/team/team-1.webp",
        //     hoverImage: "/images/team/team-1.webp",
        // },
        // {
        //     id: 9,
        //     name: "Ethan Walker",
        //     role: "Product Strategy Consultant",
        //     image: "/images/team/team-3.webp",
        //     hoverImage: "/images/team/team-3.webp",
        // },
    ]
};



// PRICING SECTION
export const PricingData = {
    heading: "Our Pricing",
    plans: [
        {
            type: "Per Project",
            price: "$1999",
            oldPrice: "$3489",
            delivery: "3-4 weeks",
            features: [
                "Homepage + 4 inner pages",
                "Design & Development",
                "Mobile Optimized",
            ],
            cta: "Get Started",
        },
        {
            type: "Monthly",
            price: "$2499",
            oldPrice: "$3988",
            delivery: "3-4 weeks",
            features: [
                "Homepage + 4 inner pages",
                "Design & Development",
                "Mobile Optimized",
            ],
            cta: "Get Started",
        },
    ],
};




// TESTIMONIALS SECTION
export const successStoryData = {
    heading: "Success Stories",
    description: "We've guided thousands of students through world-class academic programs that inspire excellence and lifelong success.",
    image: "./images/Projects/story2.jpg",
    list: [
        {
            name: "Mr Syed Kamran",
            role: "Owner THS",
            feedback:
                "THS built a fast, interactive, and visually stunning website.",
        },
        {
            name: "Sayed Kamran Khan",
            role: "CEO of THS",
            feedback:
                "Harvard’s commitment to academic excellence creates an inspiring environment where students develop the knowledge, leadership, and skills needed to succeed in a rapidly changing world.",
            avatar: "./images/Projects/Principle.jfif",
        },
    ],
};




// FAQ SECTION
export const FAQData = {
    heading: "Frequently Asked Questions",
    subtitle: "Got questions? I'm here for you 24/7, no matter where you are, ready to provide support and answers anytime.",
    items: [
       {
    id: 1,
    question: "What academic programs do you offer?",
    answer:
        "We offer a wide range of undergraduate, graduate, and professional programs across the arts, sciences, business, engineering, and other disciplines.",
},
{
    id: 2,
    question: "What makes your education unique?",
    answer:
        "Our curriculum combines academic excellence, innovative teaching, research opportunities, and experiential learning to prepare students for global success.",
},
{
    id: 3,
    question: "Do students participate in research?",
    answer:
        "Yes, students have opportunities to collaborate with distinguished faculty on groundbreaking research projects across multiple fields of study.",
},
{
    id: 4,
    question: "Are scholarships and financial aid available?",
    answer:
        "Yes, we offer a variety of scholarships and financial aid programs to support talented students based on merit and financial need.",
},
{
    id: 5,
    question: "Who can apply for admission?",
    answer:
        "We welcome applications from motivated students worldwide who demonstrate academic excellence, leadership potential, and a passion for learning.",
},
{
    id: 6,
    question: "Do graduates receive internationally recognized degrees?",
    answer:
        "Yes, graduates earn respected academic qualifications that are recognized and valued by employers and institutions around the world.",
},
{
    id: 7,
    question: "What campus opportunities are available for students?",
    answer:
        "Students benefit from modern learning facilities, libraries, student organizations, leadership programs, cultural activities, and career development services.",
},
    ],
};




// CTA SECTION
export const CTAData = {
    heading: "Let’s Build something meaningful",
    description:
        "Explore our academic programs and begin your journey toward excellence.",
    button: {
        label: "Contact Us Now",
        link: "/contact",
    },

    SliderImages: [
        "https://images.unsplash.com/photo-1540968221243-29f5d70540bf?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1596135187959-562c650d98bc?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1628944682084-831f35256163?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1590013330451-3946e83e0392?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1590421959604-741d0eec0a2e?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1572613000712-eadc57acbecd?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1570097192570-4b49a6736f9f?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1620789550663-2b10e0080354?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1617775623669-20bff4ffaa5c?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1573824969595-a76d4365a2e6?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1633936929709-59991b5fdd72?w=800&auto=format&fit=crop&q=60",
    ]
};