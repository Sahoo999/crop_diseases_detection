import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface DiseaseCardProps {
  id: string
  name: string
  cropTypes: string[]
  severity: "low" | "medium" | "high"
  description: string
  treatmentMethods: number
  preventionTips: number
}

export function DiseaseCard({
  id,
  name,
  cropTypes,
  severity,
  description,
  treatmentMethods,
  preventionTips,
}: DiseaseCardProps) {
  const severityColors = {
    low: "bg-success/10 text-success",
    medium: "bg-warning/10 text-warning",
    high: "bg-error/10 text-error",
  }

  return (
    <div className="glass rounded-xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mt-1 shrink-0">
            <AlertCircle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <div className="flex flex-wrap gap-1 mt-2">
              {cropTypes.map((crop) => (
                <span key={crop} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {crop}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${severityColors[severity]}`}>
          {severity.charAt(0).toUpperCase() + severity.slice(1)}
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4 flex-1">{description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-lg bg-muted/50">
          <p className="text-xs text-muted-foreground">Treatment Methods</p>
          <p className="text-2xl font-bold text-foreground">{treatmentMethods}</p>
        </div>
        <div className="p-3 rounded-lg bg-muted/50">
          <p className="text-xs text-muted-foreground">Prevention Tips</p>
          <p className="text-2xl font-bold text-foreground">{preventionTips}</p>
        </div>
      </div>

      <Link href={`/dashboard/library/${id}`}>
        <Button className="w-full bg-primary hover:bg-primary-dark text-white">Learn More</Button>
      </Link>
    </div>
  )
}
