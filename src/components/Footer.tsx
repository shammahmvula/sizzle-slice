import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/sizzlenslice-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted border-t border-border pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="mb-6">
            <img src={logo} alt="Sizzle N Slice" className="h-16 w-auto" loading="lazy" decoding="async" />
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            At Sizzle 'n Slice, we believe great food should be simple, satisfying, and made with heart. Our kitchen is all about flavour that hits the spot - every time.
          </p>
          <div className="flex gap-4">
            <a href="#" className="social-link">
              <span className="font-bold text-xs">FB</span>
            </a>
            <a href="#" className="social-link">
              <span className="font-bold text-xs">IG</span>
            </a>
            <a href="#" className="social-link">
              <span className="font-bold text-xs">X</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-foreground font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="footer-link">Our Menu</a></li>
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Gift Cards</a></li>
            <li><a href="#" className="footer-link">Careers</a></li>
            <li><a href="#" className="footer-link">Franchise</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-bold mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary size-4 mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm">
                Glynwood Centre, Corner of Ampthill Ave & Harrison St,<br />Benoni, South Africa
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary size-4 shrink-0" />
              <span className="text-muted-foreground text-sm">(011) 420 2388 / 0373</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary size-4 shrink-0" />
              <span className="text-muted-foreground text-sm">info@sizzlenslice.co.za</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-bold mb-6">Opening Hours</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex justify-between text-sm">
              <span className="text-muted-foreground">Mon - Sun</span>
              <span className="text-foreground font-medium">10:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-accent pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">© 2023 Sizzle N Slice. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
