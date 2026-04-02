import { Target, Zap, PiggyBank, ClipboardList } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { icon: Target, title: "Industry-Focused Expertise", desc: "We specialize exclusively in employment and workforce insurance — it's all we do." },
  { icon: Zap, title: "Fast Claim Processing", desc: "Get your claims resolved quickly so your business keeps moving without disruption." },
  { icon: PiggyBank, title: "Cost-Effective Coverage", desc: "Competitive rates tailored to your workforce size and industry risk profile." },
  { icon: ClipboardList, title: "Personalized Business Plans", desc: "Custom insurance packages designed around your unique operational needs." },
];

const WhyChooseUs = () => (
  <section id="about" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Awakening Insurance</h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.08}>
            <div className="bg-card rounded-lg p-6 shadow-card text-center h-full">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
