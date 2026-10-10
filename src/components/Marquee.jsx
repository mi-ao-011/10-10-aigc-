import { marqueeItems } from '../data/site.js'

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
