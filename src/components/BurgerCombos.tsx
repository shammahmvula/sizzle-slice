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

// Cheese drip SVG component
const CheeseDrip = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side}-0 top-0 w-16 md:w-24 h-full pointer-events-none hidden lg:block`}>
    <svg 
      viewBox="0 0 80 400" 
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`cheese-gradient-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(45, 97%, 53%)" stopOpacity="0.9" />
          <stop offset="50%" stopColor="hsl(40, 95%, 45%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(35, 90%, 40%)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Cheese drips */}
      <path 
        d={side === 'left' 
          ? "M0,0 L0,60 Q10,70 8,100 Q6,130 0,140 L0,180 Q15,195 12,240 Q8,280 0,290 L0,340 Q8,355 5,380 Q2,395 0,400 L0,0 Z"
          : "M80,0 L80,80 Q70,95 72,130 Q75,165 80,175 L80,220 Q65,235 68,280 Q72,320 80,330 L80,380 Q72,390 75,400 L80,400 L80,0 Z"
        }
        fill={`url(#cheese-gradient-${side})`}
        className="animate-[cheeseDrip_8s_ease-in-out_infinite]"
      />
      {/* Secondary drip */}
      <ellipse 
        cx={side === 'left' ? "5" : "75"} 
        cy="140" 
        rx="8" 
        ry="12"
        fill="hsl(45, 97%, 53%)"
        opacity="0.6"
        className="animate-[cheeseDrip_6s_ease-in-out_infinite_1s]"
      />
      <ellipse 
        cx={side === 'left' ? "8" : "72"} 
        cy="290" 
        rx="6" 
        ry="10"
        fill="hsl(40, 95%, 50%)"
        opacity="0.5"
        className="animate-[cheeseDrip_7s_ease-in-out_infinite_2s]"
      />
    </svg>
  </div>
);

// Grill marks component
const GrillMarks = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side === 'left' ? 'left-20 md:left-28' : 'right-20 md:right-28'} top-0 bottom-0 w-20 pointer-events-none hidden lg:flex flex-col justify-center gap-6`}>
    {[...Array(6)].map((_, i) => (
      <div 
        key={i}
        className="h-1.5 w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent rounded-full transform -skew-y-12"
        style={{ 
          opacity: 0.15 + (i % 3) * 0.1,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div>
);

const BurgerCombos = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-card border-y border-border relative overflow-hidden">
      {/* Warm glow at top suggesting oven heat */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      {/* Cheese drips on sides */}
      <CheeseDrip side="left" />
      <CheeseDrip side="right" />
      
      {/* Grill marks */}
      <GrillMarks side="left" />
      <GrillMarks side="right" />
      
      {/* Sizzle dots - like oil splattering */}
      <div className="absolute left-16 top-1/4 size-2 rounded-full bg-secondary/40 animate-[sizzle_2s_ease-out_infinite] hidden lg:block" />
      <div className="absolute left-24 top-1/2 size-1.5 rounded-full bg-primary/30 animate-[sizzle_2.5s_ease-out_infinite_0.5s] hidden lg:block" />
      <div className="absolute left-12 bottom-1/3 size-2 rounded-full bg-secondary/35 animate-[sizzle_2.2s_ease-out_infinite_1s] hidden lg:block" />
      
      <div className="absolute right-16 top-1/3 size-1.5 rounded-full bg-primary/35 animate-[sizzle_2.3s_ease-out_infinite_0.3s] hidden lg:block" />
      <div className="absolute right-20 top-2/3 size-2 rounded-full bg-secondary/40 animate-[sizzle_2s_ease-out_infinite_0.8s] hidden lg:block" />
      <div className="absolute right-14 bottom-1/4 size-1.5 rounded-full bg-primary/30 animate-[sizzle_2.4s_ease-out_infinite_1.2s] hidden lg:block" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-8 text-center">
          Burgers and Footlongs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg transition-all hover:scale-[1.02] group relative"
            >
              {/* Cheese corner accent */}
              <div 
                className={`absolute ${index === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-12 h-12 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
              >
                <div className={`absolute ${index === 0 ? 'right-0' : 'left-0'} top-0 w-8 h-1 bg-gradient-to-${index === 0 ? 'l' : 'r'} from-secondary to-secondary/0 rounded-full`} />
                <div className={`absolute ${index === 0 ? 'right-0' : 'left-0'} top-0 w-1 h-8 bg-gradient-to-b from-secondary to-secondary/0 rounded-full`} />
              </div>
              
              <div className="aspect-square w-full bg-gradient-to-b from-muted/20 to-muted/40 flex items-center justify-center p-4 relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-md group-hover:drop-shadow-2xl transition-all"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 flex flex-col border-t-2 border-secondary/30">
                <h3 className="text-foreground text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-lg font-black">{item.price}</span>
                  <button className="add-button group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors" aria-label={`View ${item.name}`}>
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
