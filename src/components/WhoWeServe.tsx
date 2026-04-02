import { Building2, HardHat, Truck, Briefcase, UserCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const audiences = [
  { icon: Building2, label: "Small Businesses" },
  { icon: HardHat, label: "Construction Companies" },
  { icon: Truck, label: "Logistics & Trucking" },
  { icon: Briefcase, label: "Corporate Teams" },
  { icon: UserCheck, label: "Independent Contractors" },
];

const WhoWeServe = () => (
  <section id="employers" className="py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Who We Serve</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Built for Businesses Like Yours</h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {audiences.map((a, i) => (
          <ScrollReveal key={a.label} delay={i * 0.06}>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:shadow-card transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <a.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{a.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeServe;
