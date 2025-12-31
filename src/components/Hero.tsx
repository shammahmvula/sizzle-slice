import { Bike, UtensilsCrossed, Leaf, Flame } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";

const Hero = () => {
  return (
    <header className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(24, 17, 17, 0.4) 0%, rgba(24, 17, 17, 0.9) 100%), url("${heroPizza}")`
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 mb-2">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full border-2 border-foreground flex items-center justify-center">
              <Leaf className="size-4 text-foreground" />
            </div>
            <span className="text-foreground font-bold uppercase tracking-wider text-sm md:text-base font-display">
              Vegetarian
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full border-2 border-foreground flex items-center justify-center">
              <Flame className="size-4 text-foreground" />
            </div>
            <span className="text-foreground font-bold uppercase tracking-wider text-sm md:text-base font-display">
              Hot
            </span>
          </div>
        </div>

        <h1 className="text-foreground text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-xl">
          Pizza and Bites
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
          Experience the sizzle in every slice. From wood-fired pizzas loaded with your favourite toppings to crispy wings, juicy burgers, golden chips, and our famous Vetkoek, everything's made fresh and served hot.
        </p>

        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
            <Bike className="size-5" />
            Order Delivery
          </button>
          <button className="bg-accent hover:bg-accent/80 text-accent-foreground text-base md:text-lg font-bold px-8 py-3 rounded-lg border border-border transition-all flex items-center gap-2">
            <UtensilsCrossed className="size-5" />
            View Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
