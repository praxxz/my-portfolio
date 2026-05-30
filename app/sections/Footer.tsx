'use client'

import { Github, Linkedin, Code2 } from 'lucide-react'

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/[0.08] py-10 md:py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

          <button
            onClick={() => smoothScrollTo('home')}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Scroll to top"
          >
            <Code2 className="w-4 h-4 text-warmgray group-hover:text-lime transition-colors duration-300" strokeWidth={1.5} />
            <span className="text-[13px] tracking-[0.18em] uppercase text-kimono group-hover:text-champagne font-body font-medium transition-colors duration-300">
              PRATHAMESH TIKONE
            </span>
          </button>

          <nav className="flex items-center gap-6 md:gap-8" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => smoothScrollTo(link.href.replace('#', ''))}
                className="text-[11px] tracking-[0.15em] uppercase text-warmgray hover:text-lime transition-colors duration-300 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-lime group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/praxxz"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label="GitHub profile"
              className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-warmgray hover:text-lime hover:border-lime/30 transition-all duration-300 group"
            >
               <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/prathamesh-tikone"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label="LinkedIn profile"
              className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-warmgray hover:text-lime hover:border-lime/30 transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="hairline mb-6" />

        <div className="text-center">
          <p className="text-[11px] text-warmgray/60 tracking-wide">
            Built with MERN Stack • Designed with intention • Thane, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
