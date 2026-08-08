import Reveal from './Reveal'

export default function Contact() {
  return (
    <footer id="contact" className="py-16 pb-20">
      <div className="max-w-6xl mx-auto px-7">
        <Reveal>

          <h2 className="font-serif text-[26px] font-medium mb-3">Let's talk.</h2>
          <p className="text-slate text-[14.5px] max-w-md mb-4">
            Let's connect — always up for a conversation about engineering, systems design or travel-tech.
          </p>

          <div className="font-mono text-[13px] text-ink space-y-1 mb-7">
            <div>thakshilanuwangi123@gmail.com</div>
            <div>+64 22 451 3703</div>
          </div>

          <div className="flex gap-3.5 flex-wrap mb-10">
            <a href="mailto:thakshilanuwangi123@gmail.com" className="font-mono text-[13px] px-4 py-2.5 rounded-md bg-ink text-paper border border-ink hover:bg-[#33363c] transition-colors">
              Email me
            </a>
            <a href="https://github.com/thakshila-nuwangi" target="_blank" rel="noopener" className="font-mono text-[13px] px-4 py-2.5 rounded-md border border-hairline hover:border-ink hover:bg-paper-dim transition-colors">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/thakshila-nuwangi" target="_blank" rel="noopener" className="font-mono text-[13px] px-4 py-2.5 rounded-md border border-hairline hover:border-ink hover:bg-paper-dim transition-colors">
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
