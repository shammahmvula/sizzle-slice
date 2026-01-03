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

const BurgerCombos = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-card border-y border-border relative overflow-hidden">
      {/* Neon glow background accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-secondary/20 blur-[100px] rounded-full pointer-events-none hidden lg:block" />

      {/* Left side - Steam/smoke wisps */}
      <div className="absolute left-4 md:left-12 top-0 bottom-0 w-24 pointer-events-none hidden lg:flex flex-col justify-center gap-6">
        {/* Steam wisp 1 */}
        <div className="relative h-32 w-full">
          <div 
            className="absolute bottom-0 left-1/2 w-1 bg-gradient-to-t from-foreground/20 via-foreground/10 to-transparent rounded-full animate-[steam_3s_ease-in-out_infinite]"
            style={{ height: '100%', filter: 'blur(4px)' }}
          />
          <div 
            className="absolute bottom-0 left-1/3 w-0.5 bg-gradient-to-t from-foreground/15 via-foreground/5 to-transparent rounded-full animate-[steam_4s_ease-in-out_infinite_0.5s]"
            style={{ height: '80%', filter: 'blur(3px)' }}
          />
        </div>
        
        {/* Neon accent line */}
        <div className="h-24 w-0.5 mx-auto bg-gradient-to-b from-primary via-primary to-primary/0 shadow-[0_0_10px_hsl(var(--primary)),0_0_20px_hsl(var(--primary)),0_0_30px_hsl(var(--primary))]" />
        
        {/* Steam wisp 2 */}
        <div className="relative h-28 w-full">
          <div 
            className="absolute bottom-0 right-1/3 w-1 bg-gradient-to-t from-foreground/20 via-foreground/10 to-transparent rounded-full animate-[steam_3.5s_ease-in-out_infinite_1s]"
            style={{ height: '90%', filter: 'blur(4px)' }}
          />
        </div>
      </div>
      
      {/* Right side - Steam/smoke wisps */}
      <div className="absolute right-4 md:right-12 top-0 bottom-0 w-24 pointer-events-none hidden lg:flex flex-col justify-center gap-6">
        {/* Steam wisp 1 */}
        <div className="relative h-28 w-full">
          <div 
            className="absolute bottom-0 right-1/2 w-1 bg-gradient-to-t from-foreground/20 via-foreground/10 to-transparent rounded-full animate-[steam_3.2s_ease-in-out_infinite_0.3s]"
            style={{ height: '95%', filter: 'blur(4px)' }}
          />
        </div>
        
        {/* Neon accent line */}
        <div className="h-24 w-0.5 mx-auto bg-gradient-to-b from-secondary via-secondary to-secondary/0 shadow-[0_0_10px_hsl(var(--secondary)),0_0_20px_hsl(var(--secondary)),0_0_30px_hsl(var(--secondary))]" />
        
        {/* Steam wisp 2 */}
        <div className="relative h-32 w-full">
          <div 
            className="absolute bottom-0 left-1/2 w-0.5 bg-gradient-to-t from-foreground/15 via-foreground/5 to-transparent rounded-full animate-[steam_4.2s_ease-in-out_infinite_0.8s]"
            style={{ height: '85%', filter: 'blur(3px)' }}
          />
          <div 
            className="absolute bottom-0 right-1/3 w-1 bg-gradient-to-t from-foreground/20 via-foreground/10 to-transparent rounded-full animate-[steam_3s_ease-in-out_infinite_1.2s]"
            style={{ height: '100%', filter: 'blur(4px)' }}
          />
        </div>
      </div>

      {/* Neon corner accents */}
      <div className="absolute left-8 top-8 w-16 h-16 border-l-2 border-t-2 border-primary/60 rounded-tl-lg shadow-[0_0_15px_hsl(var(--primary)/0.5)] hidden lg:block" />
      <div className="absolute right-8 top-8 w-16 h-16 border-r-2 border-t-2 border-secondary/60 rounded-tr-lg shadow-[0_0_15px_hsl(var(--secondary)/0.5)] hidden lg:block" />
      <div className="absolute left-8 bottom-8 w-16 h-16 border-l-2 border-b-2 border-secondary/60 rounded-bl-lg shadow-[0_0_15px_hsl(var(--secondary)/0.5)] hidden lg:block" />
      <div className="absolute right-8 bottom-8 w-16 h-16 border-r-2 border-b-2 border-primary/60 rounded-br-lg shadow-[0_0_15px_hsl(var(--primary)/0.5)] hidden lg:block" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-8 text-center drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)]">
          Burgers and Footlongs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg transition-all hover:scale-[1.02] group"
              style={{
                boxShadow: index === 0 
                  ? '0 4px 20px hsl(var(--primary) / 0.15)' 
                  : '0 4px 20px hsl(var(--secondary) / 0.15)'
              }}
            >
              <div className="aspect-square w-full bg-gradient-to-b from-muted/20 to-muted/40 flex items-center justify-center p-4 relative">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-md group-hover:drop-shadow-2xl transition-all"
                  loading="lazy"
                  decoding="async"
                />
                {/* Neon glow on hover */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                    index === 0 
                      ? 'bg-gradient-to-t from-primary/10 to-transparent' 
                      : 'bg-gradient-to-t from-secondary/10 to-transparent'
                  }`} 
                />
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="text-foreground text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-lg font-black">{item.price}</span>
                  <button className="add-button" aria-label={`View ${item.name}`}>
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
