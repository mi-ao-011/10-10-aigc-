import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { strengths } from '../data/site.js'

export default function Strengths() {
  return (
    <section className="section" id="strengths">
      <div className="container">
        <SectionHead
          index="03 — MY EDGE"
          title={
            <>
              个人优势
              <em> / 6 项能力</em>
            </>
          }
          note="从内容生产到平台运营，再到数据复盘 —— 一条可以独立跑通的完整链路。"
        />

        <div className="edge-grid">
          {strengths.map((item, index) => (
            <Reveal className="edge" key={item.title} delay={(index % 3) * 80}>
              <div className="edge__top">
                <span className="edge__index">/ {item.index}</span>
                <span className="edge__en">{item.en}</span>
              </div>
              <h3 className="edge__title">{item.title}</h3>
              <p className="edge__desc">{item.desc}</p>
              <div className="edge__tags">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
