"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsSection } from "@/components/settings-section"
import { NotificationSettings } from "@/components/notification-settings"
import { SubscriptionCard } from "@/components/subscription-card"
import { ThemeToggle } from "@/components/theme-toggle" // ✅ import theme toggle
import { Button } from "@/components/ui/button"
import { Shield, LogOut, Trash2 } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-gradient-mesh p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account, preferences, and subscription
            </p>
          </div>

          <div className="space-y-6">
            {/* Subscription Section */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Subscription
              </h2>
              <SubscriptionCard />
            </div>

            {/* Notifications Section */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Notifications
              </h2>
              <SettingsSection description="Control how you receive updates and alerts">
                <NotificationSettings />
              </SettingsSection>
            </div>

            {/* ✅ Preferences Section (Theme Toggle added here) */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Preferences
              </h2>
              <SettingsSection description="Customize your app appearance and experience">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Theme
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Choose Light, Dark, or follow System preference.
                    </p>
                  </div>

                  {/* ✅ Working ThemeToggle */}
                  <ThemeToggle />
                </div>
              </SettingsSection>
            </div>

            {/* Security Section */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Security
              </h2>
              <SettingsSection
                title="Security Settings"
                description="Manage your account security and login"
              >
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <Shield size={18} />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <Shield size={18} />
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <Shield size={18} />
                    Active Sessions
                  </Button>
                </div>
              </SettingsSection>
            </div>

            {/* Danger Zone */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Danger Zone
              </h2>
              <SettingsSection description="Irreversible actions">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <LogOut size={18} />
                    Sign Out
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 text-destructive hover:text-destructive bg-transparent"
                  >
                    <Trash2 size={18} />
                    Delete Account
                  </Button>
                </div>
              </SettingsSection>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
