import Reveal from '../../ui/Reveal/Reveal'
import Button from '../../ui/Button/Button'
import Figure from '../../ui/Figure/Figure'
import { menuCategories } from '../../../data/menu'
import './Signature.css'

// Подбрани ястия от менюто (първите налични)
const signature = menuCategories
  .flatMap((c) => c.items)
  .slice(0, 4)

export default function Signature() {
  return (
    <section className="signature section">
      <div className="signature__inner container">
        <Reveal className="signature__media">
          <Figure
            alt="Ястие, приготвено с продукти от градината"
            tone="cream"
            ratio="4 / 5"
          />
        </Reveal>

        <div className="signature__copy">
          <Reveal>
            <span className="kicker">От нашата кухня</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="title-lg signature__title">Сигнатурни вкусове</h2>
          </Reveal>

          <ul className="signature__list">
            {signature.map((item, i) => (
              <Reveal as="li" key={item.name} delay={120 + i * 70} className="sig-item">
                <div className="sig-item__head">
                  <h3 className="sig-item__name">{item.name}</h3>
                  <span className="sig-item__dots" aria-hidden="true"></span>
                  <span className="sig-item__price">{item.price} лв</span>
                </div>
                <p className="sig-item__desc">{item.desc}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120 + signature.length * 70}>
            <Button to="/menu" withArrow className="signature__btn">
              Цялото меню
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
