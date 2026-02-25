import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 dark:bg-primary-dark/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-accent/20 dark:bg-accent-dark/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-300/20 dark:bg-pink-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary dark:text-primary-dark font-medium mb-4 tracking-wide"
          >
            Hi, This is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Akshay Rathore.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-500 dark:text-slate-400 mb-6"
          >
            Data Analyst | Software Developer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mx-auto"
          >
            Freelancer | Open to Remote Work. <br />I bridge the gap between
            design and engineering, creating beautiful, premium, and highly
            functional digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="group cursor-pointer flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="group flex cursor-pointer items-center justify-center px-8 py-3.5 border-2 border-slate-200 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 bg-transparent hover:border-primary dark:hover:border-primary-dark transition-all w-full sm:w-auto"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
