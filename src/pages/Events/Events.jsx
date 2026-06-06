import PageHero from '../../components/ui/PageHero/PageHero'
import Reveal from '../../components/ui/Reveal/Reveal'
import Button from '../../components/ui/Button/Button'
import { events } from '../../data/events'
import './Events.css'

function parts(iso) {
  const d = new Date(iso)
  return {
    day: d.toLocaleDateString('bg-BG', { day: 'numeric' }),
    month: d.toLocaleDateString('bg-BG', { month: 'short' }).replace('.', ''),
  }
}

export default function Events() {
  const upcoming = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <>
      <PageHero
        kicker="Събития"
        title="Какво предстои в градината"
        lead="Вечери на живо, кулинарни следобеди и семейни празници сред зеленината."
      />

      <section className="section">
        <div className="container events-page">
          <ul className="events-list">
            {upcoming.map((e, i) => {
              const { day, month } = parts(e.date)
              return (
                <Reveal as="li" key={e.title} delay={i * 90} className="event-row">
                  <div className="event-row__date">
                    <span className="event-row__day">{day}</span>
                    <span className="event-row__month">{month}</span>
                  </div>
                  <div className="event-row__body">
                    <span className="event-row__tag">{e.tag}</span>
                    <h2 className="event-row__title">{e.title}</h2>
                    <p className="event-row__desc">{e.desc}</p>
                  </div>
                  <div className="event-row__time">{e.time} ч.</div>
                </Reveal>
              )
            })}
          </ul>

          <Reveal className="events-private">
            <div>
              <span className="kicker">Частни събития</span>
              <h2 className="title-lg events-private__title">Вашият празник, в нашата градина</h2>
              <p className="lead events-private__text">
                Рождени дни, кръщенета, фирмени партита и сватби — подготвяме градината специално
                за вашия повод. Свържете се с нас за оферта.
              </p>
            </div>
            <Button to="/rezervacii" withArrow>
              Запитване за събитие
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
