import { ShoppingBag, Pizza, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 text-primary flex items-center justify-center">
            <Pizza className="size-7" />
          </div>
          <h1 className="text-foreground text-xl md:text-2xl font-black tracking-tight">
            Sizzle N Slice
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#rewards" className="nav-link">Rewards</a>
          <a href="#locations" className="nav-link">Locations</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <button className="hidden md:flex bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-lg items-center gap-2">
          <ShoppingBag className="size-4" />
          Order Now
        </button>

        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <a href="#menu" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#rewards" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Rewards</a>
            <a href="#locations" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Locations</a>
            <a href="#contact" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-sm font-bold px-5 py-3 rounded-lg flex items-center justify-center gap-2 w-full mt-2">
              <ShoppingBag className="size-4" />
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
