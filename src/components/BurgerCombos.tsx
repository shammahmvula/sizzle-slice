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

// Ingredient layer stripes - burger inspired
const IngredientLayers = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side}-0 top-0 bottom-0 w-8 md:w-12 pointer-events-none hidden lg:flex flex-col justify-center`}>
    {/* Bun top */}
    <div className="h-8 bg-gradient-to-b from-amber-700/40 to-amber-600/30 rounded-r-full" style={{ marginLeft: side === 'left' ? 0 : 'auto', marginRight: side === 'right' ? 0 : 'auto' }} />
    {/* Lettuce */}
    <div className="h-3 bg-gradient-to-b from-green-600/40 to-green-500/30 -mt-1" />
    {/* Tomato */}
    <div className="h-4 bg-gradient-to-b from-red-600/50 to-red-500/40" />
    {/* Cheese */}
    <div className="h-3 bg-gradient-to-b from-yellow-500/60 to-yellow-400/50 animate-[melt_3s_ease-in-out_infinite]" />
    {/* Patty */}
    <div className="h-10 bg-gradient-to-b from-stone-800/50 to-stone-700/40" />
    {/* Cheese */}
    <div className="h-3 bg-gradient-to-b from-yellow-400/50 to-yellow-500/60 animate-[melt_3s_ease-in-out_infinite_0.5s]" />
    {/* Patty */}
    <div className="h-10 bg-gradient-to-b from-stone-700/40 to-stone-800/50" />
    {/* Tomato */}
    <div className="h-4 bg-gradient-to-b from-red-500/40 to-red-600/50" />
    {/* Lettuce */}
    <div className="h-3 bg-gradient-to-b from-green-500/30 to-green-600/40" />
    {/* Bun bottom */}
    <div className="h-8 bg-gradient-to-t from-amber-700/40 to-amber-600/30 rounded-r-full -mt-1" style={{ marginLeft: side === 'left' ? 0 : 'auto', marginRight: side === 'right' ? 0 : 'auto' }} />
  </div>
);

// Pizza slice pattern
const PizzaSlices = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute ${side === 'left' ? 'left-14 md:left-20' : 'right-14 md:right-20'} top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block`}>
    <div className="relative w-24 h-24">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 border-l-2 border-t-2 border-primary/20 origin-bottom-right"
          style={{
            transform: `rotate(${i * 30 + (side === 'left' ? 0 : 180)}deg)`,
            clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
          }}
        />
      ))}
      {/* Pepperoni dots */}
      <div className="absolute top-4 left-8 size-2 rounded-full bg-primary/30 animate-pulse" />
      <div className="absolute top-10 left-4 size-1.5 rounded-full bg-primary/25 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-6 left-12 size-1.5 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  </div>
);

const BurgerCombos = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-card border-y border-border relative overflow-hidden">
      {/* Central warm radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Ingredient layers on sides */}
      <IngredientLayers side="left" />
      <IngredientLayers side="right" />
      
      {/* Pizza slice patterns */}
      <PizzaSlices side="left" />
      <PizzaSlices side="right" />
      
      {/* Floating seasoning particles */}
      <div className="absolute left-28 top-1/4 size-1 rounded-full bg-green-600/40 animate-[float_4s_ease-in-out_infinite] hidden lg:block" />
      <div className="absolute left-32 top-1/2 size-0.5 rounded-full bg-red-500/50 animate-[float_3s_ease-in-out_infinite_0.5s] hidden lg:block" />
      <div className="absolute left-24 bottom-1/3 size-1 rounded-full bg-secondary/40 animate-[float_3.5s_ease-in-out_infinite_1s] hidden lg:block" />
      
      <div className="absolute right-28 top-1/3 size-0.5 rounded-full bg-green-500/40 animate-[float_3.5s_ease-in-out_infinite_0.3s] hidden lg:block" />
      <div className="absolute right-32 top-2/3 size-1 rounded-full bg-primary/30 animate-[float_4s_ease-in-out_infinite_0.8s] hidden lg:block" />
      <div className="absolute right-24 bottom-1/4 size-0.5 rounded-full bg-secondary/50 animate-[float_3s_ease-in-out_infinite_1.2s] hidden lg:block" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-primary/50 rounded-full" />
          <h2 className="text-foreground text-2xl md:text-3xl font-bold text-center">
            Burgers and Footlongs
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-primary/50 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg transition-all hover:scale-[1.02] group relative"
            >
              {/* Ingredient-inspired top border */}
              <div className="absolute top-0 inset-x-0 h-1 flex">
                <div className="flex-1 bg-amber-600/60" />
                <div className="flex-1 bg-green-600/60" />
                <div className="flex-1 bg-primary/60" />
                <div className="flex-1 bg-secondary/60" />
                <div className="flex-1 bg-amber-600/60" />
              </div>
              
              <div className="aspect-square w-full bg-gradient-to-b from-muted/20 to-muted/40 flex items-center justify-center p-4 relative overflow-hidden mt-1">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-md group-hover:drop-shadow-2xl group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 flex flex-col bg-gradient-to-t from-background to-transparent">
                <h3 className="text-foreground text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-lg font-black">{item.price}</span>
                  <button 
                    className="size-8 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center transition-transform hover:scale-110" 
                    aria-label={`View ${item.name}`}
                  >
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
