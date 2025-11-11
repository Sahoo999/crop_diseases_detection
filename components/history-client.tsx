// components/history-client.tsx
"use client"

import React, { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Trash2, Eye } from "lucide-react"
import Image from "next/image"

type HistoryEntry = {
  id: string
  title: string
  detected: string
  confidence: number
  date: string // ISO string
  image?: string // optional data URL or path
}

/** Static fallback examples (no dynamic `new Date()` at module load) */
const exampleMock: Omit<HistoryEntry, "date">[] = [
  {
    id: "1",
    title: "Tomato - Leaf 01",
    detected: "Early Blight",
    confidence: 0.92,
    image: "/examples/image.png",
  },
  {
    id: "2",
    title: "Wheat - Field 03",
    detected: "Rust",
    confidence: 0.87,
    image: "/examples/wheat.jpg",
  },
  {
    id: "3",
    title: "Potato - Sample A",
    detected: "Healthy",
    confidence: 0.99,
    image: "/examples/potato.jpg",
  },
]

export function HistoryClient() {
  // items is null while loading — ensures server and client initial HTML match (no dynamic dates)
  const [items, setItems] = useState<HistoryEntry[] | null>(null)
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<HistoryEntry | null>(null)

  // Hydrate on client: read localStorage and produce dates here (client-only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("analysisHistory")
      if (raw) {
        setItems(JSON.parse(raw) as HistoryEntry[])
        return
      }
    } catch (err) {
      // ignore parse errors
    }
    // If no stored history, create initialMock with stable dates generated on client mount
    const now = Date.now()
    const fallback: HistoryEntry[] = exampleMock.map((m, i) => ({
      ...m,
      id: m.id,
      // create staggered timestamps so the examples look reasonable
      date: new Date(now - i * 1000 * 60 * 60 * 24).toISOString(),
    }))

    setItems(fallback)
    // persist the fallback so future loads are consistent
    try {
      localStorage.setItem("analysisHistory", JSON.stringify(fallback))
    } catch {}
  }, [])

  // persist to localStorage whenever items change (client-only)
    // persist to localStorage whenever items change (client-only)
  useEffect(() => {
    if (!items) return
    try {
      localStorage.setItem("analysisHistory", JSON.stringify(items))
    } catch {}
  }, [items])

  // ✅ FIXED: declare useMemo BEFORE early return
  const filtered = useMemo(() => {
    if (!items) return []
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.detected.toLowerCase().includes(q) ||
        it.date.toLowerCase().includes(q)
    )
  }, [items, query])

  // while items is null (server-render placeholder), show a simple loading / skeleton
  if (items === null) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-3">
          <div className="h-6 w-1/3 bg-muted/40 rounded" />
          <div className="h-20 bg-card/50 rounded" />
        </div>
      </div>
    )
  }


  const handleDelete = (id: string) => {
    setItems((prev) => (prev ? prev.filter((p) => p.id !== id) : prev))
    if (selected?.id === id) setSelected(null)
  }

  const clearAll = () => {
    if (!confirm("Clear full history? This action cannot be undone.")) return
    setItems([])
    setSelected(null)
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search history (title, result, date)…"
            className="flex-1 min-w-0 bg-background border border-border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => setQuery("")}>
            Clear Search
          </Button>
          <Button variant="destructive" onClick={clearAll} className="text-white hover:text-white">
            <Trash2 size={16} />
            Clear History
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-sm text-muted-foreground">No history found.</div>
          ) : (
            filtered.map((it) => (
              <div
                key={it.id}
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 cursor-pointer hover:shadow"
                onClick={() => setSelected(it)}
              >
                <div className="relative w-20 h-14 rounded-md overflow-hidden bg-muted/30 shrink-0">
                  {it.image ? (
                    <Image src={it.image} alt={it.title} fill sizes="80px" className="object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs text-muted-foreground">No image</div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-medium text-foreground truncate">{it.title}</div>
                    {/* format date on client (now items populated only on client) */}
                    <div className="text-xs text-muted-foreground">{new Date(it.date).toLocaleString()}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Result:{" "}
                    <span className="font-medium text-foreground">{it.detected}</span> •{" "}
                    {(it.confidence * 100).toFixed(0)}% confidence
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(it.id)
                    }}
                    title="Delete"
                    className="p-2 rounded-md hover:bg-muted/10"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Details pane */}
        <div>
          {selected ? (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="relative w-36 h-28 rounded-md overflow-hidden bg-muted/30">
                  {selected.image ? (
                    <Image src={selected.image} alt={selected.title} fill sizes="150px" className="object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs text-muted-foreground">No image</div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{selected.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{new Date(selected.date).toLocaleString()}</p>

                  <div className="text-sm text-muted-foreground">
                    <div>
                      <strong>Detected:</strong> <span className="font-medium">{selected.detected}</span>
                    </div>
                    <div>
                      <strong>Confidence:</strong> {(selected.confidence * 100).toFixed(1)}%
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="default" onClick={() => alert("Open detail view (implement)")}>
                      <Eye size={14} /> View Details
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard?.writeText(JSON.stringify(selected))
                        alert("Copied")
                      }}
                    >
                      Export
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Notes</h4>
                <textarea className="w-full min-h-[120px] p-3 border border-border rounded-md bg-background text-sm" placeholder="Add notes about this analysis…" />
                <div className="mt-2 flex gap-2">
                  <Button onClick={() => alert("Saved (implement)")}>Save Notes</Button>
                  <Button variant="outline" onClick={() => setSelected(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">Select an entry to view details.</div>
          )}
        </div>
      </div>
    </div>
  )
}
