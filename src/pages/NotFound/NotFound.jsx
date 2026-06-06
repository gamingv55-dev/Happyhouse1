import { Link } from 'react-router-dom'
import Leaf from '../../components/ui/Leaf/Leaf'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound">
      <Leaf className="notfound__leaf" variant="branch" />
      <div className="notfound__inner">
        <span className="notfound__code">404</span>
        <h1 className="notfound__title">Тази пътека се губи в градината</h1>
        <p className="notfound__text">
          Страницата, която търсите, не съществува или е била преместена.
        </p>
        <Link to="/" className="notfound__btn">
          Обратно към началото
        </Link>
      </div>
    </section>
  )
}
