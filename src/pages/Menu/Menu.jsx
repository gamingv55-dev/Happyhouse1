import PageHero from '../../components/ui/PageHero/PageHero'
import Reveal from '../../components/ui/Reveal/Reveal'
import MenuBook from '../../components/ui/MenuBook/MenuBook'
import { menuCategories } from '../../data/menu'
import './Menu.css'

export default function Menu() {
  return (
    <>
      <PageHero
        kicker="Менюто"
        title="Вкусове от градината"
        lead="Домашни ястия, приготвени бавно и с пресни продукти. Менюто се обновява със сезоните."
      />

      {/* Книга-меню за прелистване */}
      <section className="section menu-book-section">
        <div className="container">
          <Reveal className="menu-book-intro">
            <span className="kicker kicker--center">Прелисти менюто</span>
            <h2 className="title-lg">Нашата книга-меню</h2>
          </Reveal>
          <Reveal delay={120}>
            <MenuBook />
          </Reveal>
        </div>
      </section>

      <section className="section menu-list-section">
        <div className="container menu-page">
          {menuCategories.map((cat) => (
            <div className="menu-cat" key={cat.id}>
              <Reveal className="menu-cat__head">
                <h2 className="menu-cat__name">{cat.name}</h2>
                <p className="menu-cat__note">{cat.note}</p>
              </Reveal>

              <ul className="menu-cat__list">
                {cat.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={i * 60} className="menu-item">
                    <div className="menu-item__head">
                      <h3 className="menu-item__name">{item.name}</h3>
                      <span className="menu-item__dots" aria-hidden="true"></span>
                      <span className="menu-item__price">{item.price} лв</span>
                    </div>
                    <p className="menu-item__desc">{item.desc}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}

          <Reveal className="menu-page__note">
            Менюто е примерно и ще бъде допълнено с актуалните ястия и цени на заведението.
          </Reveal>
        </div>
      </section>
    </>
  )
}
