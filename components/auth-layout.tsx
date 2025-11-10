import type React from "react"
import Link from "next/link"
import { Leaf } from "lucide-react"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CropGuard</span>
          </Link>
          {children}
        </div>
      </div>

      {/* Right side - Gradient */}
      <div className="hidden lg:flex lg:flex-1 bg-linear-to-br from-primary/20 via-accent/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="relative flex flex-col justify-center items-center w-full px-8">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold text-foreground mb-4">Protect Your Harvest</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of farmers using CropGuard to detect diseases and maximize crop yield.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">99% Accuracy</p>
                  <p className="text-sm text-muted-foreground">AI-powered disease detection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Real-time Results</p>
                  <p className="text-sm text-muted-foreground">Get instant recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Expert Support</p>
                  <p className="text-sm text-muted-foreground">24/7 agricultural guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
