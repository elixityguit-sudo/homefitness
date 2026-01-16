import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo-home-fitness.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Home Fitness" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground mb-6">
              Transformando vidas através do fitness. 
              Sua jornada de saúde começa aqui.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Youtube className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl mb-6">NAVEGAÇÃO</h4>
            <ul className="space-y-3">
              {["Início", "Planos", "Benefícios", "Estrutura", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6">CONTATO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Av. Paulista, 1000 - Bela Vista
                  <br />São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">contato@homefitness.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl mb-6">HORÁRIOS</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Aberto 24 horas</span>
              </li>
              <li className="text-muted-foreground text-sm mt-4">
                <strong className="text-foreground">Recepção:</strong>
                <br />Seg a Sex: 6h - 22h
                <br />Sáb e Dom: 8h - 14h
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm mb-3">Receba novidades e promoções:</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 bg-muted border-none rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg font-bold text-sm hover:shadow-neon transition-shadow">
                  ENVIAR
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Home Fitness. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
