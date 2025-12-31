import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import BurgerCombos from "@/components/BurgerCombos";
import OrderCTA from "@/components/OrderCTA";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <MenuSection />
      <BurgerCombos />
      <OrderCTA />
      <Testimonials />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
