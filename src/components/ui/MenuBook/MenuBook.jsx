import { forwardRef, useRef, useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { menuCategories } from '../../../data/menu'
import { menuPages } from '../../../data/menuPages'
import './MenuBook.css'

// Една страница от книгата (react-pageflip изисква forwardRef).
const Page = forwardRef(function Page({ children, className = '' }, ref) {
  return (
    <div className={`book-page ${className}`} ref={ref}>
      <div className="book-page__inner">{children}</div>
    </div>
  )
})

// Снимка-страница (когато има реални снимки на менюто)
const ImagePage = forwardRef(function ImagePage({ src, n }, ref) {
  return (
    <div className="book-page book-page--image" ref={ref}>
      <img src={src} alt={`Страница ${n} от менюто`} className="book-page__img" />
    </div>
  )
})

export default function MenuBook() {
  const bookRef = useRef(null)
  const containerRef = useRef(null)
  const openedRef = useRef(false)
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const usePhotos = menuPages.length > 0

  // На телефон показваме една страница, на компютър — разтворена книга
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Размерите се събират в екрана; на телефон minWidth е малък, за да не прелива
  const dims = isMobile
    ? { width: 300, height: 430, minWidth: 220, maxWidth: 380, minHeight: 320, maxHeight: 600 }
    : { width: 400, height: 560, minWidth: 380, maxWidth: 520, minHeight: 400, maxHeight: 720 }

  // „Побутваме" флипбука да се преизчисли спрямо контейнера след монтиране/смяна
  useEffect(() => {
    const t = setTimeout(() => window.dispatchEvent(new Event('resize')), 60)
    return () => clearTimeout(t)
  }, [isMobile])

  // Книгата сама се разгръща, когато се появи на екрана (веднъж)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const openBook = () => {
      let tries = 0
      const attempt = () => {
        const pf = bookRef.current?.pageFlip?.()
        if (pf && typeof pf.flipNext === 'function') {
          pf.flipNext()
        } else if (tries++ < 20) {
          setTimeout(attempt, 200)
        }
      }
      attempt()
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !openedRef.current) {
          openedRef.current = true
          if (!reduced) setTimeout(openBook, 600)
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const flip = (dir) => {
    const pf = bookRef.current?.pageFlip?.()
    if (!pf) return
    dir === 'next' ? pf.flipNext() : pf.flipPrev()
  }

  // Генерирани страници от текстовото меню
  const generated = [
    <Page key="cover" className="book-page--cover">
      <span className="book-cover__kicker">Happy House</span>
      <span className="book-cover__leaf">❦</span>
      <h3 className="book-cover__title">Меню</h3>
      <span className="book-cover__since">градина-бистро · от 2014</span>
      <span className="book-cover__hint">прелисти →</span>
    </Page>,
    ...menuCategories
      .filter((cat) => cat.items.length > 0)
      .map((cat) => (
        <Page key={cat.id}>
        <h4 className="book-cat__name">{cat.name}</h4>
        <p className="book-cat__note">{cat.note}</p>
        <ul className="book-cat__list">
          {cat.items.map((item) => (
            <li key={item.name} className="book-item">
              <div className="book-item__head">
                <span className="book-item__name">{item.name}</span>
                <span className="book-item__dots" />
                <span className="book-item__price">{item.price}</span>
              </div>
              <span className="book-item__desc">{item.desc}</span>
            </li>
          ))}
        </ul>
      </Page>
    )),
    <Page key="back" className="book-page--back">
      <span className="book-cover__leaf">❦</span>
      <h3 className="book-back__title">Добър апетит!</h3>
      <p className="book-back__text">Заповядайте отново в градината на Happy House.</p>
    </Page>,
  ]

  const photoPages = menuPages.map((src, i) => <ImagePage key={src} src={src} n={i + 1} />)

  return (
    <div className="menu-book" ref={containerRef}>
      <div className="menu-book__stage">
        <HTMLFlipBook
          key={isMobile ? 'mobile' : 'desktop'}
          ref={bookRef}
          width={dims.width}
          height={dims.height}
          minWidth={dims.minWidth}
          maxWidth={dims.maxWidth}
          minHeight={dims.minHeight}
          maxHeight={dims.maxHeight}
          size="stretch"
          usePortrait={true}
          showCover={true}
          maxShadowOpacity={0.35}
          mobileScrollSupport={true}
          drawShadow={true}
          className="menu-book__flip"
          onFlip={(e) => setPage(e.data)}
        >
          {usePhotos ? photoPages : generated}
        </HTMLFlipBook>
      </div>

      <div className="menu-book__controls">
        <button className="menu-book__btn" onClick={() => flip('prev')} aria-label="Предишна страница" disabled={page === 0}>
          <FiChevronLeft />
        </button>
        <span className="menu-book__hint">Дръпни ъгъла на страницата, за да прелистиш</span>
        <button className="menu-book__btn" onClick={() => flip('next')} aria-label="Следваща страница">
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}
