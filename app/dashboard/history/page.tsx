// app/dashboard/history/page.tsx
import { DashboardLayout } from "@/components/dashboard-layout"
import { HistoryClient } from "@/components/history-client"
import { Clock } from "lucide-react"

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-gradient-mesh p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Analysis History</h1>
            </div>
            <p className="text-muted-foreground">
              View previously analyzed images, results and timestamps. Click an entry to view details or delete it.
            </p>
          </div>

          <div className="glass rounded-xl p-6 border border-white/10">
            {/* Client component handles UI interactions */}
            <HistoryClient />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
