import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, GraduationCap, Compass, MapPin, X } from "lucide-react";
import { galleryCategories, type Album } from "@/data/exchangeData";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  GraduationCap,
  Compass,
  MapPin,
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const current = galleryCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="galeria" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Momentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
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
                    : "bg-secondary-foreground/10 text-secondary-foreground/70 hover:bg-primary/20 hover:text-secondary-foreground"
                }`}
              >
                <Icon size={16} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Albums grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {current.albums.map((album) => (
              <motion.div
                key={album.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 shadow-card hover:shadow-elevated transition-shadow duration-500"
                onClick={() => setSelectedAlbum(album)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    loading="lazy"
                    className="h-full w-full object-cover saturate-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                  <div className="absolute bottom-3 right-3 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground">
                    {album.photos.length} fotos
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-semibold text-secondary-foreground">{album.title}</h3>
                  <p className="mt-1.5 text-sm text-secondary-foreground/60 line-clamp-2">{album.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Album modal */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          onClick={() => setSelectedAlbum(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl h-[650px] overflow-hidden rounded-2xl bg-card shadow-elevated flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left — Photos grid with scroll */}
            <div className="md:w-3/5 h-[300px] md:h-full overflow-y-auto p-4 border-r border-border/30">
              <div className="grid grid-cols-2 gap-3">
                {selectedAlbum.photos.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl">
                    <img
                      src={src}
                      alt={`${selectedAlbum.title} — foto ${i + 1}`}
                      className="w-full aspect-square object-cover saturate-[0.85] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Info */}
            <div className="md:w-2/5 h-[350px] md:h-full overflow-y-auto p-7 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Álbum</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{selectedAlbum.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{selectedAlbum.description}</p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedAlbum(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-card/80 backdrop-blur-sm p-2 text-foreground hover:bg-muted transition-colors duration-300"
            >
              <X size={18} />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
