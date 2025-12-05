import { useRef } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const sectionRef = useRef(null);
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store built with modern web technologies.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0CAPubH4tgG0gxmCPlVRp4Za3x6E_nsIn1n4BVngKrvtgo0U34mCkCcPEmYRzW1m8-xbELgPQ0XtqZe2YGYAjUDKRmDNeUNFCXpTlA5MIkxUPWfGzgnXQVTeNgU_hzwEAfJcMhGrsY9jsccslNTl207q0Yy-npBkufYdd74-6FiT9K5J4Z9p9WcSjjYN_E76uUiaEh5qERlWuJQarPvC3GjGG3t2Xms2jiLnKbIwtB_-4kutbJmbIvEoAEa6WGYWkgwiH---s7aM",
      alt: "Screenshot of an e-commerce website homepage.",
    },
    {
      title: "Task Management App",
      description: "A cross-platform app to organize and track daily tasks.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAoghe80Ws2XpiO0V3l47NJVI_jn-tz22OvREoj8hUkA9_DotlOAELxbIxlnzKTfsQGXuv76Lxa-t0Bo_rNiG9i23jvcJwRGh7_2eBMK40p4g_e2lXB4GrLl4HHRRmMgZIvXGBLq-o45AuPqoE3ESM4B5YmcP1oInaSh1YS1c807TxYp7LUGDLBklUFofaCnPj-J-qYR1mvTaFI_fzrc2Rt5YJrJe9JGsMZ_BBmBo0z_bJcxDLEI5_S7TQ-H5WPubpIBCUoQ50sShw",
      alt: "Mockup of a mobile task management app UI.",
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA70D-CBLmg4LJiAYlebPquYR_o6KLIk63hYhmfCXryUEExGctbgqmR6lMli9Q9nVYQoMckfl5ZGyteSHjdAmElFdguAGP0ZBEGUKeYwpjBaIgXz6pmUDkUc24XFC4GKRuN8YLYbLKAfMnz_7nC-80P5Ywz10YCqEYaonvqsIbAnYWLxmD3FiX-02NLhCMyylaamPAB_RT3zwWBoNfo698Gc8n6dV9mI6LQZt_X5aGKCNElJz2iqWqQqMR4S53ZMUaBmM0qElp7qt0",
      alt: "An interactive data visualization dashboard with charts and graphs.",
    },
    {
      title: "Personal Blog Website",
      description: "A content-focused blog platform with a custom CMS.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIE8K1-0gPnWUf8A8fbWEMb7eOWVEdgMceyF0c6YFxG015a6JUJrE6o9sNFiLC_SB5XB7ZgQD-_7qz1Hn3dvr2ZQHuCd0t1EFTCGyqrDc9RK2wsVXNP_TSl4o4g_kcMy1W408XrUbuBjGEhJjAzC6j5fSrRFRtV9BT7cBURsMX-N-ileqwMILsq_GtoXcuz90r2YIagKo87TKNxIvqRyhNwntKv3ke96ZSZaCFfETQCSOyXnDDtOja0Z_2ZiIf-ZaaUdOnx0iNSN4",
      alt: "Homepage of a personal blog website with articles.",
    },
    {
      title: "Weather Forecast App",
      description: "A clean interface to get real-time weather updates.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFV6FVcS7jazMk9pJatLx1oGLYhWqzfq5lS6I2ozDPijGRCfV3YipmPsXGNMt3_Cz4CVgKzCyjjAAbjq57ZK4CqGEfU2QU6u1FenbvTIo6xaz1mUTb1lhsjF2W37I6ecD2sFxbwivzq4IsHHWJSdGJHLJr5FaSlk4xpbwnonI5YCPKEfhv5hX-602Hj7TErAFgEZuafW9rGTBO1ffPJ5M3CuYPy6pBdJuelDCOsuSZaAdc-JJwqpWD2XFh3IDX0hONbTPEfRV99F0",
      alt: "A clean mobile UI for a weather forecast application.",
    },
    {
      title: "Recipe Finder Application",
      description: "Discover recipes based on available ingredients.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDtbsxUx-7CokL4SsC6gunFukyYTU97HeQ-wQuRevRcWJJEE5TDl0oFIZABVfCzpUOiFyrWG1_8auBHmPUVWr_cyRIV5xsbk61QsShhoOE0-XfRu8c9Qb3ShUQdxR-obEvtCRZiwzJmU1q9-dCzpykli3ztfjPG4Ia0pNaPAf8CLNwAhQEYvOI1jpLOBgX_dal1yam13KrTbCqVyZn6RyWrATh1sFk6qtQNnjNFY__kDMfT5NTbhlr-rU79eHgwY-4dZyv39tjXerY",
      alt: "An application for discovering recipes based on ingredients.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="layout-container flex h-full grow flex-col"
    >
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <main className="flex-grow">
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
                  className="flex flex-col gap-3 pb-3 group project-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <motion.div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden"
                    data-alt={project.alt}
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></motion.div>
                  <div>
                    <p className="text-primary text-base font-bold leading-normal">
                      {project.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Projects;
