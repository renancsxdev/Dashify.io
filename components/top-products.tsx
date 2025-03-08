"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TopProducts() {
  // Sample data for the pie chart
  const products = [
    { name: "Product A", value: 35, color: "#4f46e5" },
    { name: "Product B", value: 25, color: "#8b5cf6" },
    { name: "Product C", value: 20, color: "#a855f7" },
    { name: "Product D", value: 15, color: "#ec4899" },
    { name: "Others", value: 5, color: "#f43f5e" },
  ]

  const total = products.reduce((sum, product) => sum + product.value, 0)

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>Your best performing products this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-4">
          <div className="relative h-40 w-40">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {products.map((product, i) => {
                // Calculate the pie segments
                let startAngle = 0
                for (let j = 0; j < i; j++) {
                  startAngle += (products[j].value / total) * 360
                }
                const endAngle = startAngle + (product.value / total) * 360

                // Convert angles to radians
                const startRad = ((startAngle - 90) * Math.PI) / 180
                const endRad = ((endAngle - 90) * Math.PI) / 180

                // Calculate the SVG arc path
                const x1 = 50 + 40 * Math.cos(startRad)
                const y1 = 50 + 40 * Math.sin(startRad)
                const x2 = 50 + 40 * Math.cos(endRad)
                const y2 = 50 + 40 * Math.sin(endRad)

                // Determine if the arc should be drawn the long way around
                const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

                return (
                  <path
                    key={i}
                    d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                    fill={product.color}
                  />
                )
              })}
              <circle cx="50" cy="50" r="25" fill="white" />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          {products.map((product, i) => (
            <div key={i} className="flex items-center">
              <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: product.color }} />
              <div className="flex-1 text-sm">{product.name}</div>
              <div className="text-sm font-medium">{product.value}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

