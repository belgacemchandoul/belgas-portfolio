import { createBrowserRouter, Link, Outlet } from 'react-router-dom'
import App from './App'
import FootyQuizMaster from './pages/FootyQuizMaster'
import HireHaven from './pages/HireHaven'
import Emotiscan from './pages/Emotiscan'
import YouSafe from './pages/YouSafe'
import CustomCursor from './components/ui/CustomCursor'

const Layout = () => (
  <>
    <CustomCursor />
    <Outlet />
  </>
)

const NotFound = () => (
  <div className="min-h-screen bg-hero-bg flex flex-col items-center justify-center font-mono text-sm gap-4">
    <span className="font-display text-lime" style={{ fontSize: '2rem' }}>404</span>
    <span className="text-zinc-500">page not found</span>
    <Link to="/" className="text-white hover:text-lime transition-colors mt-2">
      ← go home
    </Link>
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'projects/footyquizmaster', element: <FootyQuizMaster /> },
      { path: 'projects/hirehaven', element: <HireHaven /> },
      { path: 'projects/emotiscan', element: <Emotiscan /> },
      { path: 'projects/yousafe', element: <YouSafe /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
