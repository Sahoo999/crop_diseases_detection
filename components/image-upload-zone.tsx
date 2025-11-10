"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, Camera, ImageIcon } from "lucide-react"

interface ImageUploadZoneProps {
  onImageSelect: (file: File) => void
  isLoading?: boolean
}

export function ImageUploadZone({ onImageSelect, isLoading }: ImageUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        onImageSelect(file)
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length > 0) {
      onImageSelect(files[0])
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative border-2 border-dashed rounded-xl p-12 text-center transition ${
        isDragging ? "border-primary bg-primary/5" : "border-border bg-muted/30 hover:border-primary/50"
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={isLoading}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
        disabled={isLoading}
      />

      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {isDragging ? "Drop image here" : "Upload crop image"}
          </h3>
          <p className="text-muted-foreground mb-4">Drag and drop an image, or click to browse</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="bg-primary hover:bg-primary-dark text-white"
          >
            <Upload className="w-4 h-4 mr-2" />
            Choose File
          </Button>
          <Button
            onClick={() => cameraInputRef.current?.click()}
            variant="outline"
            disabled={isLoading}
            className="border-border text-foreground hover:bg-muted"
          >
            <Camera className="w-4 h-4 mr-2" />
            Take Photo
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4">Supported formats: JPG, PNG, WebP (Max 10MB)</p>
      </div>
    </div>
  )
}
