import { motion } from "framer-motion";
import { Send, MapPin, Mail, Download } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-background dark:bg-background-dark transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary-dark/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Let's talk about your project
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm currently available for freelance work and open to new
                opportunities. Let's build something beautiful together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary dark:text-primary-dark">
                    <Mail size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400"></h4>
                  <a
                    href="https://buymeacoffee.com/akshayrathe"
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary-dark transition-colors"
                  >
                    Buy Me A Coffee
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary dark:text-primary-dark">
                    <MapPin size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Location
                  </h4>
                  <span className="text-lg font-medium text-slate-900 dark:text-white">
                    Noida, Uttar Pradesh
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="/myportfolio/AkshayRathoreResume.pdf"
                target="_blank"
                className="inline-flex items-center px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-900"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-surface dark:bg-surface-dark rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            {/* <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-slate-900 dark:text-white transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-slate-900 dark:text-white transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-background dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-slate-900 dark:text-white transition-shadow"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-slate-900 dark:text-white transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-primary hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
                <Send size={20} className="ml-2" />
              </button>
            </form> */}
            <img
              src="/myportfolio/qr-code.png"
              alt="Contact Illustration"
              width="300"
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
