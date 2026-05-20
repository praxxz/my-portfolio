'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Github,
  Linkedin,
  Code2,
  Download,
} from 'lucide-react'

import Marquee from '../components/Marquee'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const creativeY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-charcoal overflow-hidden"
    >
      {/* Marquee */}
      <div className="relative z-50">
        <Marquee />
      </div>

      {/* Background Layer */}
      <motion.div
        style={{ y: bgY, willChange: 'transform' }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#151210] to-black" />

        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-gradient-radial from-white/[0.03] to-transparent blur-3xl" />

        <div className="absolute top-[10%] left-[15%] w-[30%] h-[40%] bg-champagne/[0.03] blur-[120px] rounded-full" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')]" />
      </motion.div>

      {/* Decorative Tech Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">

        {/* Top Right Grid */}
        <div className="absolute top-[12%] right-[10%] opacity-30">
          <div className="w-[140px] h-[140px] border border-champagne/[0.06] rotate-45" />
        </div>

        {/* Floating Accent */}
        <div className="absolute top-[28%] left-[22%] text-champagne/60 text-xl">
          ✦
        </div>

        {/* Tiny Glow Dot */}
        <div className="absolute top-[22%] right-[24%] w-1.5 h-1.5 rounded-full bg-champagne/60 blur-[1px]" />

        {/* Center Glow Line */}
        <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[220px] h-[1px] bg-gradient-to-r from-transparent via-champagne/60 to-transparent blur-[1px]" />

        {/* Left Glow */}
        <div className="absolute bottom-[22%] left-[18%] w-[6px] h-[6px] rounded-full bg-champagne blur-[3px]" />

        {/* Right Glow */}
        <div className="absolute bottom-[26%] right-[18%] w-[6px] h-[6px] rounded-full bg-champagne blur-[3px]" />
      </div>

      {/* CREATIVE TEXT */}
      <motion.div
        style={{ y: creativeY, willChange: 'transform' }}
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none select-none"
      >
        <h1
          className="font-display text-[24vw] md:text-[22vw] font-bold leading-none tracking-tight text-champagne/80"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            letterSpacing: '-0.03em',
            textShadow: '0 0 40px rgba(212,175,55,0.18)',
          }}
        >
          CREATIVE
        </h1>
      </motion.div>

      {/* PHOTO SECTION */}
      <motion.div
        style={{ y: photoY, willChange: 'transform' }}
        className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="relative mt-12"
        >
          {/* Cinematic Glow + Rings */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">

            {/* Main Glow */}
            <div className="w-[420px] h-[420px] md:w-[580px] md:h-[580px] rounded-full bg-champagne/[0.14] blur-[120px]" />

            {/* Ring 1 */}
            <div className="absolute w-[520px] h-[520px] md:w-[720px] md:h-[720px] rounded-full border border-champagne/[0.08]" />

            {/* Ring 2 */}
            <div className="absolute w-[640px] h-[640px] md:w-[860px] md:h-[860px] rounded-full border border-champagne/[0.04]" />

            {/* Floating Particles */}
            <div className="absolute top-[18%] left-[28%] w-1 h-1 rounded-full bg-champagne/70 blur-[1px]" />
            <div className="absolute top-[26%] right-[30%] w-1.5 h-1.5 rounded-full bg-champagne/50 blur-[1px]" />
            <div className="absolute bottom-[22%] left-[25%] w-1 h-1 rounded-full bg-champagne/50 blur-[1px]" />
            <div className="absolute bottom-[28%] right-[24%] w-1 h-1 rounded-full bg-champagne/40 blur-[1px]" />
          </div>

          {/* PHOTO */}
          <div className="relative w-[300px] sm:w-[360px] md:w-[520px] lg:w-[620px] aspect-[3/4]">

            <img
              src="/images/photo.png"
              alt="Prathamesh Tikone"
              className="absolute inset-0 w-full h-full object-cover object-top drop-shadow-[0_0_45px_rgba(212,175,55,0.18)]"
            />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* UI CONTENT */}
      <div className="relative z-50 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-8 pb-12 pointer-events-none">

        {/* TOP ROW */}
        <div className="flex justify-between items-start pointer-events-auto">

          {/* LEFT */}
          <div className="flex flex-col">

            <h2 className="text-[13px] tracking-[0.18em] uppercase text-kimono font-body font-medium">
              PRATHAMESH TIKONE
            </h2>

            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href="https://drive.google.com/file/d/1PL-VVRYEoAOwCbs8u5zJVvG59V582iAc/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 w-fit px-5 py-3 rounded-full border border-champagne/20 bg-champagne/[0.06] backdrop-blur-md hover:bg-champagne/[0.12] hover:border-champagne/40 transition-all duration-300 group pointer-events-auto"
            >
              <Download
                className="w-4 h-4 text-champagne group-hover:translate-y-[1px] transition-transform"
                strokeWidth={1.8}
              />

              <span className="text-[11px] tracking-[0.18em] uppercase text-champagne font-mono">
                Download Resume
              </span>
            </a>

            {/* GitHub text */}
            <div className="flex items-center gap-2 mt-5">
              <Code2
                className="w-3.5 h-3.5 text-warmgray"
                strokeWidth={1.5}
              />

              <span className="text-[12px] tracking-wide text-warmgray font-mono">
                praxxz 
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right hidden md:block">
            <p className="font-serif text-[18px] md:text-[22px] text-kimono/85 italic leading-relaxed">
              Code that ships.
            </p>

            <p className="font-serif text-[18px] md:text-[22px] text-kimono/85 italic leading-relaxed">
              Products that matter.
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pointer-events-auto">

          {/* SOCIALS */}
          <div className="flex gap-3">

            {/* GITHUB */}
            <a
              href="https://github.com/praxxz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 px-4 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md hover:border-champagne/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <Github
                className="w-4 h-4 text-warmgray group-hover:text-champagne transition-colors"
                strokeWidth={1.5}
              />

              {/* Desktop Text */}
              <span className="hidden sm:inline text-[11px] tracking-[0.1em] uppercase text-warmgray group-hover:text-kimono font-mono transition-colors">
                github.com/praxxz
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/prathamesh-tikone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 px-4 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md hover:border-champagne/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <Linkedin
                className="w-4 h-4 text-warmgray group-hover:text-champagne transition-colors"
                strokeWidth={1.5}
              />

              {/* Desktop Text */}
              <span className="hidden sm:inline text-[11px] tracking-[0.1em] uppercase text-warmgray group-hover:text-kimono font-mono transition-colors">
                linkedin.com/in/prathamesh-tikone
              </span>
            </a>
          </div>

          {/* TITLE */}
          <motion.div
            style={{ y: titleY, willChange: 'transform' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.6,
            }}
            className="text-right"
          >
            <h3
              className="text-[34px] md:text-[52px] font-display font-bold tracking-[0.04em] text-kimono leading-none"
              style={{
                fontFamily: "'Oswald', sans-serif",
                textShadow: '0 0 20px rgba(255,255,255,0.06)',
              }}
            >
              DEVELOPER & BUILDER
            </h3>

            <p className="mt-4 text-[12px] md:text-[14px] tracking-[0.35em] uppercase text-champagne/80 font-mono">
              I BUILD • I SHIP • I IMPACT
            </p>
          </motion.div>
        </div>
      </div>

      {/* BIO STRIP */}
      <div className="relative z-50 bg-charcoal border-t border-white/[0.06] py-12 md:py-16 px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-[880px] mx-auto text-center text-[14px] md:text-[15px] leading-[1.9] text-warmgray font-body"
        >
          Between curiosity and craft lies the space where I build.
          From AI-powered travel platforms to fire-fighting robots
          and music apps, my work revolves around shipping real things —
          with clean code, thoughtful UI, and a passion for solving
          problems that matter.
        </motion.p>
      </div>
    </section>
  )
}