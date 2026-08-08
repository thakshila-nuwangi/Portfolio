import Reveal from './Reveal'
import { education, certifications } from '../data/skills'

export default function Education() {
  return (
    <section id="education" className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center py-14 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-7">
        <Reveal>
          <h2 className="font-serif text-[26px] font-medium mb-9 text-signal">Education</h2>
        </Reveal>

        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06} className="mb-5 last:mb-0">
            <div className="text-[15.5px] font-semibold text-signal">{e.degree}</div>
            <div className="text-[13.5px] text-slate mt-0.5">{e.org}</div>
            <div className="text-[14px] text-ink mt-1.5">{e.detail}</div>
          </Reveal>
        ))}
        <br/>
        <Reveal delay={0.15}>
          <h3 className="text-[15.5px] font-semibold text-signal">Certifications</h3>
          <ul>
            {certifications.map((c) => (
              <li key={c.name} className="flex justify-between gap-3 text-[14.5px] py-2.5 border-b border-hairline last:border-none">
                <span>{c.name}</span>
                <span className="font-mono text-[13px] text-slate whitespace-nowrap">{c.org}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
