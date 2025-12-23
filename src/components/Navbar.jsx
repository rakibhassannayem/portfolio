import { motion } from "framer-motion";

const Navbar = () => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-10 py-3"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex items-center gap-4 text-white"
        variants={itemVariants}
      >
        <motion.div
          className="size-4 text-primary"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect fill="white" height="48" width="48"></rect>
              </clipPath>
            </defs>
          </svg>
        </motion.div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Nayem
        </h2>
      </motion.div>
      <motion.div
        className="hidden md:flex flex-1 justify-end gap-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-9">
          <motion.a
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal cursor-pointer"
            href="#home"
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal cursor-pointer"
            href="#about"
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal cursor-pointer"
            href="#projects"
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal cursor-pointer"
            href="#education"
          >
            Education
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal cursor-pointer"
            href="#contact"
          >
            Contact
          </motion.a>
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          href="https://drive.google.com/file/d/1O-D1myT2iUzY5RTycDxwTgg4dZehVYrM/view?usp=drive_link"
        >
          <span className="truncate">Resume</span>
        </motion.a>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
