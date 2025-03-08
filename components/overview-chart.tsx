"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function OverviewChart() {
  const [chartType, setChartType] = useState("bar")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Data for the chart
    const data = [340, 250, 430, 470, 580, 690, 420, 530, 650, 480, 520, 590]
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const maxValue = Math.max(...data) * 1.1

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.font = "10px sans-serif"
    ctx.fillStyle = "#94a3b8"

    for (let i = 0; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      const value = Math.round(maxValue - (maxValue / gridLines) * i)

      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()

      ctx.fillText(value.toString(), padding - 5, y + 3)
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    const barWidth = chartWidth / data.length

    for (let i = 0; i < data.length; i++) {
      const x = padding + barWidth * i + barWidth / 2
      ctx.fillText(labels[i], x, height - padding + 15)
    }

    // Draw data
    if (chartType === "bar") {
      // Bar chart
      for (let i = 0; i < data.length; i++) {
        const x = padding + barWidth * i + barWidth * 0.1
        const barW = barWidth * 0.8
        const dataHeight = (data[i] / maxValue) * chartHeight
        const y = height - padding - dataHeight

        const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.8)")
        gradient.addColorStop(1, "rgba(99, 102, 241, 0.2)")

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barW, dataHeight)
      }
    } else {
      // Line chart
      ctx.beginPath()
      ctx.strokeStyle = "rgb(99, 102, 241)"
      ctx.lineWidth = 2

      for (let i = 0; i < data.length; i++) {
        const x = padding + barWidth * i + barWidth / 2
        const dataHeight = (data[i] / maxValue) * chartHeight
        const y = height - padding - dataHeight

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Fill area under the line
      ctx.lineTo(padding + chartWidth, height - padding)
      ctx.lineTo(padding, height - padding)
      ctx.fillStyle = "rgba(99, 102, 241, 0.1)"
      ctx.fill()

      // Draw points
      for (let i = 0; i < data.length; i++) {
        const x = padding + barWidth * i + barWidth / 2
        const dataHeight = (data[i] / maxValue) * chartHeight
        const y = height - padding - dataHeight

        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.strokeStyle = "rgb(99, 102, 241)"
        ctx.lineWidth = 2
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      }
    }
  }, [chartType])

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue for the current year</CardDescription>
        </div>
        <div>
          <Select value={chartType} onValueChange={setChartType}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Chart Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bar">Bar Chart</SelectItem>
              <SelectItem value="line">Line Chart</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} width={800} height={300} className="w-full h-full" />
        </div>
      </CardContent>
    </Card>
  )
}

