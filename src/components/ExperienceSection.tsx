import { motion } from "framer-motion";
import { Home, GraduationCap, Building2, Calendar } from "lucide-react";
import countryside from "@/assets/gallery/countryside.jpg";
import oxford from "@/assets/gallery/oxford-university.jpg";
import pub from "@/assets/gallery/english-pub.jpg";
import stonehenge from "@/assets/gallery/stonehenge.jpg";

const journalEntries = [
  {
    icon: Home,
    title: "Vida com a host family",
    image: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0023.jpg",
    imageAlt: "Momentos com a host family",
    text: "Chegar na casa da minha host family foi como encontrar um segundo lar do outro lado do mundo. Desde o primeiro jantar eu senti que me tornaria parte daquela família. Conversas e jogos à mesa, viagens de fim de semana e noites assistindo TV juntos transformaram estranhos em pessoas queridas que carrego no coração.",
  },
  {
    icon: GraduationCap,
    title: "Experiência na escola",
    image: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250915_101200.jpg",
    imageAlt: "Campus da escola britânica",
    text: "A escola britânica tem um ritmo diferente. Meus horários de aulas mudavam diáriamente, divididos por períodos curtos. Não tinha uniforme, mas tinham intervalos longos. Aprendi não só inglês, mas história do ponto de vista deles, biologia em laboratórios equipados e também matemática. Os professores foram acolhedores, e cada dia era uma nova descoberta sobre como o mundo pode ensinar de formas diferentes.",
  },
  {
    icon: Building2,
    title: "A cidade onde vivi",
    image: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251108_145530.jpg",
    imageAlt: "Vista da cidade no interior da Inglaterra",
    text: "Eu fiquei em Portland, uma pequena ilha litorânea, charmosa e cheia de história. Caminhar por ali era como estar dentro de um filme britânico (o tipo de lugar que te faz desacelerar e prestar atenção nos detalhes que a correria do dia a dia nos faz perder). Mas me deslocava para Weymouth diariamente para ir ao colégio. Weymouth era moderno e cheio de vida, pessoas simpáticas e lojinhas variadas a beira da praia para explorar.",
  },
  {
    icon: Calendar,
    title: "Meu dia a dia",
    image: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251006_072637.jpg",
    imageAlt: "Rotina durante o intercâmbio",
    text: "A rotina era simples, mas nunca monótona. Manhãs e tardes na escola, noites com a família. Aos fins de semana, viagens para outros lugares. Foi nessa **rotina suave** que descobri o prazer de viver sem pressa, absorvendo cada momento como se fosse único.",
  },
];

function renderText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-primary font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-28 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Vivência
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Diário de Bordo
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
            Páginas de uma experiência que mudou tudo. Cada entrada conta um pedaço dessa jornada.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {journalEntries.map((entry, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
                  isReversed ? "md:direction-rtl" : ""
                }`}
                style={{ direction: isReversed ? "rtl" : "ltr" }}
              >
                {/* Image */}
                <div
                  className="relative"
                  style={{ direction: "ltr" }}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl shadow-elevated ${
                      i % 3 === 0
                        ? "rotate-[1deg]"
                        : i % 3 === 1
                        ? "-rotate-[1.5deg]"
                        : "rotate-[0.5deg]"
                    }`}
                  >
                    <img
                      src={entry.image}
                      alt={entry.imageAlt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover saturate-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                  </div>
                  {/* Polaroid-style caption */}
                  <div
                    className={`absolute -bottom-3 ${
                      isReversed ? "right-4" : "left-4"
                    } bg-card px-4 py-2 rounded-lg shadow-card border border-border`}
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <entry.icon size={14} />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        {entry.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div style={{ direction: "ltr" }} className="pt-4 md:pt-0">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-5">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground leading-[2] text-base">
                    {renderText(entry.text)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
