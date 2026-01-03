import { Plus } from "lucide-react";
import burgersImage from "@/assets/burgers.png";
import footlongsImage from "@/assets/footlongs.png";

const items = [
  {
    name: "Burger Combos",
    description: "Classic, Double & Cheese burgers available in beef or chicken.",
    price: "From R60",
    image: burgersImage
  },
  {
    name: "Footlongs",
    description: "Our secret tomato base, melted cheese and garlic butter finish.",
    price: "From R60",
    image: footlongsImage
  }
];

// Flame SVG component for the sides
const FlameDecoration = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side}-0 top-0 bottom-0 w-20 md:w-32 pointer-events-none hidden lg:block overflow-hidden`}>
    <svg 
      viewBox="0 0 100 400" 
      className={`h-full w-full ${side === 'right' ? 'scale-x-[-1]' : ''}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`flame-gradient-${side}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(0, 88%, 50%)" stopOpacity="0.6" />
          <stop offset="40%" stopColor="hsl(25, 95%, 53%)" stopOpacity="0.4" />
          <stop offset="70%" stopColor="hsl(45, 97%, 53%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(45, 97%, 53%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Main flame shape */}
      <path 
        d="M0,400 Q30,350 20,300 Q10,250 25,200 Q40,150 15,100 Q-5,50 30,0 L0,0 Z"
        fill={`url(#flame-gradient-${side})`}
        className="animate-[flicker_3s_ease-in-out_infinite]"
      />
      {/* Secondary flame */}
      <path 
        d="M0,400 Q20,370 15,340 Q10,310 20,280 Q30,250 10,220 Q-5,190 25,160 Q40,130 5,100 L0,100 Z"
        fill={`url(#flame-gradient-${side})`}
        opacity="0.5"
        className="animate-[flicker_2.5s_ease-in-out_infinite_0.5s]"
      />
    </svg>
  </div>
);

// Floating ember/spark component
const Ember = ({ delay, left, size }: { delay: number; left: string; size: number }) => (
  <div 
    className="absolute rounded-full bg-gradient-to-t from-primary via-orange-500 to-secondary animate-[ember_4s_ease-out_infinite] opacity-80"
    style={{ 
      left, 
      bottom: '20%',
      width: size, 
      height: size,
      animationDelay: `${delay}s`,
      filter: 'blur(0.5px)',
      boxShadow: '0 0 6px hsl(var(--primary)), 0 0 12px hsl(var(--secondary) / 0.5)'
    }}
  />
);

const BurgerCombos = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-card border-y border-border relative overflow-hidden">
      {/* Warm ambient glow from below - like grill heat */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 via-orange-500/5 to-transparent pointer-events-none" />
      
      {/* Flame decorations on sides */}
      <FlameDecoration side="left" />
      <FlameDecoration side="right" />
      
      {/* Floating embers - left side */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-16 pointer-events-none hidden lg:block">
        <Ember delay={0} left="20%" size={4} />
        <Ember delay={1.2} left="60%" size={3} />
        <Ember delay={2.4} left="40%" size={5} />
        <Ember delay={0.8} left="80%" size={3} />
        <Ember delay={1.8} left="30%" size={4} />
      </div>
      
      {/* Floating embers - right side */}
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-16 pointer-events-none hidden lg:block">
        <Ember delay={0.5} left="30%" size={4} />
        <Ember delay={1.5} left="70%" size={3} />
        <Ember delay={2.8} left="50%" size={5} />
        <Ember delay={1} left="20%" size={3} />
        <Ember delay={2} left="60%" size={4} />
      </div>

      {/* Heat wave lines */}
      <div className="absolute left-12 md:left-24 top-1/4 bottom-1/4 w-8 pointer-events-none hidden lg:flex flex-col justify-center gap-3 opacity-30">
        <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite]" />
        <div className="h-0.5 w-3/4 bg-gradient-to-r from-secondary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite_0.3s]" />
        <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite_0.6s]" />
        <div className="h-0.5 w-2/3 bg-gradient-to-r from-secondary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite_0.9s]" />
      </div>
      
      <div className="absolute right-12 md:right-24 top-1/4 bottom-1/4 w-8 pointer-events-none hidden lg:flex flex-col justify-center gap-3 opacity-30">
        <div className="h-0.5 w-full bg-gradient-to-l from-secondary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite_0.2s]" />
        <div className="h-0.5 w-3/4 bg-gradient-to-l from-primary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite_0.5s]" />
        <div className="h-0.5 w-full bg-gradient-to-l from-secondary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite_0.8s]" />
        <div className="h-0.5 w-2/3 bg-gradient-to-l from-primary to-transparent rounded-full animate-[heatwave_2s_ease-in-out_infinite_1.1s]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary via-orange-500 to-secondary bg-clip-text text-transparent">
            Burgers and Footlongs
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg transition-all hover:scale-[1.02] group hover:border-primary/50"
            >
              <div className="aspect-square w-full bg-gradient-to-b from-muted/20 to-muted/40 flex items-center justify-center p-4 relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-md group-hover:drop-shadow-2xl transition-all"
                  loading="lazy"
                  decoding="async"
                />
                {/* Sizzle glow effect on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="text-foreground text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-lg font-black">{item.price}</span>
                  <button className="add-button group-hover:bg-primary transition-colors" aria-label={`View ${item.name}`}>
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-muted-foreground text-xs italic text-center">
          Chicken Burgers are available in one of the following flavours: Chilli, Mayo or BBQ sauce. Beef Burgers come standard with Relish & Mayo.
        </p>
      </div>
    </section>
  );
};

export default BurgerCombos;
