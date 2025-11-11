"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function Navbar() {
  const pathname = usePathname() || "/"
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // subtle entrance animation trigger
    const t = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  const isActive = (href: string) => {
    // treat root and exact matches as active; allow section-style startsWith for some routes
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-border/70 shadow-sm transition-transform duration-450 ${
        loaded ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
      }`}
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md transform-gpu transition-transform duration-300 hover:-translate-y-0.5">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">CropGuard</span>
        </Link>

        <div className="hidden md:flex items-center gap-8" role="menubar">
          <Link
            href="/features"
            className={`nav-link text-muted-foreground ${isActive("/features") ? "text-foreground" : ""}`}
            aria-current={isActive("/features") ? "page" : undefined}
            role="menuitem"
          >
            Features
          </Link>

          <Link
            href="/how-it-works"
            className={`nav-link text-muted-foreground ${isActive("/how-it-works") ? "text-foreground" : ""}`}
            aria-current={isActive("/how-it-works") ? "page" : undefined}
            role="menuitem"
          >
            How It Works
          </Link>

          <Link
            href="/testimonials"
            className={`nav-link text-muted-foreground ${isActive("/testimonials") ? "text-foreground" : ""}`}
            aria-current={isActive("/testimonials") ? "page" : undefined}
            role="menuitem"
          >
            Testimonials
          </Link>

          <Link
            href="/pricing"
            className={`nav-link text-muted-foreground ${isActive("/pricing") ? "text-foreground" : ""}`}
            aria-current={isActive("/pricing") ? "page" : undefined}
            role="menuitem"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-foreground px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 shadow-sm transform-gpu hover:-translate-y-0.5 transition">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          padding-bottom: 6px;
          transition: color 180ms ease, transform 180ms ease;
          -webkit-font-smoothing: antialiased;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, rgba(16,185,129,1), rgba(34,197,94,1));
          transition: width 260ms ease;
          border-radius: 2px;
        }
        .nav-link:hover {
          transform: translateY(-2px);
          color: var(--foreground);
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* active link indicator: keep text exactly the same but show a subtle underline + color */
        .nav-link[aria-current="page"]::after {
          width: 100%;
        }
        .nav-link[aria-current="page"] {
          color: var(--foreground);
        }

        /* entrance animation tuning */
        nav {
          will-change: transform, opacity;
        }
      `}</style>
    </nav>
  )
}
