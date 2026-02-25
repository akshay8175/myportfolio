import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const projectsList = [
  {
    title: "Madhav Ecommerce Sales Dashboard",
    description:
      "A comprehensive analytics dashboard for tracking corporate carbon footprint. Features real-time data visualization, predictive modeling, and automated report generation.",
    tech: ["Pandas", "Numpy", "Power Bi", "SQL"],
    github: "https://github.com/akshay8175/Ist-Power-Bi-dashboard",
  },
  {
    title: "ATS Resume Checker",
    description:
      "A modern AI-powered ATS (Applicant Tracking System) Resume Analyzer built using React, Vite, and TailwindCSS.",
    tech: [
      "React+Vite",
      "TailwindCSS",
      "pdfjs-dist (PDF parsing)",
      "ChatGPT+Gemini",
    ],
    github:
      "https://github.comhttps://github.com/akshay8175/ats-resume-checker",
    live: "https://atsresumechecker.shop/",
  },
  {
    title: "LanguageAI — AI-Powered Language Learning App",
    description:
      "I have built a premium, responsive language learning application called LinguaFlow. It uses React, Vite, and modern CSS to deliver a fast and interactive experience.",
    tech: ["React+Vite", "react Router DOM", "Vanila CSS", "Lucid React"],
    github: "https://github.com/akshay8175/languageAI",
    live: "https://akshay8175.github.io/mylangAI/",
  },
  {
    title: "AI Tutor — Intelligent Learning Platform",
    description:
      "A full-featured AI-powered tutoring SaaS built with React + Vite Smart learning paths · Doubt solving · Gamification · PDF notes · Parent dashboard",
    tech: ["Framer Motion 12", "React 19", "Vanilla CSS", "jsPDF"],
    github: "https://github.com/akshay8175/AI_Tutor_App",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-background dark:bg-background-dark transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of things I've built, combining elegant design with robust engineering."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-surface dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary-dark/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image Placeholder (using gradient for pure code aesthetic) */}
              <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-50 
                  ${idx % 2 === 0 ? "from-primary to-accent" : "from-pink-500 to-amber-500"} dark:opacity-40`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xl drop-shadow-md">
                  {project.title.split(":")[0]}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3 text-slate-500 dark:text-slate-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/akshay8175/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary dark:text-primary-dark font-medium hover:underline"
          >
            View more on GitHub <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
