import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:+13312255247"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-card-lg hover:scale-105 transition-transform"
    aria-label="Call Now"
  >
    <Phone className="h-6 w-6" />
  </a>
);

export default FloatingCallButton;
