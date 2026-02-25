import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { User, Target, Coffee, Code2 } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="py-20 bg-background dark:bg-background-dark transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me, my background, and my design philosophy."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-slate-600 dark:text-slate-400 text-lg"
          >
            <motion.p variants={itemVariants}>
              Hello! I'm a passionate Software Designer who loves combining the
              logical structure of engineering with the creative freedom of
              design. I specialize in building digital experiences that not only
              look premium but also function seamlessly.
            </motion.p>
            <motion.p variants={itemVariants}>
              My journey began when I realized that great code isn't
              enough—great products need empathetic design. Today, I am focused
              on creating accessible, inclusive, and highly performant
              applications that put the user first.
            </motion.p>
            <motion.p variants={itemVariants}>
              Whether making complex systems intuitive or crafting
              micro-interactions that delight users, I approach every problem
              with curiosity, meticulous attention to detail, and a relentless
              drive for quality.
            </motion.p>
          </motion.div>

          {/* Cards / Visuals */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <User className="w-10 h-10 text-primary dark:text-primary-dark mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Experience
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                4+ Years of experienced with developer, data manipulation and
                visualization tools
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <Target className="w-10 h-10 text-accent dark:text-accent-dark mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Methodology
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Agile, Design Thinking, Component-driven
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <Code2 className="w-10 h-10 text-pink-500 dark:text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Clean Code
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Scalable, maintainable, and well-documented
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <Coffee className="w-10 h-10 text-amber-500 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Fuel
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Powered by espresso and a passion for learning
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
