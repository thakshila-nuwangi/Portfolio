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
      className="pt-24 pb-16 max-w-3xl mx-auto px-7"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={item}
        className="inline-flex items-center gap-2 font-mono text-xs text-signal bg-signal-dim border border-[#CFE6DA] rounded-full px-3 py-1.5 mb-7"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
        </span>
        Open to software engineering roles — Wellington, NZ
      </motion.div>

      <motion.h1 variants={item} className="font-serif text-5xl md:text-[52px] font-medium leading-tight tracking-tight mb-3">
        Thakshila
      </motion.h1>

      <motion.p variants={item} className="text-lg text-slate max-w-lg mb-5">
        Software Engineer — <span className="text-ink font-medium">backend-leaning full-stack</span>, four years building and shipping production systems.
      </motion.p>

      <motion.p variants={item} className="text-[15px] text-[#454A52] max-w-lg mb-8 leading-relaxed">
        I build backend systems and full-stack applications with Java and Spring Boot, and ship them through
        Docker, Kubernetes, and CI/CD pipelines. Currently completing a Master's in IT (Data Science) after
        four years across travel, hospitality, and events platforms — most recently full-stack at Lexion Labs.
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
    </motion.header>
  )
}
