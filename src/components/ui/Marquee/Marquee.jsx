import './Marquee.css'

// Безкрайно движеща се лента с думи. `items` е масив от текстове.
export default function Marquee({ items, dark = false }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${dark ? 'marquee--dark' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {row.map((it, i) => (
          <span className="marquee__item" key={i}>
            {it}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
