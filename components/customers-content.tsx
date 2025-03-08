"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"

export function CustomersContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const customers = [
    {
      id: "CUST-001",
      name: "Alex Johnson",
      email: "alex@example.com",
      status: "active",
      spent: "$1,234.56",
      orders: 12,
      lastOrder: "2023-03-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-002",
      name: "Sarah Williams",
      email: "sarah@example.com",
      status: "active",
      spent: "$2,567.89",
      orders: 24,
      lastOrder: "2023-03-12",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-003",
      name: "Michael Brown",
      email: "michael@example.com",
      status: "inactive",
      spent: "$876.54",
      orders: 8,
      lastOrder: "2023-02-28",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-004",
      name: "Emily Davis",
      email: "emily@example.com",
      status: "active",
      spent: "$3,421.87",
      orders: 32,
      lastOrder: "2023-03-14",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-005",
      name: "David Wilson",
      email: "david@example.com",
      status: "active",
      spent: "$1,987.65",
      orders: 18,
      lastOrder: "2023-03-10",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-006",
      name: "Jessica Taylor",
      email: "jessica@example.com",
      status: "inactive",
      spent: "$567.89",
      orders: 5,
      lastOrder: "2023-01-20",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-007",
      name: "Robert Martinez",
      email: "robert@example.com",
      status: "active",
      spent: "$4,321.09",
      orders: 36,
      lastOrder: "2023-03-16",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-008",
      name: "Jennifer Anderson",
      email: "jennifer@example.com",
      status: "active",
      spent: "$2,345.67",
      orders: 21,
      lastOrder: "2023-03-08",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Customers</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
          <CardDescription>View and manage your customer base</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search customers..."
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
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar} alt={customer.name} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-muted-foreground">{customer.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={customer.status === "active" ? "default" : "secondary"}>{customer.status}</Badge>
                    </TableCell>
                    <TableCell>{customer.spent}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>{customer.lastOrder}</TableCell>
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
                          <DropdownMenuItem>Edit customer</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete customer</DropdownMenuItem>
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
            Showing <strong>{filteredCustomers.length}</strong> of <strong>{customers.length}</strong> customers
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

