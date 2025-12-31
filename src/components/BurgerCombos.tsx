import burgerDouble from "@/assets/burger-double.jpg";
import burgerClassic from "@/assets/burger-classic.jpg";
import burgerCheese from "@/assets/burger-cheese.jpg";

const burgers = [
  {
    name: "Double Burger Combo",
    description: "Double Fillet/Patty, Double Cheese.",
    price: "R130",
    image: burgerDouble
  },
  {
    name: "Classic Burger Combo",
    description: "The original classic taste.",
    price: "R100",
    image: burgerClassic
  },
  {
    name: "Cheese Burger Combo",
    description: "Topped with melted cheese.",
    price: "R105",
    image: burgerCheese
  }
];

const BurgerCombos = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-card border-y border-border">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-8 text-center">
          Burger Combos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {burgers.map((burger) => (
            <article 
              key={burger.name}
              className="flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-lg"
            >
              <img 
                src={burger.image}
                alt={burger.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-foreground text-xl font-bold mb-2">{burger.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{burger.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-foreground text-2xl font-black">{burger.price}</span>
                  <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded hover:bg-primary/90 transition-colors">
                    Add
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
