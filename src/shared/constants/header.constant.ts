import {
  ArchiveIcon,
  BookOpenIcon,
  HeartIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

const navigations = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: 'blog',
  },
  {
    name: 'Favorite',
    href: 'favorite',
  },
  {
    name: 'Projects',
    href: 'project',
  },
  {
    name: 'Know Me 😍',
    href: 'me',
  },
]

const mobileNavigations = [
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

export const HeaderConstant = {
  navigations,
  mobileNavigations,
}
