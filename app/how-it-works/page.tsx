import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Upload, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Upload Your Image",
    description: "Simply photograph your affected crop and upload it to our platform. We accept all image formats.",
    icon: Upload,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our advanced AI model analyzes the image and identifies the disease within seconds with detailed accuracy metrics.",
    icon: Zap,
    color: "from-orange-500 to-yellow-500",
  },
  {
    number: "03",
    title: "Get Results",
    description:
      "Receive comprehensive disease information, treatment recommendations, and prevention strategies instantly.",
    icon: CheckCircle,
    color: "from-emerald-500 to-green-500",
  },
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-purple-100">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-br from-purple-100/40 via-transparent to-pink-100/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple three-step process to detect and manage crop diseases
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className={`rounded-2xl bg-linear-to-br ${step.color} p-1 mb-6`}>
                  <div className="bg-white rounded-2xl p-8 h-full">
                    <div
                      className={`text-5xl font-bold bg-linear-to-r ${step.color} text-transparent bg-clip-text mb-4`}
                    >
                      {step.number}
                    </div>
                    <step.icon className={`w-12 h-12 mb-6 text-gray-700`} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/3 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-purple-100/40 to-pink-100/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Why Choose CropGuard?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Lightning Fast", desc: "Get results in under 30 seconds" },
              { title: "Highly Accurate", desc: "99% detection accuracy powered by ML" },
              { title: "Affordable", desc: "Plans starting from just $29/month" },
              { title: "Expert Backed", desc: "Developed with agricultural specialists" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 bg-white/80 backdrop-blur p-6 rounded-lg border border-purple-100">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              Try CropGuard Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
