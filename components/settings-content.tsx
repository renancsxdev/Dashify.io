"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function SettingsContent() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Write a short bio about yourself"
                  defaultValue="Product Manager with 5+ years of experience in SaaS companies."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Product Manager" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Update your profile picture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover border"
                />
                <div className="space-y-2">
                  <Button variant="outline">Upload New Picture</Button>
                  <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-12">UTC-12:00</SelectItem>
                    <SelectItem value="utc-8">UTC-08:00</SelectItem>
                    <SelectItem value="utc-5">UTC-05:00</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="utc+1">UTC+01:00</SelectItem>
                    <SelectItem value="utc+3">UTC+03:00</SelectItem>
                    <SelectItem value="utc+8">UTC+08:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New password</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Change Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>Irreversible account actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-destructive/20 p-4">
                <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive" className="mt-4">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new products, features, and more
                    </p>
                  </div>
                  <Switch id="marketing-emails" checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notification Types</h3>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-orders" defaultChecked />
                    <Label htmlFor="notify-orders">New orders</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-customers" defaultChecked />
                    <Label htmlFor="notify-customers">New customers</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-products" />
                    <Label htmlFor="notify-products">Product updates</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-reports" defaultChecked />
                    <Label htmlFor="notify-reports">Weekly reports</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of the dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-muted">
                      <div className="w-full h-10 rounded bg-background border-2 border-primary"></div>
                    </div>
                    <span className="text-xs">Light</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-muted">
                      <div className="w-full h-10 rounded bg-slate-950 border-2 border-primary"></div>
                    </div>
                    <span className="text-xs">Dark</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-muted">
                      <div className="w-full h-10 rounded bg-gradient-to-r from-slate-100 to-slate-950 border-2 border-primary"></div>
                    </div>
                    <span className="text-xs">System</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Sidebar Position</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-muted">
                      <div className="flex h-10 w-full">
                        <div className="w-1/4 h-full bg-muted"></div>
                        <div className="w-3/4 h-full bg-background"></div>
                      </div>
                    </div>
                    <span className="text-xs">Left</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="border rounded-md p-2 cursor-pointer bg-background hover:bg-muted">
                      <div className="flex h-10 w-full">
                        <div className="w-3/4 h-full bg-background"></div>
                        <div className="w-1/4 h-full bg-muted"></div>
                      </div>
                    </div>
                    <span className="text-xs">Right</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Density</Label>
                <Select defaultValue="default">
                  <SelectTrigger>
                    <SelectValue placeholder="Select density" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

