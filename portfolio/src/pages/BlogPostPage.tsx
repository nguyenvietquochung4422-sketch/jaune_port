import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { posts } from '../data/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/AuthContext'

const LABELS = {
  en: {
    backToBlog: 'All posts',
    older: '← Older',
    newer: 'Newer →',
    views: 'views',
    likes: 'Likes',
    comments: 'comments',
    urbanGlossary: 'Urban Design Terms',
    dataGlossary: 'Data Science Terms',
    academicReferences: 'Academic References',
    joinDiscussion: 'Join the Discussion',
    writeComment: 'Write a comment',
    commentingAs: 'Commenting as:',
    yourComment: 'Your comment...',
    postComment: 'Post Comment',
  },
  vi: {
    backToBlog: 'Tất cả bài viết',
    older: '← Cũ hơn',
    newer: 'Mới hơn →',
    views: 'lượt xem',
    likes: 'Lượt thích',
    comments: 'bình luận',
    urbanGlossary: 'Thuật ngữ Đô thị',
    dataGlossary: 'Thuật ngữ Khoa học Dữ liệu',
    academicReferences: 'Nguồn Học Thuật',
    joinDiscussion: 'Thảo luận & Ý kiến',
    writeComment: 'Viết bình luận mới',
    commentingAs: 'Bình luận với tư cách:',
    yourComment: 'Nội dung bình luận...',
    postComment: 'Gửi bình luận',
  },
}

