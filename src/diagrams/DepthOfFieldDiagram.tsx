import { useState, useEffect, useRef } from 'react'
import { Frame, Camera } from './primitives'

type Mode = 'shallow' | 'deep' | 'rack'

interface PlaneSpec {
  id: string
  x: number
  y: number
  r: number
  label: string
  distance: number
}

const PLANES: PlaneSpec[] = [
  { id: 'fg', x: 0.18, y: 0.62, r: 32, label: 'foreground', distance: 1 },
  { id: 'mid', x: 0.42, y: 0.55, r: 42, label: 'midground (subject)', distance: 2 },
  { id: 'bg', x: 0.74, y: 0.5, r: 64, label: 'background', distance: 3 },
]

export function DepthOfFieldDiagram() {
  const [mode, setMode] = useState<Mode>('shallow')
  const [rackTarget, setRackTarget] = useState<'fg' | 'bg'>('fg')
  const [t, setT] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (mode !== 'rack') {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }
    const period = 2400
    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts
      const elapsed = ((ts - startRef.current) % period) / period
      const tri = elapsed < 0.5 ? elapsed * 2 : 2 - elapsed * 2
      setT(tri)
      setRackTarget(elapsed < 0.5 ? 'fg' : 'bg')
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = null
    }
  }, [mode])

  const W = 520
  const H = 320

  const getBlur = (planeId: string) => {
    if (mode === 'deep') return 0
    if (mode === 'shallow') {
      if (planeId === 'mid') return 0
      return planeId === 'fg' ? 5 : 8
    }
    // rack mode: shifts between fg and bg
    if (planeId === 'mid') return 4
    if (planeId === 'fg') return rackTarget === 'fg' ? 0 + t * 1 : 8
    if (planeId === 'bg') return rackTarget === 'bg' ? 0 + t * 1 : 8
    return 0
  }

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <defs>
          {PLANES.map((p) => (
            <filter key={p.id} id={`blur-${p.id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation={getBlur(p.id)} />
            </filter>
          ))}
        </defs>
        <text x={12} y={20} fontSize={11} fill="#9a9690">side view · {mode === 'shallow' ? 'shallow DOF (low f-stop, e.g. f/1.4)' : mode === 'deep' ? 'deep DOF (high f-stop, e.g. f/16)' : 'rack focus animation'}</text>
        <line x1={0} y1={H * 0.85} x2={W} y2={H * 0.85} stroke="#9a9690" />
        <Camera x={W * 0.95} y={H * 0.55} rotation={180} />
        <text x={W * 0.95} y={H * 0.7} fontSize={10} textAnchor="middle" fill="var(--color-ink)">camera</text>

        {PLANES.map((p) => {
          const blur = getBlur(p.id)
          const inFocus = blur < 1
          return (
            <g key={p.id} filter={`url(#blur-${p.id})`}>
              <circle
                cx={p.x * W}
                cy={p.y * H}
                r={p.r}
                fill={p.id === 'mid' ? 'var(--color-paper)' : '#ded8cd'}
                stroke={inFocus ? 'var(--color-accent)' : 'var(--color-ink)'}
                strokeWidth={inFocus ? 2.5 : 1.2}
              />
            </g>
          )
        })}

        {PLANES.map((p) => (
          <text
            key={`l-${p.id}`}
            x={p.x * W}
            y={p.y * H + p.r + 16}
            fontSize={10}
            textAnchor="middle"
            fill="var(--color-ink)/70"
          >
            {p.label}
          </text>
        ))}
      </Frame>

      <div className="flex flex-wrap gap-2">
        {([
          ['shallow', 'Shallow DOF (f/1.4)'],
          ['deep', 'Deep DOF (f/16)'],
          ['rack', 'Rack focus'],
        ] as [Mode, string][]).map(([m, label]) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 text-xs border ${
              mode === m
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        {mode === 'shallow' && (
          <><strong>Shallow depth of field.</strong> A wide aperture (low f-number) keeps only one plane in sharp focus and renders foreground and background as soft, creamy blur. Isolates the subject; bokeh becomes a stylistic element. Common in narrative cinema and portrait-style documentary.</>
        )}
        {mode === 'deep' && (
          <><strong>Deep depth of field.</strong> A narrow aperture (high f-number) keeps everything from near to far in acceptable focus. Used when the relationships between foreground, subject, and background all matter — Welles\' Citizen Kane famously. Common in observational documentary because the subject can move and stay sharp.</>
        )}
        {mode === 'rack' && (
          <><strong>Rack focus / focus pull.</strong> The focus plane shifts within a single shot — typically from foreground to background or vice versa — guiding the viewer\'s attention without cutting. Requires shallow DOF to be visible; the focus puller is a dedicated crew role on fiction shoots.</>
        )}
      </p>
    </div>
  )
}
