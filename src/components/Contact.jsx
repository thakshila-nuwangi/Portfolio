import Reveal from './Reveal'

export default function Contact() {
  return (
    <footer id="contact" className="py-16 pb-20">
      <div className="max-w-6xl mx-auto px-7">
        <Reveal>
          
          <h2 className="font-serif text-[26px] font-medium mb-3">Let's talk.</h2>
          <p className="text-slate text-[14.5px] max-w-md mb-7">
            Let's connect — always up for a conversation about engineering, systems design or travel-tech.
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
            <div className="font-mono text-[11.5px] text-footnote pt-6 border-t border-hairline">
             © {new Date().getFullYear()} Thakshila Nuwangi · built with React + Vite · Wellington, NZ
           </div>
        </Reveal>
      </div>
    </footer>
  )
}
