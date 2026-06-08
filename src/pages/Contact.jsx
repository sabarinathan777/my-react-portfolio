import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Mail, User, MessageSquare, FileText, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", title: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validateForm = () => {
    const { name, email, message, title } = form;
    if (!name || !email || !message || !title) {
      toast.error("Please fill in all fields.", { position: "bottom-center" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email.", { position: "bottom-center" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:  form.name,
          from_email: form.email,
          title:      form.title,
          message:    form.message,
        },
        EMAILJS_KEY
      );
      toast.success(`Thanks ${form.name}, your message was sent!`, {
        position: "bottom-center",
        autoClose: 3000,
      });
      setForm({ name: "", email: "", message: "", title: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-white/5 text-white border border-white/10 rounded-xl " +
    "placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A586ED]/50 " +
    "focus:border-[#A586ED]/50 transition-all duration-200";

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#10101A] text-white flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* ── Left info panel ── */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#A586ED]">Get in Touch</h2>
            <p className="text-gray-400 leading-relaxed">
              Got a project, opportunity, or just want to say hi? Fill out the form or reach me through
              any of the channels below — I'll get back to you promptly.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
              <div className="p-2.5 rounded-lg bg-[#A586ED]/15 text-[#A586ED]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className="text-sm text-gray-200">sabarinagarajan07@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
              <div className="p-2.5 rounded-lg bg-[#A586ED]/15 text-[#A586ED]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Location</p>
                <p className="text-sm text-gray-200">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Find me on</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/sabarinathan777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm
                           text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sabari-nathan-31488b250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm
                           text-gray-400 hover:text-[#A586ED] hover:border-[#A586ED]/30 transition-all"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Right form ── */}
        <motion.div
          className="glass-card rounded-2xl p-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-xs mb-2 text-gray-500 uppercase tracking-widest">
                <User className="w-3.5 h-3.5 text-[#A586ED]" /> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs mb-2 text-gray-500 uppercase tracking-widest">
                <Mail className="w-3.5 h-3.5 text-[#A586ED]" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs mb-2 text-gray-500 uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5 text-[#A586ED]" /> Subject
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className={inputClass}
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs mb-2 text-gray-500 uppercase tracking-widest">
                <MessageSquare className="w-3.5 h-3.5 text-[#A586ED]" /> Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Your message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                          bg-[#A586ED] hover:bg-[#9270e0] text-white font-semibold
                          shadow-lg shadow-[#A586ED]/20 transition-all duration-200
                          ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <Send size={15} />
              {loading ? "Sending…" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
