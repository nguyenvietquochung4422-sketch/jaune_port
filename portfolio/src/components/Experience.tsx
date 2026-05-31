import { cv } from '../data/cv'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 sm:px-8 md:px-10 scroll-mt-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--accent)' }}>
          Studio — Work Experience
        </p>
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-14 leading-[1.1]"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
        >
          Where I've Worked
        </h2>

        <div className="relative">
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px" style={{ background: 'var(--border)' }} />
          <div className="flex flex-col gap-12">
            {cv.experience.map((exp, i) => (
              <div key={i} className="relative pl-16 md:pl-24">
                {/* Timeline dot */}
                <div
                  className="absolute left-[13px] md:left-[23px] top-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px var(--accent-light)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div
                  className="rounded-2xl p-6 sm:p-8"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-[14px] font-semibold mt-0.5" style={{ color: 'var(--accent)' }}>
                        {exp.org}
                      </p>
                    </div>
                    <span
                      className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                      style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid rgba(196,92,58,0.2)' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[14px] leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                    {exp.description}
                  </p>
                  {exp.projects && (
                    <div className="flex flex-col gap-3">
                      <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        Projects
                      </p>
                      {exp.projects.map((proj, j) => (
                        <div
                          key={j}
                          className="rounded-xl p-4"
                          style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                        >
                          <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                            {proj.name}
                          </p>
                          <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                            {proj.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
