import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Farm Owner, Gujarat",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "CropGuard has been a game-changer for my farm. I detected early blight in my potato crops and saved 40% more harvest this season.",
    rating: 5,
    gradient: "from-blue-50 to-blue-100",
  },
  {
    name: "Priya Sharma",
    role: "Agricultural Manager, Punjab",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "The accuracy of disease detection is outstanding. My team can now respond to crop issues within hours instead of days.",
    rating: 5,
    gradient: "from-purple-50 to-pink-100",
  },
  {
    name: "Arjun Kumar",
    role: "Agritech Entrepreneur, Haryana",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "We integrated CropGuard into our farm management app and our farmers absolutely love it. Support team is amazing!",
    rating: 5,
    gradient: "from-emerald-50 to-green-100",
  },
  {
    name: "Meera Singh",
    role: "Cooperative Leader, Uttar Pradesh",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "This platform helped our entire cooperative improve crop yield by 35%. The investment paid back in the first season.",
    rating: 5,
    gradient: "from-orange-50 to-yellow-100",
  },
  {
    name: "Vikram Desai",
    role: "Large-Scale Farmer, Maharashtra",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "Managing 500+ acres used to be stressful. CropGuard's real-time monitoring has made it so much easier and profitable.",
    rating: 5,
    gradient: "from-pink-50 to-rose-100",
  },
  {
    name: "Anjali Verma",
    role: "Agricultural Extension Officer, MP",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "I recommend CropGuard to all farmers I work with. The disease library is comprehensive and user-friendly.",
    rating: 5,
    gradient: "from-teal-50 to-cyan-100",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-br from-pink-50 via-white to-rose-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Success Stories from Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-rose-600">Farmers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how CropGuard is helping farmers across India protect their harvests and increase yields
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`rounded-2xl bg-linear-to-br ${testimonial.gradient} p-8 hover:shadow-xl transition border border-white/50`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/30">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">Join Thousands of Happy Farmers</h2>
          <p className="text-xl text-pink-50">Start your journey to better crop health and higher yields today</p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
