import { useEffect, useRef, useState } from 'react'
import Button from '../../ui/Button/Button'
import Leaf from '../../ui/Leaf/Leaf'
import RoscoMascot from '../../ui/RoscoMascot/RoscoMascot'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { site } from '../../../data/site'
import './Hero.css'

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const mediaRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  // Фин parallax на фона при скрол
  useEffect(() => {
    if (reduced) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (mediaRef.current) {
          mediaRef.current.style.transform = `translateY(${y * 0.15}px)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  return (
    <section className="hero">
      {/* Фон: снимка (резервна) + видео отгоре, когато е налично */}
      <div className="hero__media" ref={mediaRef}>
        <div
          className="hero__photo"
          role="img"
          aria-label="Входът на градината Happy House с цветя и синята арка"
        />
        {!reduced && (
          <video
            className={`hero__video ${videoReady ? 'is-playing' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero__veil" aria-hidden="true" />
      </div>

      {/* статични декорации */}
      <div className="hero__bg" aria-hidden="true">
        <Leaf className="hero__leaf hero__leaf--1 hero-float" variant="branch" />
        <Leaf className="hero__leaf hero__leaf--2 hero-float hero-float--slow" variant="sprig" />
      </div>

      <div className="hero__inner container">
        <span className="kicker hero__kicker">Градина-бистро · от {site.established}</span>
        <h1 className="hero__title">
          <span className="hero__line">Трапеза сред</span>
          <span className="hero__line hero__line--accent flourish">зеленината</span>
        </h1>
        <p className="hero__lead">
          Дървени беседки, цъфтящи цветя и ромон на фонтани. Домашна кухня и спокойствие
          на крачка от града — а до нас, фермата с ламата Роско.
        </p>
        <div className="hero__actions">
          <Button to="/rezervacii" withArrow>
            Резервирай маса
          </Button>
          <Button to="/menu" variant="outline" className="btn--on-dark">
            Разгледай менюто
          </Button>
        </div>
      </div>

      {/* Анимираната лама Роско */}
      <RoscoMascot />

      <a href="#story" className="hero__scroll" aria-label="Към съдържанието">
        <span className="hero__scroll-line"></span>
        Разгледай
      </a>
    </section>
  )
}
