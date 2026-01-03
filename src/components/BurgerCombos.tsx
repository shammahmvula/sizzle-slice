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
      {/* Left diagonal stripes */}
      <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 pointer-events-none hidden lg:block overflow-hidden">
        <div className="absolute inset-0 flex flex-col gap-4 -skew-x-12 translate-x-[-20%]">
          <div className="h-8 bg-primary/20 w-full" />
          <div className="h-4 bg-secondary/30 w-full" />
          <div className="h-12 bg-primary/10 w-full" />
          <div className="h-6 bg-secondary/20 w-full" />
          <div className="h-3 bg-primary/25 w-full" />
          <div className="h-10 bg-secondary/15 w-full" />
          <div className="h-5 bg-primary/20 w-full" />
          <div className="h-8 bg-secondary/25 w-full" />
          <div className="h-4 bg-primary/15 w-full" />
          <div className="h-12 bg-secondary/20 w-full" />
          <div className="h-6 bg-primary/30 w-full" />
          <div className="h-3 bg-secondary/20 w-full" />
        </div>
        {/* Glowing accent line */}
        <div className="absolute right-8 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 blur-sm" />
      </div>
      
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-transparent via-transparent to-card pointer-events-none hidden lg:block" />
      
      {/* Right diagonal stripes */}
      <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 pointer-events-none hidden lg:block overflow-hidden">
        <div className="absolute inset-0 flex flex-col gap-4 skew-x-12 translate-x-[20%]">
          <div className="h-6 bg-secondary/25 w-full" />
          <div className="h-10 bg-primary/15 w-full" />
          <div className="h-4 bg-secondary/20 w-full" />
          <div className="h-8 bg-primary/25 w-full" />
          <div className="h-3 bg-secondary/30 w-full" />
          <div className="h-12 bg-primary/10 w-full" />
          <div className="h-5 bg-secondary/20 w-full" />
          <div className="h-8 bg-primary/20 w-full" />
          <div className="h-6 bg-secondary/15 w-full" />
          <div className="h-4 bg-primary/25 w-full" />
          <div className="h-10 bg-secondary/20 w-full" />
          <div className="h-3 bg-primary/30 w-full" />
        </div>
        {/* Glowing accent line */}
        <div className="absolute left-8 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-60 blur-sm" />
      </div>
      
      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-transparent via-transparent to-card pointer-events-none hidden lg:block" />

      {/* Floating accent circles */}
      <div className="absolute left-16 top-1/3 size-6 rounded-full bg-primary/30 blur-md animate-pulse hidden lg:block" />
      <div className="absolute left-24 bottom-1/4 size-4 rounded-full bg-secondary/40 blur-sm animate-pulse hidden lg:block" style={{ animationDelay: '0.5s' }} />
      <div className="absolute right-16 top-1/4 size-5 rounded-full bg-secondary/30 blur-md animate-pulse hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute right-20 bottom-1/3 size-4 rounded-full bg-primary/40 blur-sm animate-pulse hidden lg:block" style={{ animationDelay: '0.7s' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-8 text-center">
          Burgers and Footlongs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {items.map((item) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all hover:scale-[1.02]"
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
