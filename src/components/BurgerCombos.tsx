import { Plus } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
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

// Brick pattern component
const BrickWall = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side}-0 top-0 bottom-0 w-16 md:w-28 pointer-events-none hidden lg:block overflow-hidden`}>
    <div className="absolute inset-0 flex flex-col gap-[2px] py-2">
      {[...Array(20)].map((_, rowIndex) => (
        <div 
          key={rowIndex} 
          className="flex gap-[2px] h-4"
          style={{ marginLeft: rowIndex % 2 === 0 ? '0' : '-12px' }}
        >
          {[...Array(4)].map((_, brickIndex) => (
            <div
              key={brickIndex}
              className="h-full w-8 rounded-[1px]"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(${15 + Math.random() * 10}, ${60 + Math.random() * 15}%, ${25 + Math.random() * 10}%) 0%,
                  hsl(${10 + Math.random() * 10}, ${55 + Math.random() * 15}%, ${20 + Math.random() * 8}%) 100%
                )`,
                opacity: 0.7 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      ))}
    </div>
    {/* Mortar lines overlay */}
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `
        linear-gradient(to right, hsl(30, 20%, 30%) 1px, transparent 1px),
        linear-gradient(to bottom, hsl(30, 20%, 30%) 1px, transparent 1px)
      `,
      backgroundSize: '34px 18px',
    }} />
    {/* Warm glow from center */}
    <div className={`absolute inset-0 bg-gradient-to-${side === 'left' ? 'r' : 'l'} from-transparent via-orange-500/10 to-orange-600/30`} />
  </div>
);

// Oven arch glow
const OvenGlow = () => (
  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-32 pointer-events-none">
    {/* Main oven glow */}
    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-orange-600/20 via-orange-500/10 to-transparent rounded-t-[100%] blur-xl" />
    <div className="absolute inset-x-12 bottom-0 h-3/4 bg-gradient-to-t from-primary/15 via-orange-500/5 to-transparent rounded-t-[100%] blur-lg" />
  </div>
);

// Wood log decoration
const WoodLog = ({ side, top }: { side: 'left' | 'right'; top: string }) => (
  <div 
    className={`absolute ${side === 'left' ? 'left-20 md:left-32' : 'right-20 md:right-32'} pointer-events-none hidden lg:block`}
    style={{ top }}
  >
    <div className="relative">
      {/* Log body */}
      <div className="w-12 h-4 rounded-full bg-gradient-to-b from-amber-900/60 via-amber-800/50 to-amber-950/60 transform -rotate-12">
        {/* Wood grain lines */}
        <div className="absolute inset-x-1 top-1 h-0.5 bg-amber-950/30 rounded-full" />
        <div className="absolute inset-x-2 top-2 h-0.5 bg-amber-950/20 rounded-full" />
      </div>
      {/* Ember glow at end */}
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-orange-600/60 to-primary/40 blur-sm animate-pulse" />
    </div>
  </div>
);

// Smoke wisp
const SmokeWisp = ({ left, delay }: { left: string; delay: number }) => (
  <div 
    className="absolute bottom-1/3 w-8 h-32 pointer-events-none hidden lg:block"
    style={{ left }}
  >
    <div 
      className="absolute bottom-0 left-1/2 w-4 h-full animate-[smokeRise_6s_ease-out_infinite]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-foreground/10 via-foreground/5 to-transparent rounded-full blur-md" 
        style={{ 
          clipPath: 'path("M 8 128 Q 2 96 10 64 Q 18 32 6 0 L 10 0 Q 22 32 14 64 Q 6 96 12 128 Z")',
        }}
      />
    </div>
  </div>
);

// Floating ember
const FloatingEmber = ({ left, delay, size }: { left: string; delay: number; size: number }) => (
  <div 
    className="absolute bottom-1/4 rounded-full animate-[emberFloat_4s_ease-out_infinite] hidden lg:block"
    style={{ 
      left,
      width: size,
      height: size,
      background: 'radial-gradient(circle, hsl(25, 100%, 60%) 0%, hsl(0, 90%, 50%) 50%, transparent 70%)',
      boxShadow: '0 0 4px hsl(25, 100%, 50%), 0 0 8px hsl(0, 90%, 40%)',
      animationDelay: `${delay}s`,
    }}
  />
);

const BurgerCombos = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-gradient-to-b from-stone-900/50 via-card to-stone-900/50 border-y border-amber-900/30 relative overflow-hidden">
      {/* Brick walls on sides */}
      <BrickWall side="left" />
      <BrickWall side="right" />
      
      {/* Oven glow from bottom */}
      <OvenGlow />
      
      {/* Wood logs */}
      <WoodLog side="left" top="30%" />
      <WoodLog side="left" top="60%" />
      <WoodLog side="right" top="40%" />
      <WoodLog side="right" top="70%" />
      
      {/* Smoke wisps */}
      <SmokeWisp left="15%" delay={0} />
      <SmokeWisp left="85%" delay={2} />
      
      {/* Floating embers */}
      <FloatingEmber left="12%" delay={0} size={4} />
      <FloatingEmber left="18%" delay={1.5} size={3} />
      <FloatingEmber left="82%" delay={0.8} size={4} />
      <FloatingEmber left="88%" delay={2.2} size={3} />

      {/* Warm ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Rustic title */}
        <div className="text-center mb-8">
          <h2 className="text-foreground text-2xl md:text-3xl font-bold inline-block relative">
            <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Burgers and Footlongs</span>
            {/* Warm underline glow */}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-orange-500/30 blur-sm" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item) => (
            <article 
              key={item.name}
              className="flex flex-col bg-gradient-to-b from-stone-800/80 to-stone-900/80 rounded-xl overflow-hidden shadow-xl transition-all hover:scale-[1.02] group relative border border-amber-900/40 hover:border-orange-500/50 backdrop-blur-sm"
            >
              {/* Rustic wood grain top */}
              <div className="h-2 bg-gradient-to-r from-amber-900/60 via-amber-800/40 to-amber-900/60 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 12px)',
                }} />
              </div>
              
              <div className="aspect-square w-full bg-gradient-to-br from-stone-800/50 via-stone-900/30 to-stone-800/50 flex items-center justify-center p-4 relative overflow-hidden">
                {/* Warm oven glow behind food */}
                <div className="absolute inset-0 bg-gradient-radial from-orange-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <OptimizedImage
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_4px_20px_rgba(251,146,60,0.3)] group-hover:scale-105 transition-all duration-300 relative z-10"
                  aspectRatio="square"
                  objectFit="contain"
                />
              </div>
              
              <div className="p-4 flex flex-col border-t border-amber-900/30 bg-gradient-to-t from-stone-900/50 to-transparent">
                <h3 className="text-foreground text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-lg font-black">{item.price}</span>
                  <button 
                    className="size-9 rounded-full bg-gradient-to-br from-orange-600 to-primary text-primary-foreground flex items-center justify-center transition-all hover:from-orange-500 hover:to-primary/90 shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40" 
                    aria-label={`View ${item.name}`}
                  >
                    <Plus className="size-4" strokeWidth={2.5} />
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
