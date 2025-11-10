"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

interface DiseaseFilterProps {
  onSearchChange: (query: string) => void
  onSeverityChange: (severity: string) => void
  onCropChange: (crop: string) => void
}

const crops = ["Corn", "Wheat", "Soybean", "Rice", "Cotton", "Tomato"]
const severities = ["All", "Low", "Medium", "High"]

export function DiseaseFilter({ onSearchChange, onSeverityChange, onCropChange }: DiseaseFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="space-y-4 mb-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search diseases..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card border-border focus:border-primary"
        />
      </div>

      {/* Severity Filter */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Severity
        </p>
        <div className="flex flex-wrap gap-2">
          {severities.map((severity) => (
            <Button
              key={severity}
              variant={activeFilter === severity ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveFilter(severity)
                onSeverityChange(severity)
              }}
              className={
                activeFilter === severity
                  ? "bg-primary hover:bg-primary-dark text-white"
                  : "border-border text-foreground hover:bg-muted"
              }
            >
              {severity}
            </Button>
          ))}
        </div>
      </div>

      {/* Crop Filter */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Crop Type</p>
        <div className="flex flex-wrap gap-2">
          {crops.map((crop) => (
            <Button
              key={crop}
              variant="outline"
              size="sm"
              onClick={() => onCropChange(crop)}
              className="border-border text-foreground hover:bg-muted"
            >
              {crop}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
