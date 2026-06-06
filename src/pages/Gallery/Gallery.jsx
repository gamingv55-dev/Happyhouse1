import { useState } from 'react'
import PageHero from '../../components/ui/PageHero/PageHero'
import Reveal from '../../components/ui/Reveal/Reveal'
import Figure from '../../components/ui/Figure/Figure'
import Lightbox from '../../components/ui/Lightbox/Lightbox'
import { gallery } from '../../data/gallery'
import './Gallery.css'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageHero
        kicker="Галерия"
        title="Разходка из градината"
        lead="Беседките, цветята, трапезата и обитателите на фермата — кадри от Happy House."
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((photo, i) => (
              <Reveal
                key={photo.id}
                delay={(i % 3) * 80}
                className={`gallery-grid__item ${i % 5 === 0 ? 'gallery-grid__item--tall' : ''}`}
              >
                <button
                  className="gallery-grid__btn"
                  onClick={() => setActive(i)}
                  aria-label={`Уголеми: ${photo.alt}`}
                >
                  <Figure
                    src={photo.src}
                    alt={photo.alt}
                    caption={photo.caption}
                    tone={photo.tone}
                    ratio={i % 5 === 0 ? '3 / 4' : '4 / 3'}
                  />
                </button>
              </Reveal>
            ))}
          </div>

          <p className="gallery-note">
            Изображенията са примерни и ще бъдат заменени с реалните снимки на заведението.
          </p>
        </div>
      </section>

      <Lightbox items={gallery} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </>
  )
}
