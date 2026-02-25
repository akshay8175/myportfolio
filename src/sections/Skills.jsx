import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Vite", level: 80 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Data Analyst",
    skills: [
      { name: "Python (Pyspark, Pandas, NumPy, Matplotlib)", level: 85 },
      { name: "SQL (Joins, CTEs, Window Functions, Optimization)", level: 80 },
      {
        name: "Data Visualization (Power Bi, Adv. Excel - Vlookup, pivot, power query)",
        level: 85,
      },
      {
        name: "Tools & Platforms (MySQL, PostgreSQL, Git, Jupyter Notebook, AWS)",
        level: 75,
      },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Flask", level: 70 },
      { name: "Django", level: 70 },
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-surface/50 dark:bg-surface-dark/50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="A comprehensive overview of my technical expertise and design capabilities."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mr-3"></span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
