"use client"

import { StatsCards } from "@/components/stats-cards"
import { RecentActivity } from "@/components/recent-activity"
import { OverviewChart } from "@/components/overview-chart"
import { TopProducts } from "@/components/top-products"
import { UpcomingTasks } from "@/components/upcoming-tasks"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCards />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-1 md:col-span-1 lg:col-span-5">
          <OverviewChart />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <TopProducts />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <RecentActivity />
        <UpcomingTasks />
      </div>
    </div>
  )
}

