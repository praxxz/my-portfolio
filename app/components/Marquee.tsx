'use client'

export default function Marquee() {
  const services = [
    "FULL-STACK WEB DEVELOPMENT",
    "FLUTTER APP DEVELOPMENT",
    "AI-BASED PRODUCTS",
    "MERN STACK",
    "UI/UX DESIGN",
    "TUTOR & MENTOR",
  ]

  // Join once — CSS animation handles the loop by duplicating the DOM node
  const content = services.join("  •  ") + "  •  "

  return (
    <div
      className="w-full overflow-hidden bg-white/[0.04] border-b border-white/[0.08] py-3"
      onMouseEnter={e => {
        const el = e.currentTarget.querySelector('.marquee-track') as HTMLElement
        if (el) el.style.animationPlayState = 'paused'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget.querySelector('.marquee-track') as HTMLElement
        if (el) el.style.animationPlayState = 'running'
      }}
    >
      {/* Two identical spans — animation moves from 0 to -50% creating a seamless loop */}
      <div className="marquee-track flex whitespace-nowrap animate-marquee">
        <span className="text-[11px] tracking-[0.18em] uppercase text-warmgray font-body shrink-0">
          {content}
        </span>
        <span className="text-[11px] tracking-[0.18em] uppercase text-warmgray font-body shrink-0" aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  )
}
