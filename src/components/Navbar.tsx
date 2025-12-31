import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/sizzlenslice-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Sizzle N Slice" className="h-12 md:h-14 w-auto" fetchPriority="high" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/menu" className="nav-link">Menu</Link>
          {isHomePage ? (
            <>
              <a href="#rewards" className="nav-link">Rewards</a>
              <a href="#locations" className="nav-link">Locations</a>
              <a href="#contact" className="nav-link">Contact</a>
            </>
          ) : (
            <>
              <Link to="/#rewards" className="nav-link">Rewards</Link>
              <Link to="/#locations" className="nav-link">Locations</Link>
              <Link to="/#contact" className="nav-link">Contact</Link>
            </>
          )}
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
            <Link to="/menu" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
            {isHomePage ? (
              <>
                <a href="#rewards" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Rewards</a>
                <a href="#locations" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Locations</a>
                <a href="#contact" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </>
            ) : (
              <>
                <Link to="/#rewards" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Rewards</Link>
                <Link to="/#locations" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Locations</Link>
                <Link to="/#contact" className="nav-link text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </>
            )}
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
