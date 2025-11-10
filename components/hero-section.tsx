import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Detection</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Detect Crop Diseases <span className="text-primary">Instantly</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Protect your harvest with cutting-edge AI technology. Identify diseases in seconds and get treatment
              recommendations instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border bg-transparent">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">99% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Real-time Results</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-Driven-Crop-Disease-DetectionReducing-Losses-and-Boosting-Agricultural-Profits-SDFwTRpO4BOfsOXxVqABCd6RR1TMjm.png"
                alt="AI-Driven Crop Disease Detection"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
