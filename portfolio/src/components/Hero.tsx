import { useState, useEffect } from 'react'

const TITLES = [
  'Architectural & Urban Designer',
  'Spatial Analysis',
  'Data Scientist',
  'Urban Data Analysis',
] as const

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [subText, setSubText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: any
    const currentFullText = TITLES[titleIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setSubText((prev) => prev.slice(0, -1))
      }, 25)
    } else {
      timer = setTimeout(() => {
        setSubText(currentFullText.slice(0, subText.length + 1))
      }, 60)
    }

    if (!isDeleting && subText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500)
    }

    if (isDeleting && subText === '') {
      setIsDeleting(false)
      setTitleIndex((prev) => (prev + 1) % TITLES.length)
    }

    return () => clearTimeout(timer)
  }, [subText, isDeleting, titleIndex])

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-end md:justify-center pb-12 md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      <div className="max-w-2xl relative z-10">
        {/* Name in large headings */}
        <h1
          className="text-black mb-3 sm:mb-4 tracking-tight font-extrabold"
          style={{
            fontSize: 'clamp(36px, 8vw, 72px)',
            lineHeight: 1.05,
            fontFamily: 'var(--font-heading)',
          }}
        >
          Nguyen Viet Quoc Hung
        </h1>

        {/* Looping Typewriter for Titles */}
        <p
          className="mb-5 sm:mb-6 min-h-[40px] flex items-center gap-1.5"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            fontFamily: 'var(--font-body)',
            color: 'var(--accent)',
            fontWeight: 500,
          }}
        >
          <span>·</span>
          <span>{subText}</span>
          <span
            className="cursor-blink inline-block bg-[var(--accent)] align-middle ml-[1px]"
            style={{ width: '2px', height: '1.05em' }}
            aria-hidden="true"
          />
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200"
        style={{ zIndex: 10 }}
        aria-label="Scroll down"
      >
        <span
          className="text-[11px] tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-body)', color: '#000' }}
        >
          scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="6" y="0" width="4" height="14" rx="2" fill="#000" opacity="0.3" />
          <circle cx="8" cy="4" r="2" fill="#000">
            <animate attributeName="cy" from="4" to="12" dur="1.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </a>
    </section>
  )
}
