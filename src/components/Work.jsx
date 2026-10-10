import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { works } from '../data/site.js'

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.2v13.6L19 12z" />
  </svg>
)

function WorkCard({ work, index, onOpen }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const startPreview = () => {
    const video = videoRef.current
    if (!video) return
    setPlaying(true)
    video.currentTime = 0
    const attempt = video.play()
    if (attempt?.catch) attempt.catch(() => setPlaying(false))
  }

  const stopPreview = () => {
    const video = videoRef.current
    setPlaying(false)
    if (video) video.pause()
  }

  const clickable = Boolean(work.video)

  return (
    <Reveal
      as="article"
      className={`work-card work-card--${work.size === 'large' ? 'wide' : 'sm'}${
        playing ? ' is-playing' : ''
      }`}
      delay={(index % 2) * 90}
    >
      <div
        className="work-card__media"
        onMouseEnter={clickable ? startPreview : undefined}
        onMouseLeave={clickable ? stopPreview : undefined}
      >
        {work.image ? (
          <img src={work.image} alt={`${work.title} ${work.subtitle}`} loading="lazy" />
        ) : null}
        {work.video ? (
          <video
            ref={videoRef}
            className={work.image ? '' : 'is-still'}
            src={work.video}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : null}

        <span className="work-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="work-card__kind">{work.kind}</span>

        {clickable ? (
          <button
            type="button"
            className="work-card__play"
            onClick={() => onOpen(work)}
            aria-label={`播放 ${work.title}`}
          >
            <PlayIcon />
          </button>
        ) : null}
      </div>

      <div className="work-card__body">
        <div className="work-card__titleRow">
          <div>
            <h3 className="work-card__title">{work.title}</h3>
            <div className="work-card__sub">{work.subtitle}</div>
          </div>
          <span className="work-card__year">{work.year}</span>
        </div>

        <p className="work-card__desc">{work.desc}</p>

        <dl className="work-card__metrics">
          {work.metrics.map((metric) => (
            <div key={metric.k}>
              <dt>{metric.k}</dt>
              <dd>{metric.v}</dd>
            </div>
          ))}
        </dl>

        <div className="work-card__tags">
          {work.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {clickable ? (
          <button type="button" className="work-card__open" onClick={() => onOpen(work)}>
            播放成片
            <span aria-hidden="true">↗</span>
          </button>
        ) : null}
      </div>
    </Reveal>
  )
}

function Lightbox({ work, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox__panel" onClick={(event) => event.stopPropagation()}>
        <video
          className="lightbox__video"
          src={work.video}
          poster={work.image}
          controls
          autoPlay
          playsInline
        />
        <div className="lightbox__bar">
          <div>
            <div className="lightbox__title">
              {work.title} · {work.subtitle}
            </div>
            <div className="lightbox__meta">
              {work.kind} — {work.year}
            </div>
          </div>
          <button type="button" className="lightbox__close" onClick={onClose}>
            关闭 / ESC
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          index="02 — SELECTED WORK"
          title={
            <>
              精选项目
              <em> / AIGC</em>
            </>
          }
          note="商业广告与 AI 漫剧两条线。鼠标悬停可预览动态画面，点击卡片播放完整成片。"
        />

        <div className="work-grid">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active ? <Lightbox work={active} onClose={() => setActive(null)} /> : null}
    </section>
  )
}
