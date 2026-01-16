import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-home-fitness.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Nossos Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img src={logo} alt="Home Fitness" className="h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5585991903147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20verificar%20a%20disponibilidade%20para%20agendar%20uma%20aula."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg font-bold tracking-wide hover:shadow-neon transition-all duration-300"
            >
              AGENDE UMA AULA
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5585991903147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20verificar%20a%20disponibilidade%20para%20agendar%20uma%20aula."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-center mt-2"
              >
                AGENDE UMA AULA
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
