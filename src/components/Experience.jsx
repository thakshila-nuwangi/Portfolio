import Reveal from './Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-14 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-7">
        <Reveal>
          <h2 className="font-serif text-[26px] font-medium mb-9 text-signal">Experience</h2>
        </Reveal>

        <div className="relative pl-6">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-hairline" />
          {experience.map((job, i) => (
            <Reveal key={job.role + job.org} delay={i * 0.08} className="relative mb-10 last:mb-0">
              <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-paper border-2 border-signal" />
              <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 mb-1.5">
                <span className="text-[15px] text-signal font-semibold">{job.role}</span>
                <span className="font-mono text-xs text-signal">{job.org}</span>
              </div>
              <div className="text-sm text-slate font-medium mb-2.5">{job.focus}</div>
              <ul className="space-y-1.5">
                {job.bullets.map((b) => (
                  <li key={b} className="text-[14.5px] text-ink pl-4 relative">
                    <span className="absolute left-0 text-ink">- </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
