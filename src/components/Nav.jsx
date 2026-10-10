import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/site.js'

export default function Nav() {
  const [floating, setFloating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY

      // 滑过首屏（Hero）之后才浮出磨砂玻璃条。
      // 用 Hero 的实际高度而不是固定像素，这样任何屏幕高度都准。
      const heroHeight =
        document.getElementById('hero')?.offsetHeight ?? window.innerHeight
      setFloating(y > heroHeight - 120)

      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.6] },
    )
    sections.forEach((section) => io.observe(section))
    return () => io.disconnect()
  }, [])

  const go = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav${floating ? ' is-floating' : ''}`}>
      <div className="container nav__shell">
        <div className="nav__inner">
          <a className="nav__brand" href="#hero" onClick={(e) => go(e, 'hero')}>
            <strong>{profile.name}</strong>
            <span>{profile.nameEn}</span>
          </a>

          <nav className="nav__links" aria-label="主导航">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                className={`nav__link${active === item.id ? ' is-active' : ''}`}
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
              >
                <sup>{String(index + 1).padStart(2, '0')}</sup>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav__cta" href="#contact" onClick={(e) => go(e, 'contact')}>
            <i />
            联系我
          </a>
        </div>

        <div className="nav__progress-track">
          <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </header>
  )
}
