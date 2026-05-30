'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: "prathameshtikone655@gmail.com", href: "mailto:prathameshtikone655@gmail.com" },
  { icon: Phone, label: "9220923225", href: "tel:+919220923225" },
  { icon: Github, label: "github.com/praxxz", href: "https://github.com/praxxz" },
  { icon: Linkedin, label: "linkedin.com/in/prathamesh-tikone", href: "https://linkedin.com/in/prathamesh-tikone" },
  { icon: MapPin, label: "Thane (W), Maharashtra – 400607", href: "https://maps.google.com/?q=Thane,Maharashtra" },
]

type FormState = { name: string; email: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const headingRef = useRef<HTMLDivElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" })

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function handleSend() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sending')

    const subject = encodeURIComponent(`Portfolio Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Prathamesh,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    )
    const mailtoLink = `mailto:prathameshtikone655@gmail.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      window.location.href = mailtoLink
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 600)
  }

  return (
    <section id="contact" className="relative bg-void py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-[#0d0d0d] to-void" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-champagne/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-lime/[0.02] blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div ref={headingRef} className="flex items-center gap-6 mb-16 md:mb-24">
          <div className="flex-1 hairline" />
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={isHeadingInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] md:text-[72px] lg:text-[88px] font-display font-bold tracking-[0.02em] text-kimono whitespace-nowrap"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            CONTACT
          </motion.h2>
          <div className="flex-1 hairline" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl p-8 md:p-10"
            style={{ background: 'rgba(20, 20, 20, 0.5)', backdropFilter: 'blur(40px)' }}
          >
            <h3 className="font-serif text-[22px] md:text-[26px] text-kimono font-light mb-2 leading-snug">
              Want to work together or just say hello?
            </h3>
            <p className="text-[11px] tracking-[0.18em] uppercase text-warmgray mb-10">
              Send a message
            </p>

            <div className="space-y-8">

              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full bg-transparent text-[14px] text-kimono placeholder:text-warmgray/50 py-3 border-b border-white/10 outline-none transition-colors duration-300 disabled:opacity-50"
                />
                <div
                  className="absolute bottom-0 left-0 h-[1px] bg-lime transition-all duration-500"
                  style={{ width: focusedField === 'name' ? '100%' : '0%' }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full bg-transparent text-[14px] text-kimono placeholder:text-warmgray/50 py-3 border-b border-white/10 outline-none transition-colors duration-300 disabled:opacity-50"
                />
                <div
                  className="absolute bottom-0 left-0 h-[1px] bg-lime transition-all duration-500"
                  style={{ width: focusedField === 'email' ? '100%' : '0%' }}
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Your message"
                  rows={4}
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full bg-transparent text-[14px] text-kimono placeholder:text-warmgray/50 py-3 border-b border-white/10 outline-none transition-colors duration-300 resize-none disabled:opacity-50"
                />
                <div
                  className="absolute bottom-0 left-0 h-[1px] bg-lime transition-all duration-500"
                  style={{ width: focusedField === 'message' ? '100%' : '0%' }}
                />
              </div>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[12px] text-red-400 font-mono tracking-wide"
                >
                  Please fill in all fields before sending.
                </motion.p>
              )}

              <motion.button
                onClick={handleSend}
                disabled={status === 'sending' || status === 'sent'}
                whileHover={status === 'idle' || status === 'error' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' || status === 'error' ? { scale: 0.98 } : {}}
                data-cursor-hover
                className={`w-full py-4 rounded-full text-[13px] tracking-[0.15em] uppercase font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-lime text-void cursor-default'
                    : status === 'sending'
                    ? 'bg-cream/60 text-void/60 cursor-wait'
                    : 'bg-cream text-void hover:bg-lime'
                }`}
              >
                {status === 'sent' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-void/40 border-t-void rounded-full"
                    />
                    Opening mail app…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-[11px] text-warmgray/40 text-center font-mono tracking-wide -mt-4">
                Opens your default mail app with the message pre-filled
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-6 lg:pt-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              const isExternal = item.href.startsWith('http')
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-cursor-hover
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:border-lime/40 transition-all duration-300 shrink-0">
                    <Icon
                      className="w-4 h-4 text-warmgray group-hover:text-lime transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[14px] text-warmgray group-hover:text-kimono transition-colors font-mono break-all">
                    {item.label}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
