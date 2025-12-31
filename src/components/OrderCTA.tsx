import { Phone } from "lucide-react";

const OrderCTA = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-dotted opacity-10" />
      
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <h2 className="text-primary-foreground text-3xl md:text-5xl font-black mb-4">
          Skip the queue and order online.
        </h2>
        <p className="text-primary-foreground/90 text-xl font-bold uppercase tracking-wider mb-8 font-display">
          Hot, Fresh, and Full of Flavour.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="tel:0114202388"
            className="bg-foreground text-primary text-lg font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 w-full md:w-auto justify-center"
          >
            <Phone className="size-6" />
            <span>Call Us</span>
          </a>
          
          <a 
            href="#"
            className="bg-[#06C167] text-secondary-foreground text-lg font-bold px-8 py-4 rounded-lg hover:bg-[#05a055] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 w-full md:w-auto justify-center"
          >
            <div className="h-8 w-8 flex items-center justify-center bg-secondary-foreground rounded-full p-1">
              <span className="text-[#06C167] font-bold text-xs">UE</span>
            </div>
            <span>Uber Eats</span>
          </a>
          
          <a 
            href="#"
            className="bg-[#6CC4EE] text-secondary-foreground text-lg font-bold px-8 py-4 rounded-lg hover:bg-[#5bb0d9] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 w-full md:w-auto justify-center"
          >
            <div className="h-8 w-8 flex items-center justify-center bg-secondary-foreground rounded-full p-1">
              <span className="text-[#6CC4EE] font-bold text-xs">MrD</span>
            </div>
            <span>Mr D Food</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderCTA;
