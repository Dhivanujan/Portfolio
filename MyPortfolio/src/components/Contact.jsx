import Section from "./Section";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Loader2,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dhivanujan2002@gmail.com",
    href: "mailto:dhivanujan2002@gmail.com",
    gradient: "from-pink-500 to-rose-500",
    description: "Drop me a line anytime",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/dhivanujan-nesiah-a56a94240/",
    gradient: "from-blue-500 to-indigo-500",
    description: "Let's grow our network",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Check my code",
    href: "https://github.com/Dhivanujan",
    gradient: "from-slate-600 to-slate-800",
    description: "Explore my projects",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) {
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("Email service is not configured yet.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setIsSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-10 -right-24 w-56 h-56 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-24 w-52 h-52 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4" />
          Get In Touch
        </motion.span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-5 text-slate-900 dark:text-white">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Connect
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Open to Software Engineering, Cloud Computing, DevOps, and Network
          Systems roles. Let’s connect to build scalable and reliable solutions
          together.{" "}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-start relative z-10 w-full max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-3 sm:space-y-4"
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Reach out through
          </h3>

          {contactInfo.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 8, scale: 1.02 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div
                className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform`}
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}

          {/* Availability indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/20"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400">
                Currently available for new opportunities
              </span>
            </div>
            <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400/80">
              Response time: Within 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 relative"
        >
          {/* Form glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 hover:opacity-20 blur-xl transition-all duration-500" />

          <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            {/* Success overlay */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-3xl z-20 flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-4 shadow-lg"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    I'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              ref={formRef}
              className="space-y-5 sm:space-y-6 relative z-10"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                {/* Name field */}
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: focusedField === "name" ? 1 : 0,
                      opacity: focusedField === "name" ? 1 : 0,
                    }}
                    className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-sm"
                  />
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="relative peer w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-5 -top-2.5 px-2 bg-white dark:bg-slate-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 dark:peer-placeholder-shown:text-slate-500 peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email field */}
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: focusedField === "email" ? 1 : 0,
                      opacity: focusedField === "email" ? 1 : 0,
                    }}
                    className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm"
                  />
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    required
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="relative peer w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-transparent outline-none transition-all duration-300"
                    placeholder="name@example.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-5 -top-2.5 px-2 bg-white dark:bg-slate-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 dark:peer-placeholder-shown:text-slate-500 peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              {/* Subject field */}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: focusedField === "subject" ? 1 : 0,
                    opacity: focusedField === "subject" ? 1 : 0,
                  }}
                  className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-sm"
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="relative peer w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-transparent outline-none transition-all duration-300"
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-5 -top-2.5 px-2 bg-white dark:bg-slate-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 dark:peer-placeholder-shown:text-slate-500 peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
                >
                  Subject (Optional)
                </label>
              </div>

              {/* Message field */}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: focusedField === "message" ? 1 : 0,
                    opacity: focusedField === "message" ? 1 : 0,
                  }}
                  className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-sm"
                />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="relative peer w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Your message..."
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-5 -top-2.5 px-2 bg-white dark:bg-slate-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 dark:peer-placeholder-shown:text-slate-500 peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
                >
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all flex items-center justify-center gap-2 sm:gap-3 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-70 text-sm sm:text-base"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
              {submitError ? (
                <p className="text-sm text-rose-600 dark:text-rose-400">
                  {submitError}
                </p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
