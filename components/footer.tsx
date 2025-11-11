"use client";

export function Footer() {
  return (
    <footer className="group relative w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Animated gradient shimmer line at the top */}
      <div className="absolute top-0 left-0 w-full h-0.5 top-gradient" />

      {/* Radial + linear overlay for subtle depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.04),_transparent_70%)], dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.06),_transparent_70%)]," />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/6 to-transparent dark:via-emerald-900/6" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-10 transition-transform duration-400 ease-out transform group-hover:-translate-y-0.5 group-hover:opacity-100 opacity-98">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 text-center sm:text-left">
          {/* Brand */}
          <div className="transition-transform duration-300 group-hover:translate-y-0.5">
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 drop-shadow-[0_1px_2px_rgba(16,185,129,0.18)]">
              FarmGuard
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Empowering smarter farming with AI-driven insights.
            </p>
          </div>

          {/* Links (underline animation on hover) */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-gray-700 dark:text-gray-300 text-sm font-medium">
            <a href="/about" className="relative link-underline">
              About
            </a>
            <a href="/pricing" className="relative link-underline">
              Pricing
            </a>
            <a href="/contact" className="relative link-underline">
              Contact
            </a>
            <a href="/privacy" className="relative link-underline">
              Privacy
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100 dark:border-gray-800" />

        {/* Bottom Note */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 dark:text-gray-400 text-sm transition-transform duration-300 group-hover:translate-y-px">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">FarmGuard</span>. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 italic text-gray-500 dark:text-gray-500">
            Made with <span className="text-red-500">♥</span> for farmers
          </p>
        </div>
      </div>

      {/* Inline styles for shimmer and link underline */}
      <style jsx>{`
        .top-gradient {
          background: linear-gradient(90deg, rgba(16,185,129,0.0) 0%, rgba(16,185,129,0.85) 25%, rgba(16,185,129,0.2) 50%, rgba(16,185,129,0.85) 75%, rgba(16,185,129,0.0) 100%);
          background-size: 200% 100%;
          animation: shimmer 6s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, rgba(16,185,129,1), rgba(34,197,94,1));
          transition: width 280ms ease;
        }
        .link-underline:hover::after {
          width: 100%;
        }
        .link-underline { padding-bottom: 6px; }
      `}</style>
    </footer>
  );
}
