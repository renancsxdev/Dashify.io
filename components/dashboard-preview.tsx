"use client"

import { Card, CardContent } from "@/components/ui/card"
import { StatsCards } from "@/components/stats-cards"
import { OverviewChart } from "@/components/overview-chart"
import { TopProducts } from "@/components/top-products"
import { RecentActivity } from "@/components/recent-activity"

export function DashboardPreview() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1200px] mx-auto">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCards />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-1 md:col-span-1 lg:col-span-4">
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <OverviewChart />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-3">
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <TopProducts />
            </CardContent>
          </Card>
        </div>
      </div>
      
    </div>
  )
}

