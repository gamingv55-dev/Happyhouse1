import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Връща скрола най-горе при всяка смяна на страница.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
