import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, MessageSquare } from "lucide-react";
import { personalData } from "../data";
import Section from "./Section";

const contactInfo = [
  { icon: Mail, title: "Email", value: personalData.email, href: `mailto:${personalData.email}`, accent: "violet" },
  { icon: MapPin, title: "Location", value: "Mandaue City", accent: "fuchsia" },
  { icon: MessageSquare, title: "Response Time", value: "Within 24 hours", accent: "violet" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all";

  return (
    <Section id="contact" label="Get In Touch" title="Let's Work Together" description="Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.">
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-1 space-y-6"
        >
          {contactInfo.map((item) => {
            const accentBorder = item.accent === "violet" ? "border-violet-500/20" : "border-fuchsia-500/20";
            const accentBg = item.accent === "violet" ? "bg-violet-500/10" : "bg-fuchsia-500/10";
            const accentColor = item.accent === "violet" ? "text-violet-400" : "text-fuchsia-400";

            return (
              <div key={item.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className={`w-12 h-12 rounded-xl ${accentBg} border ${accentBorder} flex items-center justify-center mb-4`}>
                  <item.icon className={accentColor} size={20} />
                </div>
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-zinc-400 hover:text-violet-400 transition-colors text-sm">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-zinc-400 text-sm">{item.value}</p>
                )}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2"
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="space-y-6">
              <FormField label="Name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} className={inputClasses} />
              <FormField label="Email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className={inputClasses} />
              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit" disabled={submitted}
                className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
              >
                {submitted ? (
                  <>
                    <span className="text-green-600">&#10003;</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-24 pt-8 border-t border-white/5 text-center"
      >
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {personalData.name}. Built with React &amp; Tailwind CSS.
        </p>
      </motion.div>
    </Section>
  );
}

function FormField({
  label, name, type, placeholder, value, onChange, className,
}: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; className: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-zinc-400 mb-2">{label}</label>
      <input
        type={type} id={name} name={name} value={value} onChange={onChange} required
        className={className} placeholder={placeholder}
      />
    </div>
  );
}