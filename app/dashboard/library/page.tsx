"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DiseaseCard } from "@/components/disease-card"
import { DiseaseFilter } from "@/components/disease-filter"
import { BookOpen } from "lucide-react"

const diseases = [
  {
    id: "ncb",
    name: "Northern Corn Leaf Blight",
    cropTypes: ["Corn"],
    severity: "high" as const,
    description:
      "A fungal disease that causes long, narrow lesions on corn leaves, potentially leading to significant yield losses.",
    treatmentMethods: 5,
    preventionTips: 7,
  },
  {
    id: "pm",
    name: "Powdery Mildew",
    cropTypes: ["Wheat", "Soybean"],
    severity: "medium" as const,
    description: "A common fungal disease that appears as white powder on plant surfaces, affecting photosynthesis.",
    treatmentMethods: 4,
    preventionTips: 6,
  },
  {
    id: "ls",
    name: "Leaf Spot",
    cropTypes: ["Rice", "Cotton"],
    severity: "medium" as const,
    description: "Fungal or bacterial infection causing distinct spots on leaves, reducing plant vigor.",
    treatmentMethods: 6,
    preventionTips: 8,
  },
  {
    id: "rb",
    name: "Rice Blast",
    cropTypes: ["Rice"],
    severity: "high" as const,
    description: "A serious rice disease caused by fungal infection, can destroy entire crops if not managed.",
    treatmentMethods: 5,
    preventionTips: 9,
  },
  {
    id: "sm",
    name: "Soybean Mosaic",
    cropTypes: ["Soybean"],
    severity: "low" as const,
    description: "Viral disease causing mottled leaves, usually manageable with proper crop rotation.",
    treatmentMethods: 3,
    preventionTips: 5,
  },
  {
    id: "eb",
    name: "Early Blight",
    cropTypes: ["Tomato", "Cotton"],
    severity: "medium" as const,
    description: "Fungal disease affecting lower leaves first, spreads upward as season progresses.",
    treatmentMethods: 4,
    preventionTips: 7,
  },
]

export default function DiseaseLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSeverity, setSelectedSeverity] = useState("All")
  const [selectedCrop, setSelectedCrop] = useState("")

  const filteredDiseases = diseases.filter((disease) => {
    const matchesSearch =
      disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSeverity = selectedSeverity === "All" || disease.severity === selectedSeverity.toLowerCase()
    const matchesCrop = !selectedCrop || disease.cropTypes.includes(selectedCrop)

    return matchesSearch && matchesSeverity && matchesCrop
  })

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Disease Library</h1>
          </div>
          <p className="text-muted-foreground">
            Explore comprehensive information about crop diseases and their management.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <DiseaseFilter
                onSearchChange={setSearchQuery}
                onSeverityChange={setSelectedSeverity}
                onCropChange={setSelectedCrop}
              />
            </div>
          </div>

          {/* Disease Cards */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredDiseases.length} of {diseases.length} diseases
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredDiseases.map((disease) => (
                <DiseaseCard key={disease.id} {...disease} />
              ))}
            </div>
            {filteredDiseases.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No diseases found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
