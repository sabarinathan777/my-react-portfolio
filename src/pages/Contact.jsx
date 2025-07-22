import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Mail, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// EmailJS init
emailjs.init("czbyHEmR71n6eL1ve");

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validateForm = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
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
      message: form.message,
    };

    try {
      await emailjs.send("service_g63zoqj", "template_ogfcwhh", templateParams);
      toast.success(`Thanks ${form.name}, your message was sent!`, {
        position: "bottom-center",
        autoClose: 3000,
      });
      setForm({ name: "", email: "", message: "" });
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
      className="min-h-screen px-6 py-16 bg-background text-text-base flex items-center justify-center"
    >
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Get in Touch
        </h2>
        <p className="text-text-muted mb-12 max-w-md mx-auto text-center">
          Got a project or opportunity in mind? Reach out and I’ll get back to
          you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm mb-1">
              <User className="w-4 h-4 text-primary" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-card text-white border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm mb-1">
              <Mail className="w-4 h-4 text-primary" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-card text-white border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm mb-1">
              <MessageSquare className="w-4 h-4 text-primary" /> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-card text-white border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 rounded-md bg-primary hover:bg-indigo-700 transition text-white font-semibold ${
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
