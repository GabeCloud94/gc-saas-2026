export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Total Leads</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">New This Week</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Conversion Rate</p>
          <p className="text-3xl font-bold">0%</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Pipeline Value</p>
          <p className="text-3xl font-bold">$0</p>
        </div>
      </div>

      {/* Placeholder for chart */}
      <div className="border rounded-lg p-4 h-64 flex items-center justify-center text-muted-foreground">
        Chart coming soon
      </div>
    </div>
  )
}