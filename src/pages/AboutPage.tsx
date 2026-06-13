import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Leaf, Target } from "lucide-react";

const INTERIOR_IMG = "https://images.pexels.com/photos/36484101/pexels-photo-36484101.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const TEAM_IMG = "https://images.pexels.com/photos/5917724/pexels-photo-5917724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const BARISTA_IMG = "https://images.pexels.com/photos/4354193/pexels-photo-4354193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const BEANS_IMG = "https://images.pexels.com/photos/8937356/pexels-photo-8937356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const COUNTER_IMG = "https://images.pexels.com/photos/18105587/pexels-photo-18105587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const STOREFRONT_IMG = "https://images.pexels.com/photos/19093452/pexels-photo-19093452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const timeline = [
  { year: "2019", title: "The Beginning", desc: "Two coffee-obsessed professionals opened a tiny 12-seat space with a big dream: make the perfect third place between home and office." },
  { year: "2020", title: "Pivoting Forward", desc: "Launched our online bean subscription and created outdoor pods to serve the community safely during uncertain times." },
  { year: "2021", title: "The Expansion", desc: "Moved to our current 3,000 sq ft location with dedicated co-working zones, meeting pods, and an expanded roastery." },
  { year: "2023", title: "Award Season", desc: "Named 'Best Coffee Shop for Remote Workers' by City Magazine. Launched our barista training program." },
  { year: "2025", title: "Growing Community", desc: "Surpassed 12,000 loyal customers. Partnered with local farms for our seasonal food menu. Opened our roastery tours." },
];

export default function AboutPage() {
  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={COUNTER_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Coffee Shop
              <br />
              Built for <span className="text-brand-500">Doers</span>
            </h1>
            <p className="text-[18px] text-dark-300 leading-relaxed">
              We're not just serving coffee — we're building a community of creators, 
              thinkers, and professionals who believe the right environment can unlock 
              extraordinary work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Fuel Ambition, One Cup at a Time
              </h2>
              <p className="text-[18px] text-dark-300 leading-relaxed mb-6">
                We started Brew & Co. because we were tired of choosing between good coffee 
                and a productive workspace. So we created a place that offers both — 
                no compromises.
              </p>
              <p className="text-[16px] text-dark-400 leading-relaxed mb-8">
                Every aspect of our space is intentional. The lighting is calibrated for 
                focus. The acoustics are designed to minimize distraction. The coffee is 
                sourced from farms that share our commitment to excellence. And the pastries? 
                Baked fresh every morning by our in-house team.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Precision", desc: "Every detail is intentional" },
                  { icon: Heart, title: "Passion", desc: "We love what we do" },
                  { icon: Leaf, title: "Sustainability", desc: "Ethically sourced, always" },
                  { icon: Award, title: "Quality", desc: "Never settle for less" },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-brand-600/10 border border-brand-600/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold text-white">{title}</p>
                      <p className="text-[14px] text-dark-400">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img src={INTERIOR_IMG} alt="Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-dark-950 shadow-2xl">
                <img src={BEANS_IMG} alt="Beans" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark-900/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How We Got Here</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-dark-700" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-dark-950 z-10" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-[14px] font-bold text-brand-500">{item.year}</span>
                  <h3 className="text-[18px] font-semibold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-[16px] text-dark-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Our People</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-[18px] text-dark-300 max-w-xl mx-auto">
              Passionate baristas, creative thinkers, and hospitality experts who make 
              every visit memorable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: BARISTA_IMG, name: "Ana & Priya", role: "Head Baristas", desc: "Award-winning duo with 15 years combined experience in specialty coffee" },
              { img: TEAM_IMG, name: "David Chen", role: "Operations Lead", desc: "Former tech PM who ensures our workspace tech runs flawlessly" },
              { img: STOREFRONT_IMG, name: "The Space", role: "Our Home Since 2021", desc: "3,000 sq ft of curated comfort in the heart of the Creative District" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-dark-900/50 border border-dark-800/50 rounded-2xl overflow-hidden hover:border-brand-600/30 transition-all duration-500"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-semibold text-brand-500 tracking-[0.15em] uppercase mb-1">{member.role}</p>
                  <h3 className="text-[18px] font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-[16px] text-dark-400">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-900/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Come Be Part of Our Story
            </h2>
            <p className="text-[18px] text-dark-300 mb-10">
              Whether you're a regular or a first-timer, there's always a seat and a 
              fresh cup waiting for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white text-[16px] font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-brand-600/25 hover:shadow-brand-500/35 hover:-translate-y-0.5 group"
            >
              Visit Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
