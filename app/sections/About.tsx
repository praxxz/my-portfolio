'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Terminal, Globe, Smartphone, Wrench } from 'lucide-react'

const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python"],
    icon: Terminal,
  },
  {
    category: "Web Dev",
    items: ["HTML", "CSS", "JavaScript", "MERN Stack"],
    icon: Globe,
  },
  {
    category: "App Dev",
    items: ["Flutter"],
    icon: Smartphone,
  },
  {
    category: "Tools",
    items: ["VS Code", "GitHub", "ChatGPT", "Google AI Studio", "Loveable"],
    icon: Wrench,
  },
]

function SkillNode({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1], 
        delay: index * 0.2 
      }}
      className="relative flex items-start gap-6 group"
    >
      {/* Node dot */}
      <div className="relative flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-lime shadow-[0_0_12px_rgba(212,248,122,0.4)] z-10" />
        {index < skills.length - 1 && (
          <div className="w-px h-24 bg-white/10 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex items-center gap-3 mb-2">
          <Icon 
            className="w-4 h-4 text-warmgray group-hover:text-lime transition-colors duration-300" 
            strokeWidth={1.5} 
          />
          <h4 className="text-[13px] tracking-[0.15em] uppercase text-kimono font-body font-medium">
            {skill.category}
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item) => (
            <span 
              key={item}
              className="text-[12px] text-warmgray font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] group-hover:border-lime/20 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative bg-void py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section Heading with hairline rules */}
      <div ref={headingRef} className="flex items-center gap-6 mb-20 md:mb-28">
        <div className="flex-1 hairline" />
        <motion.h2
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={isHeadingInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[72px] lg:text-[88px] font-display font-bold tracking-[0.02em] text-kimono whitespace-nowrap"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          ABOUT ME
        </motion.h2>
        <div className="flex-1 hairline" />
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Text */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[18px] md:text-[20px] text-kimono/90 leading-[1.7] font-light"
          >
            I&apos;m Prathamesh — a second-year Computer Engineering student at VPM&apos;s College of Engineering, Thane. I build web apps, mobile apps, and AI-powered products that solve{" "}
            <span className="text-lime lime-glow">real problems</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-serif text-[18px] md:text-[20px] text-kimono/70 leading-[1.7] font-light"
          >
            Currently exploring MERN Stack, Flutter, and AI integrations — while tutoring{" "}
            <span className="text-lime lime-glow">10+ students</span>{" "}
            in Science, Math, and Computer Science on the side.
          </motion.p>
        </div>

        {/* Right Column - Skills Timeline */}
        <div className="lg:pl-8">
          <div className="relative">
            {/* Vertical hairline */}
            <div className="absolute left-[5px] top-1.5 bottom-0 w-px bg-white/10" />

            <div className="space-y-2">
              {skills.map((skill, index) => (
                <SkillNode key={skill.category} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}