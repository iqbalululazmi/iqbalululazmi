import {
  ArchiveIcon,
  BookOpenIcon,
  HeartIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

export const NAVIGATION = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Favorite',
    href: '/favorite',
  },
  {
    name: 'Projects',
    href: '/project',
  },
  {
    name: 'Know Me 😍',
    href: '/me',
  },
]

export const MOBILE_NAVIGATION = [
  {
    name: 'Home',
    href: 'home',
    icon: HomeIcon,
  },
  {
    name: 'Blog',
    href: 'blog',
    icon: BookOpenIcon,
  },
  {
    name: 'Favorite',
    href: '#',
    icon: HeartIcon,
  },
  {
    name: 'Projects',
    href: '#',
    icon: ArchiveIcon,
  },
  {
    name: 'Know Me 😍',
    href: '#',
    icon: UserCircleIcon,
  },
]
