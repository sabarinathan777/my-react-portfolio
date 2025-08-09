/* eslint-disable no-unused-vars */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Mail, User, MessageSquare, FileText  } from "lucide-react";
import { motion } from "framer-motion";

emailjs.init("czbyHEmR71n6eL1ve");

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" , title: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validateForm = () => {
    const { name, email, message, title } = form;
    if (!name || !email || !message || !title) {
      toast.error("Please fill in all fields.", { position: "bottom-center" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.", { position: "bottom-center" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      title: form.title,
      message: form.message,
    };

    try {
      await emailjs.send("service_1d03k1r", "template_ogfcwhh", templateParams);
      toast.success(`Thanks ${form.name}, your message was sent!`, {
        position: "bottom-center",
        autoClose: 3000,
      });
      setForm({ name: "", email: "", message: "", title: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        position: "bottom-center",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#10101A] text-white flex items-center justify-center px-6 py-16"
    >
      <motion.div
        className="w-full max-w-xl bg-[#1A1A28] p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#A586ED]">
          Get in Touch
        </h2>
        <p className="text-center text-[#B0B0C3] mb-10">
          Got a project or opportunity in mind? Reach out and I’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm mb-1 text-[#B0B0C3]">
              <User className="w-4 h-4 text-[#A586ED]" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#10101A] text-white border border-[#333347] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A586ED]"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm mb-1 text-[#B0B0C3]">
              <Mail className="w-4 h-4 text-[#A586ED]" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#10101A] text-white border border-[#333347] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A586ED]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm mb-1 text-[#B0B0C3]">
              <FileText  className="w-4 h-4 text-[#A586ED]" /> Subject
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#10101A] text-white border border-[#333347] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#A586ED]"
              required
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm mb-1 text-[#B0B0C3]">
              <MessageSquare className="w-4 h-4 text-[#A586ED]" /> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-[#10101A] text-white border border-[#333347] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#A586ED]"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 rounded-md bg-[#A586ED] hover:bg-[#9270e0] transition text-white font-semibold ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
