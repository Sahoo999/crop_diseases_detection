"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { AnalysisWizard } from "@/components/analysis-wizard"
import { Microscope } from "lucide-react"

export default function AnalyzePage() {
  const handleAnalysisComplete = (data: any) => {
    console.log("Analysis completed:", data)
    // handle saving results, call API, route, etc.
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Analyze Crop</h1>
          </div>
          <p className="text-muted-foreground">
            Upload an image of your crop to get instant disease detection and treatment recommendations.
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20">
            <AnalysisWizard onComplete={handleAnalysisComplete} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
