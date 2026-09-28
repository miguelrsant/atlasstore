"use client"

import { DynamicFrameLayout, type Frame } from "@/components/ui/dynamic-frame-layout"
import { img } from "@/data/loja"

// Demo com as fotos da Atlas no lugar dos vídeos do exemplo original.
const fotos = ["look1.jpg", "temporada.jpg", "look2.jpg", "estampa-costas.jpg", "look3.jpg", "look4.jpg", "camiseta-frente.jpg", "look1.jpg", "look2.jpg"]

const demoFrames: Frame[] = fotos.map((foto, i) => ({
  id: i + 1,
  image: img(foto),
  defaultPos: { x: (i % 3) * 4, y: Math.floor(i / 3) * 4, w: 4, h: 4 },
  mediaSize: 1,
  isHovered: false,
}))

export function DemoPage() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <DynamicFrameLayout frames={demoFrames} className="w-full h-full" hoverSize={6} gapSize={4} />
    </div>
  )
}
