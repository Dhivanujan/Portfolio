import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

import profile from "../assets/Profile.JPG";

// Constants
const NAV_OFFSET = -88;

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-[100svh] lg:h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-20 md:pt-16 lg:pt-20 pb-10 md:pb-8 lg:pb-6"
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center relative z-10 w-full max-w-7xl">
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <p className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-slate-300/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 mb-4">
                        Available for new opportunities
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                        AI Engineer and Cloud Architect
                    </h1>

                    <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        I design and build reliable AI, cloud, and DevOps solutions focused on
                        performance, security, and measurable business outcomes.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2.5">
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium">
                            AI and ML Delivery
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium">
                            Cloud Architecture
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium">
                            Secure DevOps
                        </span>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={NAV_OFFSET}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm cursor-pointer hover:bg-indigo-500 transition-colors"
                        >
                            Explore My Work
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <FileText className="mr-2 w-4 h-4" />
                            Get Resume
                        </a>
                    </div>

                    <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-slate-600 dark:text-slate-300">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="w-52 h-60 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
                        <img
                            src={profile}
                            alt="Portrait of Dhivanujan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
