import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Zap, TrendingUp, Shield, Leaf, CheckCircle, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Zap,
    title: "Instant Detection",
    description: "Upload a photo and get AI-powered disease analysis results in seconds with 99% accuracy",
    color: "from-yellow-50 to-orange-50",
    accent: "text-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Treatment Plans",
    description: "Receive personalized, actionable treatment recommendations based on disease type and severity",
    color: "from-blue-50 to-cyan-50",
    accent: "text-cyan-600",
  },
  {
    icon: Shield,
    title: "Disease Library",
    description: "Access comprehensive information on 100+ crop diseases with prevention strategies",
    color: "from-green-50 to-emerald-50",
    accent: "text-emerald-600",
  },
  {
    icon: Leaf,
    title: "Crop History",
    description: "Track disease patterns and treatment results over time to improve future outcomes",
    color: "from-lime-50 to-green-50",
    accent: "text-lime-600",
  },
  {
    icon: CheckCircle,
    title: "Expert Support",
    description: "Connect with agricultural experts and specialists for additional guidance anytime",
    color: "from-pink-50 to-rose-50",
    accent: "text-rose-600",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Real-time alerts and notifications keep you informed about your crop health status",
    color: "from-indigo-50 to-purple-50",
    accent: "text-purple-600",
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-blue-100">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-br from-blue-100/40 via-transparent to-cyan-100/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Powerful{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed to help you protect your crops and maximize agricultural productivity
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`rounded-2xl bg-linear-to-br ${feature.color} p-8 hover:shadow-xl transition group border border-white/50`}
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-white/50 flex items-center justify-center mb-6 group-hover:scale-110 transition`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.accent}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-blue-50">
            Join thousands of farmers already using CropGuard to protect their harvests
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
