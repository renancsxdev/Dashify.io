"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export function CalendarContent() {
  const [currentMonth, setCurrentMonth] = useState("March")
  const [currentYear, setCurrentYear] = useState(2023)

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Team Meeting",
      date: "2023-03-15",
      time: "10:00 AM - 11:30 AM",
      type: "meeting",
    },
    {
      id: 2,
      title: "Product Launch",
      date: "2023-03-20",
      time: "9:00 AM - 12:00 PM",
      type: "event",
    },
    {
      id: 3,
      title: "Client Call",
      date: "2023-03-15",
      time: "2:00 PM - 3:00 PM",
      type: "call",
    },
    {
      id: 4,
      title: "Deadline: Q1 Report",
      date: "2023-03-31",
      time: "11:59 PM",
      type: "deadline",
    },
    {
      id: 5,
      title: "Marketing Strategy",
      date: "2023-03-22",
      time: "1:00 PM - 2:30 PM",
      type: "meeting",
    },
  ]

  // Generate calendar days
  const generateCalendarDays = () => {
    // This is a simplified version - in a real app, you'd calculate actual days
    const days = []
    const daysInMonth = 31 // March has 31 days

    // Add empty cells for days before the 1st of the month
    // For March 2023, the 1st was a Wednesday (index 3)
    for (let i = 0; i < 3; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-border p-2 bg-muted/20"></div>)
    }

    // Add the actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `2023-03-${day.toString().padStart(2, "0")}`
      const dayEvents = events.filter((event) => event.date === date)

      days.push(
        <div key={day} className="h-24 border border-border p-2 hover:bg-muted/20 transition-colors">
          <div className="flex justify-between items-start">
            <span className="font-medium">{day}</span>
            {dayEvents.length > 0 && (
              <Badge variant="outline" className="text-xs">
                {dayEvents.length} {dayEvents.length === 1 ? "event" : "events"}
              </Badge>
            )}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`text-xs truncate rounded px-1 py-0.5 ${
                  event.type === "meeting"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    : event.type === "call"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : event.type === "deadline"
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                }`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && <div className="text-xs text-muted-foreground">+{dayEvents.length - 2} more</div>}
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Calendar</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              {currentMonth} {currentYear}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline">Today</Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription>Manage your schedule and events</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Calendar header - days of week */}
          <div className="grid grid-cols-7 gap-0 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-medium text-sm py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-0">{generateCalendarDays()}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Your schedule for the next few days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((event) => (
                <div key={event.id} className="flex items-start gap-4 p-3 rounded-lg border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium text-primary">{event.date.split("-")[2]}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{event.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <span className="text-xs text-muted-foreground">•</span>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      event.type === "meeting"
                        ? "default"
                        : event.type === "call"
                          ? "secondary"
                          : event.type === "deadline"
                            ? "destructive"
                            : "outline"
                    }
                  >
                    {event.type}
                  </Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

