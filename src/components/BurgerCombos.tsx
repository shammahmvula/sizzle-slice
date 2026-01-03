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

// Retro checkered pattern
const CheckeredPattern = ({ side }: { side: 'left' | 'right' }) => (
  <div 
    className={`absolute ${side}-0 top-0 bottom-0 w-12 md:w-20 pointer-events-none hidden lg:block opacity-30`}
    style={{
      background: `repeating-conic-gradient(
        from 0deg,
        hsl(var(--foreground) / 0.15) 0deg 90deg,
        transparent 90deg 180deg
      )`,
      backgroundSize: '20px 20px',
    }}
  />
);

// Neon tube light
const NeonTube = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side === 'left' ? 'left-16 md:left-24' : 'right-16 md:right-24'} top-8 bottom-8 w-1 pointer-events-none hidden lg:block`}>
    {/* Outer glow */}
    <div className={`absolute inset-0 ${side === 'left' ? 'bg-primary' : 'bg-secondary'} blur-md opacity-60`} />
    {/* Inner tube */}
    <div className={`absolute inset-0 ${side === 'left' ? 'bg-primary' : 'bg-secondary'} rounded-full shadow-[0_0_10px_currentColor,0_0_20px_currentColor,0_0_40px_currentColor]`} />
    {/* Bright center */}
    <div className="absolute inset-x-0 top-0 bottom-0 mx-auto w-0.5 bg-white/80 rounded-full" />
    
    {/* End caps */}
    <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-2 rounded-t-full bg-zinc-400 border border-zinc-500`} />
    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-2 rounded-b-full bg-zinc-400 border border-zinc-500`} />
  </div>
);

// Retro starburst decoration
const Starburst = ({ className, color }: { className: string; color: string }) => (
  <div className={`absolute pointer-events-none hidden lg:block ${className}`}>
    <div className="relative w-8 h-8">
      {[0, 45, 90, 135].map((rotation) => (
        <div
          key={rotation}
          className={`absolute inset-0 ${color}`}
          style={{
            clipPath: 'polygon(50% 0%, 45% 45%, 0% 50%, 45% 55%, 50% 100%, 55% 55%, 100% 50%, 55% 45%)',
            transform: `rotate(${rotation}deg)`,
            opacity: rotation === 0 ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  </div>
);

// Chrome stripe accent
const ChromeStripe = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side === 'left' ? 'left-10 md:left-16' : 'right-10 md:right-16'} top-1/4 bottom-1/4 w-2 pointer-events-none hidden lg:block rounded-full overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400" />
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/50 to-transparent" />
  </div>
);

const BurgerCombos = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-card border-y-4 border-primary/30 relative overflow-hidden">
      {/* Retro gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background/50 to-card pointer-events-none" />
      
      {/* Checkered patterns */}
      <CheckeredPattern side="left" />
      <CheckeredPattern side="right" />
      
      {/* Neon tubes */}
      <NeonTube side="left" />
      <NeonTube side="right" />
      
      {/* Chrome stripes */}
      <ChromeStripe side="left" />
      <ChromeStripe side="right" />
      
      {/* Retro starbursts */}
      <Starburst className="left-20 md:left-32 top-12" color="bg-secondary/40" />
      <Starburst className="left-28 md:left-40 bottom-16" color="bg-primary/30" />
      <Starburst className="right-20 md:right-32 top-20" color="bg-primary/40" />
      <Starburst className="right-28 md:right-40 bottom-12" color="bg-secondary/30" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Retro-style title */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <h2 className="text-foreground text-2xl md:text-3xl font-bold px-6 py-2 relative">
              <span className="relative z-10">Burgers and Footlongs</span>
            </h2>
            {/* Retro underline */}
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] group relative border-2 border-zinc-700 hover:border-primary/50"
            >
              {/* Chrome top bar */}
              <div className="h-2 bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
              
              <div className="aspect-square w-full bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30 flex items-center justify-center p-4 relative overflow-hidden">
                {/* Retro circle accent */}
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-foreground/10 animate-[rotate-slow_30s_linear_infinite]" />
                
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-md group-hover:drop-shadow-2xl group-hover:scale-105 transition-all duration-300 relative z-10"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="p-4 flex flex-col border-t-2 border-zinc-700">
                <h3 className="text-foreground text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-lg font-black">{item.price}</span>
                  </div>
                  <button 
                    className="size-9 rounded-full bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 text-zinc-800 flex items-center justify-center transition-all hover:from-primary hover:via-primary hover:to-primary/80 hover:text-primary-foreground shadow-md" 
                    aria-label={`View ${item.name}`}
                  >
                    <Plus className="size-4" strokeWidth={3} />
                  </button>
                </div>
              </div>
              
              {/* Chrome bottom bar */}
              <div className="h-1.5 bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 relative">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
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
