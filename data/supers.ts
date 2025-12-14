import { Super, SuperResult } from '@/types'

export const supers: Array<Super> = [
  { name: 'Millennials', slug: 'millennials', threatRating: 2.1, description: 'Computer, Social media', img: 'millennials.png' },
  { name: 'Generation Z', slug: 'generation-z', threatRating: 2.5, description: 'Smartphone, Social Media,', img: 'generation-z.png' },
  { name: 'Generation Alpha', slug: 'generation-alpha', threatRating: 4.1, description: 'iPad, Social Media, AI', img: 'generation-alpha.png' },
  { name: 'Generation Beta', slug: 'generation-beta', threatRating: 6.1, description: 'iPad, Social Media, AI', img: 'generation-beta.png' },
]

export const supersResult: Array<SuperResult> = [
  {
    name: 'Generation X',
    slug: 'generation-x',
    img: 'generation-x.png',
    description:
      'Computer',
    lastActiveRecord: '31.12.80',
    locationKnown: true,
    threatRating: '6.7 Exercise moderate caution',
  },
  {
    name: 'Baby boomers',
    slug: 'baby-boomers',
    img: 'baby-boomers.png',
    description:
      'TV ',
    lastActiveRecord: '31.12.64',
    locationKnown: true,
    threatRating: '6.8 Exercise moderate caution',
  },
  {
    name: 'Silent Generation',
    slug: 'silent-generation',
    img: 'silent-generation.png',
    description:
      'Impossible to corrupt ',
    lastActiveRecord: '31.12.45',
    locationKnown: false,
    threatRating: '6.9 Exercise moderate caution',
  },
  {
    name: 'Greatest Generation',
    slug: 'greatest-generation',
    img: 'greatest-generation.png',
    description:
      'Impossible to corrupt ',
    lastActiveRecord: '31.12.27',
    locationKnown: false,
    threatRating: '9.3 Exercise high caution',
  },
]
