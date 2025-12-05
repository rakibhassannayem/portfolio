import { motion } from 'framer-motion';

const EmailSidebar = () => {
  return (
    <motion.div
      className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <motion.a
        whileHover={{ y: -5, color: '#8b5cf6' }}
        className="text-gray-400 text-sm tracking-widest writing-vertical-rl hover:text-primary transition-colors"
        href="mailto:rakibhassannayem@gmail.com"
      >
        rakibhassannayem@gmail.com
      </motion.a>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="h-24 w-px bg-gray-600"
      ></motion.div>
    </motion.div>
  );
};

export default EmailSidebar;
