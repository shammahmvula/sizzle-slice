import { Plus } from "lucide-react";
import burgersImage from "@/assets/burgers.png";
import footlongsImage from "@/assets/footlongs.png";

const items = [
  {
    name: "Double Burger Combo",
    description: "Double Fillet/Patty, Double Cheese.",
    price: "R130",
    image: burgersImage
  },
  {
    name: "Cheese Burger Combo",
    description: "Topped with melted cheese.",
    price: "R105",
    image: burgersImage
  },
  {
    name: "Mexicana Footlong",
    description: "Mince, Green Pepper, Onion, Garlic & Chilli Sauce.",
    price: "R69",
    image: footlongsImage
  },
  {
    name: "Russian Footlong",
    description: "Russian, Onion, Mushroom & Green Pepper.",
    price: "R60",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article 
              key={item.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg"
            >
              <img 
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-foreground text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-foreground text-xl font-black">{item.price}</span>
                  <button className="add-button" aria-label={`Add ${item.name} to cart`}>
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
