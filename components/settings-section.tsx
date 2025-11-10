"use client"

import type { ReactNode } from "react"

interface SettingsSectionProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function SettingsSection({
  title,
  description,
  children,
  className,
}: SettingsSectionProps) {
  return (
    <div className={`glass p-6 rounded-xl border border-border ${className ?? ""}`}>
      {title && <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>}
      {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
      {children}
    </div>
  )
}
