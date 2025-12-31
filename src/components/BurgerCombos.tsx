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
    <section className="py-10 px-4 md:px-10 bg-card border-y border-border">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-8 text-center">
          Burgers and Footlongs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-2xl overflow-hidden border border-border shadow-xl"
            >
              <div className="aspect-square w-full bg-gradient-to-b from-muted/20 to-muted/40 flex items-center justify-center p-6">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-foreground text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-2xl font-black">{item.price}</span>
                  <button className="add-button" aria-label={`View ${item.name}`}>
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-muted-foreground text-sm italic text-center">
          Chicken Burgers are available in one of the following flavours: Chilli, Mayo or BBQ sauce. Beef Burgers come standard with Relish & Mayo.
        </p>
      </div>
    </section>
  );
};

export default BurgerCombos;
