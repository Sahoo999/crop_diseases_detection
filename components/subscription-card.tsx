"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SubscriptionCard() {
  return (
    <div className="glass p-6 rounded-xl border border-primary/30 bg-linear-to-br from-primary/10 to-accent/10">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Premium Plan</h3>
          <p className="text-muted-foreground">Active since Jan 15, 2024</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-primary">₹999</div>
          <p className="text-sm text-muted-foreground">/month</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          "Unlimited analyses",
          "Advanced AI detection",
          "Priority support",
          "Custom reports",
          "Weather integration",
        ].map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <Check className="text-primary" size={18} />
            <span className="text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 bg-transparent">
          Manage Billing
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary-dark text-white">Cancel Plan</Button>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">Next billing date: Feb 15, 2025</p>
    </div>
  )
}
