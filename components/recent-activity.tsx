"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        email: "alex@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "created a new order",
      target: "Order #12345",
      time: "2 minutes ago",
      status: "success",
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        email: "sarah@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "updated product",
      target: "Wireless Headphones",
      time: "45 minutes ago",
      status: "info",
    },
    {
      id: 3,
      user: {
        name: "Michael Brown",
        email: "michael@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "refunded order",
      target: "Order #12342",
      time: "3 hours ago",
      status: "warning",
    },
    {
      id: 4,
      user: {
        name: "Emily Davis",
        email: "emily@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "deleted product",
      target: "Bluetooth Speaker",
      time: "5 hours ago",
      status: "destructive",
    },
    {
      id: 5,
      user: {
        name: "David Wilson",
        email: "david@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "added new customer",
      target: "Jane Smith",
      time: "1 day ago",
      status: "success",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions performed by users</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                  <Badge
                    variant={
                      activity.status === "success"
                        ? "default"
                        : activity.status === "info"
                          ? "secondary"
                          : activity.status === "warning"
                            ? "outline"
                            : "destructive"
                    }
                  >
                    {activity.action}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.target}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

