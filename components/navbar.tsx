"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">CropGuard</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition">
            How It Works
          </Link>
          <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition">
            Testimonials
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-foreground">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-primary hover:bg-primary-dark text-white">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
