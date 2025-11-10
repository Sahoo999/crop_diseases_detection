import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-12 backdrop-blur-xl border border-white/20 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Protect Your Harvest?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of farmers using CropGuard to maximize yield and reduce losses
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
