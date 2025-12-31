import { useState } from "react";
import { Plus, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pizzaMexicana from "@/assets/pizza-mexicana.jpg";
import pizzaHawaiian from "@/assets/pizza-hawaiian.jpg";
import pizzaVegetarian from "@/assets/pizza-vegetarian.jpg";
import pizzaRegina from "@/assets/pizza-regina.jpg";
import burgerDouble from "@/assets/burger-double.jpg";
import burgerClassic from "@/assets/burger-classic.jpg";
import burgerCheese from "@/assets/burger-cheese.jpg";

type Category = "all" | "pizzas" | "burgers" | "sides" | "drinks" | "desserts";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  badge?: string;
  badgeColor?: string;
}

const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: "pizza-mexicana",
    name: "Mexicana",
    description: "Mince, green pepper, onion, garlic & chilli sauce.",
    price: "R125.00",
    image: pizzaMexicana,
    category: "pizzas",
    badge: "Best Seller",
    badgeColor: "bg-secondary text-secondary-foreground"
  },
  {
    id: "pizza-hawaiian",
    name: "Hawaiian",
    description: "Ham & Pineapple.",
    price: "R110.00",
    image: pizzaHawaiian,
    category: "pizzas"
  },
  {
    id: "pizza-vegetarian",
    name: "Vegetarian",
    description: "Mushrooms, green pepper, onion, olives & garlic.",
    price: "R110.00",
    image: pizzaVegetarian,
    category: "pizzas"
  },
  {
    id: "pizza-regina",
    name: "Regina",
    description: "Ham & mushroom.",
    price: "R110.00",
    image: pizzaRegina,
    category: "pizzas",
    badge: "New",
    badgeColor: "bg-primary text-primary-foreground"
  },
  {
    id: "pizza-pepperoni",
    name: "Pepperoni",
    description: "Classic pepperoni with mozzarella cheese.",
    price: "R120.00",
    image: pizzaMexicana,
    category: "pizzas"
  },
  {
    id: "pizza-bbq-chicken",
    name: "BBQ Chicken",
    description: "BBQ sauce, grilled chicken, onion & peppers.",
    price: "R130.00",
    image: pizzaHawaiian,
    category: "pizzas"
  },
  // Burgers
  {
    id: "burger-double",
    name: "Double Burger Combo",
    description: "Double Fillet/Patty, Double Cheese with chips & drink.",
    price: "R130.00",
    image: burgerDouble,
    category: "burgers",
    badge: "Popular",
    badgeColor: "bg-secondary text-secondary-foreground"
  },
  {
    id: "burger-classic",
    name: "Classic Burger Combo",
    description: "The original classic taste with chips & drink.",
    price: "R100.00",
    image: burgerClassic,
    category: "burgers"
  },
  {
    id: "burger-cheese",
    name: "Cheese Burger Combo",
    description: "Topped with melted cheese with chips & drink.",
    price: "R105.00",
    image: burgerCheese,
    category: "burgers"
  },
  {
    id: "burger-bacon",
    name: "Bacon Burger",
    description: "Crispy bacon with cheese and special sauce.",
    price: "R115.00",
    image: burgerDouble,
    category: "burgers"
  },
  // Sides
  {
    id: "side-chips",
    name: "Large Chips",
    description: "Golden crispy chips, perfectly seasoned.",
    price: "R35.00",
    image: burgerClassic,
    category: "sides"
  },
  {
    id: "side-wings",
    name: "Spicy Wings (6pc)",
    description: "Crispy wings tossed in spicy sauce.",
    price: "R65.00",
    image: burgerCheese,
    category: "sides",
    badge: "Hot",
    badgeColor: "bg-primary text-primary-foreground"
  },
  {
    id: "side-vetkoek",
    name: "Vetkoek",
    description: "Traditional South African fried dough with mince filling.",
    price: "R45.00",
    image: burgerDouble,
    category: "sides"
  },
  {
    id: "side-onion-rings",
    name: "Onion Rings",
    description: "Crispy battered onion rings.",
    price: "R40.00",
    image: burgerClassic,
    category: "sides"
  },
  // Drinks
  {
    id: "drink-coke",
    name: "Coca-Cola",
    description: "330ml can.",
    price: "R20.00",
    image: pizzaVegetarian,
    category: "drinks"
  },
  {
    id: "drink-fanta",
    name: "Fanta Orange",
    description: "330ml can.",
    price: "R20.00",
    image: pizzaRegina,
    category: "drinks"
  },
  {
    id: "drink-sprite",
    name: "Sprite",
    description: "330ml can.",
    price: "R20.00",
    image: pizzaHawaiian,
    category: "drinks"
  },
  {
    id: "drink-water",
    name: "Still Water",
    description: "500ml bottle.",
    price: "R15.00",
    image: pizzaMexicana,
    category: "drinks"
  },
  // Desserts
  {
    id: "dessert-brownie",
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream.",
    price: "R55.00",
    image: burgerCheese,
    category: "desserts",
    badge: "Sweet",
    badgeColor: "bg-secondary text-secondary-foreground"
  },
  {
    id: "dessert-icecream",
    name: "Ice Cream (2 Scoops)",
    description: "Choice of vanilla, chocolate, or strawberry.",
    price: "R35.00",
    image: burgerDouble,
    category: "desserts"
  },
  {
    id: "dessert-milkshake",
    name: "Thick Milkshake",
    description: "Creamy milkshake in various flavors.",
    price: "R45.00",
    image: burgerClassic,
    category: "desserts"
  }
];

