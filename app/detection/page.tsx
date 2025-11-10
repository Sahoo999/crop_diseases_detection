"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Upload, Camera, Zap, Loader2, CheckCircle } from "lucide-react"

export default function DetectionPage() {
  const [image, setImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      processImage(files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processImage(e.target.files[0])
    }
  }

  const processImage = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setImage(e.target?.result as string)
      simulateDetection()
    }
    reader.readAsDataURL(file)
  }

  const simulateDetection = () => {
    setIsLoading(true)
    setTimeout(() => {
      setResult({
        disease: "Early Blight",
        confidence: 94.8,
        severity: "High",
        treatment: [
          "Apply fungicide: Chlorothalonil or Mancozeb",
          "Remove infected leaves immediately",
          "Improve air circulation around plants",
          "Water at soil level, not foliage",
          "Apply treatment every 7-10 days",
        ],
        prevention: [
          "Rotate crops yearly",
          "Use disease-resistant varieties",
          "Maintain proper spacing between plants",
          "Practice good sanitation",
        ],
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-amber-50">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-br from-orange-100/40 via-transparent to-yellow-100/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Disease{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-yellow-600">
              Detection
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload or capture a photo of your crop and get instant AI-powered disease analysis
          </p>
        </div>
      </section>

      {!image ? (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div
                className={`rounded-2xl bg-linear-to-br from-orange-100/80 to-yellow-100/80 p-12 flex items-center justify-center border-2 border-dashed transition cursor-pointer ${
                  dragActive
                    ? "border-orange-500 bg-orange-100/90 scale-105"
                    : "border-orange-300 hover:border-orange-500"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="text-center">
                  <Upload className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Image</h3>
                  <p className="text-gray-600 mb-6">Drag and drop or click to upload</p>
                  <label htmlFor="file-upload">
                    <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white cursor-pointer">
                      <span>Choose File</span>
                    </Button>
                  </label>
                  <input id="file-upload" type="file" accept="image/*" onChange={handleFileInput} className="hidden" />
                </div>
              </div>

              {/* Camera Section */}
              <div className="rounded-2xl bg-linear-to-br from-yellow-100/80 to-amber-100/80 p-12 flex items-center justify-center border-2 border-dashed border-yellow-300 hover:border-yellow-500 transition cursor-pointer">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Take Photo</h3>
                  <p className="text-gray-600 mb-6">Capture directly from camera</p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">Open Camera</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Preview */}
              <div className="rounded-2xl bg-linear-to-br from-orange-100/80 to-yellow-100/80 p-8 border-2 border-orange-200">
                <div className="relative w-full h-96 bg-white rounded-xl overflow-hidden">
                  <img src={image || "/placeholder.svg"} alt="Crop" className="w-full h-full object-cover" />
                </div>
                <Button
                  onClick={() => {
                    setImage(null)
                    setResult(null)
                  }}
                  variant="outline"
                  className="w-full mt-4"
                >
                  Upload Different Image
                </Button>
              </div>

              {/* Results */}
              <div className="space-y-6">
                {isLoading ? (
                  <div className="rounded-2xl bg-linear-to-br from-orange-100/80 to-yellow-100/80 p-8 flex items-center justify-center min-h-96">
                    <div className="text-center space-y-4">
                      <Loader2 className="w-12 h-12 text-orange-600 mx-auto animate-spin" />
                      <p className="text-lg font-semibold text-gray-900">Analyzing your crop...</p>
                      <p className="text-gray-600">This may take a few seconds</p>
                    </div>
                  </div>
                ) : result ? (
                  <>
                    {/* Disease Result */}
                    <div className="rounded-2xl bg-linear-to-br from-emerald-100/80 to-green-100/80 p-8 border-2 border-emerald-200">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.disease}</h3>
                          <p className="text-gray-600 mb-4">Disease Detected</p>
                          <div className="flex gap-4">
                            <div>
                              <p className="text-sm text-gray-600">Confidence</p>
                              <p className="text-2xl font-bold text-emerald-600">{result.confidence}%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Severity</p>
                              <p className="text-2xl font-bold text-red-600">{result.severity}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Treatment Recommendations */}
                    <div className="rounded-2xl bg-linear-to-br from-blue-100/80 to-cyan-100/80 p-8 border-2 border-blue-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Treatment</h4>
                      <ul className="space-y-3">
                        {result.treatment.map((item: string, idx: number) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-blue-600 font-bold shrink-0">{idx + 1}.</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prevention */}
                    <div className="rounded-2xl bg-linear-to-br from-purple-100/80 to-pink-100/80 p-8 border-2 border-purple-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Prevention</h4>
                      <ul className="space-y-3">
                        {result.prevention.map((item: string, idx: number) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-purple-600 font-bold shrink-0">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-yellow-100/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Detection Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Get results in under 30 seconds",
                color: "from-orange-500 to-yellow-500",
              },
              {
                icon: Zap,
                title: "99% Accurate",
                desc: "Advanced ML model for precision detection",
                color: "from-yellow-500 to-amber-500",
              },
              {
                icon: Zap,
                title: "Complete Info",
                desc: "Disease details and treatment plans included",
                color: "from-amber-500 to-orange-500",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl bg-linear-to-br ${item.color} p-8 text-white shadow-lg hover:shadow-xl transition`}
              >
                <item.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
