import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Mostrar após 1 segundo
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Cookie className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Termos e Cookies 🍪</h3>
                    <p className="text-muted-foreground text-sm">
                      Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, 
                      você concorda com nossa{" "}
                      <a href="#" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>{" "}
                      e{" "}
                      <a href="#" className="text-primary hover:underline">
                        Termos de Uso
                      </a>.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={handleReject}
                    className="flex-1 md:flex-none px-6 py-2.5 rounded-lg border border-border text-muted-foreground hover:bg-muted transition-colors font-medium"
                  >
                    Rejeitar
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-bold hover:shadow-neon transition-all duration-300"
                  >
                    Aceitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
