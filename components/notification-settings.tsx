"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    diseaseDetection: true,
    weatherUpdates: true,
    weeklyReport: true,
    marketPrices: false,
    communityTips: true,
  })

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-4">
      {[
        { key: "emailAlerts", label: "Email Alerts", desc: "Receive urgent alerts via email" },
        { key: "diseaseDetection", label: "Disease Detection", desc: "Get notified of detected diseases" },
        { key: "weatherUpdates", label: "Weather Updates", desc: "Daily weather forecasts" },
        { key: "weeklyReport", label: "Weekly Report", desc: "Comprehensive weekly summaries" },
        { key: "marketPrices", label: "Market Prices", desc: "Daily market price updates" },
        { key: "communityTips", label: "Community Tips", desc: "Tips from farming community" },
      ].map(({ key, label, desc }) => (
        <div key={key} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
          <div>
            <Label className="font-medium">{label}</Label>
            <p className="text-xs text-muted-foreground mt-1">{desc}</p>
          </div>
          <Switch
            checked={notifications[key as keyof typeof notifications]}
            onCheckedChange={() => handleToggle(key as keyof typeof notifications)}
          />
        </div>
      ))}
    </div>
  )
}
