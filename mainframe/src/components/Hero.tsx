import { useState, useEffect } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

const TYPEWRITER_TEXT =
  "Glad you stopped in. Good taste tends to find us. Now, what are we building?"

const WHITE_PILLS = [
  'Pitch us an idea',
  'Come work here',
  'Send a brief hello',
  'See how we operate',
]

const EMAIL = 'hello@mainframe.co'

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Back rect */}
      <rect x="3" y="0" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.1" fill="none" />
      {/* Front rect */}
      <rect x="0" y="3" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.1" fill="none" />
    </svg>
  )
}

export default function Hero() {
  const { displayed, done } = useTypewriter({ text: TYPEWRITER_TEXT })
  const [pillsVisible, setPillsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  // Pills fade in 400ms after mount — independent of typewriter
  useEffect(() => {
    const t = setTimeout(() => setPillsVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <section
      className="relative h-screen flex flex-col justify-end md:justify-center pb-12 md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-xl relative z-10">
        {/* 1 – Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#000',
            filter: 'blur(4px)',
          }}
          aria-hidden="true"
        >
          Hey there, meet A.R.I.A,<br />
          Mainframe's Adaptive Response Interface Agent
        </div>

        {/* 2 – Typewriter text */}
        <p
          className="text-black mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="cursor-blink inline-block bg-black align-middle ml-[2px]"
              style={{ width: '2px', height: '1.1em' }}
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3 – Action pills */}
        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* White pills */}
          {WHITE_PILLS.map((label) => (
            <button
              key={label}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}

          {/* Email / copy pill */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
            aria-label={copied ? 'Copied!' : 'Copy email address'}
          >
            <span>
              Reach us:{' '}
              <span className="underline underline-offset-1">{copied ? 'Copied!' : EMAIL}</span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
