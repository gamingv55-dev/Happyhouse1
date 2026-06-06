import Reveal from '../../ui/Reveal/Reveal'
import Button from '../../ui/Button/Button'
import Leaf from '../../ui/Leaf/Leaf'
import { site } from '../../../data/site'
import './ReserveCTA.css'

export default function ReserveCTA() {
  return (
    <section className="reserve-cta section">
      <div className="container">
        <Reveal className="reserve-cta__panel">
          <Leaf className="reserve-cta__leaf reserve-cta__leaf--1" variant="sprig" />
          <Leaf className="reserve-cta__leaf reserve-cta__leaf--2" variant="branch" />

          <span className="kicker kicker--center reserve-cta__kicker">Заповядайте</span>
          <h2 className="title-lg reserve-cta__title">
            Запазете своята маса <br />в градината
          </h2>
          <p className="lead reserve-cta__text">
            Обяд със семейството, среща с приятели или специален повод — ще се радваме да ви посрещнем.
          </p>
          <div className="reserve-cta__actions">
            <Button to="/rezervacii" withArrow>
              Резервирай маса
            </Button>
            <Button href={`tel:${site.phoneHref}`} variant="ghost">
              {site.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
