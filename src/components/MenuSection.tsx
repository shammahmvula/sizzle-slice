import { Leaf, Flame } from "lucide-react";

type PizzaItem = {
  name: string;
  description: string;
  large: number | null;
  med: number | null;
  slice: number | null;
  isVegetarian?: boolean;
  isHot?: boolean;
};

type SimpleItem = {
  name: string;
  description?: string;
  price: number;
  isVegetarian?: boolean;
  isHot?: boolean;
};

type BurgerItem = {
  name: string;
  description?: string;
  beef: number;
  chicken: number;
};

const pizzasLeft: PizzaItem[] = [
  { name: "Bacon", description: "Bacon & Green Pepper", large: 105, med: 68, slice: 53 },
  { name: "BBQ Chicken", description: "Chicken & BBQ Sauce", large: 115, med: 75, slice: 60 },
  { name: "Bolognaise", description: "Bolognaise", large: 120, med: 78, slice: 63 },
  { name: "Hula", description: "Ham, Pepperoni & Pineapple", large: 130, med: 85, slice: 70 },
  { name: "Steak", description: "Steak Sautéed With Onion & Smoky Sauce", large: 135, med: 88, slice: 73 },
  { name: "Chicken Mayo", description: "Chicken & Mayo", large: 115, med: 75, slice: 60 },
  { name: "Seasons Supreme", description: "Ham, Mushroom, Olives & Green Pepper", large: 125, med: 81, slice: 66 },
  { name: "Hamlet", description: "Ham", large: 95, med: 62, slice: 47 },
  { name: "Hawaiian", description: "Ham & Pineapple", large: 110, med: 72, slice: 57 },
  { name: "Rustica", description: "Chicken & Mushroom", large: 125, med: 81, slice: 66 },
];

const pizzasRight: PizzaItem[] = [
  { name: "Meat Master", description: "Salami, Ham, Russian & Bacon", large: 130, med: 85, slice: null },
  { name: "Fullhouse", description: "Steak, Mince, Ham, Russian, Bacon, Mushroom & Smoky Sauce", large: 145, med: 98, slice: null },
  { name: "Margherita", description: "Mozzarella & Tomato Base", large: 85, med: 55, slice: 40, isVegetarian: true },
  { name: "Mexicana", description: "Mince, Green Pepper, Onion, Garlic & Chilli Sauce", large: 125, med: 81, slice: 66, isHot: true },
  { name: "Pepperoni", description: "Pepperoni", large: 105, med: 68, slice: 53 },
  { name: "Ultra", description: "Salami, Ham, Mushroom, Green Pepper, Onion & Garlic", large: 135, med: 88, slice: 73 },
  { name: "Regina", description: "Ham & Mushroom", large: 105, med: 68, slice: 53 },
  { name: "Spare Rib", description: "Deboned Marinated Spare Rib & Rib Sauce", large: 125, med: 81, slice: 66 },
  { name: "Veggie", description: "Mushroom, Olives, Green Pepper & Onion", large: 110, med: 72, slice: 57, isVegetarian: true },
];

const extras: PizzaItem[] = [
  { name: "Cheese", description: "", large: 20, med: 15, slice: 15 },
  { name: "Meats", description: "", large: 25, med: 20, slice: 20 },
  { name: "Vegetables, Fresh Chilli", description: "", large: 10, med: 5, slice: 5 },
  { name: "Garlic, Chilli Sauce", description: "", large: 10, med: 5, slice: 5 },
];

const garlicBread: { name: string; description: string; large: number | null; med: number; isVegetarian?: boolean }[] = [
  { name: "Garlic Pizza Bread Supreme", description: "Mozzarella, Origanum, Garlic & Olive Oil", large: 70, med: 49, isVegetarian: true },
  { name: "Garlic Pizza Bread", description: "Origanum, Garlic & Olive Oil", large: 59, med: 39, isVegetarian: true },
];

const dessertPizza: { name: string; description: string; large: number | null; med: number }[] = [
  { name: "Caramel Delight", description: "Milky Bar Dessert Topping With Kit Kat Mix, Caramel Treat & Crumbed Biscuits", large: null, med: 59 },
];

const bites: SimpleItem[] = [
  { name: "Wings (5)", price: 48 },
  { name: "Wings (8)", price: 70 },
  { name: "Regular Chips", price: 30 },
  { name: "Chicken Strips (5)", price: 40 },
  { name: "Chicken Strips (10)", price: 67 },
  { name: "Dips (70ml)", description: "Chilli, Mayo, BBQ", price: 10 },
];

