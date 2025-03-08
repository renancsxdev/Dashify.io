"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Search, SlidersHorizontal } from "lucide-react"

export function OrdersContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const orders = [
    {
      id: "ORD-12345",
      customer: "Alex Johnson",
      date: "2023-03-15",
      total: "$234.56",
      status: "Delivered",
      payment: "Paid",
      items: 3,
    },
    {
      id: "ORD-12346",
      customer: "Sarah Williams",
      date: "2023-03-14",
      total: "$129.99",
      status: "Processing",
      payment: "Paid",
      items: 1,
    },
    {
      id: "ORD-12347",
      customer: "Michael Brown",
      date: "2023-03-14",
      total: "$89.95",
      status: "Shipped",
      payment: "Paid",
      items: 2,
    },
    {
      id: "ORD-12348",
      customer: "Emily Davis",
      date: "2023-03-13",
      total: "$345.87",
      status: "Delivered",
      payment: "Paid",
      items: 4,
    },
    {
      id: "ORD-12349",
      customer: "David Wilson",
      date: "2023-03-13",
      total: "$199.99",
      status: "Processing",
      payment: "Pending",
      items: 1,
    },
    {
      id: "ORD-12350",
      customer: "Jessica Taylor",
      date: "2023-03-12",
      total: "$67.50",
      status: "Cancelled",
      payment: "Refunded",
      items: 1,
    },
    {
      id: "ORD-12351",
      customer: "Robert Martinez",
      date: "2023-03-12",
      total: "$432.10",
      status: "Delivered",
      payment: "Paid",
      items: 5,
    },
    {
      id: "ORD-12352",
      customer: "Jennifer Anderson",
      date: "2023-03-11",
      total: "$234.56",
      status: "Delivered",
      payment: "Paid",
      items: 2,
    },
  ]

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>View and manage your customer orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search orders..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" className="flex gap-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Delivered"
                            ? "default"
                            : order.status === "Processing"
                              ? "secondary"
                              : order.status === "Shipped"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.payment === "Paid"
                            ? "default"
                            : order.payment === "Pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {order.payment}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Update status</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Print invoice</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <strong>{filteredOrders.length}</strong> of <strong>{orders.length}</strong> orders
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

