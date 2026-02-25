import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const experienceList = [
  {
    role: "Analyst",
    company: "HCL Tech",
    duration: "Jan, 2022 - Jan, 2026",
    description:
      "Lead the UI/UX design and frontend implementation for major enterprise SaaS products. Established a company-wide design system that reduced development time by 30%.",
  },
  {
    role: "Software Developer Intern",
    company: "Iwish Technologies",
    duration: "Oct, 2020 - Dec, 2020",
    description:
      "Developed highly interactive, animated web applications for premium clients. Collaborated closely with the design team to ensure pixel-perfect implementation of Figma prototypes.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-surface/30 dark:bg-surface-dark/30 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and the value I've brought to previous teams."
        />

        <div className="mt-16 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {experienceList.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-background dark:bg-background-dark border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center z-10 shadow-sm text-primary dark:text-primary-dark">
                    <Briefcase size={20} />
                  </div>

                  {/* Content Container (Desktop: alternate sides) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-background dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow relative">
                      {/* Triangle Pointer */}
                      <div
                        className={`hidden md:block absolute top-6 w-4 h-4 bg-background dark:bg-background-dark border-slate-200 dark:border-slate-800 rotate-45 transform ${
                          isEven
                            ? "-right-2 border-t border-r"
                            : "-left-2 border-b border-l"
                        }`}
                      ></div>

                      <span className="inline-block py-1 px-3 rounded-full bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm font-medium mb-4">
                        {exp.duration}
                      </span>
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-4">
                        {exp.company}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
