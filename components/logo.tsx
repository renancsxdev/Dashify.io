"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  collapsed?: boolean;
}

export function Logo({ className, collapsed = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img src="/logo.png" alt="Dashify Logo" className="h-8 w-auto" />
      
    </div>
  );
}
