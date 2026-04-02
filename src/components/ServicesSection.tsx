import { Shield, Users, Heart, HardHat, DollarSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Shield, title: "Workers Compensation Insurance", desc: "Cover medical expenses and lost wages for employees injured on the job. Stay compliant and protect your workforce." },
  { icon: Users, title: "Employer Liability Insurance", desc: "Defend your business against claims of negligence or workplace-related lawsuits from employees." },
  { icon: Heart, title: "Group Health Coverage", desc: "Offer competitive health benefits to attract and retain top talent while reducing turnover costs." },
  { icon: HardHat, title: "Contractor Insurance", desc: "Comprehensive coverage for independent contractors and subcontractors working across industries." },
  { icon: DollarSign, title: "Payroll & Risk Protection", desc: "Mitigate financial risk related to payroll errors, audits, and regulatory compliance issues." },
];

const ServicesSection = () => (
  <section id="coverage" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Coverage</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Job-Focused Insurance Solutions</h2>
          <p className="text-muted-foreground mt-3">Purpose-built coverage that addresses the real risks employers face every day.</p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-lg transition-shadow h-full">
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
