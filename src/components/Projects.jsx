import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { projects } from '../data/projects'

function ProjectCard({ project, index }) {
  const isPlaceholder = project.name === 'Project name'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={isPlaceholder ? {} : { y: -3 }}
      className={
        isPlaceholder
          ? 'border border-dashed border-hairline rounded-xl p-5 min-h-[150px] flex flex-col justify-between'
          : 'border border-hairline rounded-xl p-5 min-h-[150px] flex flex-col justify-between bg-white/40 hover:border-signal transition-colors'
      }
    >
      <div>
        <span className="font-mono text-[11px] text-slate uppercase tracking-wide">
          {isPlaceholder ? 'Placeholder' : project.status}
        </span>
        <h4 className={isPlaceholder ? 'text-[15px] font-medium text-[#9CA0A6] mt-2.5 mb-1.5' : 'text-[16px] font-semibold mt-2.5 mb-1.5'}>
          {project.name}
        </h4>
        <p className={isPlaceholder ? 'text-[13px] text-[#B0B4B9]' : 'text-[13.5px] text-[#454A52]'}>
          {project.description}
        </p>
        {!isPlaceholder && project.stack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.stack.map((t) => (
              <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded bg-paper-dim border border-hairline">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {isPlaceholder ? (
        <span className="font-mono text-[11px] text-slate mt-4">— add project —</span>
      ) : (
        <div className="flex gap-3 mt-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener" className="font-mono text-[12px] text-signal hover:underline">
              Live ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener" className="font-mono text-[12px] text-slate hover:text-ink hover:underline">
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-14 border-t border-hairline">
      <div className="max-w-3xl mx-auto px-7">
        <Reveal>
          <div className="font-mono text-xs text-signal tracking-wide mb-2">// 03 — PROJECTS</div>
          <h2 className="font-serif text-[26px] font-medium mb-9">Projects</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.name + i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
