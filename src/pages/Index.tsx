import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhoWeServe />
    <WhyChooseUs />
    <HowItWorks />
    <QuoteForm />
    <Testimonials />
    <ContactSection />
    <Footer />
    <FloatingCallButton />
  </>
);

export default Index;
