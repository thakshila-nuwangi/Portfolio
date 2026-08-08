import Reveal from './Reveal'
import { education, certifications } from '../data/skills'

export default function Education() {
  return (
    <section id="education" className="py-14 border-t border-hairline">
      <div className="max-w-3xl mx-auto px-7">
        <Reveal>
          <div className="font-mono text-xs text-signal tracking-wide mb-2">// 04 — EDUCATION</div>
          <h2 className="font-serif text-[26px] font-medium mb-9">Education</h2>
        </Reveal>

        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06} className="mb-5 last:mb-0">
            <div className="text-[15.5px] font-semibold">{e.degree}</div>
            <div className="text-[13.5px] text-slate mt-0.5">{e.org}</div>
            <div className="text-[14px] text-[#454A52] mt-1.5">{e.detail}</div>
          </Reveal>
        ))}

        <Reveal delay={0.15}>
          <h3 className="font-mono text-xs text-slate tracking-wide mt-8 mb-3">CERTIFICATIONS</h3>
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
