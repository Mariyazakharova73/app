import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
  { path: RoutePath.main, text: 'main', Icon: MainIcon },
  { path: RoutePath.about, text: 'about', Icon: AboutIcon },
  { path: RoutePath.profile, text: 'profile', Icon: ProfileIcon },
]
