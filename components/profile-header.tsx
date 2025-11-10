"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, MapPin, Mail, Phone, Edit3, Check, X } from "lucide-react"

export function ProfileHeader() {
  // persisted state
  const [bio, setBio] = useState<string>("")
  const [avatar, setAvatar] = useState<string | null>(null) // data URL or null

  // editing state
  const [isEditing, setIsEditing] = useState(false)
  const [tempBio, setTempBio] = useState("")
  const [tempAvatar, setTempAvatar] = useState<string | null>(null) // preview while editing

  const fileRef = useRef<HTMLInputElement | null>(null)

  // load saved profile from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("profileHeader")
      if (saved) {
        const parsed = JSON.parse(saved) as { bio?: string; avatar?: string | null }
        if (parsed.bio) setBio(parsed.bio)
        if (parsed.avatar) setAvatar(parsed.avatar)
      } else {
        // initial defaults
        setBio(
          "Passionate about AI and backend development. Always exploring new technologies to build impactful solutions."
        )
      }
      // initialize temp fields as copies
      setTempBio((prev) => prev || (localStorage.getItem("profileHeader") ? (JSON.parse(localStorage.getItem("profileHeader") || "{}").bio || "") : ""))
    } catch {
      // ignore
    }
  }, [])

  // update temp fields when entering edit mode
  useEffect(() => {
    if (isEditing) {
      setTempBio(bio)
      setTempAvatar(avatar)
    }
  }, [isEditing, bio, avatar])

  // helper: persist to localStorage
  const persist = (nextBio: string, nextAvatar: string | null) => {
    try {
      localStorage.setItem("profileHeader", JSON.stringify({ bio: nextBio, avatar: nextAvatar }))
    } catch {}
  }

  const handleSave = () => {
    const nextBio = tempBio.trim() || bio
    const nextAvatar = tempAvatar ?? avatar
    setBio(nextBio)
    setAvatar(nextAvatar)
    persist(nextBio, nextAvatar)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempBio(bio)
    setTempAvatar(avatar)
    setIsEditing(false)
  }

  // open file picker
  const openFilePicker = () => {
    if (!fileRef.current) return
    fileRef.current.click()
  }

  // handle selected file
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (!f) return
    if (!f.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setTempAvatar(result) // preview immediately in edit mode
    }
    reader.readAsDataURL(f)
    // reset input value so same file can be reselected later
    e.currentTarget.value = ""
  }

  return (
    <div className="bg-linear-to-r from-primary via-accent to-primary/80 rounded-xl p-8 text-white relative overflow-hidden">
      {/* background decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white/10">
              { (isEditing ? tempAvatar : avatar) ? (
                // use native <img> for data URLs (safe in client component)
                <img
                  src={isEditing ? (tempAvatar ?? undefined) : (avatar ?? undefined)}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* hidden file input */}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onFileChange}
            />

            {/* Camera / upload button */}
            <button
              onClick={() => {
                // If editing, open the picker for preview
                // If not editing, start editing and open picker
                if (!isEditing) setIsEditing(true)
                // give state a tick then open (setTimeout minimal to ensure fileRef exists)
                setTimeout(() => openFilePicker(), 50)
              }}
              title="Change photo"
              className="absolute bottom-0 right-0 bg-white text-primary p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <Camera size={20} />
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Debangsu Sahoo</h1>

            <div className="flex flex-col gap-2 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>sahoodebangsu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 1212121212</span>
              </div>
            </div>

            {/* Bio section */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-white/90">Bio</h2>

                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition"
                    aria-label="Edit bio"
                  >
                    <Edit3 size={16} /> Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition"
                    >
                      <Check size={16} /> Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-1 text-sm text-white/80 hover:text-red-300 transition"
                    >
                      <X size={16} /> Cancel
                    </button>
                  </div>
                )}
              </div>

              {!isEditing ? (
                <p className="text-white/80 leading-relaxed">{bio}</p>
              ) : (
                <textarea
                  value={tempBio}
                  onChange={(e) => setTempBio(e.target.value)}
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-md p-2 text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Write something about yourself..."
                />
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 md:flex-col mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-2xl font-bold">48</div>
              <div className="text-sm text-white/80">Analyses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-white/80">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
