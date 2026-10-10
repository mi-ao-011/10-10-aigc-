import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/site.js'

export default function Contact() {
  const [toast, setToast] = useState('')

  const copy = (text, message) => async () => {
    try {
      await navigator.clipboard.writeText(text)
      setToast(message)
    } catch {
      setToast(`请手动复制：${text}`)
    }
    window.setTimeout(() => setToast(''), 2200)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <Reveal>
          <div className="section-index">04 — CONTACT</div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="contact__title">
            一起做点
            <br />
            <em>能被看见的内容</em>
          </h2>
        </Reveal>

        <Reveal delay={110}>
          <p className="contact__lead">
            目前正在寻找杭州的抖音运营 / 新媒体运营 / 直播电商运营实习机会，
            2026 年 10 月起可到岗，可连续实习 6 个月以上。欢迎随时联系我聊作品、聊选题，或者直接聊机会。
          </p>
        </Reveal>

        <Reveal className="contact__grid" delay={150}>
          <button
            type="button"
            className="contact__cell"
            onClick={copy(profile.email, '邮箱已复制')}
          >
            <span className="contact__cell-label">邮箱 / EMAIL</span>
            <span className="contact__cell-value">{profile.email}</span>
            <span className="contact__cell-hint">点击复制</span>
          </button>

          <a className="contact__cell" href={profile.phoneHref}>
            <span className="contact__cell-label">电话 / PHONE</span>
            <span className="contact__cell-value">{profile.phone}</span>
            <span className="contact__cell-hint">点击拨打</span>
          </a>

          <div className="contact__cell">
            <span className="contact__cell-label">坐标 / BASE</span>
            <span className="contact__cell-value">浙江 · {profile.city}</span>
            <span className="contact__cell-hint">2026.10 起可到岗 · 每周 5 天</span>
          </div>
        </Reveal>

        <Reveal className="contact__actions" delay={190}>
          <a className="btn btn--solid" href={`mailto:${profile.email}`}>
            发送邮件
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="btn btn--ghost" href={profile.phoneHref}>
            电话联系
          </a>
        </Reveal>
      </div>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.nameEn}
          </span>
          <span>{profile.roleEn}</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>

      <div className={`toast${toast ? ' is-on' : ''}`} role="status">
        {toast}
      </div>
    </section>
  )
}
