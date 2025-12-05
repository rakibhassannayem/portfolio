import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with your actual API call)
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    const email = 'rakibhassannayem@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <main className="flex-1 px-4 py-12 sm:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  className="flex flex-col gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col gap-3">
                    <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                      Get In Touch
                    </p>
                    <p className="text-[#cc8e8e] text-base font-normal leading-normal">
                      I'm currently looking for new opportunities, my inbox is
                      always open. Whether you have a question or just want to
                      say hi, I'll try my best to get back to you!
                    </p>
                  </div>
                  <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div
                      className="flex items-center gap-4 bg-transparent min-h-14 justify-between border border-white/10 rounded-lg px-4"
                      whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-white flex items-center justify-center rounded-lg bg-white/10 shrink-0 size-10">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                          rakibhassannayem@gmail.com
                        </p>
                      </div>
                      <div className="shrink-0">
                        <motion.button
                          type="button"
                          onClick={handleCopyEmail}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-sm font-medium leading-normal text-primary hover:text-primary/90 transition-colors"
                        >
                          {copySuccess ? 'Copied!' : 'Copy'}
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-white/80 text-sm font-medium leading-normal">
                      Find me on
                    </p>
                    <div className="flex flex-wrap justify-start gap-4">
                      {/* Social Links (GitHub, LinkedIn, Twitter) can be added here or reused */}
                      {/* For brevity, I'll add one example or rely on Sidebars, but the design has them here too */}
                       <motion.a
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center justify-center gap-2 bg-transparent py-2.5 text-center w-20 h-20 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                        href="#"
                      >
                         <div className="rounded-full bg-white/10 p-2.5">
                            <div className="text-white">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                    ></path>
                                </svg>
                            </div>
                         </div>
                         <p className="text-white text-sm font-medium leading-normal">
                             GitHub
                         </p>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-6 p-6 sm:p-8 bg-black/20 border border-white/10 rounded-xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <label className="flex flex-col w-full">
                        <p className="text-primary text-sm font-medium leading-normal pb-2">
                          Name
                        </p>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#4a2121]/50 focus:border-none h-12 placeholder:text-[#cc8e8e]/60 px-4 text-base font-normal leading-normal"
                          placeholder="Enter your name"
                        />
                      </label>
                      <label className="flex flex-col w-full">
                        <p className="text-primary text-sm font-medium leading-normal pb-2">
                          Email
                        </p>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#4a2121]/50 focus:border-none h-12 placeholder:text-[#cc8e8e]/60 px-4 text-base font-normal leading-normal"
                          placeholder="Enter your email"
                        />
                      </label>
                    </div>
                    <label className="flex flex-col w-full">
                      <p className="text-primary text-sm font-medium leading-normal pb-2">
                        Subject
                      </p>
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#4a2121]/50 focus:border-none h-12 placeholder:text-[#cc8e8e]/60 px-4 text-base font-normal leading-normal"
                        placeholder="Enter the subject"
                      />
                    </label>
                    <label className="flex flex-col w-full">
                      <p className="text-primary text-sm font-medium leading-normal pb-2">
                        Message
                      </p>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#4a2121]/50 focus:border-none min-h-[120px] placeholder:text-[#cc8e8e]/60 p-4 text-base font-normal leading-normal"
                        placeholder="Enter your message"
                      ></textarea>
                    </label>
                    
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-sm font-medium text-center p-3 rounded-lg ${
                          submitStatus === 'success'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}
                      >
                        {submitStatus === 'success'
                          ? '✓ Message sent successfully!'
                          : '✗ Failed to send message. Please try again.'}
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors ${
                        isSubmitting
                          ? 'opacity-70 cursor-not-allowed'
                          : 'hover:bg-primary/90'
                      }`}
                    >
                      <span className="truncate">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
