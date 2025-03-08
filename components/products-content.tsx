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
import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"

export function ProductsContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: "PROD-001",
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$129.99",
      stock: 45,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "PROD-002",
      name: "Smart Watch",
      category: "Electronics",
      price: "$199.99",
      stock: 28,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "PROD-003",
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: "$79.99",
      stock: 0,
      status: "Out of Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "PROD-004",
      name: "Laptop Backpack",
      category: "Accessories",
      price: "$49.99",
      stock: 124,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "PROD-005",
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: "$149.99",
      stock: 12,
      status: "Low Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "PROD-006",
      name: "Ergonomic Mouse",
      category: "Electronics",
      price: "$59.99",
      stock: 38,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "PROD-007",
      name: "USB-C Hub",
      category: "Accessories",
      price: "$39.99",
      stock: 5,
      status: "Low Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "PROD-008",
      name: "Wireless Charger",
      category: "Electronics",
      price: "$29.99",
      stock: 62,
      status: "In Stock",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
          <CardDescription>View and manage your product inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
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
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">{product.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "In Stock"
                            ? "default"
                            : product.status === "Low Stock"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {product.status}
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
                          <DropdownMenuItem>Edit product</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete product</DropdownMenuItem>
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
            Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
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

