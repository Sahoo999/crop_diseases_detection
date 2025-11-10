import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AnalysisCardProps {
  id: string
  cropName: string
  diseaseDetected: string
  confidence: number
  date: string
  location: string
  status: "critical" | "warning" | "healthy"
}

export function AnalysisCard({ id, cropName, diseaseDetected, confidence, date, location, status }: AnalysisCardProps) {
  const statusColors = {
    critical: "text-error bg-error/10",
    warning: "text-warning bg-warning/10",
    healthy: "text-success bg-success/10",
  }

  return (
    <div className="glass rounded-xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{cropName}</h3>
          <p className="text-muted-foreground text-sm">{diseaseDetected}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Confidence</p>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-linear-to-r from-primary to-accent h-2 rounded-full"
              style={{ width: `${confidence}%` }}
            />
          </div>
          <p className="text-sm font-semibold text-foreground mt-1">{confidence}% match</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
      </div>

      <Button className="w-full bg-primary hover:bg-primary-dark text-white">View Details</Button>
    </div>
  )
}
