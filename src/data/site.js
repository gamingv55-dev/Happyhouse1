// Основна информация за заведението.
// Тук се сменят контактите, работното време и социалните мрежи.
export const site = {
  name: 'Happy House',
  tagline: 'градина-бистро',
  established: 2014,

  phone: '+359 88 000 0000',
  phoneHref: '+359880000000',
  email: 'rezervacii@happyhouse.bg',

  address: {
    street: 'ул. Градинска 1',
    city: 'Варна',
    full: 'Bistro Happy House, гр. Варна',
  },
  // Точна локация на заведението (от Google Maps)
  mapQuery: '43.2246488,27.9189883',
  mapsLink: 'https://maps.app.goo.gl/uhttFuQW1kgKKBDm9',

  hours: [
    { day: 'Понеделник – Петък', time: '11:00 – 23:00' },
    { day: 'Събота – Неделя', time: '10:00 – 23:00' },
  ],

  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
}
