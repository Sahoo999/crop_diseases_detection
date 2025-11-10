import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
    gradient: "from-blue-50 to-blue-100",
    accent: "text-blue-600",
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
    gradient: "from-emerald-50 to-green-100",
    accent: "text-emerald-600",
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
    gradient: "from-purple-50 to-pink-100",
    accent: "text-purple-600",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screenbg-linear-to-br from-emerald-50 via-green-50 to-teal-100">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0bg-linear-to-br from-emerald-100/40 via-transparent to-green-100/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Simple,{" "}
            <span className="text-transparent bg-clip-textbg-linear-to-r from-emerald-600 to-green-600">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your farming operation. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xlbg-linear-to-br ${plan.gradient} p-8 border-2 transition-all duration-300 ${
                  plan.highlighted ? "border-emerald-300 md:scale-105 shadow-2xl" : "border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-linear-to-r from-emerald-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  {typeof plan.price === "number" ? (
                    <div>
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                  ) : (
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  )}
                </div>

                <Link href={plan.name === "Enterprise" ? "#contact" : "/signup"}>
                  <Button
                    size="lg"
                    className={`w-full mb-8 font-semibold ${
                      plan.highlighted
                        ? "bg-linear-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg"
                        : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.accent}`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8bg-linear-to-b from-green-100/40 to-emerald-100/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "Can I change plans?", a: "Yes, upgrade or downgrade anytime with instant effect." },
              { q: "Is there a contract?", a: "No contracts required. Cancel anytime with one click." },
              { q: "Do you offer discounts?", a: "Annual plans include 20% discount. Contact sales for bulk pricing." },
              { q: "What payment methods?", a: "We accept all major credit cards and bank transfers." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur p-6 rounded-lg border border-emerald-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
