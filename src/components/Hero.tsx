import { Bike, UtensilsCrossed, Leaf, Flame, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import heroPizza from "@/assets/hero-pizza.jpg";

const FloatingParticle = ({ delay, size, left, duration }: { delay: number; size: number; left: string; duration: number }) => (
  <div
    className="absolute rounded-full bg-primary/30 blur-sm animate-float"
    style={{
      width: size,
      height: size,
      left,
      top: `${Math.random() * 60 + 20}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

const SparkElement = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <div
    className="absolute animate-spark"
    style={{
      left,
      top,
      animationDelay: `${delay}s`,
    }}
  >
    <Sparkles className="size-4 text-secondary" />
  </div>
);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="relative w-full min-h-[700px] md:min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s] ease-out"
        style={{
          backgroundImage: `linear-gradient(rgba(24, 17, 17, 0.3) 0%, rgba(24, 17, 17, 0.95) 100%), url("${heroPizza}")`,
          transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <FloatingParticle delay={0} size={8} left="10%" duration={4} />
        <FloatingParticle delay={1} size={12} left="25%" duration={5} />
        <FloatingParticle delay={0.5} size={6} left="40%" duration={3.5} />
        <FloatingParticle delay={1.5} size={10} left="60%" duration={4.5} />
        <FloatingParticle delay={0.8} size={8} left="75%" duration={4} />
        <FloatingParticle delay={2} size={14} left="90%" duration={5.5} />
        
        {/* Spark Elements */}
        <SparkElement delay={0} left="15%" top="30%" />
        <SparkElement delay={1.5} left="80%" top="25%" />
        <SparkElement delay={0.7} left="70%" top="60%" />
        <SparkElement delay={2} left="20%" top="70%" />
      </div>

      {/* Decorative Ring */}
      <div 
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-primary/10 rounded-full animate-rotate-slow pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-secondary/10 rounded-full pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'rotate-slow 30s linear infinite reverse',
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center gap-6">
        {/* Animated Badges */}
        <div 
          className={`flex items-center gap-6 mb-2 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex items-center gap-2 group">
            <div className="size-10 rounded-full border-2 border-foreground/80 flex items-center justify-center bg-background/10 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary/20 group-hover:scale-110">
              <Leaf className="size-5 text-foreground transition-colors group-hover:text-primary" />
            </div>
            <span className="text-foreground font-bold uppercase tracking-wider text-sm md:text-base font-display">
              Vegetarian
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="size-10 rounded-full border-2 border-foreground/80 flex items-center justify-center bg-background/10 backdrop-blur-sm transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary/20 group-hover:scale-110">
              <Flame className="size-5 text-foreground transition-colors group-hover:text-secondary" />
            </div>
            <span className="text-foreground font-bold uppercase tracking-wider text-sm md:text-base font-display">
              Hot
            </span>
          </div>
        </div>

        {/* Animated Headline with Gradient Shimmer */}
        <div className="overflow-hidden">
          <h1 
            className={`text-foreground text-4xl md:text-6xl font-black leading-tight tracking-tight transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              Pizza and Bites
            </span>
          </h1>
        </div>

        {/* Animated Description */}
        <p 
          className={`text-foreground/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          Experience the sizzle in every slice. From wood-fired pizzas loaded with your favourite toppings to crispy wings, juicy burgers, golden chips, and our famous Vetkoek, everything's made fresh and served hot.
        </p>

        {/* Animated Buttons */}
        <div 
          className={`flex flex-wrap gap-4 mt-4 justify-center transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <button className="group relative bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 overflow-hidden animate-pulse-glow hover:scale-105">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Bike className="size-5 transition-transform group-hover:-translate-x-1" />
            <span>Order Delivery</span>
          </button>
          <button className="group bg-accent/50 backdrop-blur-sm hover:bg-accent/80 text-accent-foreground text-base md:text-lg font-bold px-8 py-4 rounded-xl border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-secondary/10">
            <UtensilsCrossed className="size-5 transition-transform group-hover:rotate-12" />
            <span>View Menu</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`mt-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="flex flex-col items-center gap-2 animate-float">
            <span className="text-muted-foreground text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
