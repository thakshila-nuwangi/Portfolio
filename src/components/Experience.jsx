import Reveal from './Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-14 border-t border-hairline">
      <div className="max-w-3xl mx-auto px-7">
        <Reveal>
          <div className="font-mono text-xs text-signal tracking-wide mb-2">// 01 — WORK</div>
          <h2 className="font-serif text-[26px] font-medium mb-9">Experience</h2>
        </Reveal>

        <div className="relative pl-6">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-hairline" />
          {experience.map((job, i) => (
            <Reveal key={job.role + job.org} delay={i * 0.08} className="relative mb-10 last:mb-0">
              <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-paper border-2 border-signal" />
              <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 mb-1.5">
                <span className="text-[17px] font-semibold">{job.role}</span>
                <span className="font-mono text-xs text-slate">{job.org}</span>
              </div>
              <div className="text-sm text-signal font-medium mb-2.5">{job.focus}</div>
              <ul className="space-y-1.5">
                {job.bullets.map((b) => (
                  <li key={b} className="text-[14.5px] text-[#454A52] pl-4 relative">
                    <span className="absolute left-0 text-slate">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <span className="inline-block font-mono text-[10.5px] tracking-wide text-signal bg-signal-dim rounded px-2 py-0.5 mt-2.5">
                STATUS: {job.status}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