const categories: { id: Category; label: string; icon: string }[] = [
  { id: "all", label: "All Items", icon: "🍽️" },
  { id: "pizzas", label: "Pizzas", icon: "🍕" },
  { id: "burgers", label: "Burgers", icon: "🍔" },
  { id: "sides", label: "Sides", icon: "🍟" },
  { id: "drinks", label: "Drinks", icon: "🥤" },
  { id: "desserts", label: "Desserts", icon: "🍰" }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const getCategoryCount = (category: Category) => {
    if (category === "all") return menuItems.length;
    return menuItems.filter(item => item.category === category).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-card border-b border-border py-12 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-foreground text-4xl md:text-5xl font-black mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From wood-fired pizzas to crispy wings and juicy burgers — everything's made fresh and served hot.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-[60px] z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <Filter className="size-4" />
            <span className="text-sm font-medium">Filter by category</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-4 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-2
                  ${activeCategory === category.id 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-card/80"
                  }
                `}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
                <span className={`
                  text-xs px-1.5 py-0.5 rounded-full
                  ${activeCategory === category.id 
                    ? "bg-primary-foreground/20" 
                    : "bg-muted text-muted-foreground"
                  }
                `}>
                  {getCategoryCount(category.id)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <section className="py-10 px-4 md:px-10 max-w-[1200px] mx-auto">
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">
            Showing <span className="text-foreground font-semibold">{filteredItems.length}</span> items
            {activeCategory !== "all" && (
              <span> in <span className="text-primary font-semibold">{categories.find(c => c.id === activeCategory)?.label}</span></span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group menu-card">
              <div className="relative w-full aspect-square overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="menu-card-image object-cover"
                  loading="lazy"
                />
                {item.badge && (
                  <div className={`absolute top-3 right-3 ${item.badgeColor} text-xs font-bold px-2 py-1 rounded`}>
                    {item.badge}
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 rounded capitalize">
                  {item.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-foreground text-xl font-bold mb-1">{item.name}</h4>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{item.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-foreground font-bold text-lg">{item.price}</span>
                  <button className="add-button" aria-label={`Add ${item.name} to cart`}>
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No items found in this category.</p>
          </div>
        )}
      </section>

      {/* Note Section */}
      <div className="px-4 md:px-10 pb-10">
        <div className="max-w-[1200px] mx-auto p-4 rounded-lg bg-card border border-border text-center">
          <p className="text-muted-foreground text-sm italic">
            Chicken Burgers are available in one of the following flavours: Chilli, Mayo or BBQ sauce. 
            Beef Burgers come standard with Relish & Mayo. Prices may vary. Ask about our daily specials!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
