import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Get in Touch</h2>
          <p className="text-muted-foreground mt-3">Ready to protect your workforce? Reach out to our team today.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href="tel:+13312255247" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Call Us</p>
              <p className="font-semibold text-sm">+1 (331) 225-5247</p>
            </div>
          </a>
          <a href="mailto:iali@awakeninginsurance.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email Us</p>
              <p className="font-semibold text-sm">iali@awakeninginsurance.com</p>
            </div>
          </a>
          <a href="https://maps.google.com/?q=1037+Conrad+Ct+Elk+Grove+Village+IL+60007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Visit Us</p>
              <p className="font-semibold text-sm">1037 Conrad Ct, Elk Grove Village 60007 IL, USA</p>
            </div>
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
