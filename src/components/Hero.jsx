import { useLayoutEffect, useRef } from 'react'
import { hero, profile, stats } from '../data/site.js'

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * 标题自适应：先量出较长那一行的实际宽度，再反推字号，
 * 让最长的一行正好撑满版心。这样任何屏宽下都是满幅版式，
 * 不用写死字号，两行也能保持同一个字号。
 */
function HeroTitle({ lines }) {
  const wrapRef = useRef(null)
  const lineRefs = useRef([])

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const els = lineRefs.current.filter(Boolean)
    if (!wrap || !els.length) return

    const fit = () => {
      const width = wrap.clientWidth
      if (!width) return
      els.forEach((el) => {
        el.style.fontSize = '100px'
      })
      const widest = Math.max(...els.map((el) => el.getBoundingClientRect().width))
      if (!widest) return
      const size = Math.min(320, (width / widest) * 100)
      els.forEach((el) => {
        el.style.fontSize = `${size}px`
      })
    }

    fit()
    window.addEventListener('resize', fit)
    let observer
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(fit)
      observer.observe(wrap)
    }
    let cancelled = false
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) fit()
      })
    }
    return () => {
      cancelled = true
      window.removeEventListener('resize', fit)
      observer?.disconnect()
    }
  }, [lines])

  return (
    <h1 className="hero__title" ref={wrapRef}>
      {lines.map((line, index) => (
        <span className="hero__line" key={line}>
          <i
            ref={(el) => {
              lineRefs.current[index] = el
            }}
          >
            {line}
          </i>
        </span>
      ))}
    </h1>
  )
}

export default function Hero() {
  const scrollTo = (id) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const [leadStat, ...restStats] = stats

  return (
    <section className="hero" id="hero">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          src={hero.video}
          poster={hero.poster || undefined}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
        />
        <div className="hero__scrim" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__meta">
          <span className="eyebrow">{hero.eyebrow}</span>
          <span className="eyebrow hero__meta-role">{profile.roleEn}</span>
        </div>

        <HeroTitle lines={hero.titleLines} />

        <div className="hero__stage">
          <div className="hero__main">
            <span className="hero__marks" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>

            <div className="hero__stat">
              <span className="hero__stat-value">{leadStat.value}</span>
              <span className="hero__stat-label">{leadStat.label}</span>
            </div>

            <p className="hero__lead">{hero.lead}</p>

            <div className="hero__actions">
              <button type="button" className="btn btn--solid" onClick={scrollTo('work')}>
                查看精选项目
                <ArrowRight />
              </button>
              <button type="button" className="btn btn--ghost" onClick={scrollTo('contact')}>
                联系方式
              </button>
            </div>
          </div>

          <div className="hero__side">
            <div className="hero__mini">
              {restStats.map((item) => (
                <div className="hero__mini-item" key={item.label}>
                  <span className="hero__mini-value">{item.value}</span>
                  <span className="hero__mini-label">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="hero__manifesto">
              内容要被看见
              <em>也要被验证</em>
            </p>
          </div>
        </div>
      </div>

      <div className="container hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero__scroll-meta">
          {profile.city} · {profile.school}
        </span>
        <i />
      </div>
    </section>
  )
}
