import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Spatial Analytics':       { bg: '#EBF5FF', text: '#2563EB' },
  'Climate-Adaptive Design': { bg: '#EFFDF4', text: '#16A34A' },
  'Urban Economics':         { bg: '#FAF0EB', text: '#C45C3A' },
}

const LABELS = {
  en: {
    sectionTitle: 'Blog — Field Notes',
    title: 'Research Insights',
    allPosts: 'All posts',
    read: 'Read',
    viewAll: 'View all posts →',
  },
  vi: {
    sectionTitle: 'Blog — Nhật ký Nghiên cứu',
    title: 'Góc nhìn Nghiên cứu',
    allPosts: 'Tất cả bài viết',
    read: 'Đọc thêm',
    viewAll: 'Xem tất cả bài viết →',
  },
}

export default function BlogList() {
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
    <section id="blog" className="py-24 px-5 sm:px-8 md:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--accent)' }}>
              {t.sectionTitle}
            </p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold leading-[1.1]"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
            >
              Research<br />Insights
            </h2>
          </div>
          <div className="flex items-center gap-4 self-start sm:self-auto">
            {/* Language Toggle */}
            <div
              className="inline-flex items-center gap-1 p-1 rounded-full"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <button
                onClick={() => handleToggleLang('en')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all duration-200 cursor-pointer`}
                style={{
                  background: lang === 'en' ? 'var(--accent)' : 'transparent',
                  color: lang === 'en' ? '#fff' : 'var(--text-muted)',
                }}
              >
                EN
              </button>
              <button
                onClick={() => handleToggleLang('vi')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all duration-200 cursor-pointer`}
                style={{
                  background: lang === 'vi' ? 'var(--accent)' : 'transparent',
                  color: lang === 'vi' ? '#fff' : 'var(--text-muted)',
                }}
              >
                VI
              </button>
            </div>

            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-[14px] font-semibold transition-opacity duration-200 hover:opacity-60"
              style={{ color: 'var(--accent)' }}
            >
              {t.allPosts}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const cat = CATEGORY_COLORS[post.category] ?? { bg: 'var(--accent-light)', text: 'var(--accent)' }
            const postTitle = post.title[lang]
            const postExcerpt = post.excerpt[lang]
            const postReadTime = post.readTime[lang]

            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                id={`blog-card-${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{ background: cat.bg, color: cat.text }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{postReadTime}</span>
                  </div>
                  <h3
                    className="text-[16px] font-bold leading-snug group-hover:opacity-60 transition-opacity duration-200"
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {postTitle}
                  </h3>
                  <p className="text-[13px] leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                    {postExcerpt}
                  </p>
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span
                      className="text-[12px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                      style={{ color: 'var(--accent)' }}
                    >
                      {t.read}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: 'var(--accent)' }}>
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}
