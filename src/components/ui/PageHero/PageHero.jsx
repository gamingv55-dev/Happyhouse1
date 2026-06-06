import Leaf from '../Leaf/Leaf'
import './PageHero.css'

// Заглавна лента в горната част на вътрешните страници.
export default function PageHero({ kicker, title, lead }) {
  return (
    <section className="page-hero">
      <Leaf className="page-hero__leaf" variant="branch" />
      <div className="container page-hero__inner">
        {kicker && <span className="kicker page-hero__kicker">{kicker}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
    </section>
  )
}
