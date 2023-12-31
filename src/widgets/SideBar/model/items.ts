import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
  { path: RoutePath.main, text: 'main', Icon: MainIcon },
  { path: RoutePath.about, text: 'about', Icon: AboutIcon },
  {
    path: RoutePath.profile,
    text: 'profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'articles',
    Icon: ArticlesIcon,
    authOnly: true,
  },
]
