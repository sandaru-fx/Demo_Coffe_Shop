import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/90 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-dark-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-500/20">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[18px] font-bold text-white tracking-tight">
                Brew & Co.
              </span>
              <span className="block text-[10px] font-medium text-brand-400 tracking-[0.2em] uppercase -mt-0.5">
                Coffee House
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-5 py-2.5 text-[16px] font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-brand-400"
                      : "text-dark-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              Order Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-dark-300 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-950/98 backdrop-blur-2xl border-t border-dark-800/50 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-3 text-[16px] font-medium rounded-xl transition-all ${
                      isActive
                        ? "text-brand-400 bg-brand-500/10"
                        : "text-dark-300 hover:text-white hover:bg-dark-800/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="block mt-4 px-4 py-3 bg-brand-600 text-white text-center text-[16px] font-semibold rounded-xl"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
