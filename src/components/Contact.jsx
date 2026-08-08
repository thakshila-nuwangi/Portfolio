import Reveal from './Reveal'

export default function Contact() {
  return (
    <footer id="contact" className="py-16 pb-20">
      <div className="max-w-3xl mx-auto px-7">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-signal bg-signal-dim border border-[#CFE6DA] rounded-full px-3 py-1.5 mb-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
            </span>
            STATUS: OPEN TO WORK
          </div>
          <h2 className="font-serif text-[26px] font-medium mb-3">Let's talk.</h2>
          <p className="text-slate text-[14.5px] max-w-md mb-7">
            Looking for software engineering roles at established companies in Wellington.
            Happy to talk about backend systems, full-stack work, or anything travel-tech.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-10">
            <a href="mailto:you@example.com" className="font-mono text-[13px] px-4 py-2.5 rounded-md bg-ink text-paper border border-ink hover:bg-[#33363c] transition-colors">
              Email me
            </a>
            <a href="#" target="_blank" rel="noopener" className="font-mono text-[13px] px-4 py-2.5 rounded-md border border-hairline hover:border-ink hover:bg-paper-dim transition-colors">
              GitHub ↗
            </a>
            <a href="#" target="_blank" rel="noopener" className="font-mono text-[13px] px-4 py-2.5 rounded-md border border-hairline hover:border-ink hover:bg-paper-dim transition-colors">
              LinkedIn ↗
            </a>
          </div>
          <div className="font-mono text-[11.5px] text-[#A8ACB2] pt-6 border-t border-hairline">
            built with React + Vite · Wellington, NZ
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
