import { Link } from "react-router-dom";
import { Coffee, MapPin, Phone, Mail, Clock, Globe, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[18px] font-bold text-white tracking-tight">Brew & Co.</span>
                <span className="block text-[10px] font-medium text-brand-400 tracking-[0.2em] uppercase -mt-0.5">Coffee House</span>
              </div>
            </div>
            <p className="text-[16px] text-dark-400 leading-relaxed mb-6">
              A polished coffee experience where the warmth of artisanal brews meets the sophistication of a modern workspace.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, MessageCircle, Heart].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-dark-800/50 hover:bg-brand-600 rounded-xl flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-semibold text-brand-500 tracking-[0.15em] uppercase mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Our Menu" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-[16px] text-dark-400 hover:text-brand-400 transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[12px] font-semibold text-brand-500 tracking-[0.15em] uppercase mb-6">Get In Touch</h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "42 Workspace Lane, Creative District" },
                { icon: Phone, text: "+1 (555) 234-5678" },
                { icon: Mail, text: "hello@brewandco.com" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <span className="text-[16px] text-dark-400">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[12px] font-semibold text-brand-500 tracking-[0.15em] uppercase mb-6">Opening Hours</h4>
            <div className="space-y-3">
              {[
                { day: "Mon — Fri", time: "6:30 AM — 9:00 PM" },
                { day: "Saturday", time: "7:00 AM — 10:00 PM" },
                { day: "Sunday", time: "8:00 AM — 6:00 PM" },
              ].map(({ day, time }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                  <div>
                    <span className="text-[14px] font-medium text-dark-200">{day}</span>
                    <span className="block text-[14px] text-dark-500">{time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-dark-500">© 2026 Brew & Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[14px] text-dark-500 hover:text-dark-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[14px] text-dark-500 hover:text-dark-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
