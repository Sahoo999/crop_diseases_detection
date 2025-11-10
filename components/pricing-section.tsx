import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small farms and hobbyists",
    features: [
      "Up to 10 disease analyses per month",
      "Basic disease library access",
      "Email support",
      "Single user account",
      "Standard accuracy detection",
      "7-day analysis history",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: 99,
    description: "Ideal for medium-sized agricultural operations",
    features: [
      "Unlimited disease analyses",
      "Full disease library with treatments",
      "Priority email & chat support",
      "Up to 5 user accounts",
      "Advanced accuracy detection",
      "90-day analysis history",
      "Custom crop profiles",
      "Real-time alerts & notifications",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale farming operations and agritech companies",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited user accounts",
      "API access for automation",
      "Unlimited history & analytics",
      "Custom ML model training",
      "24/7 phone & email support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Flexible Plans for Every Farm
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Choose the perfect plan for your agricultural needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 bg-linear-to-br from-primary/10 to-accent/10 border border-primary/30 glass"
                  : "bg-background border border-border glass"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-linear-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  {typeof plan.price === "number" ? (
                    <div>
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  )}
                </div>

                <Link href={plan.name === "Enterprise" ? "#contact" : "/signup"}>
                  <Button
                    size="lg"
                    className={`w-full mb-8 ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary-dark text-white"
                        : "border-border bg-transparent hover:bg-primary/5"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-sm text-muted-foreground">
            Need a custom plan?{" "}
            <Link href="#contact" className="text-primary hover:underline font-semibold">
              Contact our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
