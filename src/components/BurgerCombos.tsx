import { Plus, Flame, Beef, Sandwich } from "lucide-react";
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
      {/* Left decorative elements */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none hidden lg:flex flex-col justify-center items-center gap-8 opacity-20">
        <Beef className="size-16 text-primary rotate-[-15deg]" />
        <Flame className="size-12 text-secondary rotate-[10deg]" />
        <Sandwich className="size-14 text-primary rotate-[-8deg]" />
      </div>
      
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-card via-card/80 to-transparent pointer-events-none hidden lg:block" />
      
      {/* Right decorative elements */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none hidden lg:flex flex-col justify-center items-center gap-8 opacity-20">
        <Sandwich className="size-14 text-secondary rotate-[15deg]" />
        <Beef className="size-16 text-primary rotate-[-10deg]" />
        <Flame className="size-12 text-secondary rotate-[8deg]" />
      </div>
      
      {/* Right gradient fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-card via-card/80 to-transparent pointer-events-none hidden lg:block" />

      {/* Subtle dotted pattern overlay */}
      <div className="absolute inset-0 bg-dotted opacity-30 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-8 text-center">
          Burgers and Footlongs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-shadow"
            >
              <div className="aspect-square w-full bg-gradient-to-b from-muted/20 to-muted/40 flex items-center justify-center p-4">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-md"
                  loading="lazy"
                  decoding="async"
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
