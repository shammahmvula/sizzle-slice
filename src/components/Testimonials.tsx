import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Best pizza in the city, hands down. The crust is perfectly crispy and the toppings are always fresh. Delivery was super fast too!",
    name: "Sarah M.",
    role: "Loyal Customer",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh8o7BD8B65uqajOQO0Z-3CxONz9rSgc8YAIDAkaUi3M0gwHRESj9U8NIAM4eVs_R5P2-NztTazRzoBG6oAw5aLArDZQ7Hv6OAM-FzAccnIJdoy6vnTr2Q3V4AWd4ym8p78c44cMeqNYlskn_PxhSBfyMTPuVvxKDlEygN3cAQ3sczvSkZ4j9r-y2J8698ug3pjc7IhjQtUElnWzKz6hCF4qyMKkuI5nkG6VtAHi81imoIGtd9N_CnpYNTbm1HJ_HvINSaMGZ0zQ8"
  },
  {
    rating: 5,
    text: "The spicy wings are a game changer. I order the combo every Friday night. Highly recommend the Sizzle N Slice special!",
    name: "Mike T.",
    role: "Wing Enthusiast",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPkYMkJtuOczeLIEH4RfT8-KOGoUi_7s-qpTGEWYLBSxw5FGrjnF_epylESYV-aYAnUEtAX3fvDGE8fUMXbYLUXxf0jptEZ1Wh9_3HkE2OxcleIGg3GlORUICSoPvN4xgQl-ghECsIJiU8wfAD1ky2sAmPO4xJr-OpFTM0bfFfcsnZgxFS0phKHFqigAEZmV0tV6D9NAuYqI0g-UNsNH9AbvR8L-EkE26UCCMiiOymqABT7_2R16xLFV4Z7HcYk-TfD5-sLf1ecPo"
  },
  {
    rating: 4.5,
    text: "Great atmosphere in the shop and even better food. The staff is friendly and the rewards program is actually worth it.",
    name: "Emily R.",
    role: "Foodie",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4WkbUR-oAuk5MmRYJ4boIgphkIdB4z8TXZbSqLMhmBBJQM0OJWSeBc99u2PfOcpOeMMJpkG4ad4FuxQvpuyZnMddeFUUzdh_1p4NVJMD_mJ8y2sTPpBtSw-0Ss2Vr9xdTn7lrMTBs4z7Ku4SY5--ynS9Vd8l8gm88HlPlD4ggZiOtkq3_dtngYeLAnvBR0E69un9B3xmQsXPDLr-MxmFkW0ndn7IXLkTWani5mnPsDsfjLB2LtqWnUYfmrq_w5gyFEZxIXgr5w0I"
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
              <div 
                className="size-10 rounded-full bg-muted bg-cover bg-center"
                style={{ backgroundImage: `url("${testimonial.avatar}")` }}
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
