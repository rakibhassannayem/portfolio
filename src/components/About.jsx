import { useRef } from "react";
import { motion } from "framer-motion";

const TECH_STACK = [
  { icon: "code", name: "JavaScript" },
  { icon: "developer_mode", name: "React" },
  { icon: "hub", name: "Node.js" },
  { icon: "data_object", name: "Express JS" },
  { icon: "database", name: "MongoDB" },
  { icon: "css", name: "Tailwind CSS" },
  { icon: "http", name: "REST APIs" },
  { icon: "terminal", name: "Git" },
  { icon: "settings_backup_restore", name: "Firebase" },
  { icon: "dns", name: "Vercel" },
];

const TechStackItem = ({ icon, name, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="flex items-center gap-3 bg-primary/10 p-3 rounded-lg transition-colors"
  >
    <span className="material-symbols-outlined text-primary">{icon}</span>
    <span className="text-white text-sm font-medium">{name}</span>
  </motion.div>
);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root"
    >
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
        <main className="pt-10 sm:pt-16">
          {/* Introduction Section */}
          <div className="text-center">
            <motion.div
              ref={titleRef}
              className="flex min-w-72 flex-col gap-3 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                About Me
              </p>
              <p className="text-[#8892b0] text-lg font-normal leading-normal">
                My journey and my tech stack.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4 text-base font-normal leading-relaxed text-[#ccd6f6]/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Having completed my graduation in Computer Science and Engineering (CSE), my journey started with the raw fundamentals. In my first year, I dived headfirst into the world of problem-solving. I spent countless hours on various online judges like Codeforces, UVA, and CodeChef, honing my logic using C and C++. However, like many early journeys, I eventually hit a wall of frustration and took a step back to re-evaluate my path.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Everything changed when I joined the University for my Master’s (MSc) in CS. I decided to pivot and committed myself to a web development course at Programming Hero. I worked incredibly hard and remained consistent—navigating through every module, assignment, quiz, and project. This dedication led me to master the MERN Stack, and I haven't looked back since. I genuinely love working in this sector; there’s a unique satisfaction in building functional tools that people can actually use.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Beyond the screen and the code, I am a very friendly person who values connection. I love traveling with my friends and exploring new places together—there's nothing quite like a good hangout to recharge my creative energy. I believe my friendliness and persistence define both my personal life and my professional work.
              </motion.p>
            </motion.div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-12 sm:mt-20 px-4">
            <motion.div
              className="flex min-w-72 flex-col gap-2 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white text-3xl font-bold leading-tight tracking-[-0.03em]">
                My Tech Stack
              </p>
              <p className="text-[#8892b0] text-base font-normal leading-normal">
                The tools and technologies I use to build things.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {TECH_STACK.map((tech, index) => (
                <TechStackItem key={tech.name} {...tech} index={index} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16 sm:mt-24 px-4 pb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[#ccd6f6]/90 mb-4">
              Interested in working together?
            </p>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors"
            >
              <span className="truncate">Get In Touch</span>
            </motion.button>
          </motion.div>
        </main>
      </div>
    </section>
  );
};
export default About;
