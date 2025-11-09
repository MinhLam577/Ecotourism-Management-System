import People from '@mui/icons-material/People'
import Chat from '@mui/icons-material/Chat'
import HomeIcon from '@mui/icons-material/Home'
import LegendToggleIcon from '@mui/icons-material/LegendToggle'
import PostAddIcon from '@mui/icons-material/PostAdd'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import FeedIcon from '@mui/icons-material/Feed'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import type { SideBarConfigType } from '~/types/menu'
export const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
    badge: 0
  },
  {
    title: 'Quản lý Users',
    path: '/users',
    icon: <People />,
    badge: 2
  },
  {
    title: 'Thống kê',
    path: '/static',
    icon: <LegendToggleIcon />,
    badge: 0
  },
  {
    title: 'Bài viết',
    path: '/post',
    icon: <PostAddIcon />,
    badge: 0
  },
  {
    title: 'Comment',
    path: '/comment',
    icon: <Chat />,
    badge: 0
  },
  {
    title: 'Reaction',
    path: '/reaction',
    icon: <FavoriteIcon />,
    badge: 0
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: <ChatBubbleOutlineIcon />,
    badge: 5
  },
  {
    title: 'Thông báo',
    path: '/notification',
    icon: <NotificationsNoneIcon />,
    badge: 8
  },
  {
    title: 'Tìm kiếm',
    path: '/search',
    icon: <SearchIcon />,
    badge: 0
  },
  {
    title: 'Tin tức',
    path: '/news',
    icon: <FeedIcon />,
    badge: 0
  },
  {
    title: 'Hỗ trợ',
    path: '/supports',
    icon: <HeadphonesIcon />,
    badge: 3
  }
] as SideBarConfigType[]
