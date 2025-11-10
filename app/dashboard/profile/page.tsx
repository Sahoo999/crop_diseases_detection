"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileForm } from "@/components/profile-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle" // ✅ Import working ThemeToggle

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-background text-foreground p-6 md:p-8 transition-colors">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader />

          <div className="mt-8">
            <Tabs defaultValue="edit" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="edit">Edit Profile</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              {/* Edit Profile */}
              <TabsContent value="edit" className="glass p-6 rounded-xl">
                <ProfileForm />
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-4">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      {
                        action: "Uploaded crop image",
                        details: "Wheat leaf analysis",
                        time: "2 hours ago",
                      },
                      {
                        action: "Disease detected",
                        details: "Powdery mildew identified",
                        time: "5 hours ago",
                      },
                      {
                        action: "Profile updated",
                        details: "Changed farm location",
                        time: "1 day ago",
                      },
                      { action: "Downloaded report", details: "Monthly analysis", time: "2 days ago" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between p-3 bg-card/50 rounded-lg border border-border/50"
                      >
                        <div>
                          <p className="font-medium text-foreground">{item.action}</p>
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences" className="space-y-4">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Display Preferences</h3>

                  <div className="space-y-3">
                    {/* ✅ Working ThemeToggle replaces dropdown */}
                    <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                      <div>
                        <span className="font-medium block">Theme</span>
                        <p className="text-sm text-muted-foreground">Switch app appearance</p>
                      </div>
                      <ThemeToggle /> {/* ✅ Global instant theme toggle */}
                    </div>

                    {/* Language selector (kept as-is) */}
                    <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                      <div>
                        <span className="font-medium block">Language</span>
                        <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                      </div>
                      <select className="bg-card border border-border rounded px-3 py-1 text-foreground">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Punjabi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
