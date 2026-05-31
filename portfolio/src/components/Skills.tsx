import { cv } from '../data/cv'

const SKILL_ICONS: Record<string, string> = {
  'AI & Data Science': '🤖',
  'Computational Design': '📐',
  'Spatial Analysis': '🗺️',
  'Visual Communication': '🎨',
}

const LANG_FLAGS: Record<string, string> = {
  'Vietnamese': '🇻🇳',
  'English': '🇬🇧',
  'Korean': '🇰🇷',
  'French': '🇫🇷',
  'Chinese': '🇨🇳',
}

const PROFICIENCY: Record<string, number> = {
  'Mother Tongue': 100,
  'Intermediate': 65,
  'Basic': 35,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
          Technical Skills
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-14" style={{ color: 'var(--text)' }}>
          Digital Convergence
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(Object.entries(cv.skills) as [string, readonly string[]][]).map(([category, tags]) => (
            <div
              key={category}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="text-3xl mb-3">{SKILL_ICONS[category] ?? '💡'}</div>
              <h3 className="text-[14px] font-bold mb-4" style={{ color: 'var(--text)' }}>
                {category}
              </h3>
              <div className="flex flex-col gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1.5 rounded-lg text-[12px] font-medium"
                    style={{ background: 'var(--bg)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div
          className="rounded-2xl p-8"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <h3 className="text-xl font-bold mb-8" style={{ color: 'var(--text)' }}>Languages</h3>
          <div className="flex flex-col gap-5">
            {cv.languages.map((l) => (
              <div key={l.lang} className="flex items-center gap-4">
                <span className="text-2xl w-8">{LANG_FLAGS[l.lang] ?? '🌐'}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>
                      {l.lang}
                    </span>
                    <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                      {l.level}
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: 'var(--border)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${PROFICIENCY[l.level] ?? 30}%`,
                        background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                      }}
                    />
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
