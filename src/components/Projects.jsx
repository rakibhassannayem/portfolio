import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  const sectionRef = useRef(null);

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
                      className="relative w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden cursor-pointer"
                      data-alt={project.alt}
                      style={{ backgroundImage: `url('${project.image}')` }}
                      whileHover="hover"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 opacity-0"
                        variants={{
                          hover: { opacity: 1 }
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-primary/20 p-2 rounded-full backdrop-blur-sm border border-primary/30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>
                        <span className="text-white font-bold text-sm tracking-wide">
                          Visit Live
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.a>
                  <div className="flex flex-col flex-grow p-2">
                    <p className="text-primary text-base font-bold leading-normal">
                      {project.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal flex-grow">
                      {project.description}
                    </p>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-block mt-3 text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
                    >
                      More Details →
                    </Link>
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
