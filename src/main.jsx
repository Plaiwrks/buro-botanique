import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'

const routes = [
  {
    path: '/',
    lazy: () => import('./pages/Home'),
  },
  {
    path: '/diensten',
    lazy: () => import('./pages/Diensten'),
  },
  {
    path: '/portfolio',
    lazy: () => import('./pages/Portfolio'),
  },
  {
    path: '/contact',
    lazy: () => import('./pages/Contact'),
  },
]

export const createRoot = ViteReactSSG({ routes })