interface Comment {
  id: string
  name: string
  email: string
  avatarColor: string
  date: string
  text: string
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)
  const { user } = useAuth()

  const [lang, setLang] = useState<'en' | 'vi'>(() => {
    return (localStorage.getItem('blog_lang') as 'en' | 'vi') || 'en'
  })

  // Synchronize language toggles
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

  if (!post) return <Navigate to="/blog" replace />

  // Metrics States
  const [views, setViews] = useState(0)
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  // Comments States
  const [comments, setComments] = useState<Comment[]>([])
  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    if (!slug || !user) return

    // 1. View count increment
    const viewKey = `view_count_${slug}`
    const currentViews = parseInt(localStorage.getItem(viewKey) || '0', 10)
    const newViews = currentViews + 1
    localStorage.setItem(viewKey, newViews.toString())
    setViews(newViews)

    // 2. Like count
    const likeKey = `like_count_${slug}`
    const savedLikes = parseInt(localStorage.getItem(likeKey) || '0', 10) // Start clean or 0
    setLikes(savedLikes)

    const likedKey = `has_liked_${slug}_${user.email}`
    setHasLiked(localStorage.getItem(likedKey) === 'true')

    // 3. Comments loading (No defaults as per user request to delete demo ones)
    const commentKey = `comments_${slug}`
    const savedComments = localStorage.getItem(commentKey)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    } else {
      setComments([])
    }
  }, [slug, user])

  const handleLike = () => {
    if (!slug || !user) return
    const likeKey = `like_count_${slug}`
    const likedKey = `has_liked_${slug}_${user.email}`
    const newLiked = !hasLiked
    const newLikes = newLiked ? likes + 1 : likes - 1

    setLikes(newLikes)
    setHasLiked(newLiked)
    localStorage.setItem(likeKey, newLikes.toString())
    localStorage.setItem(likedKey, newLiked.toString())
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!slug || !user || !commentText.trim()) return

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      name: user.name,
      email: user.email,
      avatarColor: user.avatarColor,
      date: new Date().toISOString().split('T')[0],
      text: commentText.trim(),
    }

    const updatedComments = [...comments, newComment]
    setComments(updatedComments)
    localStorage.setItem(`comments_${slug}`, JSON.stringify(updatedComments))

    setCommentText('')
  }

  const currentIdx = posts.findIndex((p) => p.slug === slug)
  const prev = posts[currentIdx + 1]
  const next = posts[currentIdx - 1]

  const t = LABELS[lang]
  const postTitle = post.title[lang]
  const postExcerpt = post.excerpt[lang]
  const postReadTime = post.readTime[lang]
  const postBody = post.body[lang]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero header */}
        <div
          className="py-16 px-5 sm:px-8 md:px-10"
          style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-opacity duration-200 hover:opacity-40"
                style={{ color: 'var(--accent)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.backToBlog}
              </Link>

              {/* Language Selector Pill */}
              <div
                className="inline-flex items-center gap-1 p-1 rounded-full shadow-sm"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <button
                  onClick={() => handleToggleLang('en')}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer`}
                  style={{
                    background: lang === 'en' ? 'var(--accent)' : 'transparent',
                    color: lang === 'en' ? '#fff' : 'var(--text-muted)',
                  }}
                >
                  EN
                </button>
                <button
                  onClick={() => handleToggleLang('vi')}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer`}
                  style={{
                    background: lang === 'vi' ? 'var(--accent)' : 'transparent',
                    color: lang === 'vi' ? '#fff' : 'var(--text-muted)',
                  }}
                >
                  VI
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 rounded-full text-[12px] font-semibold"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid rgba(196,92,58,0.2)' }}
                >
                  {post.category}
                </span>
                <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>· {postReadTime}</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
                style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
              >
                {postTitle}
              </h1>
              <p className="text-[16px] leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                {postExcerpt}
              </p>
            </div>
          </div>
        </div>

        {/* Multi-column Body Section */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-8 items-start">
            
            {/* Left Sidebar: Urban Design Terminology */}
            <aside 
              className="order-2 lg:order-1 rounded-2xl p-5 lg:sticky lg:top-24 w-full"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <h3 
                className="text-[14px] font-bold uppercase tracking-wider mb-4 pb-2 border-b text-left"
                style={{ color: 'var(--text)', borderColor: 'var(--border)', fontFamily: 'var(--font-heading)' }}
              >
                {t.urbanGlossary}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                {post.glossary?.urbanDesign[lang].map((item, i) => (
                  <div key={i} className="text-left">
                    <p className="font-bold text-[13px] mb-1" style={{ color: 'var(--accent)' }}>
                      {item.term}
                    </p>
                    <p className="text-[12px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </aside>

            {/* Center Column: Article, bibliography & interaction */}
            <div className="order-1 lg:order-2 max-w-3xl mx-auto w-full">
              {/* Main Markdown Text */}
              <article className="prose">
                <ReactMarkdown>{postBody}</ReactMarkdown>
              </article>

              {/* Interaction Bar (Views, Likes, Comments count) */}
              <div className="flex items-center justify-between py-4 my-8 border-y border-var(--border)">
                <div className="flex items-center gap-6 text-[13px]" style={{ color: 'var(--text-muted)' }}>
                  <span className="flex items-center gap-1.5">
                    👁️ {views.toLocaleString()} {t.views}
                  </span>
                  <span className="flex items-center gap-1.5">
                    💬 {comments.length} {t.comments}
                  </span>
                </div>
                <button
                  onClick={handleLike}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-[var(--accent-light)] transition-all duration-200 cursor-pointer text-[13px] font-bold"
                  style={{
                    color: hasLiked ? 'var(--accent)' : 'var(--text)',
                    background: hasLiked ? 'var(--accent-light)' : 'transparent',
                    borderColor: hasLiked ? 'var(--accent)' : 'var(--border)'
                  }}
                >
                  ❤️ {likes} {t.likes}
                </button>
              </div>

              {/* Academic References bibliography block */}
              {post.academicReferences && (
                <div className="mt-12 p-6 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <h4 className="text-[15px] font-bold uppercase tracking-wider mb-4 pb-2 border-b text-left" style={{ color: 'var(--text)', borderColor: 'var(--border)', fontFamily: 'var(--font-heading)' }}>
                    📚 {t.academicReferences}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {post.academicReferences[lang].map((ref, index) => (
                      <li key={index} className="text-[13px] leading-relaxed text-left pl-5 relative" style={{ color: 'var(--text-muted)' }}>
                        <span className="absolute left-0 top-0" style={{ color: 'var(--accent)' }}>•</span>
                        {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Interactive Comments Section */}
              <div className="mt-14 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
                <h3 className="text-xl font-bold mb-6 text-left" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  {t.joinDiscussion}
                </h3>

                {/* Comment list */}
                <div className="flex flex-col gap-4 mb-8">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <div 
                        key={comment.id} 
                        className="p-5 rounded-2xl flex gap-4 text-left border"
                        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0 uppercase select-none" style={{ background: comment.avatarColor || 'var(--accent)' }}>
                          {comment.name.slice(0, 2)}
                        </div>
                        <div className="overflow-hidden">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-[13px] font-bold" style={{ color: 'var(--text)' }}>{comment.name}</span>
                            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                              {new Date(comment.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'vi-VN', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          <p className="text-[13px] leading-relaxed text-var(--text-muted)" style={{ wordBreak: 'break-word' }}>{comment.text}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-[13px] text-left italic py-4" style={{ color: 'var(--text-muted)' }}>
                      {lang === 'en' ? 'No comments yet. Be the first to share your thoughts.' : 'Chưa có ý kiến nào. Hãy là người đầu tiên chia sẻ suy nghĩ của bạn.'}
                    </p>
                  )}
                </div>

                {/* Comment Form */}
                {user && (
                  <form 
                    onSubmit={handleCommentSubmit} 
                    className="flex flex-col gap-4 p-6 rounded-2xl border"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[11px] uppercase select-none" style={{ background: user.avatarColor }}>
                        {user.name.slice(0, 2)}
                      </div>
                      <div>
                        <span className="text-[12px] text-gray-400 block">{t.commentingAs}</span>
                        <span className="text-[13px] font-bold text-black">{user.name} <span className="font-normal text-gray-500">({user.email})</span></span>
                      </div>
                    </div>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.yourComment}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="px-4 py-2.5 rounded-xl text-[13px] border focus:outline-none resize-none"
                      style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}
                    />
                    <button
                      type="submit"
                      className="self-start px-6 py-2.5 rounded-xl text-white text-[13px] font-bold cursor-pointer transition-colors duration-200 border-0"
                      style={{ background: 'var(--accent)' }}
                    >
                      {t.postComment}
                    </button>
                  </form>
                )}
              </div>

              {/* Prev/Next Links */}
              <div className="mt-16 pt-10 grid sm:grid-cols-2 gap-4" style={{ borderTop: '1px solid var(--border)' }}>
                {prev && (
                  <Link
                    to={`/blog/${prev.slug}`}
                    id={`post-nav-prev-${prev.slug}`}
                    className="group flex flex-col gap-1.5 p-5 rounded-xl transition-all duration-200 hover:shadow-md text-left"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{t.older}</span>
                    <span
                      className="text-[14px] font-bold group-hover:opacity-60 transition-opacity duration-200"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                    >
                      {prev.title[lang]}
                    </span>
                  </Link>
                )}
                {next && (
                  <Link
                    to={`/blog/${next.slug}`}
                    id={`post-nav-next-${next.slug}`}
                    className="group flex flex-col gap-1.5 p-5 rounded-xl transition-all duration-200 hover:shadow-md sm:text-right sm:ml-auto w-full"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{t.newer}</span>
                    <span
                      className="text-[14px] font-bold group-hover:opacity-60 transition-opacity duration-200"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                    >
                      {next.title[lang]}
                    </span>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Sidebar: Data Science Terminology */}
            <aside 
              className="order-3 rounded-2xl p-5 lg:sticky lg:top-24 w-full"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <h3 
                className="text-[14px] font-bold uppercase tracking-wider mb-4 pb-2 border-b text-left"
                style={{ color: 'var(--text)', borderColor: 'var(--border)', fontFamily: 'var(--font-heading)' }}
              >
                {t.dataGlossary}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                {post.glossary?.dataScience[lang].map((item, i) => (
                  <div key={i} className="text-left">
                    <p className="font-bold text-[13px] mb-1" style={{ color: 'var(--accent)' }}>
                      {item.term}
                    </p>
                    <p className="text-[12px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </aside>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
