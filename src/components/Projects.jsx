import { useRef } from "react";
import { motion } from "framer-motion";
import ecotrackImg from "../assets/screenshots/ecotrack.png";
import gameHub from "../assets/screenshots/gameHub.png";
import courseManage from "../assets/screenshots/courseManage.png";

const Projects = () => {
  const sectionRef = useRef(null);
  const projects = [
    {
      title: "EcoTrack",
      description:
        "EcoTrack is a React frontend for tracking personal and community sustainability challenges. The app lets users discover challenges, join them, update progress, and view detailed activity history. It connects to the Echo Track API to read and modify user-challenge data.",
      image: ecotrackImg,
      alt: "EcoTrack",
      liveLink: "https://ecotrack-dd506.web.app",
    },
    {
      title: "Gamehub - A Game Library",
      description:
        "An engaging online library for discovering and supporting indie game developers.",
      image: gameHub,
      alt: "Gamehub - A Game Library",
      liveLink: "https://your-task-app-link.com",
    },
    {
      title: "Course Management Client",
      description:
        "A Next.js + React client for a course management site. Uses Firebase Authentication for user sign-in, Tailwind + DaisyUI for styling, and Axios for server API calls",
      image: courseManage,
      alt: "Course Management Client",
      liveLink: "https://course-management-client-delta.vercel.app/",
    },
    // {
    //   title: "Personal Blog Website",
    //   description: "A content-focused blog platform with a custom CMS.",
    //   image: blogImg,
    //   alt: "Homepage of a personal blog website with articles.",
    //   liveLink: "https://your-blog-link.com",
    // },
    // {
    //   title: "Weather Forecast App",
    //   description: "A clean interface to get real-time weather updates.",
    //   image: weatherImg,
    //   alt: "A clean mobile UI for a weather forecast application.",
    //   liveLink: "https://your-weather-app-link.com",
    // },
    // {
    //   title: "Recipe Finder Application",
    //   description: "Discover recipes based on available ingredients.",
    //   image: recipeImg,
    //   alt: "An application for discovering recipes based on ingredients.",
    //   liveLink: "https://your-recipe-app-link.com",
    // },
  ];

  return (
    <div
      ref={sectionRef}
      className="layout-container flex h-full grow flex-col"
    >
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <main className="flex-grow flex flex-col">
            <motion.div
              className="flex flex-wrap justify-between gap-3 p-4 py-10 sm:p-6 md:py-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex min-w-72 flex-col gap-3">
                <p className="dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  My Work
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                  A collection of my recent projects.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 project-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-3 pb-3 group project-card h-full rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <motion.div
                      className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden cursor-pointer"
                      data-alt={project.alt}
                      style={{ backgroundImage: `url('${project.image}')` }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </motion.a>
                  <div className="flex flex-col flex-grow p-2">
                    <p className="text-primary text-base font-bold leading-normal">
                      {project.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal flex-grow">
                      {project.description}
                    </p>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="inline-block mt-3 text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
                    >
                      View Project →
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-center mt-12 pb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <motion.a
                href="https://github.com/rakibhassannayem"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary hover:text-primary/80 text-base font-semibold transition-colors"
              >
                More Projects →
              </motion.a>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Projects;
