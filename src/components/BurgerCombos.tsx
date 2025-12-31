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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg"
            >
              <div className="h-64 w-full bg-muted/30 flex items-center justify-center p-4">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-foreground text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-foreground text-2xl font-black">{item.price}</span>
                  <button className="add-button" aria-label={`View ${item.name}`}>
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-background/50 border border-border text-center">
          <p className="text-muted-foreground text-sm italic">
            Chicken Burgers are available in one of the following flavours: Chilli, Mayo or BBQ sauce. Beef Burgers come standard with Relish & Mayo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BurgerCombos;
