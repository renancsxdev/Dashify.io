"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, Plus } from "lucide-react"

export function BillingContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Billing & Payments</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Payment Method
        </Button>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Business Pro</div>
                <div className="flex items-center mt-1">
                  <Badge>Active</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Your plan renews on April 1, 2023</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$49.99</div>
                <p className="text-xs text-muted-foreground mt-2">Last payment on March 1, 2023</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 / 10</div>
                <p className="text-xs text-muted-foreground mt-2">2 seats available</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Invoice</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$49.99</div>
                <p className="text-xs text-muted-foreground mt-2">Due on April 1, 2023</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Plan Details</CardTitle>
              <CardDescription>Your current plan and usage information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium">Plan Features</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      10 User Seats
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Unlimited Products
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Analytics Dashboard
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      24/7 Support
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Usage This Month</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>API Calls:</span>
                      <span className="font-medium">45,231 / 50,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Storage:</span>
                      <span className="font-medium">3.2 GB / 10 GB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Bandwidth:</span>
                      <span className="font-medium">150 GB / 200 GB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Change Plan</Button>
              <Button variant="destructive">Cancel Subscription</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2024</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 5555</p>
                      <p className="text-sm text-muted-foreground">Expires 07/2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Set as default
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add New Payment Method
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>View and download your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Invoice #INV-001</p>
                      <p className="text-sm text-muted-foreground">March 1, 2023</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Paid</Badge>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Amount: <span className="font-medium">$49.99</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Invoice #INV-002</p>
                      <p className="text-sm text-muted-foreground">February 1, 2023</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Paid</Badge>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Amount: <span className="font-medium">$49.99</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Invoice #INV-003</p>
                      <p className="text-sm text-muted-foreground">January 1, 2023</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Paid</Badge>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Amount: <span className="font-medium">$49.99</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

