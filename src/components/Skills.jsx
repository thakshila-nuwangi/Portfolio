import Reveal from './Reveal'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-7">
        <Reveal>
          <h2 className="font-serif text-[26px] font-medium mb-9 text-signal">Skills</h2>
        </Reveal>

        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.06} className="mb-6 last:mb-0">
            <h3 className="font-mono text-xs text-signal tracking-wide mb-3">{group.group.toUpperCase()}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-[13px] px-3 py-1.5 rounded-md border border-hairline bg-paper-dim hover:border-signal hover:text-signal transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}