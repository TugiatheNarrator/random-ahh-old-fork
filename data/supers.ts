import { Super, SuperResult } from '@/types'

export const supers: Array<Super> = [
  { name: 'Millennials', slug: 'millennials', threatRating: 2.9, description: 'Atomic density manipulation', img: 'universal_man.png' },
  { name: 'Generation Z', slug: 'generation-z', threatRating: 1.6, description: 'Psychic foresight, thought control, telekinesis', img: 'psycwave.png' },
  { name: 'Generation Alpha', slug: 'generation-alpha', threatRating: 3.2, description: 'Telepathy, clairvoyance, magni-vision', img: 'everseer.png' },
]

export const supersResult: Array<SuperResult> = [
  {
    name: 'Generation X',
    slug: 'generation-x',
    img: 'generation-x.png',
    description:
      'Full-body elasticity, body capable of stretching in extreme way up to three hundred feet, high durability to physical injuries, stretch assisted leaps span eighty feet. Can compress and expand shape limited to maintaining bodily volume.',
    lastActiveRecord: '13.11.55',
    locationKnown: false,
    threatRating: '6.2 Exercise moderate caution',
  },
  {
    name: 'Baby boomers',
    slug: 'baby-boomers',
    img: 'baby-boomers.png',
    description:
      'Spontaneous generation of ice from water sources, freeze surface areas in excess of five hundreds meters. Manipulation of water for the formation of ice in solid form and structures in this material. He can generate ice from his fingertips but is limited by the amount of moisture in the air and his body. ',
    lastActiveRecord: '17.12.56',
    locationKnown: true,
    threatRating: '8.0 Exercise moderate caution',
  },
]
