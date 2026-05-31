import { useState } from 'react'
import { cv } from '../data/cv'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const year = new Date().getFullYear()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cv.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* ignore */ }
  }

  return (
    <footer
      id="contact"
      className="py-20 px-5 sm:px-8 md:px-10 scroll-mt-24 text-white"
      style={{ background: 'var(--text)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Contact Section inside Footer */}
        <div className="text-center mb-16">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Get in touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let's Build Something<br />
            <span className="gradient-text">Together</span>
          </h2>
          <p
            className="text-[15px] mb-10 max-w-lg mx-auto leading-relaxed opacity-70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Open to research collaborations, urban design projects, and conversations
            about data-driven city-making. Don't hesitate to reach out.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {/* Email button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-4 p-5 rounded-2xl text-left w-full transition-all duration-200 hover:-translate-y-1 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
                style={{ background: 'rgba(196,92,58,0.25)', color: 'var(--accent)' }}
              >
                ✉️
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-0.5 opacity-40">Email</p>
                <p
                  className="text-[13px] font-semibold truncate"
                  style={{ color: copied ? 'var(--accent)' : '#FFF', fontFamily: 'var(--font-body)' }}
                >
                  {copied ? 'Copied to clipboard!' : cv.email}
                </p>
              </div>
            </button>

            {/* Phone button */}
            <a
              href={`tel:${cv.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-4 p-5 rounded-2xl text-left bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
                style={{ background: 'rgba(196,92,58,0.25)', color: 'var(--accent)' }}
              >
                📞
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-0.5 opacity-40">Phone</p>
                <p
                  className="text-[13px] font-semibold"
                  style={{ color: '#FFF', fontFamily: 'var(--font-body)' }}
                >
                  {cv.phone}
                </p>
              </div>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] bg-white/5 border border-white/10 opacity-70">
            📍 {cv.location}
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo Jaune */}
          <a href="/" className="flex items-center gap-2 group">
            <span
              className="text-[18px] tracking-tight leading-none font-bold"
              style={{ fontFamily: 'var(--font-heading)', color: '#FFF' }}
            >
              Jaune&#174;
            </span>
            <span className="text-[22px] leading-none select-none text-white/40" style={{ letterSpacing: '-0.02em' }}>
              ✳︎
            </span>
          </a>

          {/* Copyright */}
          <p className="text-[12px] text-white/30">
            © {year} {cv.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
