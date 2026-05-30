'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Plane, Flame, Music } from 'lucide-react'

const projects = [
  {
    category: "AI • TRAVEL • WEB APP",
    title: "TripMate",
    description: "An AI-based travel booking platform for safe and verified vehicle rentals. Smart route suggestions, intuitive UI, and secure booking management — built to make travel stress-free.",
    tags: ["React", "Node.js", "AI", "MongoDB"],
    link: "https://tripmate-ride-hub.lovable.app/",
    linkLabel: "Live ↗",
    icon: Plane,
    glowColor: "rgba(212, 248, 122, 0.07)",
  },
  {
    category: "IOT • ARDUINO • ROBOTICS",
    title: "Fire Ends Here",
    description: "An autonomous fire-fighting robot built with Arduino UNO, flame sensors, motor drivers, and servo motors. Real-time fire detection and automated extinguishing response.",
    tags: ["Arduino", "IoT", "Embedded Systems", "C++"],
    link: "https://drive.google.com/drive/folders/1RjJmcWJsFsFXpJ9Fo9sTrsAGTt50tn4T",
    linkLabel: "Photos & Video ↗",
    icon: Flame,
    glowColor: "rgba(249, 115, 22, 0.07)",
  },
  {
    category: "MUSIC • WEB APP • FRONTEND",
    title: "SoundWave",
    description: "A Spotify-inspired music streaming app with modern UI, playlist management, and smooth playback — focused on performance and scalable frontend architecture.",
    tags: ["HTML", "CSS", "JavaScript", "MERN"],
    link: "https://sound-wave-sigma.vercel.app/",
    linkLabel: "Live ↗",
    icon: Music,
    glowColor: "rgba(168, 85, 247, 0.07)",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      data-cursor-hover
      className="group relative glass-panel card-hover-glow rounded-2xl p-6 md:p-8"
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ boxShadow: `0 20px 60px ${project.glowColor}` }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[11px] tracking-[0.15em] uppercase text-lime font-mono">
            {project.category}
          </span>
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <Icon
              className="w-5 h-5 text-warmgray group-hover:text-lime transition-colors duration-300"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        <h3 className="text-[24px] md:text-[28px] font-body font-bold text-kimono mb-4 tracking-tight">
          {project.title}
        </h3>

        <p className="text-[14px] text-warmgray leading-[1.7] mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] tracking-wide text-warmgray/80 font-mono px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:border-lime/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-void text-[12px] tracking-[0.1em] uppercase font-medium hover:bg-lime transition-colors duration-300 group/link opacity-70 group-hover:opacity-100"
        >
          {project.linkLabel}
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative bg-void py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div ref={headingRef} className="flex items-center gap-6 mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={isHeadingInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[72px] lg:text-[88px] font-display font-bold tracking-[0.02em] text-kimono whitespace-nowrap"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          PROJECTS
        </motion.h2>
        <div className="flex-1 hairline" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
