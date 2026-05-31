import { cv } from '../data/cv'

const RANK_STYLE: Record<string, { bg: string; color: string }> = {
  '1st Prize': { bg: '#FAF0EB', color: '#C45C3A' },
  '2nd Prize': { bg: '#FAF6F0', color: '#D4A574' },
}

export default function Research() {
  return (
    <section id="research" className="py-24 px-5 sm:px-8 md:px-10 scroll-mt-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--accent)' }}>
          Labs — Scientific Research & Awards
        </p>
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-14 leading-[1.1]"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
        >
          Recognition &amp; Impact
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {cv.awards.map((award, i) => {
            const style = RANK_STYLE[award.rank] ?? { bg: 'var(--accent-light)', color: 'var(--accent)' }
            return (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="px-3 py-1.5 rounded-full text-[12px] font-bold"
                    style={{ background: style.bg, color: style.color, border: `1px solid ${style.color}33` }}
                  >
                    {award.rank}
                  </span>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    {award.year}
                  </span>
                </div>
                <p className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  {award.competition}
                </p>
                <h3
                  className="text-[16px] font-bold leading-snug"
                  style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                >
                  {award.project}
                </h3>
                <div className="rounded-xl p-4 mt-auto" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    Core Contribution
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {award.contribution}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Skills inline */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: 'var(--text-muted)' }}>
            Technical Skills
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Object.entries(cv.skills) as [string, readonly string[]][]).map(([cat, tags]) => (
              <div
                key={cat}
                className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <h4 className="text-[13px] font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  {cat}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px]"
                      style={{ background: 'var(--surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular */}
        <div className="mt-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: 'var(--text-muted)' }}>
            Beyond Research
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cv.extracurricular.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                  <div>
                    <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </p>
                    <p className="text-[12px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
