import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-secondary-foreground/10 bg-secondary text-secondary-foreground py-10">
      <div className="container mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <span className="font-serif text-lg font-bold">
          Ganhando o <span className="text-primary">Mundo</span>
        </span>
        <div className="flex items-center gap-1 text-xs text-secondary-foreground/40">
          <span>Feito com</span>
          <Heart size={12} className="text-primary" />
          <span>na Inglaterra e no Brasil</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
