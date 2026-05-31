import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// Nav links map to pages
const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Research',   href: '/research' },
  { label: 'Blog',       href: '/blog' },
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()

  const isHome = location.pathname === '/'
  const showBg = !isHome || scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!dropdownOpen) return
    const closeDropdown = () => setDropdownOpen(false)
    document.addEventListener('click', closeDropdown)
    return () => document.removeEventListener('click', closeDropdown)
  }, [dropdownOpen])

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-5 sm:px-8 transition-all duration-300 ${
          showBg
            ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E5E0D8] py-3 sm:py-4 shadow-sm'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
        style={{ zIndex: 10 }}
      >
        {/* Logo — Mainframe style */}
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-black leading-none select-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Jaune&#174;
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-black leading-none select-none"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </Link>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex items-center gap-0 text-[23px] text-black"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link, i) => (
            <span key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `transition-opacity duration-200 ${
                    isActive ? 'opacity-40 pointer-events-none' : 'hover:opacity-40'
                  }`
                }
              >
                {link.label}
              </NavLink>
              {i < NAV_LINKS.length - 1 && (
                <span className="mr-[0.12em]">,</span>
              )}
            </span>
          ))}
        </div>

        {/* Desktop CTA & Auth Dropdown */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#contact"
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-40 transition-opacity duration-200"
          >
            Get in touch
          </a>

          {user && (
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setDropdownOpen(!dropdownOpen)
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[15px] cursor-pointer hover:scale-105 transition-all select-none uppercase border-0"
                style={{ background: user.avatarColor }}
              >
                {user.name.slice(0, 2)}
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-3 w-64 p-5 rounded-2xl bg-white border border-[#E5E0D8] shadow-lg flex flex-col items-center text-center gap-4"
                  style={{ zIndex: 99 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-[22px] uppercase select-none"
                    style={{ background: user.avatarColor }}
                  >
                    {user.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-black leading-tight">{user.name}</h4>
                    <p className="text-[12px] text-gray-500 mt-1 truncate max-w-[210px]">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      logout()
                      setDropdownOpen(false)
                    }}
                    className="w-full py-2 text-[13px] font-bold text-[#EA4335] bg-[#EA4335]/5 border border-[#EA4335]/15 rounded-xl hover:bg-[#EA4335] hover:text-white cursor-pointer transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-4">
          {user && (
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setDropdownOpen(!dropdownOpen)
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[12px] cursor-pointer select-none uppercase border-0"
                style={{ background: user.avatarColor }}
              >
                {user.name.slice(0, 2)}
              </button>
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-3 w-56 p-4 rounded-xl bg-white border border-[#E5E0D8] shadow-md flex flex-col items-center text-center gap-3"
                  style={{ zIndex: 99 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-[18px] uppercase select-none"
                    style={{ background: user.avatarColor }}
                  >
                    {user.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[13px] text-black leading-tight">{user.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5 truncate max-w-[180px]">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      logout()
                      setDropdownOpen(false)
                    }}
                    className="w-full py-1.5 text-[11px] font-bold text-[#EA4335] bg-[#EA4335]/5 border border-[#EA4335]/15 rounded-lg hover:bg-[#EA4335] hover:text-white cursor-pointer transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-0 p-0"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="block w-6 bg-black transition-all duration-300"
              style={{ height: '2px', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 bg-black transition-all duration-300"
              style={{ height: '2px', opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-6 bg-black transition-all duration-300"
              style={{ height: '2px', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
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
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) =>
              `text-[32px] font-medium text-black transition-opacity duration-200 ${
                isActive ? 'opacity-40 pointer-events-none' : 'hover:opacity-40'
              }`
            }
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href="#contact"
          className="text-[32px] font-medium text-black underline underline-offset-2 hover:opacity-40 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-body)' }}
          onClick={() => setOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
