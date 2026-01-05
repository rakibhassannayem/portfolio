import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    const email = "rakibhassannayem@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <main className="flex-1 px-4 py-12 sm:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-white flex items-center justify-center rounded-lg bg-white/10 shrink-0 size-10">
                          <span className="material-symbols-outlined">
                            mail
                          </span>
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
                          {copySuccess ? "Copied!" : "Copy"}
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
                      <motion.a
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center justify-center gap-2 bg-transparent py-2.5 text-center w-20 h-20 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                        href="https://github.com/rakibhassannayem"
                        target="_blank"
                        rel="noopener noreferrer"
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

                      <motion.a
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center justify-center gap-2 bg-transparent py-2.5 text-center w-20 h-20 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                        href="https://www.linkedin.com/in/rakibhassannayem"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="rounded-full bg-white/10 p-2.5">
                          <div className="text-white">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-white text-sm font-medium leading-normal">
                          LinkedIn
                        </p>
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center justify-center gap-2 bg-transparent py-2.5 text-center w-20 h-20 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                        href="https://wa.me/8801988242787"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="rounded-full bg-white/10 p-2.5">
                          <div className="text-white">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.52 3.48C18.25 1.23 15.16 0 11.9 0 5.43 0 0.16 5.27 0.16 11.73c0 2.06.54 4.09 1.57 5.88L0 24l6.35-1.66c1.72.94 3.67 1.43 5.66 1.43 6.47 0 11.74-5.27 11.74-11.74 0-3.14-1.23-6.1-3.48-8.36zm-8.62 18.05c-1.77 0-3.5-.47-5.02-1.37l-.36-.21-3.73.98.99-3.64-.23-.37C2.79 15.95 2.32 13.87 2.32 11.73 2.32 6.88 6.29 3.01 11.14 3.01c2.59 0 5.03 1.01 6.86 2.84 1.83 1.83 2.84 4.26 2.84 6.86 0 4.85-3.96 8.78-8.8 8.78zm4.8-6.58c-.26-.13-1.56-.77-1.8-.86-.25-.08-.42-.13-.6.13-.17.27-.66.86-.81 1.04-.15.17-.31.2-.57.06-.26-.13-1.1-.41-2.11-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.27-.02-.41.11-.54.11-.11.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.21-.5-.43-.43-.6-.44-.16 0-.34-.01-.51-.01-.17 0-.45.07-.68.32-.23.26-.89.86-.89 2.1 0 1.24.91 2.43 1.04 2.6.13.17 1.86 2.84 4.51 3.99.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.56-.64 1.78-1.25.22-.61.22-1.13.15-1.25-.06-.13-.24-.2-.5-.33z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-white text-sm font-medium leading-normal">
                          WhatsApp
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
                          submitStatus === "success"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {submitStatus === "success"
                          ? "✓ Message sent successfully!"
                          : "✗ Failed to send message. Please try again."}
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors ${
                        isSubmitting
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-primary/90"
                      }`}
                    >
                      <span className="truncate">
                        {isSubmitting ? "Sending..." : "Send Message"}
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
