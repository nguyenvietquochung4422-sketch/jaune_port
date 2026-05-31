import { cv } from '../data/cv'

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 md:px-10 scroll-mt-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
        >
          About
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-6 leading-[1.1]"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
            >
              Where Architecture<br />
              <span className="gradient-text">meets Data</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-6" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {cv.about}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Smart Urbanism', 'Parametric Design', 'GIS & Remote Sensing', 'Machine Learning', 'Spatial MCDA', 'Climate Adaptation'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[12px] font-medium"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid rgba(196,92,58,0.2)', fontFamily: 'var(--font-body)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              {[
                { n: '4', label: 'Research Awards' },
                { n: '3.66', label: 'GPA / 4.0' },
                { n: '2+', label: 'Years Research' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-extrabold gradient-text"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[12px] font-medium mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — education cards */}
          <div className="flex flex-col gap-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
              Education
            </p>
            {cv.education.map((edu, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-shadow duration-300 hover:shadow-lg"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3">
                  <div>
                    <h3 className="text-[15px] font-bold leading-tight text-left" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                      {edu.degree}
                    </h3>
                    <p className="text-[13px] mt-0.5 font-medium text-left" style={{ color: 'var(--accent)' }}>
                      {edu.university}
                    </p>
                  </div>
                  <span
                    className="self-start sm:self-auto shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: 'var(--surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p className="text-[12px] mb-3" style={{ color: 'var(--text-muted)' }}>{edu.note}</p>
                <ul className="flex flex-col gap-1.5">
                  {edu.coreKnowledge.map((k, j) => (
                    <li key={j} className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--text-muted)' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent-2)' }} />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
