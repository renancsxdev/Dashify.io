"use client"

import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  collapsed?: boolean
}

export function Logo({ className, collapsed = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-primary overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 14l2 2 4-4" />
          <path d="M3 9h18" />
        </svg>
      </div>
      {!collapsed && <span className="text-lg font-bold tracking-tight">Dashify</span>}
    </div>
  )
}

