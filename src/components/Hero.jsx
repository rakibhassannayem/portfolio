import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import bgLessImg from "/bgLess.png";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for floating image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1O-D1myT2iUzY5RTycDxwTgg4dZehVYrM";
    link.download = "Rakib_Hassan_Nayem_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex-grow flex items-center min-h-[calc(100vh-80px)]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="text-center lg:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-2"
          >
            Hi There
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-1"
          >
            <span className="text-white">I'm</span>{" "}
            <span className="text-primary">Rakib Hassan Nayem</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-400 mb-8 mt-3"
          >
            I am a Web Developer
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              <span>Download Resume</span>
              <motion.span
                className="material-symbols-outlined text-lg"
                initial={{ y: 0 }}
                whileHover={{ y: 2 }}
              >
                download
              </motion.span>
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-gray-400 text-gray-300 font-medium px-8 py-3 rounded-md hover:bg-gray-700 hover:border-gray-700 transition-colors text-center"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 -top-10 -left-10 bg-indigo-900/40 dark:bg-indigo-900/70 rounded-full blur-3xl opacity-50"></div>
          <img
            ref={imageRef}
            alt="Rakib Hassan Nayem"
            className="relative max-w-sm lg:max-w-md xl:max-w-lg"
            src={bgLessImg}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
