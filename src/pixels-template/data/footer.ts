import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Navigation",
        links: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
            { name: "Programs", href: "/courses" },
            { name: "Internships", href: "/internship" },
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Achievements", href: "/#achievements" },
            { name: "Student Projects", href: "/#projects" },
            { name: "Testimonials", href: "/#testimonials" },
        ]
    },
    {
        title: "Contact",
        links: [
            { name: "Contact Us", href: "/contact-us" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ]
    }
];
