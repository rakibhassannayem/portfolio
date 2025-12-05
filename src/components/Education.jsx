import { useRef } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const sectionRef = useRef(null);
  const education = [
    {
      school: "Jahangirnagar University",
      degree: "Masters of Science",
      field: "Computer Science",
      year: "2025 - 2026",
      description:
        "Gathered more knowledge on Computer Science and machine learning.",
      icon: "school",
    },
    {
      school: "Bangladesh University of Business and Technology (BUBT)",
      degree: "Bachelor of Science",
      field: "Computer Science & Engineering",
      year: "2020 - 2024",
      description:
        "Focused on web development, data structures, and software engineering principles.",
      icon: "school",
    },
    {
      school: "Programming Hero",
      degree: "Full Stack Web Development",
      field: "MERN Stack",
      year: "2025",
      description:
        "Comprehensive training in MERN stack, including React, Node.js, MongoDB, and Express.js.",
      icon: "computer",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root mb-20"
    >
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
          <main className="flex-grow pt-10 sm:pt-16">
            {/* Header */}
            <motion.div
              className="flex min-w-72 flex-col gap-3 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                Education
              </p>
              <p className="text-[#8892b0] text-lg font-normal leading-normal">
                My academic journey and professional development.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-primary/10"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={`flex gap-8 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Content */}
                    <div className="w-full md:w-1/2 md:px-8">
                      <motion.div
                        className="p-6 rounded-lg border border-white/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <span className="material-symbols-outlined text-primary text-lg">
                              {edu.icon}
                            </span>
                          </motion.div>
                          <p className="text-primary text-sm font-semibold">
                            {edu.year}
                          </p>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary text-base font-semibold mb-2">
                          {edu.school}
                        </p>
                        <p className="text-[#8892b0] text-sm font-normal mb-3">
                          {edu.field}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-1/2 justify-center">
                      <motion.div
                        className="w-4 h-4 rounded-full bg-primary border-4 border-background-dark"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Education;
