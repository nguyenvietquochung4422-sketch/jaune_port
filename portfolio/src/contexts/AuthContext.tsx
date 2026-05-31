import React, { createContext, useContext, useState } from 'react'

export interface User {
  name: string
  email: string
  avatarColor: string
}

interface AuthContextType {
  user: User | null
  login: (name: string, email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AVATAR_COLORS = [
  '#C45C3A', // Ochre/Accent
  '#2563EB', // Blue
  '#16A34A', // Green
  '#7C3AED', // Purple
  '#EA580C', // Orange
  '#DB2777', // Pink
]

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('jaune_user')
    return saved ? JSON.parse(saved) : null
  })

  const login = (name: string, email: string) => {
    // Generate a consistent avatar color based on the email string length
    const colorIndex = Math.abs(email.length) % AVATAR_COLORS.length
    const avatarColor = AVATAR_COLORS[colorIndex]

    const newUser: User = { name, email, avatarColor }
    setUser(newUser)
    localStorage.setItem('jaune_user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('jaune_user')
  }

  // If not logged in, render the Google Sign-in screen
  if (!user) {
    return <GoogleLoginGate onLogin={login} />
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Highly polished, premium Google accounts sign-in screen
interface LoginGateProps {
  onLogin: (name: string, email: string) => void
}

const GoogleLoginGate: React.FC<LoginGateProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [step, setStep] = useState<1 | 2>(1)
  const [error, setError] = useState('')

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      setError('Enter a valid email address')
      return
    }
    setError('')
    setStep(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Name cannot be empty')
      return
    }
    onLogin(name.trim(), email.trim())
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 select-none"
      style={{ background: '#F0F4F9', fontFamily: 'var(--font-body)' }}
    >
      {/* Google-like card */}
      <div 
        className="w-full max-w-[450px] p-10 rounded-[28px] bg-white text-left flex flex-col justify-between min-h-[480px]"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      >
        <div>
          {/* Google Logo / Brand */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1.5">
              <span className="text-[20px] font-bold tracking-tight text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                Jaune®
              </span>
              <span className="text-[22px] text-black">✳︎</span>
            </div>
            
            {/* Minimalist Google Auth Badge */}
            <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400 tracking-wider">
              <span>SECURED BY GOOGLE</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[24px] font-bold text-[#1F1F1F] mb-2 leading-snug">
            {step === 1 ? 'Sign in' : 'Personalize profile'}
          </h2>
          <p className="text-[14px] text-[#444746] mb-8 leading-relaxed">
            {step === 1 
              ? 'to continue to Jaune Private Research Portfolio' 
              : `Welcome, ${email}. Let us know your display name.`
            }
          </p>

          {/* Steps */}
          {step === 1 ? (
            <form onSubmit={handleNextStep} className="flex flex-col gap-6">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="Email or phone"
                  className="w-full px-4 py-4 text-[15px] border border-gray-300 rounded-lg focus:outline-none focus:border-[#0B57D0] focus:ring-1 focus:ring-[#0B57D0] transition-all"
                  style={{ color: '#1F1F1F' }}
                />
                {error && <p className="text-[12px] text-[#B3261E] mt-1.5 flex items-center gap-1">⚠️ {error}</p>}
              </div>

              <div className="text-[13px] text-[#0B57D0] font-semibold hover:underline cursor-pointer">
                Forgot email?
              </div>

              <div className="text-[13px] text-[#444746] leading-relaxed mt-2">
                Not your computer? Use Guest mode to sign in privately.{' '}
                <span className="text-[#0B57D0] font-semibold hover:underline cursor-pointer">Learn more</span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between mt-6">
                <div className="text-[14px] text-[#0B57D0] font-semibold hover:underline cursor-pointer">
                  Create account
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#0B57D0] hover:bg-[#0842A0] text-white text-[14px] font-bold cursor-pointer transition-colors duration-150"
                >
                  Next
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    setError('')
                  }}
                  placeholder="Your display name"
                  className="w-full px-4 py-4 text-[15px] border border-gray-300 rounded-lg focus:outline-none focus:border-[#0B57D0] focus:ring-1 focus:ring-[#0B57D0] transition-all"
                  style={{ color: '#1F1F1F' }}
                />
                {error && <p className="text-[12px] text-[#B3261E] mt-1.5 flex items-center gap-1">⚠️ {error}</p>}
              </div>

              {/* Back & Next buttons */}
              <div className="flex items-center justify-between mt-12">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[14px] text-[#0B57D0] font-semibold hover:underline cursor-pointer bg-transparent border-0"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#0B57D0] hover:bg-[#0842A0] text-white text-[14px] font-bold cursor-pointer transition-colors duration-150"
                >
                  Sign In
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center text-[12px] text-[#747775] mt-8 pt-4 border-t border-gray-100">
          <div className="hover:underline cursor-pointer">English (United States)</div>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Help</span>
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span className="hover:underline cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </div>
  )
}
