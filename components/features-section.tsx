import { Zap, TrendingUp, Shield, Leaf, CheckCircle, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Detection",
    description: "Upload a photo and get results in seconds with AI-powered analysis",
  },
  {
    icon: TrendingUp,
    title: "Treatment Plans",
    description: "Get personalized treatment recommendations based on disease type",
  },
  {
    icon: Shield,
    title: "Disease Library",
    description: "Access comprehensive information on 100+ crop diseases",
  },
  {
    icon: Leaf,
    title: "Crop History",
    description: "Track disease patterns and treatment results over time",
  },
  {
    icon: CheckCircle,
    title: "Expert Support",
    description: "Connect with agricultural experts for additional guidance",
  },
  {
    icon: ArrowRight,
    title: "Prevention Tips",
    description: "Learn best practices to prevent disease outbreaks",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to protect your crops and maximize yield
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition group"
            >
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
