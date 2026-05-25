import type { Still } from '../types'

export function Stills({ stills }: { stills: Still[] }) {
  if (stills.length === 0) return null
  return (
    <section className="space-y-3">
      <h2 className="text-xs uppercase tracking-wider text-[var(--color-ink)]/50">
        From the wild
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stills.map((still, i) => (
          <figure key={i} className="space-y-2">
            <div className="border border-[var(--color-rule)]/30 bg-black/5 overflow-hidden">
              <img
                src={still.src}
                alt={still.caption}
                loading="lazy"
                className="block w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-[var(--color-ink)]/70 space-y-0.5">
              <div className="leading-snug">{still.caption}</div>
              <div className="text-[var(--color-ink)]/50">
                {still.source} · <span className="italic">{still.license}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
