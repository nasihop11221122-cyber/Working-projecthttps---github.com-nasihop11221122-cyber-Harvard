// FOOTER SECTION

export const NAV_COLUMNS = [
    {
        heading: "Navigations",
        links: [
            { label: "Home", href: "/" },
            { label: "About us", href: "/about" },
            { label: "Courses", href: "/courses" },
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/services" },
        ],
    },

    {
        heading: "Institute",
        links: [
            { label: "Contact", href: "/contact" },
            { label: "Team", href: "#team" },
            { label: "Careers", href: "/careers" },
            { label: "Verify Certificate", href: "/certificate" },
        ],
    },

    // {
    //     heading: "Resources",
    //     links: [
    //         { label: "Style Guide", href: "/style-guide" },
    //         { label: "Licenses", href: "/licenses" },
    //         { label: "Changelog", href: "/changelog" },
    //         { label: "401", href: "/401" },
    //     ],
    // },
];



export const FooterLists = {
    brand: {
        name: "THS",
        description:
            "A world-class institution empowering students through academic excellence, innovation, and transformative learning experiences.",
        logo: "logo.svg",
    },

    newsletter: {
        heading: "Subscribe to our newsletter",
        placeholder: "Enter your email",
        button: "Subscribe",
    },

    copyright: {
        text: `© ${new Date().getFullYear()} SSIB. All rights reserved.`,
    },
};