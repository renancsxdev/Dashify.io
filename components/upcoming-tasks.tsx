"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from "lucide-react"

export function UpcomingTasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Review new product designs",
      completed: false,
      priority: "high",
      dueDate: "Today",
    },
    {
      id: 2,
      title: "Prepare quarterly report",
      completed: false,
      priority: "medium",
      dueDate: "Tomorrow",
    },
    {
      id: 3,
      title: "Update inventory system",
      completed: true,
      priority: "low",
      dueDate: "Yesterday",
    },
    {
      id: 4,
      title: "Call with marketing team",
      completed: false,
      priority: "high",
      dueDate: "Today",
    },
    {
      id: 5,
      title: "Finalize budget for Q3",
      completed: false,
      priority: "medium",
      dueDate: "Next week",
    },
  ])

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Upcoming Tasks</CardTitle>
          <CardDescription>Tasks that need your attention</CardDescription>
        </div>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span>Add Task</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-2">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
                className="mt-0.5"
              />
              <div className="flex-1 space-y-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm font-medium leading-none ${task.completed ? "line-through text-muted-foreground" : ""}`}
                >
                  {task.title}
                </label>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "outline"
                    }
                    className="text-[10px]"
                  >
                    {task.priority}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

