"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  CreditCard,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
  ChevronRight,
  ChevronLeft,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { ActiveView } from "@/components/dashboard-page"
import { Logo } from "@/components/logo"

interface SidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  activeView: ActiveView
  onActiveViewChange: (view: ActiveView) => void
}

export function Sidebar({ open, onOpenChange, activeView, onActiveViewChange }: SidebarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleNavigation = (view: ActiveView) => (e: React.MouseEvent) => {
    e.preventDefault()
    onActiveViewChange(view)
  }

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => onOpenChange(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-transform duration-300 ease-in-out lg:static lg:transition-none",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          open ? "lg:w-64" : "lg:w-20",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="#" className="flex items-center gap-2" onClick={handleNavigation("dashboard")}>
            <Logo collapsed={!open} />
          </Link>
          <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => onOpenChange(!open)}>
            {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-3 py-2">
            <h2 className={cn("mb-2 text-xs font-semibold text-muted-foreground", !open && "lg:sr-only")}>
              Dashboards
            </h2>
            <div className="space-y-1">
              <Button
                variant={activeView === "dashboard" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("dashboard")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Dashboard</span>
                </Link>
              </Button>
              <Button
                variant={activeView === "analytics" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("analytics")}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Analytics</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className={cn("mb-2 text-xs font-semibold text-muted-foreground", !open && "lg:sr-only")}>
              Management
            </h2>
            <div className="space-y-1">
              <Button
                variant={activeView === "customers" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("customers")}>
                  <Users className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Customers</span>
                </Link>
              </Button>
              <Button
                variant={activeView === "products" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("products")}>
                  <Package className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Products</span>
                </Link>
              </Button>
              <Button
                variant={activeView === "orders" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("orders")}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Orders</span>
                </Link>
              </Button>
              <Button
                variant={activeView === "billing" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("billing")}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Billing</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className={cn("mb-2 text-xs font-semibold text-muted-foreground", !open && "lg:sr-only")}>Apps</h2>
            <div className="space-y-1">
              <Button
                variant={activeView === "calendar" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("calendar")}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Calendar</span>
                </Link>
              </Button>
              <Button
                variant={activeView === "settings" ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-start", !open && "lg:justify-center")}
              >
                <Link href="#" onClick={handleNavigation("settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span className={cn("", !open && "lg:hidden")}>Settings</span>
                </Link>
              </Button>
            </div>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className={cn("flex items-center gap-3", !open && "lg:justify-center")}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div className={cn("flex flex-col", !open && "lg:hidden")}>
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

