import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="locations" className="py-16 px-4 md:px-10 max-w-[1200px] mx-auto border-t border-border">
      <div className="text-center mb-10">
        <h3 className="section-label mb-2">Visit Us</h3>
        <h2 className="section-title">Our Location</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 bg-card p-8 rounded-xl border border-border flex flex-col justify-center">
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="text-primary size-6 mt-1 shrink-0" />
            <div>
              <h4 className="text-foreground font-bold text-lg mb-1">Benoni</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Glynwood Centre,<br />
                Corner of Ampthill Ave & Harrison St,<br />
                Benoni, South Africa
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Phone className="text-primary size-6 shrink-0" />
            <div>
              <h4 className="text-foreground font-bold text-lg mb-1">Call Us</h4>
              <p className="text-muted-foreground text-sm">(011) 420 2388 / 0373</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="text-primary size-6 shrink-0" />
            <div>
              <h4 className="text-foreground font-bold text-lg mb-1">Opening Hours</h4>
              <p className="text-muted-foreground text-sm">Monday – Sunday 10am – 9pm</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-background rounded-xl overflow-hidden border border-border h-[400px] md:h-auto relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.362153573887!2d28.312983076135293!3d-26.184883463391963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953f60f6060c5b%3A0xc3034963f4568853!2sGlynwood%20Centre%2C%20Ampthill%20Ave%20%26%20Harrison%20St%2C%20Benoni%2C%201501%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1716383637402!5m2!1sen!2sus"
            className="grayscale-map w-full h-full min-h-[300px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sizzle N Slice Benoni Location"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
