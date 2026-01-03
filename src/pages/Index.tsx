import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FanFavorites from "@/components/FanFavorites";
import BurgerCombos from "@/components/BurgerCombos";
import MenuSection from "@/components/MenuSection";
import OrderCTA from "@/components/OrderCTA";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <FanFavorites />
      <BurgerCombos />
      <MenuSection />
      <OrderCTA />
      <Testimonials />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
