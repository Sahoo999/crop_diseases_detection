// components/profile-form.tsx
"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ProfileData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  farmSize: string
  cropType: string
  bio: string
  avatar?: string | null
}

const DEFAULT_PROFILE: ProfileData = {
  firstName: "Debangsu",
  lastName: "Sahoo",
  email: "sahoodebangsu@gmail.com",
  phone: "+91 1212121212",
  location: "West Bengal, India",
  farmSize: "4 acres",
  cropType: "Wheat, Rice, Cotton",
  bio: "Passionate farmer using technology to protect crops",
  avatar: null,
}

export function ProfileForm() {
  const [formData, setFormData] = useState<ProfileData>(DEFAULT_PROFILE)
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Load saved profile from localStorage (client-only)
  useEffect(() => {
    try {
      
      const raw = localStorage.getItem("profileHeader")
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ProfileData>
        setFormData((prev) => ({ ...prev, ...(parsed || {}) }))
      } else {
        // no saved data — ensure default is written so other components can read predictable data
        localStorage.setItem("profileHeader", JSON.stringify(DEFAULT_PROFILE))
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  // basic validators
  const validate = (data: ProfileData) => {
    const e: Record<string, string> = {}
    if (!data.firstName.trim()) e.firstName = "First name is required"
    if (!data.lastName.trim()) e.lastName = "Last name is required"

    // simple email regex (not exhaustive)
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(data.email)) e.email = "Enter a valid email"

    // simple phone validation (digits, +, spaces, dashes allowed)
    const phoneRe = /^[+\d][\d\s\-]{6,}$/ // basic sanity
    if (!phoneRe.test(data.phone)) e.phone = "Enter a valid phone number"

    if (!data.location.trim()) e.location = "Location is required"
    if (!data.cropType.trim()) e.cropType = "Add at least one crop"
    if (data.bio.length > 1000) e.bio = "Bio must be under 1000 characters"

    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSave = async () => {
    // validate
    const v = validate(formData)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setIsSaving(true)
    try {
      // simulate network latency
      await new Promise((res) => setTimeout(res, 600))

      // persist to localStorage (ProfileHeader reads from same key)
      try {
        localStorage.setItem("profileHeader", JSON.stringify(formData))
      } catch {
        // ignore quota errors
      }

      setSavedMessage("Profile saved")
      setTimeout(() => setSavedMessage(null), 2500)
    } finally {
      setIsSaving(false)
    }
  }

  const errorFor = (field: keyof ProfileData) => errors[field] || ""

  const isValid = Object.keys(validate(formData)).length === 0

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full"
          />
          {errorFor("firstName") && <div className="text-xs text-destructive mt-1">{errorFor("firstName")}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full" />
          {errorFor("lastName") && <div className="text-xs text-destructive mt-1">{errorFor("lastName")}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full" />
          {errorFor("email") && <div className="text-xs text-destructive mt-1">{errorFor("email")}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
          <Input name="phone" value={formData.phone} onChange={handleChange} className="w-full" />
          {errorFor("phone") && <div className="text-xs text-destructive mt-1">{errorFor("phone")}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Location</label>
          <Input name="location" value={formData.location} onChange={handleChange} className="w-full" />
          {errorFor("location") && <div className="text-xs text-destructive mt-1">{errorFor("location")}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Farm Size</label>
          <Input name="farmSize" value={formData.farmSize} onChange={handleChange} className="w-full" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Crop Types</label>
        <Input name="cropType" value={formData.cropType} onChange={handleChange} className="w-full" />
        {errorFor("cropType") && <div className="text-xs text-destructive mt-1">{errorFor("cropType")}</div>}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground"
        />
        {errorFor("bio") && <div className="text-xs text-destructive mt-1">{errorFor("bio")}</div>}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-success">{savedMessage ?? ""}</div>
        <Button
          onClick={handleSave}
          disabled={isSaving || !isValid}
          className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
