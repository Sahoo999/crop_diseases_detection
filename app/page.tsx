
 "use client"
import Link from "next/link"
import { Leaf, Camera, BarChart3, Shield } from "lucide-react"

// ✅ Import your custom sections
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
// removed: import { PricingSection } from "@/components/pricing-section"
// import { PhotoSection } from "@/components/photo-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* ✅ Navbar at top */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <Leaf className="w-16 h-16 text-primary animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Crop Disease Detection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            AI-powered platform to detect and analyze crop diseases in real-time.
            Upload images and get instant insights to protect your harvest.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/dashboard/analyze"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Start Analysis
            </Link>
            <Link
              href="/dashboard"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 dark:border-gray-700 transition-all"
            >
              View Dashboard
            </Link>

          </div>
        </div>

       {/* Features Section (fade-up + stagger animation) */}
<div
  className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20"
  data-aos="fade-up"
>
  {/* Card 1 */}
  <div
    className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-1 opacity-0 translate-y-6 animate-fadeUp delay-100"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600" />
    <div className="p-8 text-center space-y-4">
      <div className="mx-auto mb-2 w-16 h-16 rounded-full flex items-center justify-center bg-emerald-50">
        <Camera className="w-8 h-8 text-emerald-600 transition-transform duration-500 hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Image Analysis</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Upload crop images and get instant AI-powered disease detection with high accuracy.
      </p>
      <div className="mt-4 border-t w-20 mx-auto border-gray-100" />
      <div className="mt-3">
        <a
          href="/dashboard/analyze"
          className="inline-block text-sm font-semibold text-emerald-600 hover:underline"
        >
          Try a sample analysis →
        </a>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-1 opacity-0 translate-y-6 animate-fadeUp delay-250"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-sky-400 via-sky-500 to-indigo-500" />
    <div className="p-8 text-center space-y-4">
      <div className="mx-auto mb-2 w-16 h-16 rounded-full flex items-center justify-center bg-sky-50">
        <BarChart3 className="w-8 h-8 text-sky-600 transition-transform duration-500 hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Reports</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Get comprehensive analysis reports with treatment recommendations and insights.
      </p>
      <div className="mt-4 border-t w-20 mx-auto border-gray-100" />
      <div className="mt-3">
        <a
          href="/dashboard"
          className="inline-block text-sm font-semibold text-sky-600 hover:underline"
        >
          View sample report →
        </a>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-1 opacity-0 translate-y-6 animate-fadeUp delay-400"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-400 via-violet-500 to-purple-600" />
    <div className="p-8 text-center space-y-4">
      <div className="mx-auto mb-2 w-16 h-16 rounded-full flex items-center justify-center bg-violet-50">
        <Shield className="w-8 h-8 text-violet-600 transition-transform duration-500 hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Detection</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Detect diseases early to prevent spread and minimize crop damage effectively.
      </p>
      <div className="mt-4 border-t w-20 mx-auto border-gray-100" />
      <div className="mt-3">
        <a
          href="/pricing"
          className="inline-block text-sm font-semibold text-violet-600 hover:underline"
        >
          Learn about plans →
        </a>
      </div>
    </div>
  </div>

  {/* Animation keyframes */}
  <style jsx>{`
    @keyframes fadeUp {
      0% {
        opacity: 0;
        transform: translateY(24px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeUp {
      animation: fadeUp 0.8s ease-out forwards;
    }
    .delay-\[100ms\] {
      animation-delay: 0.1s;
    }
    .delay-\[250ms\] {
      animation-delay: 0.25s;
    }
    .delay-\[400ms\] {
      animation-delay: 0.4s;
    }
  `}</style>
</div>



        {/* secondary pricing link below features */}
       <div className="mt-24 max-w-3xl mx-auto text-center bg-linear-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-lg">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
    Find the perfect plan for your farm 🌾
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
    Looking for a subscription that fits your farm size and crop variety?  
    Choose the best plan tailored to your needs.
  </p>
  <Link
    href="/pricing"
    className="bg-linear-to-r from-green-500 to-teal-400 text-white px-10 py-4 rounded-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    View Pricing Plans
  </Link>
</div>


        {/* Photo Gallery Section (if you add later) */}
        <div className="mt-20">
          {/* leave space for PhotoSection if needed */}
        </div>

        {/* removed PricingSection from here */}
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  )
}