const footlongs: SimpleItem[] = [
  { name: "Veggie", description: "Mushroom, Olives, Green Pepper & Onion", price: 60, isVegetarian: true },
  { name: "Mexicana", description: "Mince, Green Pepper, Onion, Garlic & Chilli Sauce", price: 69, isHot: true },
  { name: "Rustica", description: "Chicken & Mushroom", price: 69 },
  { name: "Russian", description: "Russian, Onion, Mushroom & Green Pepper", price: 60 },
  { name: "Ultra", description: "Salami, Ham, Mushroom, Green Pepper, Onion & Garlic", price: 75 },
];

const vetkoek: SimpleItem[] = [
  { name: "Chicken Mayo", description: "Chicken & Mayo", price: 29 },
  { name: "Mince", description: "Mince", price: 29 },
  { name: "Plain", price: 9 },
];

const burgers: BurgerItem[] = [
  { name: "Double Burger", description: "Double Fillet/Patty, Double Cheese", beef: 99, chicken: 82 },
  { name: "Classic Burger", beef: 60, chicken: 55 },
  { name: "Cheese Burger", beef: 65, chicken: 60 },
];

const burgerCombos: BurgerItem[] = [
  { name: "Double Burger Combo", description: "Double Fillet/Patty, Double Cheese", beef: 130, chicken: 113 },
  { name: "Classic Burger Combo", beef: 100, chicken: 95 },
  { name: "Cheese Burger Combo", beef: 105, chicken: 100 },
];

const CategoryHeader = ({ title }: { title: string }) => (
  <div className="bg-primary px-4 py-2 rounded-sm inline-block mb-4 skew-x-[-5deg]">
    <span className="block skew-x-[5deg] font-display font-black text-primary-foreground uppercase tracking-wide text-lg">
      {title}
    </span>
  </div>
);

const PriceHeaders = ({ columns }: { columns: string[] }) => (
  <div className="flex gap-2 justify-end mb-2">
    {columns.map((col) => (
      <span key={col} className="w-12 text-center text-xs font-bold text-secondary uppercase">
        {col}
      </span>
    ))}
  </div>
);

const PizzaRow = ({ item }: { item: PizzaItem }) => (
  <div className="flex items-start justify-between py-2 border-b border-border/30 last:border-0">
    <div className="flex-1 min-w-0 pr-2">
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-foreground text-sm">{item.name}</span>
        {item.isVegetarian && <Leaf className="size-3.5 text-green-500" />}
        {item.isHot && <Flame className="size-3.5 text-secondary" />}
      </div>
      {item.description && (
        <p className="text-muted-foreground text-xs mt-0.5 leading-tight">{item.description}</p>
      )}
    </div>
    <div className="flex gap-2 shrink-0">
      <span className="w-12 text-center font-bold text-foreground text-sm">
        {item.large ?? "-"}
      </span>
      <span className="w-12 text-center font-bold text-foreground text-sm">
        {item.med ?? "-"}
      </span>
      <span className="w-12 text-center font-bold text-foreground text-sm">
        {item.slice ?? "-"}
      </span>
    </div>
  </div>
);

const SimpleRow = ({ item }: { item: SimpleItem }) => (
  <div className="flex items-start justify-between py-2 border-b border-border/30 last:border-0">
    <div className="flex-1 min-w-0 pr-2">
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-foreground text-sm">{item.name}</span>
        {item.isVegetarian && <Leaf className="size-3.5 text-green-500" />}
        {item.isHot && <Flame className="size-3.5 text-secondary" />}
      </div>
      {item.description && (
        <p className="text-muted-foreground text-xs mt-0.5 leading-tight">{item.description}</p>
      )}
    </div>
    <span className="font-bold text-foreground text-sm shrink-0">{item.price}</span>
  </div>
);

