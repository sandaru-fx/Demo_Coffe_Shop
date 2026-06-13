import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const STOREFRONT_IMG = "https://images.pexels.com/photos/19093452/pexels-photo-19093452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", date: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Format the message for WhatsApp
    const whatsappNumber = "94700000000"; // Placeholder, user will change this
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Phone:* ${formState.phone}%0A*Date:* ${formState.date}%0A*Subject:* ${formState.subject}%0A*Message:* ${formState.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", date: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={STOREFRONT_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-[18px] text-dark-300 max-w-xl mx-auto">
              Have a question, want to book an event, or just want to say hi? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    lines: ["12 Lighthouse Street", "Galle Fort, Sri Lanka"],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    lines: ["+94 77 123 4567", "Mon — Sun, 7 AM — 9 PM"],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    lines: ["hello@brewandco.lk", "We respond within 24 hours"],
                  },
                  {
                    icon: Clock,
                    title: "Opening Hours",
                    lines: ["Mon — Fri: 6:30 AM — 9:00 PM", "Sat: 7:00 AM — 10:00 PM", "Sun: 8:00 AM — 6:00 PM"],
                  },
                ].map(({ icon: Icon, title, lines }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-brand-600/10 border border-brand-600/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold text-white mb-1">{title}</p>
                      {lines.map((line, j) => (
                        <p key={j} className="text-[16px] text-dark-400">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-dark-800/50 aspect-video bg-dark-900/50 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.309489569769!2d80.2081515!3d6.0270034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a11685bc97%3A0xc47e33555db6c22!2sGalle%20Fort!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-dark-900/50 border border-dark-800/50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-[16px] text-dark-400 mb-8">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-[16px] text-dark-400">We'll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[14px] font-medium text-dark-300 mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-xl text-[16px] text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] font-medium text-dark-300 mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-xl text-[16px] text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] font-medium text-dark-300 mb-2">Phone</label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="Your phone number"
                          className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-xl text-[16px] text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] font-medium text-dark-300 mb-2">Reservation Date (Optional)</label>
                        <input
                          type="date"
                          value={formState.date}
                          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                          className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-xl text-[16px] text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[14px] font-medium text-dark-300 mb-2">Subject</label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-xl text-[16px] text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all appearance-none"
                      >
                        <option value="" className="bg-dark-900">Select a topic</option>
                        <option value="general" className="bg-dark-900">General Inquiry</option>
                        <option value="events" className="bg-dark-900">Events & Bookings</option>
                        <option value="catering" className="bg-dark-900">Catering</option>
                        <option value="feedback" className="bg-dark-900">Feedback</option>
                        <option value="careers" className="bg-dark-900">Careers</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[14px] font-medium text-dark-300 mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us what's on your mind..."
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-xl text-[16px] text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/35 hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
