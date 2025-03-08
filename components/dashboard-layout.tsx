"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import type { ActiveView } from "@/components/dashboard-page"

interface DashboardLayoutProps {
  children: React.ReactNode
  sidebarOpen: boolean
  onSidebarOpenChange: (open: boolean) => void
  activeView: ActiveView
  onActiveViewChange: (view: ActiveView) => void
}

export function DashboardLayout({
  children,
  sidebarOpen,
  onSidebarOpenChange,
  activeView,
  onActiveViewChange,
}: DashboardLayoutProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen bg-background">
        <Sidebar
          open={sidebarOpen}
          onOpenChange={onSidebarOpenChange}
          activeView={activeView}
          onActiveViewChange={onActiveViewChange}
        />
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </ThemeProvider>
  )
}

