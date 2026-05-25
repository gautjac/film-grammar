import { useState, useEffect, useRef } from 'react'
import { Frame, Camera } from './primitives'

type Mode = 'dolly' | 'zoom' | 'dolly-zoom'

export function DollyVsZoomDiagram() {
  const [mode, setMode] = useState<Mode>('dolly')
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(true)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }
    const period = 3200
    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts
      const elapsed = (ts - startRef.current) % period
      const phase = elapsed / period
      const tri = phase < 0.5 ? phase * 2 : 2 - phase * 2
      setT(tri)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = null
    }
  }, [playing, mode])

  const W = 520
  const H = 320
  const subjectX = W * 0.32
  const subjectY = H / 2
  const bgX = W * 0.78
  const bgY = H / 2

  const camStart = W * 0.92
  const camEnd = W * 0.55
  const camX = mode === 'zoom' ? camStart : camStart + (camEnd - camStart) * t
  const fov = mode === 'dolly' ? 28 : 28 - 18 * t

  const subjectScale = mode === 'dolly' ? 1 + t * 1.6 : 1 + t * 1.6
  const bgScale = mode === 'dolly' ? 1 + t * 0.15 : 1 + t * 1.4

  const subjR = 26 * subjectScale
  const bgR = 70 * bgScale

  const previewW = 220
  const previewH = 140

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-3">
        <Frame viewBox={`0 0 ${W} ${H}`}>
          <line x1={0} y1={H - 24} x2={W} y2={H - 24} stroke="#9a9690" />
          <circle cx={bgX} cy={bgY} r={70} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={1} />
          <circle cx={subjectX} cy={subjectY} r={26} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
          <text x={subjectX} y={subjectY + 4} fontSize={10} textAnchor="middle" fill="var(--color-ink)">subject</text>
          <text x={bgX} y={bgY + 4} fontSize={10} textAnchor="middle" fill="var(--color-ink)">background</text>

          <g>
            {(() => {
              const camY = subjectY
              const rad = (fov * Math.PI) / 180
              const reach = camX
              const halfH = Math.tan(rad / 2) * reach
              const points = `${camX},${camY} ${0},${camY - halfH} ${0},${camY + halfH}`
              return <polygon points={points} fill="var(--color-accent)" opacity={0.08} />
            })()}
            <Camera x={camX} y={subjectY} rotation={180} label={`${Math.round(fov)}° FOV`} />
          </g>
        </Frame>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">What the camera sees</div>
          <svg
            viewBox={`0 0 ${previewW} ${previewH}`}
            style={{
              width: '100%',
              background: 'var(--color-paper)',
              border: '1px solid var(--color-rule)',
            }}
          >
            <circle cx={previewW * 0.62} cy={previewH * 0.5} r={bgR} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={1} />
            <circle cx={previewW * 0.4} cy={previewH * 0.55} r={subjR} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <rect x={1} y={1} width={previewW - 2} height={previewH - 2} fill="none" stroke="var(--color-accent)" strokeWidth={2} />
          </svg>
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">
            {mode === 'dolly' && 'Dolly in: camera moves toward subject. Background grows slowly relative to subject — natural perspective.'}
            {mode === 'zoom' && 'Zoom in: focal length increases, camera stationary. Subject and background grow together — compressed, flat.'}
            {mode === 'dolly-zoom' && 'Dolly + counter-zoom: physical dolly while zooming opposite direction. Subject stays the same size, background warps. The Vertigo effect.'}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {(['dolly', 'zoom', 'dolly-zoom'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 text-xs border ${
              mode === m
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {m === 'dolly' ? 'Dolly' : m === 'zoom' ? 'Zoom' : 'Dolly-zoom'}
          </button>
        ))}
        <button
          onClick={() => setPlaying((p) => !p)}
          className="ml-auto px-3 py-1.5 text-xs border border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  )
}
