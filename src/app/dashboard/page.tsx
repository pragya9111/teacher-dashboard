import DashboardCharts from "@/components/Dashboard/DashboardCharts"
import StatsOverview from '@/components/Dashboard/StatsOverview'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Welcome to your Dashboard 👋</h1>
      <StatsOverview />
      <DashboardCharts />
    </div>
  )
}
