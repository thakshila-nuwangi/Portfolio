const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 bg-paper/90 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-3xl mx-auto px-7 h-14 flex items-center justify-between">
        <div className="font-mono text-[13px] font-medium tracking-tight">
          thakshila<span className="text-signal">.</span>dev
        </div>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-slate hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
