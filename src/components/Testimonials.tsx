import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { quote: "Awakening Insurance helped us find the perfect workers' comp plan for our 50-person construction crew. Claims are handled fast and hassle-free.", name: "David R.", role: "CEO, Summit Builders LLC" },
  { quote: "As a logistics company, we needed reliable coverage for our drivers. Their team understood our industry and delivered a plan that saved us 30%.", name: "Maria L.", role: "Operations Director, FastTrack Logistics" },
  { quote: "Switching to Awakening was the best decision for our growing startup. The group health plan keeps our team happy and our costs predictable.", name: "James T.", role: "Founder, NovaTech Solutions" },
];

const Testimonials = () => (
  <section className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Trusted by Businesses Nationwide</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="bg-card rounded-lg p-6 shadow-card h-full flex flex-col">
              <Quote className="h-6 w-6 text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
