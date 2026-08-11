'use client'

const items = [
  'Branding',
  'Web Design',
  'Short-form Video',
  'Paid Ads',
  'Social Content',
  'Copywriting',
  'Growth Strategy',
]

export default function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-border bg-white/10 backdrop-blur-md py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-12 pr-12 text-sm uppercase tracking-[0.2em] font-semibold text-muted-foreground"
          >
            {item}
            <span className="text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
