import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://images.pexels.com/photos/18150815/pexels-photo-18150815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Cafe ambiance at night", category: "space" },
  { src: "https://images.pexels.com/photos/531761/pexels-photo-531761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Latte art", category: "coffee" },
  { src: "https://images.pexels.com/photos/36484101/pexels-photo-36484101.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Modern interior", category: "space" },
  { src: "https://images.pexels.com/photos/129209/pexels-photo-129209.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Black coffee on desk", category: "coffee" },
  { src: "https://images.pexels.com/photos/8937356/pexels-photo-8937356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Coffee beans and latte", category: "coffee" },
  { src: "https://images.pexels.com/photos/6166479/pexels-photo-6166479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Coffee and croissants", category: "food" },
  { src: "https://images.pexels.com/photos/5917724/pexels-photo-5917724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Working at coffee shop", category: "people" },
  { src: "https://images.pexels.com/photos/4354193/pexels-photo-4354193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Baristas", category: "people" },
  { src: "https://images.pexels.com/photos/18105587/pexels-photo-18105587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Counter display", category: "space" },
  { src: "https://images.pexels.com/photos/26799265/pexels-photo-26799265.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Shelf with cups", category: "space" },
  { src: "https://images.pexels.com/photos/8937407/pexels-photo-8937407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Coffee beans heart", category: "coffee" },
  { src: "https://images.pexels.com/photos/8480695/pexels-photo-8480695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Danish pastry", category: "food" },
  { src: "https://images.pexels.com/photos/19093452/pexels-photo-19093452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Storefront", category: "space" },
  { src: "https://images.pexels.com/photos/16550826/pexels-photo-16550826.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Iced coffee with croissant", category: "food" },
  { src: "https://images.pexels.com/photos/7657877/pexels-photo-7657877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Coffee and notebook", category: "coffee" },
  { src: "https://images.pexels.com/photos/34386524/pexels-photo-34386524.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200", alt: "Modern cafe decor", category: "space" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "space", label: "Our Space" },
  { id: "coffee", label: "Coffee" },
  { id: "food", label: "Food" },
  { id: "people", label: "People" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? images
    : images.filter((img) => img.category === activeFilter);

  return (
    <div className="page-enter pt-20">
      {/* Hero */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-semibold text-brand-500 tracking-[0.2em] uppercase mb-3">Visual Story</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
            <p className="text-[18px] text-dark-300 max-w-xl mx-auto">
              A glimpse into the SKARA COFFEE experience — from our space to our craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="pb-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 text-[16px] font-semibold rounded-xl transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                    : "bg-dark-900/50 text-dark-400 hover:text-white hover:bg-dark-800/50 border border-dark-800/50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightbox(images.indexOf(img))}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-dark-800/30 hover:border-brand-600/30 transition-all duration-500">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-all duration-300 flex items-end">
                      <p className="p-4 text-[14px] text-white font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-dark-800/80 rounded-xl flex items-center justify-center text-white hover:bg-dark-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
