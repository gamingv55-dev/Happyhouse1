import Hero from '../../components/home/Hero/Hero'
import Story from '../../components/home/Story/Story'
import Experience from '../../components/home/Experience/Experience'
import Signature from '../../components/home/Signature/Signature'
import FarmTeaser from '../../components/home/FarmTeaser/FarmTeaser'
import ReserveCTA from '../../components/home/ReserveCTA/ReserveCTA'
import Marquee from '../../components/ui/Marquee/Marquee'

const marqueeWords = [
  'Градина-бистро',
  'Домашна кухня',
  'Ламата Роско',
  'Беседки на сянка',
  'От 2014',
  'Семейни моменти',
]

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Marquee items={marqueeWords} />
      <Experience />
      <Signature />
      <FarmTeaser />
      <ReserveCTA />
    </>
  )
}
