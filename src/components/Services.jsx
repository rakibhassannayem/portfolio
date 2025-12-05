import { useRef } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const sectionRef = useRef(null);
  const services = [
    {
      icon: "code_blocks",
      title: "Frontend Development",
      description:
        "Creating beautiful and responsive user interfaces with modern frameworks to ensure a great user experience across all devices.",
    },
    {
      icon: "database",
      title: "Backend Development",
      description:
        "Building robust and scalable server-side logic, APIs, and databases to power your application with efficiency and security.",
    },
    {
      icon: "layers",
      title: "Full-Stack Solutions",
      description:
        "Providing end-to-end application development, from initial concept and design to final deployment and infrastructure management.",
    },
    {
      icon: "build",
      title: "Website Maintenance",
      description:
        "Offering ongoing support, security updates, and performance optimization to keep your website running smoothly and securely.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <main className="flex-grow">
              {/* PageHeading */}
              <motion.div
                className="flex flex-wrap justify-between gap-3 p-4 py-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex w-full flex-col items-center gap-3">
                  <p className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                    What I Do
                  </p>
                  <p className="font-normal leading-normal max-w-xl">
                    I specialize in building custom web solutions that are fast,
                    responsive, and tailored to your needs. From sleek front-end
                    interfaces to robust back-end systems, I bring ideas to life
                    with clean code and modern design.
                  </p>
                </div>
              </motion.div>
              {/* TextGrid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 services-grid">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-1 gap-4 rounded-lg border p-6 flex-col transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 service-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <motion.div className="text-primary">
                      <span className="material-symbols-outlined text-4xl">
                        {service.icon}
                      </span>
                    </motion.div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-primary text-lg font-bold leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-[#cc8e8e] text-sm font-normal leading-normal">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* SingleButton */}
              <motion.div
                className="flex px-4 py-16 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="truncate">Let's Build Together</span>
                </motion.button>
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
