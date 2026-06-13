import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Snowflake, Leaf, CakeSlice } from "lucide-react";

const LATTE_IMG = "https://images.pexels.com/photos/531761/pexels-photo-531761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const categories = [
  { id: "hot", label: "Hot Drinks", icon: Flame },
  { id: "cold", label: "Cold Drinks", icon: Snowflake },
  { id: "specialty", label: "Specialty", icon: Leaf },
  { id: "food", label: "Food & Pastry", icon: CakeSlice },
];

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  tag?: string;
  popular?: boolean;
}

const menuItems: Record<string, MenuItem[]> = {
  hot: [
    { name: "House Espresso", price: "$3.50", desc: "Double shot of our signature blend, rich and full-bodied" },
    { name: "Signature Flat White", price: "$5.50", desc: "Velvety microfoam meets our house espresso blend", popular: true },
    { name: "Oat Milk Cappuccino", price: "$5.00", desc: "Creamy oat milk with perfectly textured foam", tag: "Popular" },
    { name: "Vanilla Bean Latte", price: "$6.00", desc: "Real vanilla bean infusion with steamed milk" },
    { name: "Mocha Noir", price: "$6.50", desc: "Dark Belgian chocolate with a double espresso shot", tag: "New" },
    { name: "London Fog", price: "$5.50", desc: "Earl Grey tea with steamed vanilla milk and lavender" },
    { name: "Chai Latte", price: "$5.50", desc: "House-spiced chai blend with your choice of milk" },
    { name: "Hot Chocolate", price: "$5.00", desc: "Rich single-origin cacao with marshmallow" },
    { name: "Matcha Latte", price: "$6.00", desc: "Ceremonial grade Japanese matcha with oat milk", tag: "Popular" },
    { name: "Turmeric Golden Latte", price: "$5.50", desc: "Anti-inflammatory blend with turmeric, ginger, and honey" },
  ],
  cold: [
    { name: "Iced Americano", price: "$4.00", desc: "Bold espresso over ice with filtered water" },
    { name: "Cold Brew Classic", price: "$5.00", desc: "24-hour steeped for smooth, low-acid perfection", popular: true },
    { name: "Nitro Cold Brew", price: "$6.00", desc: "Nitrogen-infused for a creamy, cascading pour", tag: "Signature" },
    { name: "Iced Vanilla Latte", price: "$5.50", desc: "Espresso, vanilla, and cold milk over ice" },
    { name: "Coconut Cold Brew", price: "$6.00", desc: "Cold brew with coconut cream and light sweetness", tag: "New" },
    { name: "Iced Matcha", price: "$6.00", desc: "Whisked matcha with cold oat milk and ice" },
    { name: "Berry Refresher", price: "$5.50", desc: "Mixed berry infusion with sparkling water" },
    { name: "Lemonade Iced Tea", price: "$4.50", desc: "House-brewed black tea with fresh lemon juice" },
  ],
  specialty: [
    { name: "Single Origin Pour Over", price: "$6.50", desc: "Hand-poured Ethiopian Yirgacheffe with citrus notes", popular: true, tag: "Staff Pick" },
    { name: "Aeropress Brew", price: "$5.50", desc: "Clean, concentrated brew — origin rotates weekly" },
    { name: "Chemex (Serves 2)", price: "$10.00", desc: "Slow-brewed clarity. Perfect for sharing." },
    { name: "Siphon Coffee", price: "$8.00", desc: "Theatrical vacuum brew. Complex, tea-like body.", tag: "Experience" },
    { name: "Espresso Flight", price: "$9.00", desc: "Taste three different single origins side by side" },
    { name: "Affogato", price: "$7.00", desc: "Vanilla gelato drowned in a shot of hot espresso" },
  ],
  food: [
    { name: "Morning Ritual Set", price: "$12.00", desc: "Fresh croissant, seasonal jam, and your choice of coffee", popular: true, tag: "Best Value" },
    { name: "Avocado Toast", price: "$9.00", desc: "Sourdough, smashed avo, cherry tomato, micro herbs" },
    { name: "Granola Bowl", price: "$8.50", desc: "House granola, Greek yogurt, seasonal fruit, honey" },
    { name: "Smoked Salmon Bagel", price: "$11.00", desc: "Cream cheese, capers, red onion, everything bagel" },
    { name: "Almond Croissant", price: "$5.00", desc: "Twice-baked with almond frangipane and flaked almonds" },
    { name: "Banana Bread", price: "$4.50", desc: "Warm, moist, with walnuts and cinnamon butter", tag: "Popular" },
    { name: "Cookie Selection", price: "$3.50", desc: "Chocolate chip, oatmeal raisin, or matcha white choc" },
    { name: "Seasonal Cake Slice", price: "$6.00", desc: "Ask your barista — it changes every week!" },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("hot");

  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={LATTE_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Our Selection</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Menu</h1>
            <p className="text-[18px] text-dark-300 max-w-xl mx-auto">
              Every cup is crafted with care, using ethically sourced beans and seasonal ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 text-[16px] font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                      : "bg-dark-900/50 text-dark-400 hover:text-white hover:bg-dark-800/50 border border-dark-800/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {menuItems[activeCategory]?.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`group flex items-start justify-between gap-4 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    item.popular
                      ? "bg-brand-600/5 border-brand-600/20 hover:border-brand-600/40"
                      : "bg-dark-900/30 border-dark-800/30 hover:border-dark-700/50 hover:bg-dark-900/50"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[18px] font-semibold text-white group-hover:text-brand-400 transition-colors">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="px-2 py-0.5 bg-brand-600/15 text-brand-500 text-[12px] font-semibold rounded-md">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[16px] text-dark-400">{item.desc}</p>
                  </div>
                  <span className="text-[18px] font-bold text-brand-500 shrink-0">{item.price}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center">
            <p className="text-[14px] text-dark-500">
              All prices include tax. Milk alternatives (oat, almond, coconut) available at +$0.75. 
              Ask about our seasonal specials!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
