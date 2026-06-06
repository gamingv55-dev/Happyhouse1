import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import ScrollProgress from './components/ui/ScrollProgress/ScrollProgress'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import Gallery from './pages/Gallery/Gallery'
import Farm from './pages/Farm/Farm'
import Events from './pages/Events/Events'
import Reservations from './pages/Reservations/Reservations'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/za-nas" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/ferma" element={<Farm />} />
          <Route path="/sabitia" element={<Events />} />
          <Route path="/rezervacii" element={<Reservations />} />
          <Route path="/kontakti" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
