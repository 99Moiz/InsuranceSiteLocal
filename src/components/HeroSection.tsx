import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative pt-16">
    <div className="grid lg:grid-cols-2 min-h-[600px]">
      <div className="flex flex-col justify-center px-6 py-16 lg:px-16 xl:px-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-wider uppercase text-primary mb-4"
        >
          Employment Insurance Specialists
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-foreground"
        >
          Protect Your Workforce.{" "}
          <span className="text-primary">Secure Your Business.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-lg text-muted-foreground max-w-lg"
        >
          Specialized insurance solutions designed to protect your employees and
          reduce business risk.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button asChild size="lg">
            <a href="#quote">Get Free Quote</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+13312255247">
              <Phone className="mr-2 h-4 w-4" />
              Speak to an Advisor
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="hidden lg:block relative"
      >
        <img
          src={heroBg}
          alt="Professional business team in a modern office"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/10" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
