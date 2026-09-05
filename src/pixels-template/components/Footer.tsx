import { footerData } from "../data/footer";
import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { IFooterLink } from "../types";
import { Link } from "wouter";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-[#6B6464] bg-[#F8F3EC]">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <a href="/">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-[#5A0B2E] flex items-center justify-center font-bold text-white">
                            KA
                        </div>
                        <span className="font-bold text-lg tracking-tight text-[#171417]">KA Degree</span>
                    </div>
                </a>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-[#5A0B2E] font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-blue-500 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Build Skills. Gain Experience. Shape Your Future.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                        <DribbbleIcon className="size-5 hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <LinkedinIcon className="size-5 hover:text-blue-500 transition" />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                        <TwitterIcon className="size-5 hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <YoutubeIcon className="size-6 hover:text-blue-500 transition" />
                    </a>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} <a href="/">KA Degree</a>. All rights reserved.</p>
            </motion.div>
        </footer>
    );
}
