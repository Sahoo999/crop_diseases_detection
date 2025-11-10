const testimonials = [
  {
    quote: "CropGuard has transformed how I manage my farm. Early disease detection has saved me thousands in losses.",
    author: "John Martinez",
    role: "Corn & Wheat Farmer",
  },
  {
    quote: "The accuracy is incredible. I can now act quickly before diseases spread to other crops.",
    author: "Sarah Thompson",
    role: "Vegetable Farmer",
  },
  {
    quote: "Best investment for my farm. The app is intuitive and the support team is always helpful.",
    author: "Mike Chen",
    role: "Orchard Owner",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Trusted by Farmers</h2>
          <p className="text-lg text-muted-foreground">See what our users are saying</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-muted-foreground mb-6 text-balance">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent" />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
