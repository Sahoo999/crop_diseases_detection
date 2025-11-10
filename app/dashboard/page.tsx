import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { AnalysisCard } from "@/components/analysis-card"
import { BarChart3, AlertTriangle, CheckCircle, Microscope } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's what's happening with your crops today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Analyses" value="24" icon={BarChart3} trend={12} description="This month" />
          <StatCard title="Diseases Detected" value="8" icon={AlertTriangle} trend={5} description="This month" />
          <StatCard title="Healthy Crops" value="16" icon={CheckCircle} trend={8} description="This month" />
          <StatCard title="Pending Analysis" value="3" icon={Microscope} trend={-2} description="Awaiting review" />
        </div>

        {/* Recent Analyses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Recent Analyses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <AnalysisCard
              id="1"
              cropName="Corn Field North"
              diseaseDetected="Northern Corn Leaf Blight"
              confidence={94}
              date="Today, 2:30 PM"
              location="Field North"
              status="critical"
            />
            <AnalysisCard
              id="2"
              cropName="Wheat Field East"
              diseaseDetected="Powdery Mildew"
              confidence={78}
              date="Yesterday, 10:15 AM"
              location="Field East"
              status="warning"
            />
            <AnalysisCard
              id="3"
              cropName="Soybean Field West"
              diseaseDetected="No Disease Detected"
              confidence={99}
              date="2 days ago, 3:45 PM"
              location="Field West"
              status="healthy"
            />
            <AnalysisCard
              id="4"
              cropName="Rice Paddy South"
              diseaseDetected="Leaf Spot"
              confidence={85}
              date="3 days ago, 11:20 AM"
              location="Paddy South"
              status="warning"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
