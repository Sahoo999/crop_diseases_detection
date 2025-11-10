// components/theme-script.tsx
"use client"

import { useEffect } from "react"

/**
 * Small client component that runs as soon as possible and ensures the
 * persisted theme (or system) is applied to document.documentElement
 * before the rest of the UI hydrates.
 *
 * Usage: import and render <ThemeScript /> in your root layout (app/layout.tsx)
 * right inside <body>.
 */

const THEME_KEY = "site-theme" // values: "light" | "dark" | "system"

export function ThemeScript() {
  useEffect(() => {
    const apply = (theme: string) => {
      const el = document.documentElement
      if (!el) return
      if (theme === "dark") {
        el.classList.add("dark")
      } else if (theme === "light") {
        el.classList.remove("dark")
      } else if (theme === "system") {
        // apply based on system preference
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        if (prefersDark) el.classList.add("dark")
        else el.classList.remove("dark")
      }
    }

    const saved = (() => {
      try {
        return localStorage.getItem(THEME_KEY)
      } catch {
        return null
      }
    })()

    if (saved) {
      apply(saved)
    } else {
      // default to system if nothing saved
      apply("system")
    }

    // If system, also listen to changes so future system toggles update the class
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)")
    const handleMq = (e: MediaQueryListEvent) => {
      const current = localStorage.getItem(THEME_KEY) || "system"
      if (current === "system") {
        if (e.matches) document.documentElement.classList.add("dark")
        else document.documentElement.classList.remove("dark")
      }
    }
    if (mq?.addEventListener) mq.addEventListener("change", handleMq)
    else if (mq?.addListener) mq.addListener(handleMq)

    return () => {
      if (mq?.removeEventListener) mq.removeEventListener("change", handleMq)
      else if (mq?.removeListener) mq.removeListener(handleMq)
    }
  }, [])

  return null
}
