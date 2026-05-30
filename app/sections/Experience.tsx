'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Briefcase, Award } from 'lucide-react'

const certifications = [
  {
    title: "Deloitte – Technology Job Simulation",
    org: "Forage",
    description: "Problem-solving, data analysis, and real-world tech workflows.",
  },
  {
    title: "Web Development – MERN Stack",
    org: "VPM's College of Engineering",
    description: "Full-stack web development with MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Android App Development",
    org: "VPM's College of Engineering",
    description: "Native Android development with Java and modern mobile architecture.",
  },
]

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1], 
        delay: index * 0.12 
      }}
      className="group relative p-5 md:p-6 rounded-xl border border-white/[0.10] bg-white/[0.02] hover:border-lime/30 transition-all duration-300"
    >
      <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-lime scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" strokeWidth={2} />
        <div>
          <h4 className="text-[14px] font-body font-semibold text-kimono mb-1">
            {cert.title}
          </h4>
          <p className="text-[12px] text-warmgray/70 font-mono mb-1">
            {cert.org}
          </p>
          <p className="text-[13px] text-warmgray leading-relaxed">
            {cert.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative bg-void py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="flex items-center gap-6 mb-16 md:mb-24">
          <div className="flex-1 hairline" />
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={isHeadingInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] md:text-[72px] lg:text-[88px] font-display font-bold tracking-[0.02em] text-kimono whitespace-nowrap"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            EXPERIENCE
          </motion.h2>
          <div className="flex-1 hairline" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-lime" strokeWidth={1.5} />
              <h3 className="text-[13px] tracking-[0.18em] uppercase text-kimono font-body font-medium">
                EXPERIENCE
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-2xl p-6 md:p-8"
            >
              <h4 className="text-[18px] font-body font-bold text-kimono mb-1">
                Private Tutor (Freelance)
              </h4>
              <p className="text-[13px] text-warmgray font-mono mb-6">
                Thane, Maharashtra | Oct 2024 – Present
              </p>

              <ul className="space-y-3">
                {[
                  "Mentored 50+ students in Science, Mathematics & Computer Science",
                  "Designed presentations, visual notes, and structured study materials",
                  "Delivered personalized 1-on-1 learning sessions",
                  "Used AI-powered tools to improve student engagement and outcomes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-warmgray leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-lime mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-lime" strokeWidth={1.5} />
              <h3 className="text-[13px] tracking-[0.18em] uppercase text-kimono font-body font-medium">
                CERTIFICATIONS
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <CertCard key={cert.title} cert={cert} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}