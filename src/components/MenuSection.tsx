import { Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import pizzaMexicana from "@/assets/pizza-mexicana.png";
import pizzaHawaiian from "@/assets/pizza-hawaiian.png";
import pizzaVegetarian from "@/assets/pizza-vegetarian.png";
import pizzaMeatmaster from "@/assets/pizza-meatmaster.png";

const pizzas = [
  {
    name: "Mexicana",
    description: "Mince, green pepper, onion, garlic & chilli sauce.",
    price: "R125.00",
    image: pizzaMexicana,
    badge: "Best Seller",
    badgeColor: "bg-secondary text-secondary-foreground"
  },
  {
    name: "Hawaiian",
    description: "Ham & Pineapple.",
    price: "R110.00",
    image: pizzaHawaiian
  },
  {
    name: "Vegetarian",
    description: "Mushrooms, green pepper, onion, olives & garlic.",
    price: "R110.00",
    image: pizzaVegetarian
  },
  {
    name: "Meat Master",
    description: "Ham, bacon, pepperoni & Russian sausage.",
    price: "R135.00",
    image: pizzaMeatmaster,
    badge: "New",
    badgeColor: "bg-primary text-primary-foreground"
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 px-4 md:px-10 max-w-[1200px] mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h3 className="section-label mb-2">Our Menu</h3>
          <h2 className="section-title">Fan Favorites</h2>
        </div>
        <Link 
          to="/menu" 
          className="hidden md:flex items-center gap-1 text-secondary hover:text-secondary/80 font-medium transition-colors"
        >
          View Full Menu <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pizzas.map((pizza) => (
          <div key={pizza.name} className="group menu-card">
            <div className="relative w-full aspect-square overflow-hidden">
              <img 
                src={pizza.image}
                alt={`${pizza.name} pizza`}
                className="menu-card-image object-cover"
                loading="lazy"
              />
              {pizza.badge && (
                <div className={`absolute top-3 right-3 ${pizza.badgeColor} text-xs font-bold px-2 py-1 rounded`}>
                  {pizza.badge}
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="text-foreground text-xl font-bold mb-1">{pizza.name}</h4>
              <p className="text-muted-foreground text-xs mb-3">{pizza.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-foreground font-bold text-lg">{pizza.price}</span>
                <button className="add-button" aria-label={`Add ${pizza.name} to cart`}>
                  <Plus className="size-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden mt-6 text-center">
        <Link to="/menu" className="inline-flex items-center gap-1 text-secondary font-medium">
          View Full Menu <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
};

export default MenuSection;
