// Primary links shown directly in the navbar
export const PRIMARY_LINKS = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Projects", href: "/projects" },
];

// "Pages" dropdown — grouped for the mega menu
export const DROPDOWN_GROUPS = [
    {
        heading: "Main",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "Blogs", href: "/blogs" },
            { label: "Team", href: "/team" },
            { label: "Career", href: "/career" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        heading: "Details",
        links: [
            { label: "Blog Detail", href: "/blogs/detail" },
            { label: "Project Detail", href: "/projects/detail" },
            { label: "Team Detail", href: "/team/detail" },
            { label: "Service Detail", href: "/services/detail" },
            { label: "Career Detail", href: "/career/detail" },
            { label: "Pricing", href: "/pricing" },
        ],
    },
    {
        heading: "Utility",
        links: [
            { label: "Style Guide", href: "/style-guide" },
            { label: "Changelog", href: "/changelog" },
            { label: "Licenses", href: "/licenses" },
            { label: "404", href: "/404" },
            { label: "401", href: "/401" },
        ],
    },
];

// Mobile menu — all links flat list
export const MOBILE_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Courses", href: "/courses" },
    { label: "Team", href: "/team" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
];