import { cv } from '../data/cv'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cv.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* ignore */ }
  }

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 md:px-10 scroll-mt-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--accent)' }}>
          Get in touch
        </p>
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 leading-[1.1]"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
        >
          Let's Build Something<br />
          <span className="gradient-text">Together</span>
        </h2>
        <p className="text-[16px] mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
          Open to research collaborations, urban design projects, and conversations
          about data-driven city-making. Don't hesitate to reach out.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <button
            onClick={handleCopy}
            id="contact-copy-email"
            className="flex items-center gap-4 p-5 rounded-2xl text-left w-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl" style={{ background: 'var(--accent-light)' }}>
              ✉️
            </div>
            <div className="overflow-hidden">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</p>
              <p className="text-[13px] font-semibold truncate" style={{ color: copied ? 'var(--accent)' : 'var(--text)', fontFamily: 'var(--font-body)' }}>
                {copied ? 'Copied to clipboard!' : cv.email}
              </p>
            </div>
          </button>

          <a
            href={`tel:${cv.phone.replace(/[^+\d]/g, '')}`}
            id="contact-phone"
            className="flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl" style={{ background: 'var(--accent-light)' }}>
              📞
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>Phone</p>
              <p className="text-[13px] font-semibold" style={{ color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{cv.phone}</p>
            </div>
          </a>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px]"
          style={{ background: 'var(--bg)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
        >
          📍 {cv.location}
        </div>
      </div>
    </section>
  )
}
