import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
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
              {["Início", "O que oferecemos", "Contato"].map((link) => (
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
                <a 
                  href="https://goo.gl/maps/cHr1VpV3LKVAkxo38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Rua Dr Marlio Fernandes, 100A
                  <br />Fortaleza - CE
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="https://wa.me/5585991903147?text=Oi%2C%20quero%20agendar%20uma%20aula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (85) 99190-3147
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:hfconsultoriaesportiva@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hfconsultoriaesportiva@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-xl mb-6">AGENDE SEU TREINO</h4>
            <p className="text-muted-foreground mb-6">
              Entre em contato pelo WhatsApp e agende sua aula experimental gratuita.
            </p>
            <a
              href="https://wa.me/5585991903147?text=Oi%2C%20quero%20agendar%20uma%20aula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:shadow-neon transition-all duration-300 w-full text-center"
            >
              FALAR NO WHATSAPP
            </a>
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
