import ThemeToggle from './ThemeToggle'
 
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
      <div className="w-full px-8 h-14 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-mono text-[13px] font-medium tracking-tight text-signal cursor-pointer"
        >
          thakshila.dev
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] text-signal hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}