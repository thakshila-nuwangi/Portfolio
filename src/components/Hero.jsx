import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <motion.header
      className="min-h-[calc(100vh-3.5rem)] max-w-5xl mx-auto px-7 flex flex-col md:flex-row items-center gap-16 md:gap-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex-1 md:max-w-2xl">
        <motion.h1 variants={item} className="font-serif text-5xl md:text-[52px] font-medium leading-tight tracking-tight mb-3 text-signal">
          Thakshila Nuwangi
        </motion.h1>

        <motion.p variants={item} className="text-lg text-slate max-w-2xl mb-5">
          Software Engineer — <span className="text-ink font-medium">backend-leaning full-stack</span>, four years building and shipping production systems.
        </motion.p>

        <motion.p variants={item} className="text-[15px] text-[#454A52] max-w-2xl mb-8 leading-relaxed text-justify">
          I'm a Software Engineer with four years of experience building full stack applications, from enterprise backend systems to accessible, user focused frontends.
        </motion.p>

        <motion.p variants={item} className="text-[15px] text-[#454A52] max-w-2xl mb-8 leading-relaxed text-justify">
          My journey started in Sri Lanka, where I worked across the stack, Java and Spring Boot, React, Angular, Node.js, and SQL, on projects ranging from hospital management systems to booking platforms. Along the way I picked up a habit that's stuck with me: learning new technology fast, and learning it properly.
          Whether it was mastering AWS services from scratch during an internship or diving into accessibility standards for a frontend rebuild, I've always preferred figuring things out hands-on over reading about them.
        </motion.p>

        <motion.p variants={item} className="text-[15px] text-[#454A52] max-w-2xl mb-8 leading-relaxed text-justify">
          I'm particularly drawn to the technical side of building things that actually hold up in production, scalable APIs, clean database design, CI/CD pipelines that make releases boring in the best way, and the kind of testing discipline that catches problems before customers do.
        </motion.p>

        <motion.div variants={item} className="flex gap-3.5 flex-wrap">
          <a href="#contact" className="font-mono text-[13px] px-4 py-2.5 rounded-md bg-ink text-paper border border-ink hover:bg-[#33363c] transition-colors">
            Get in touch
          </a>
          <a href="#" target="_blank" rel="noopener" className="font-mono text-[13px] px-4 py-2.5 rounded-md border border-hairline hover:border-ink hover:bg-paper-dim transition-colors">
            GitHub ↗
          </a>
          <a href="#" target="_blank" rel="noopener" className="font-mono text-[13px] px-4 py-2.5 rounded-md border border-hairline hover:border-ink hover:bg-paper-dim transition-colors">
            LinkedIn ↗
          </a>
        </motion.div>
      </div>

      <motion.div variants={item} className="shrink-0 md:mr-4">
        <div className="w-52 h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-hairline bg-paper-dim">
          <img
            src="/photo.jpg"
            alt="Thakshila"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </motion.div>
    </motion.header>
  )
}