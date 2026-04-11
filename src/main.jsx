import { ViteReactSSG } from 'vite-react-ssg'
import Layout from './components/layout/Layout'
import './index.css'

const routes = [
  {
    element: <Layout />,
    children: [
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
      {
        path: '*',
        lazy: () => import('./pages/NotFound'),
      },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
