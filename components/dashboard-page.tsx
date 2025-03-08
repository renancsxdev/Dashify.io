"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardContent } from "@/components/dashboard-content"
import { AnalyticsContent } from "@/components/analytics-content"
import { CustomersContent } from "@/components/customers-content"
import { ProductsContent } from "@/components/products-content"
import { OrdersContent } from "@/components/orders-content"
import { BillingContent } from "@/components/billing-content"
import { CalendarContent } from "@/components/calendar-content"
import { SettingsContent } from "@/components/settings-content"

export type ActiveView =
  | "dashboard"
  | "analytics"
  | "customers"
  | "products"
  | "orders"
  | "billing"
  | "calendar"
  | "settings"

export function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeView, setActiveView] = useState<ActiveView>("dashboard")

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardContent />
      case "analytics":
        return <AnalyticsContent />
      case "customers":
        return <CustomersContent />
      case "products":
        return <ProductsContent />
      case "orders":
        return <OrdersContent />
      case "billing":
        return <BillingContent />
      case "calendar":
        return <CalendarContent />
      case "settings":
        return <SettingsContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <DashboardLayout
      sidebarOpen={sidebarOpen}
      onSidebarOpenChange={setSidebarOpen}
      activeView={activeView}
      onActiveViewChange={setActiveView}
    >
      <DashboardHeader sidebarOpen={sidebarOpen} onSidebarOpenChange={setSidebarOpen} activeView={activeView} />
      <div className="p-4 md:p-6">{renderContent()}</div>
    </DashboardLayout>
  )
}

