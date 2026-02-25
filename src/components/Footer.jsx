import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-display font-bold text-xl tracking-tight text-gradient">
              Portfolio.
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              Designed & Built by Akshay Rathore
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/akshay8175"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/akshay8175"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:akshayrathore8175@gmail.com"
              className="text-slate-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} Akshay Rathore. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Data Analyst | Software Designer & Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
