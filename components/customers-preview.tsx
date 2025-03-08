"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CustomersPreview() {
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
  ]

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1200px] mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Last Order</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

