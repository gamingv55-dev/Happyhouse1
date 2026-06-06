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
    full: 'ул. Градинска 1, гр. Варна',
  },
  mapQuery: 'Варна България',

  hours: [
    { day: 'Понеделник – Петък', time: '11:00 – 23:00' },
    { day: 'Събота – Неделя', time: '10:00 – 23:00' },
  ],

  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
}
