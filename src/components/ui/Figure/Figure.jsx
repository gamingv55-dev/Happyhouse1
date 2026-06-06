import Leaf from '../Leaf/Leaf'
import './Figure.css'

// Изображение с грижа за достъпността (задължителен alt).
// Докато няма реална снимка (`src`), показва изискан анимиран заместител.
// tone: 'green' | 'sage' | 'clay' | 'cream'
export default function Figure({
  src,
  alt,
  caption,
  tone = 'green',
  ratio = '4 / 3',
  className = '',
}) {
  return (
    <figure className={`figure ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <img className="figure__img" src={src} alt={alt} loading="lazy" />
      ) : (
        <div className={`figure__ph figure__ph--${tone}`} role="img" aria-label={alt}>
          <span className="figure__sheen" aria-hidden="true" />
          <Leaf className="figure__leaf" variant="sprig" />
          <span className="figure__mono">Happy House</span>
        </div>
      )}
      {caption && <figcaption className="figure__caption">{caption}</figcaption>}
    </figure>
  )
}
