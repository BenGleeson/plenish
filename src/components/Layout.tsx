import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, BookOpenIcon, ShoppingCartIcon, CalendarIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'

interface LayoutProps {
  children: ReactNode
}

interface NavItem {
  name: string
  path: string
  icon: typeof HomeIcon
}

const navigation: NavItem[] = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Recipes', path: '/recipes', icon: BookOpenIcon },
  { name: 'Inventory', path: '/inventory', icon: ArchiveBoxIcon },
  { name: 'Shopping List', path: '/shopping-list', icon: ShoppingCartIcon },
  { name: 'Meal Planner', path: '/meal-planner', icon: CalendarIcon },
]

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="grid grid-cols-5 gap-1">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center justify-center py-2 text-xs ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="mt-1">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Desktop navigation */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-2xl font-bold text-gray-900">Plenish</h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon
                      className={`mr-3 h-6 w-6 flex-shrink-0 ${
                        isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64">
        <main className="py-6 px-4 sm:px-6 md:px-8">
          {children}
        </main>
      </div>

      {/* Mobile navigation spacer */}
      <div className="h-16 md:hidden" />
    </div>
  )
} 