const BurgerRow = ({ item }: { item: BurgerItem }) => (
  <div className="flex items-start justify-between py-2 border-b border-border/30 last:border-0">
    <div className="flex-1 min-w-0 pr-2">
      <span className="font-bold text-foreground text-sm">{item.name}</span>
      {item.description && (
        <p className="text-muted-foreground text-xs mt-0.5 leading-tight">{item.description}</p>
      )}
    </div>
    <div className="flex gap-2 shrink-0">
      <span className="w-14 text-center font-bold text-foreground text-sm">{item.beef}</span>
      <span className="w-14 text-center font-bold text-foreground text-sm">{item.chicken}</span>
    </div>
  </div>
);

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 px-4 md:px-10 max-w-[1200px] mx-auto">
      <div className="text-center mb-10">
        <h3 className="section-label mb-2">Our Menu</h3>
        <h2 className="section-title">Pizza & Bites</h2>
        <p className="text-muted-foreground mt-2 text-sm">Prices are in ZAR and subject to change without notice.</p>
      </div>

      {/* Pizza Section - Two Columns */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <div className="flex items-center justify-between mb-4">
            <CategoryHeader title="Pizza" />
            <PriceHeaders columns={["Large", "Med", "Slice"]} />
          </div>
          {pizzasLeft.map((pizza) => (
            <PizzaRow key={pizza.name} item={pizza} />
          ))}
        </div>

        {/* Right Column */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <div className="flex items-center justify-between mb-4">
            <CategoryHeader title="Pizza" />
            <PriceHeaders columns={["Large", "Med", "Slice"]} />
          </div>
          {pizzasRight.map((pizza) => (
            <PizzaRow key={pizza.name} item={pizza} />
          ))}
        </div>
      </div>

      {/* Extras & Sides Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Extras */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <div className="mb-4">
            <CategoryHeader title="Extras" />
            <PriceHeaders columns={["Large", "Med", "Slice"]} />
          </div>
          {extras.map((item) => (
            <PizzaRow key={item.name} item={item} />
          ))}
        </div>

        {/* Garlic Bread */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <CategoryHeader title="Garlic Bread" />
          <div className="flex gap-2 justify-end mb-2">
            <span className="w-12 text-center text-xs font-bold text-secondary uppercase">Large</span>
            <span className="w-12 text-center text-xs font-bold text-secondary uppercase">Med</span>
          </div>
          {garlicBread.map((item) => (
            <div key={item.name} className="flex items-start justify-between py-2 border-b border-border/30 last:border-0">
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-foreground text-sm">{item.name}</span>
                  {item.isVegetarian && <Leaf className="size-3.5 text-green-500" />}
                </div>
                <p className="text-muted-foreground text-xs mt-0.5 leading-tight">{item.description}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <span className="w-12 text-center font-bold text-foreground text-sm">{item.large ?? "-"}</span>
                <span className="w-12 text-center font-bold text-foreground text-sm">{item.med}</span>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <CategoryHeader title="Dessert Pizza" />
            {dessertPizza.map((item) => (
              <div key={item.name} className="flex items-start justify-between py-2">
                <div className="flex-1 min-w-0 pr-2">
                  <span className="font-bold text-foreground text-sm">{item.name}</span>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-tight">{item.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <span className="w-12 text-center font-bold text-foreground text-sm">{item.large ?? "-"}</span>
                  <span className="w-12 text-center font-bold text-foreground text-sm">{item.med}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bites */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <CategoryHeader title="Bites" />
          {bites.map((item) => (
            <SimpleRow key={item.name} item={item} />
          ))}
        </div>

        {/* Footlongs */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <CategoryHeader title="Footlong" />
          <p className="text-muted-foreground text-xs mb-3 -mt-2">Our secret tomato base, melted cheese and garlic butter finish</p>
          {footlongs.map((item) => (
            <SimpleRow key={item.name} item={item} />
          ))}
        </div>
      </div>

      {/* Vetkoek & Burgers Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Vetkoek */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <CategoryHeader title="Vetkoek" />
          {vetkoek.map((item) => (
            <SimpleRow key={item.name} item={item} />
          ))}
        </div>

        {/* Burgers */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <CategoryHeader title="Burgers" />
          <div className="flex gap-2 justify-end mb-2">
            <span className="w-14 text-center text-xs font-bold text-secondary uppercase">Beef</span>
            <span className="w-14 text-center text-xs font-bold text-secondary uppercase">Chicken</span>
          </div>
          {burgers.map((item) => (
            <BurgerRow key={item.name} item={item} />
          ))}
        </div>

        {/* Burger Combos */}
        <div className="bg-card/50 rounded-lg p-5 border border-border">
          <CategoryHeader title="Burger Combos" />
          <div className="flex gap-2 justify-end mb-2">
            <span className="w-14 text-center text-xs font-bold text-secondary uppercase">Beef</span>
            <span className="w-14 text-center text-xs font-bold text-secondary uppercase">Chicken</span>
          </div>
          {burgerCombos.map((item) => (
            <BurgerRow key={item.name} item={item} />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Leaf className="size-4 text-green-500" />
          <span>Vegetarian</span>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="size-4 text-secondary" />
          <span>Hot</span>
        </div>
      </div>

      <p className="text-center text-muted-foreground text-xs mt-6 max-w-2xl mx-auto">
        All Pizzas and Footlongs come standard with tomato base and mozzarella cheese unless otherwise indicated and our sauces and cooked meat contain a hint of garlic.
      </p>
    </section>
  );
};

export default MenuSection;
