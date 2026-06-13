import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, MapPin, Wifi, Users, Coffee as CoffeeIcon } from "lucide-react";

const HERO_IMG = "https://images.pexels.com/photos/18150815/pexels-photo-18150815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600";
const INTERIOR_IMG = "https://images.pexels.com/photos/36484101/pexels-photo-36484101.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const COFFEE_CUP_IMG = "https://images.pexels.com/photos/129209/pexels-photo-129209.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const LATTE_IMG = "https://images.pexels.com/photos/531761/pexels-photo-531761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const PASTRY_IMG = "https://images.pexels.com/photos/6166479/pexels-photo-6166479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const TEAM_IMG = "https://images.pexels.com/photos/5917724/pexels-photo-5917724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const BEANS_IMG = "https://images.pexels.com/photos/8937356/pexels-photo-8937356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

// Floating coffee bean SVG component
function CoffeeBean({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <ellipse cx="16" cy="16" rx="10" ry="14" />
      <path d="M16 4C14 10 14 22 16 28" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// Steam component for the hero
function SteamEffect() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5 blur-xl"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            left: `${-30 + Math.sin(i * 1.2) * 40}px`,
            bottom: `${i * 30}px`,
            animation: `steam ${3 + i * 0.5}s ease-in-out infinite ${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

// Particle system for ambient coffee-shop feel
function AmbientParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 8}s ease-in-out infinite ${Math.random() * 5}s`,
          }}
        />
      ))}
      {/* Floating coffee beans */}
      {[...Array(6)].map((_, i) => (
        <CoffeeBean
          key={`bean-${i}`}
          className={`absolute w-4 h-4 text-brand-800/10`}
        />
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="page-enter">
      {/* ====== HERO ====== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Base image with parallax */}
          <div
            className="absolute inset-0 transition-transform duration-[2000ms] ease-out"
            style={{
              transform: `scale(1.1) translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
            }}
          >
            <img
              src={HERO_IMG}
              alt="Coffee shop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/60" />

          {/* Warm light glow animation */}
          <div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-600/8 blur-[120px] animate-pulse-glow"
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-500/5 blur-[100px] animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />

          {/* Film grain overlay */}
          <div className="absolute inset-0 opacity-[0.03] animate-grain"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <AmbientParticles />
          <SteamEffect />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-4"
            >
              Est. 2019 — Premium Coffee Experience
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Where Work
              <br />
              Meets
              <span className="text-brand-500"> Warmth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-[18px] text-dark-300 leading-relaxed mb-10 max-w-lg"
            >
              A polished coffee experience designed for the modern professional. 
              Artisanal brews, refined ambiance, and a workspace that inspires — 
              all under one roof.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-brand-600/25 hover:shadow-brand-500/35 hover:-translate-y-0.5 group"
              >
                Explore Our Menu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white text-[16px] font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-16 flex items-center gap-8 flex-wrap"
            >
              {[
                { value: "12K+", label: "Happy Customers" },
                { value: "4.9", label: "Rating", icon: Star },
                { value: "50+", label: "Coffee Varieties" },
              ].map(({ value, label, icon: Icon }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[28px] font-bold text-white">{value}</span>
                  <div className="flex items-center gap-1">
                    {Icon && <Icon className="w-3 h-3 text-brand-500 fill-brand-500" />}
                    <span className="text-[14px] text-dark-400">{label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-[11px] text-dark-500 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border border-dark-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-brand-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section className="py-24 bg-dark-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">More Than Just Coffee</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CoffeeIcon, title: "Artisan Roasts", desc: "Single-origin beans roasted in small batches to bring out unique flavor profiles." },
              { icon: Wifi, title: "High-Speed WiFi", desc: "Dedicated fiber connection with private meeting pods for focused work sessions." },
              { icon: Clock, title: "Extended Hours", desc: "Open early for the morning grind and late for evening creative sessions." },
              { icon: Users, title: "Community Events", desc: "Weekly tastings, workshops, and networking events for professionals." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 bg-dark-900/50 border border-dark-800/50 rounded-2xl hover:border-brand-600/30 hover:bg-dark-900/80 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-brand-600/10 border border-brand-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-600/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-[18px] font-semibold text-white mb-3">{title}</h3>
                <p className="text-[16px] text-dark-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ABOUT PREVIEW ====== */}
      <section className="py-24 bg-dark-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={INTERIOR_IMG} alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <img src={LATTE_IMG} alt="Latte art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <img src={COFFEE_CUP_IMG} alt="Coffee cup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={TEAM_IMG} alt="Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-brand-600/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Crafted for the
                <br />
                Modern Professional
              </h2>
              <p className="text-[18px] text-dark-300 leading-relaxed mb-6">
                Born from the idea that your workspace and your coffee should both be exceptional, 
                Brew & Co. brings together the precision of specialty coffee with the comfort of 
                a well-designed office environment.
              </p>
              <p className="text-[16px] text-dark-400 leading-relaxed mb-8">
                Every detail — from our ergonomic seating to our acoustically-designed zones — 
                is crafted to help you do your best work while savoring the finest brews. 
                We believe great ideas deserve great coffee.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[16px] font-semibold text-brand-500 hover:text-brand-400 transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== POPULAR ITEMS ====== */}
      <section className="py-24 bg-dark-900/30 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Fan Favorites</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Popular This Week</h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-brand-500 hover:text-brand-400 transition-colors group"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: LATTE_IMG, name: "Signature Flat White", price: "$5.50", tag: "Best Seller", desc: "Velvety microfoam meets our house espresso blend" },
              { img: PASTRY_IMG, name: "Morning Ritual Set", price: "$12.00", tag: "Popular", desc: "Fresh croissant, seasonal jam, and your choice of coffee" },
              { img: BEANS_IMG, name: "Single Origin Pour Over", price: "$6.50", tag: "New", desc: "Hand-poured Ethiopian Yirgacheffe with citrus notes" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-dark-900/50 border border-dark-800/50 rounded-2xl overflow-hidden hover:border-brand-600/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-600 text-white text-[12px] font-semibold rounded-lg">{item.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[18px] font-semibold text-white">{item.name}</h3>
                    <span className="text-[18px] font-bold text-brand-500">{item.price}</span>
                  </div>
                  <p className="text-[16px] text-dark-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="py-24 bg-dark-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Guests Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Mitchell", role: "Freelance Designer", quote: "Brew & Co. has become my second office. The coffee is incredible, the WiFi never drops, and the ambiance is perfectly balanced — not too quiet, not too loud.", rating: 5 },
              { name: "James Park", role: "Startup Founder", quote: "We've held multiple team meetings here. The private pods are a game-changer, and their single-origin pour-overs are simply the best in the city.", rating: 5 },
              { name: "Elena Rodriguez", role: "Content Writer", quote: "I've tried every coffee shop in the district. Nothing compares to the attention to detail here — from the beans to the seating, everything is thoughtfully curated.", rating: 5 },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-8 bg-dark-900/50 border border-dark-800/50 rounded-2xl hover:border-brand-600/20 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-500 fill-brand-500" />
                  ))}
                </div>
                <p className="text-[16px] text-dark-300 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="text-[16px] font-semibold text-white">{t.name}</p>
                  <p className="text-[14px] text-dark-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={INTERIOR_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Visit Us Today</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Next Great Idea Starts With a Great Cup
            </h2>
            <p className="text-[18px] text-dark-300 leading-relaxed mb-10">
              Whether you're wrapping up a project, brainstorming with your team, or simply enjoying a quiet moment — 
              we've got the perfect seat and the perfect brew waiting for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-brand-600/25 hover:shadow-brand-500/35 hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                Find Our Location
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white text-[16px] font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
