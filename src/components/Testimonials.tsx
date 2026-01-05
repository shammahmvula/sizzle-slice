import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Best pizza in the city, hands down. The crust is perfectly crispy and the toppings are always fresh. Delivery was super fast too!",
    name: "Lerato M.",
    role: "Loyal Customer",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face"
  },
  {
    rating: 5,
    text: "The spicy wings are a game changer. I order the combo every Friday night. Highly recommend the Sizzle N Slice special!",
    name: "Thabo N.",
    role: "Wing Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    rating: 4.5,
    text: "Great atmosphere in the shop and even better food. The staff is friendly and the rewards program is actually worth it.",
    name: "Naledi V.",
    role: "Foodie",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-secondary mb-4">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="size-4 fill-current" />}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-10 max-w-[1200px] mx-auto">
      <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-10 text-center">
        What Our Fans Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.name}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <RatingStars rating={testimonial.rating} />
            <p className="text-muted-foreground italic mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <img 
                src={testimonial.avatar}
                alt={testimonial.name}
                className="size-10 rounded-full bg-muted object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="text-foreground font-bold text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
