"use client"

import React, { useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"
const THEME_KEY = "site-theme"

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system")

  // Apply theme to <html> immediately
  const applyTheme = (next: Theme) => {
    const el = document.documentElement
    if (!el) return

    if (next === "dark") {
      el.classList.add("dark")
    } else if (next === "light") {
      el.classList.remove("dark")
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) el.classList.add("dark")
      else el.classList.remove("dark")
    }

    localStorage.setItem(THEME_KEY, next)
    setTheme(next)
  }

  // Load theme on mount
  useEffect(() => {
    const stored = (localStorage.getItem(THEME_KEY) as Theme) || "system"
    setTheme(stored)
    applyTheme(stored)
  }, [])

  // Listen to system preference if "system" selected
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const stored = (localStorage.getItem(THEME_KEY) as Theme) || "system"
      if (stored === "system") {
        applyTheme("system")
      }
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div className="inline-flex rounded-lg bg-muted/50 p-1">
      {(["light", "dark", "system"] as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => applyTheme(t)}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            theme === t
              ? "bg-background text-foreground font-medium shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  )
}
