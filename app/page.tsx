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

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          <div className="glass p-8 rounded-2xl text-center hover:shadow-xl transition-all">
            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Image Analysis
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload crop images and get instant AI-powered disease detection with high accuracy.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center hover:shadow-xl transition-all">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Detailed Reports
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get comprehensive analysis reports with treatment recommendations and insights.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center hover:shadow-xl transition-all">
            <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-info" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Early Detection
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Detect diseases early to prevent spread and minimize crop damage effectively.
            </p>
          </div>
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
