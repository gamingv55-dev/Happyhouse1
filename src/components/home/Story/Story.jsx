import Reveal from '../../ui/Reveal/Reveal'
import Button from '../../ui/Button/Button'
import Figure from '../../ui/Figure/Figure'
import './Story.css'

export default function Story() {
  return (
    <section className="story section" id="story">
      <div className="story__inner container">
        <Reveal className="story__media">
          <Figure
            alt="Дървена беседка сред зеленината на градината"
            tone="sage"
            ratio="4 / 5"
          />
          <Figure
            alt="Маса с розова покривка, подредена на открито"
            tone="clay"
            ratio="4 / 3"
            className="story__media-2"
          />
        </Reveal>

        <div className="story__copy">
          <Reveal>
            <span className="kicker">Нашата история</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="title-lg story__title">
              Зелено кътче, в което времето <span className="flourish">забавя ход</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead story__text">
              От 2014 г. Happy House посреща гостите си в истинска градина — с високи дървета,
              дървени беседки и фонтанчета. Създадохме място, където градът остава зад гърба,
              а на трапезата идват ястия, приготвени с продукти от собствената ни градина.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="story__stats">
              <li>
                <span className="story__stat-num">2014</span>
                <span className="story__stat-label">Основани</span>
              </li>
              <li>
                <span className="story__stat-num">3</span>
                <span className="story__stat-label">Уютни кътчета</span>
              </li>
              <li>
                <span className="story__stat-num">100%</span>
                <span className="story__stat-label">Домашно</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <Button to="/za-nas" variant="ghost" withArrow>
              Повече за нас
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
