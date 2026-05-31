import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Spatial Analytics':       { bg: '#EBF5FF', text: '#2563EB' },
  'Climate-Adaptive Design': { bg: '#EFFDF4', text: '#16A34A' },
  'Urban Economics':         { bg: '#FAF0EB', text: '#C45C3A' },
}

const LABELS = {
  en: {
    sectionTitle: 'Blog — Field Notes',
    title: 'Research',
    titleAccent: 'Insights',
    subtitle: 'Writing on urban design, smart cities, spatial data, and the intersections between them.',
    readMore: 'Read article',
  },
  vi: {
    sectionTitle: 'Blog — Nhật ký Nghiên cứu',
    title: 'Góc nhìn',
    titleAccent: 'Nghiên cứu',
    subtitle: 'Những bài viết về thiết kế đô thị, thành phố thông minh, dữ liệu không gian và sự giao thoa giữa chúng.',
    readMore: 'Đọc bài viết',
  },
}

export default function BlogPage() {
  const [lang, setLang] = useState<'en' | 'vi'>(() => {
    return (localStorage.getItem('blog_lang') as 'en' | 'vi') || 'en'
  })

  const handleToggleLang = (selected: 'en' | 'vi') => {
    setLang(selected)
    localStorage.setItem('blog_lang', selected)
    window.dispatchEvent(new Event('blog_lang_change'))
  }

  useEffect(() => {
    const syncLang = () => {
      setLang((localStorage.getItem('blog_lang') as 'en' | 'vi') || 'en')
    }
    window.addEventListener('blog_lang_change', syncLang)
    return () => window.removeEventListener('blog_lang_change', syncLang)
  }, [])

  const t = LABELS[lang]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        {/* Header */}
        <div className="py-20 px-5 sm:px-8 md:px-10" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--accent)' }}>
                {t.sectionTitle}
              </p>
              <h1
                className="text-5xl sm:text-6xl font-extrabold mb-4 leading-[1.05]"
                style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
              >
                {t.title}<br /><span className="gradient-text">{t.titleAccent}</span>
              </h1>
              <p className="text-[16px] max-w-xl mt-4" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                {t.subtitle}
              </p>
            </div>
            
            {/* Language Selector Pill */}
            <div
              className="inline-flex items-center gap-1 p-1 rounded-full self-start sm:self-auto shadow-sm"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              <button
                onClick={() => handleToggleLang('en')}
                className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all duration-200 cursor-pointer`}
                style={{
                  background: lang === 'en' ? 'var(--accent)' : 'transparent',
                  color: lang === 'en' ? '#fff' : 'var(--text-muted)',
                }}
              >
                ENGLISH
              </button>
              <button
                onClick={() => handleToggleLang('vi')}
                className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all duration-200 cursor-pointer`}
                style={{
                  background: lang === 'vi' ? 'var(--accent)' : 'transparent',
                  color: lang === 'vi' ? '#fff' : 'var(--text-muted)',
                }}
              >
                TIẾNG VIỆT
              </button>
            </div>
          </div>
        </div>

        {/* Posts list */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-16">
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => {
              const cat = CATEGORY_COLORS[post.category] ?? { bg: 'var(--accent-light)', text: 'var(--accent)' }
              const postTitle = post.title[lang]
              const postExcerpt = post.excerpt[lang]
              const postReadTime = post.readTime[lang]

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  id={`blog-list-${post.slug}`}
                  className="group grid sm:grid-cols-[auto_1fr] gap-6 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div
                    className="hidden sm:flex w-16 h-16 rounded-2xl items-center justify-center shrink-0 text-2xl font-extrabold"
                    style={{ background: 'var(--bg)', color: 'var(--border)', border: '1px solid var(--border)', fontFamily: 'var(--font-heading)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ background: cat.bg, color: cat.text }}>
                        {post.category}
                      </span>
                      <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>· {postReadTime}</span>
                    </div>
                    <h2
                      className="text-xl sm:text-2xl font-bold leading-snug group-hover:opacity-60 transition-opacity duration-200"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                    >
                      {postTitle}
                    </h2>
                    <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {postExcerpt}
                    </p>
                    <span
                      className="self-start inline-flex items-center gap-1.5 text-[13px] font-semibold mt-1 group-hover:gap-3 transition-all duration-200"
                      style={{ color: 'var(--accent)' }}
                    >
                      {t.readMore}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
