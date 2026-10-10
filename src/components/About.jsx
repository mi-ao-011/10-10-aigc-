import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { contacts, intro, profile, skills, stats, timeline } from '../data/site.js'
import { campusAccount, campusWorks } from '../data/campus.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="01 — ABOUT"
          title={
            <>
              你好，我是肖志豪
              <br />
              <em>做内容，也做增长</em>
            </>
          }
          note="新媒体运营 / AI 产品视频营销运营。三重实战经历：传媒公司新媒体实习、校园文旅短视频项目、社团账号运营。"
        />

        <div className="about__grid">
          <Reveal className="portrait">
            <img src={profile.portrait} alt={`${profile.name} 人物图`} loading="lazy" />
            <div className="portrait__caption">
              <strong>{profile.name}</strong>
              {profile.school}
              <br />
              {profile.availability}
            </div>
          </Reveal>

          <div className="about__body">
            <Reveal className="about__role">
              <span className="chip">新媒体运营</span>
              <span className="chip">AI 产品视频营销运营</span>
              <span className="chip">AIGC 内容生产</span>
              <span className="chip">直播电商运营</span>
            </Reveal>

            <Reveal className="about__text" delay={90}>
              {intro.map((paragraph) => (
                <p key={paragraph.slice(0, 12)}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal className="contact-list" delay={150}>
              {contacts.map((item) =>
                item.href ? (
                  <a className="contact-list__item" key={item.label} href={item.href}>
                    <div className="contact-list__label">{item.label}</div>
                    <div className="contact-list__value">{item.value}</div>
                  </a>
                ) : (
                  <div className="contact-list__item" key={item.label}>
                    <div className="contact-list__label">{item.label}</div>
                    <div className="contact-list__value">{item.value}</div>
                  </div>
                ),
              )}
            </Reveal>
          </div>
        </div>

        <div className="stats">
          {stats.map((item, index) => (
            <Reveal className="stat" key={item.label} delay={index * 70}>
              <div className="stat__value">{item.value}</div>
              <div className="stat__label">{item.label}</div>
              <div className="stat__note">{item.note}</div>
            </Reveal>
          ))}
        </div>

        <div className="timeline">
          <div className="timeline__head">经历 / EXPERIENCE &amp; EDUCATION</div>
          {timeline.map((item, index) => (
            <Reveal className="tl-item" key={item.org} delay={index * 60}>
              <div>
                <div className="tl-item__period">{item.period}</div>
                <div className="tl-item__tag">{item.tag}</div>
              </div>
              <div>
                <h3 className="tl-item__org">{item.org}</h3>
                <div className="tl-item__role">{item.role}</div>
                <ul className="tl-item__points">
                  {item.points.map((point) => (
                    <li key={point.slice(0, 14)}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="campus">
          <div className="campus__head">
            <h3 className="campus__title">
              校园官方账号作品 <em>/ CAMPUS OFFICIAL</em>
            </h3>
            <p className="campus__note">
              {campusAccount.name} 官方抖音 · {campusAccount.note}
              <span className="campus__hint">点击卡片跳转原视频 ↗</span>
            </p>
          </div>

          <div className="campus__grid">
            {campusWorks.map((item, index) => (
              <Reveal
                as="a"
                key={item.id}
                className="campus-card"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                delay={index * 70}
              >
                <div className="campus-card__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="campus-card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="campus-card__badge">{item.badge}</span>
                </div>
                <div className="campus-card__body">
                  <div className="campus-card__kind">
                    {item.kind} · {item.date} · {item.duration}
                  </div>
                  <h4 className="campus-card__title">{item.title}</h4>
                  <div className="campus-card__role">{item.role}</div>
                  <div className="campus-card__stats">
                    <span>赞 {item.likes}</span>
                    <span>转发 {item.shares}</span>
                    <span className="campus-card__go">抖音 ↗</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="skills">
          {skills.map((group, index) => (
            <Reveal className="skills__group" key={group.group} delay={index * 60}>
              <h4>{group.group}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
