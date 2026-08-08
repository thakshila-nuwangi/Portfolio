import { useEffect, useState } from 'react'
 
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
 
  // On mount: use saved preference if one exists. Otherwise default to light,
  // regardless of the OS/browser preference.
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved === 'dark'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])
 
  function toggle() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
 
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-8 h-8 flex items-center justify-center rounded-md border border-hairline hover:border-signal text-slate hover:text-signal transition-colors"
    >
      {isDark ? (
        // sun icon
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // moon icon
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  )
}