import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, GraduationCap, Compass, MapPin } from "lucide-react";
import { galleryCategories, type GalleryPhoto } from "@/data/exchangeData";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  GraduationCap,
  Compass,
  MapPin,
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const current = galleryCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="galeria" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Momentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Galeria de Fotos
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || MapPin;
            const active = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-muted text-muted-foreground hover:bg-primary/15 hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Photos grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {current.photos.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group cursor-pointer overflow-hidden rounded-2xl border bg-card shadow-card hover:shadow-elevated transition-shadow duration-500"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover saturate-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-semibold text-foreground">{photo.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{photo.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Photo modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/85 backdrop-blur-md p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative max-w-3xl w-full overflow-hidden rounded-2xl bg-card shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selectedPhoto.src} alt={selectedPhoto.title} className="w-full aspect-video object-cover saturate-[0.85] contrast-[1.05]" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>
            <div className="p-7">
              <h3 className="font-serif text-xl font-bold text-foreground">{selectedPhoto.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{selectedPhoto.description}</p>
              {selectedPhoto.instagramLink && (
                <a
                  href={selectedPhoto.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Ver no Instagram →
                </a>
              )}
            </div>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 rounded-full bg-card/80 backdrop-blur-sm p-2 text-foreground hover:bg-muted transition-colors duration-300"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
