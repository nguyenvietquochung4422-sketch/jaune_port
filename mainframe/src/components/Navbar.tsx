import { useState } from 'react'

const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop'] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5"
        style={{ zIndex: 10 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-black leading-none select-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe&#174;
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-black leading-none select-none"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav links (center) */}
        <div className="hidden md:flex items-center text-[23px] text-black" aria-label="Primary navigation">
          {NAV_LINKS.map((link, i) => (
            <span key={link}>
              <a
                href="#"
                className="hover:opacity-60 transition-opacity duration-200"
              >
                {link}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span className="mr-[0.15em]">,</span>
              )}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity duration-200"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-0 p-0"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="block w-6 bg-black transition-all duration-300"
            style={{
              height: '2px',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 bg-black transition-all duration-300"
            style={{
              height: '2px',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 bg-black transition-all duration-300"
            style={{
              height: '2px',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        className="fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 md:hidden"
        style={{
          zIndex: 9,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden={!open}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity duration-200"
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="text-[32px] font-medium text-black underline underline-offset-2 hover:opacity-60 transition-opacity duration-200"
          onClick={() => setOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
