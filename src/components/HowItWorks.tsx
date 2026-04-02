import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Request a Quote", desc: "Fill out our simple form with your business details and insurance needs." },
  { num: "02", title: "Get Custom Plan", desc: "Our specialists create a tailored coverage plan that fits your workforce." },
  { num: "03", title: "Protect Your Team", desc: "Activate your plan and gain peace of mind knowing your employees are covered." },
];

const HowItWorks = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">How It Works</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.12}>
            <div className="relative text-center">
              <span className="font-heading text-5xl font-extrabold text-primary/10">{s.num}</span>
              <h3 className="font-heading font-bold text-lg text-foreground mt-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-primary/20" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
