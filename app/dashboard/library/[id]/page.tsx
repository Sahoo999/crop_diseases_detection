import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle, Leaf, Shield } from "lucide-react"
import Link from "next/link"

interface DiseaseDetailsPageProps {
  params: Promise<{ id: string }>
}

// Mock disease data
const diseaseData: Record<string, any> = {
  ncb: {
    name: "Northern Corn Leaf Blight",
    scientificName: "Setosphaeria turcica",
    severity: "high",
    cropTypes: ["Corn"],
    description:
      "A fungal disease that causes long, narrow lesions on corn leaves, potentially leading to significant yield losses of 20-50%.",
    symptoms: [
      "Long, narrow, grayish-green lesions on leaves",
      "Lesions develop tan centers with dark borders",
      "Lesions typically appear on lower leaves first",
      "Can spread to upper leaves and husks as disease progresses",
      "Spore production occurs on leaf surfaces in humid conditions",
    ],
    conditions: [
      "Warm, wet weather (75-80°F optimal)",
      "Extended periods of high humidity or rainfall",
      "Relative humidity above 80%",
      "Leaf wetness duration of 12+ hours",
      "Disease develops rapidly under cool, wet conditions",
    ],
    treatments: [
      {
        name: "Fungicide Application",
        description: "Apply fungicides containing azoxystrobin or triazoles at first sign of disease",
        timing: "Repeat every 10-14 days during disease progression",
      },
      {
        name: "Crop Rotation",
        description: "Rotate out of corn for 1-2 years to reduce inoculum in soil",
        timing: "Implement in long-term management strategy",
      },
      {
        name: "Resistant Varieties",
        description: "Plant corn hybrids with resistance to NCLB",
        timing: "Plan for next planting season",
      },
      {
        name: "Tillage",
        description: "Incorporate crop residue to reduce fungal survival",
        timing: "Immediately after harvest",
      },
      {
        name: "Field Sanitation",
        description: "Remove infected plant material and debris",
        timing: "Throughout growing season and after harvest",
      },
    ],
    prevention: [
      "Choose resistant corn hybrids suited to your region",
      "Maintain proper plant spacing for air circulation",
      "Avoid overhead irrigation or irrigate early morning",
      "Scout fields regularly for early disease signs",
      "Remove infected leaves and debris promptly",
      "Practice crop rotation with non-host crops",
      "Clean equipment between fields to prevent spread",
    ],
  },
}

export default async function DiseaseDetailsPage({ params }: DiseaseDetailsPageProps) {
  const { id } = await params
  const disease = diseaseData[id] || diseaseData["ncb"]

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <Link
          href="/dashboard/library"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Library
        </Link>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{disease.name}</h1>
              <p className="text-muted-foreground italic">{disease.scientificName}</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-error/10 text-error text-sm font-medium">
              {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)} Severity
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">{disease.description}</p>
        </div>

        {/* Tabs-like sections */}
        <div className="space-y-8">
          {/* Symptoms */}
          <div className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-primary" />
              Symptoms
            </h2>
            <ul className="space-y-3">
              {disease.symptoms.map((symptom: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              Favorable Conditions
            </h2>
            <ul className="space-y-3">
              {disease.conditions.map((condition: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Treatment Methods</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {disease.treatments.map((treatment: any, idx: number) => (
                <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{treatment.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{treatment.description}</p>
                  <p className="text-xs text-primary">Timing: {treatment.timing}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention */}
          <div className="glass rounded-xl p-8 backdrop-blur-xl border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Prevention Tips
            </h2>
            <ul className="space-y-3">
              {disease.prevention.map((tip: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-success" />
                  </div>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Analyze Your Crops</h3>
          <p className="text-muted-foreground mb-4">
            Upload images of your crops to get instant disease detection and treatment recommendations.
          </p>
          <Link href="/dashboard/analyze">
            <Button className="bg-primary hover:bg-primary-dark text-white">Start Analysis</Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  )
}
