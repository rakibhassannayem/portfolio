import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col gap-6 px-5 py-10 text-center mt-10 border-t border-solid border-black/10 dark:border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.a
          whileHover={{ scale: 1.1, color: '#8b5cf6' }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-normal leading-normal min-w-24 cursor-pointer"
          href="#home"
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: '#8b5cf6' }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-normal leading-normal min-w-24 cursor-pointer"
          href="#about"
        >
          About
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: '#8b5cf6' }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-normal leading-normal min-w-24 cursor-pointer"
          href="#projects"
        >
          Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: '#8b5cf6' }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-normal leading-normal min-w-24 cursor-pointer"
          href="#contact"
        >
          Contact
        </motion.a>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.a
          whileHover={{ scale: 1.2, y: -5 }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
          href="#"
        >
          <svg
            className="feather feather-github"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="https://github.com/rakibhassannayem"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, y: -5 }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
          href="#"
        >
          <svg
            className="feather feather-linkedin"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="https://www.linkedin.com/in/rakibhassannayem"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect height="12" width="4" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, y: -5 }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
          href="https://www.facebook.com/rhnayem23"
        >
          <svg
            className="feather feather-facebook"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </motion.a>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
        © 2025 Rakib Hassan Nayem. All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
