"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageUploadZone } from "./image-upload-zone"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface AnalysisWizardProps {
  onComplete: (data: AnalysisData) => void
}

export interface AnalysisData {
  image: File
  cropName: string
  location: string
  notes: string
}

type Step = "upload" | "details" | "review" | "analyzing" | "results"

export function AnalysisWizard({ onComplete }: AnalysisWizardProps) {
  const [step, setStep] = useState<Step>("upload")
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>("")
  const [cropName, setCropName] = useState("")
  const [location, setLocation] = useState("")
  const [notes, setNotes] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)

  const handleImageSelect = (file: File) => {
    setImage(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
      setStep("details")
    }
    reader.readAsDataURL(file)
  }

  const handleAnalyze = async () => {
    setStep("analyzing")
    setIsAnalyzing(true)
    // Simulate API call
    setTimeout(() => {
      setAnalysisResult({
        disease: "Northern Corn Leaf Blight",
        confidence: 94,
        severity: "critical",
        recommendations: [
          "Apply fungicide containing azoxystrobin immediately",
          "Monitor closely for disease progression",
          "Consider resistant varieties for next planting",
        ],
      })
      setStep("results")
      setIsAnalyzing(false)
    }, 2000)
  }

  const handleReset = () => {
    setStep("upload")
    setImage(null)
    setPreview("")
    setCropName("")
    setLocation("")
    setNotes("")
    setAnalysisResult(null)
  }

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {(["upload", "details", "review", "analyzing", "results"] as const).map((s, idx) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                step === s || (["analyzing", "results"].includes(step) && ["analyzing", "results"].includes(s))
                  ? "bg-primary text-white"
                  : step === "results" ||
                      (["upload", "details", "review"].includes(step) &&
                        ["upload", "details", "review"].includes(s) &&
                        ["upload", "details", "review"].indexOf(s) < ["upload", "details", "review"].indexOf(step))
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {idx + 1}
            </div>
            {idx < 4 && <div className="flex-1 h-1 mx-2 bg-border" />}
          </div>
        ))}
      </div>

      {/* Upload Step */}
      {step === "upload" && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Upload Crop Image</h2>
            <p className="text-muted-foreground">Start by uploading a clear image of the affected crop area.</p>
          </div>
          <ImageUploadZone onImageSelect={handleImageSelect} />
        </div>
      )}

      {/* Details Step */}
      {step === "details" && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Crop Information</h2>
            <p className="text-muted-foreground">Tell us more about your crop to improve accuracy.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Crop Type</label>
              <Input
                placeholder="e.g., Corn, Wheat, Soybean"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Field Location</label>
              <Input
                placeholder="e.g., North Field, Block A"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-card border-border focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
            <textarea
              placeholder="Any additional information about the crop or symptoms..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setStep("upload")}
              className="border-border text-foreground hover:bg-muted"
            >
              Back
            </Button>
            <Button onClick={() => setStep("review")} className="flex-1 bg-primary hover:bg-primary-dark text-white">
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Review Step */}
      {step === "review" && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Review & Analyze</h2>
            <p className="text-muted-foreground">Review your information before analysis.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                src={preview || "/placeholder.svg"}
                alt="Crop preview"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Crop Type</p>
                <p className="font-semibold text-foreground">{cropName || "Not specified"}</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold text-foreground">{location || "Not specified"}</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Notes</p>
                <p className="font-semibold text-foreground">{notes || "None"}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setStep("details")}
              className="border-border text-foreground hover:bg-muted"
            >
              Back
            </Button>
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="flex-1 bg-primary hover:bg-primary-dark text-white"
            >
              Analyze Image
            </Button>
          </div>
        </div>
      )}

      {/* Analyzing Step */}
      {step === "analyzing" && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <h2 className="text-2xl font-bold text-foreground">Analyzing Image</h2>
          <p className="text-muted-foreground">Our AI is examining your crop image...</p>
        </div>
      )}

      {/* Results Step */}
      {step === "results" && analysisResult && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Analysis Results</h2>
            <p className="text-muted-foreground">Here's what we found in your crop image.</p>
          </div>

          <div className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20">
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  analysisResult.severity === "critical"
                    ? "bg-error/10"
                    : analysisResult.severity === "warning"
                      ? "bg-warning/10"
                      : "bg-success/10"
                }`}
              >
                {analysisResult.severity === "critical" ? (
                  <AlertCircle
                    className={`w-6 h-6 ${analysisResult.severity === "critical" ? "text-error" : "text-warning"}`}
                  />
                ) : (
                  <CheckCircle className="w-6 h-6 text-success" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{analysisResult.disease}</h3>
                <p className="text-sm text-muted-foreground capitalize">{analysisResult.severity} severity</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Confidence Score</p>
                <p className="text-2xl font-bold text-primary">{analysisResult.confidence}%</p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-linear-to-r from-primary to-accent h-2 rounded-full"
                  style={{ width: `${analysisResult.confidence}%` }}
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Recommended Actions</h4>
              <ul className="space-y-2">
                {analysisResult.recommendations.map((rec: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleReset}
              className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
            >
              Analyze Another
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary-dark text-white">Save Analysis</Button>
          </div>
        </div>
      )}
    </div>
  )
}
