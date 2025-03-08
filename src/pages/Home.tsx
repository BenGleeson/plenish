import { Link } from 'react-router-dom'
import { PlusIcon, ClockIcon, CalendarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome to Plenish</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Quick Actions */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Link
              to="/recipes/new"
              className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400"
            >
              <PlusIcon className="h-8 w-8 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">Add Recipe</span>
            </Link>
            <Link
              to="/meal-planner"
              className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400"
            >
              <CalendarIcon className="h-8 w-8 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">Plan Meals</span>
            </Link>
            <Link
              to="/shopping-list"
              className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400"
            >
              <ShoppingCartIcon className="h-8 w-8 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">Shopping List</span>
            </Link>
            <Link
              to="/recipes"
              className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400"
            >
              <ClockIcon className="h-8 w-8 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">Quick Recipes</span>
            </Link>
          </div>
        </div>

        {/* Recent Recipes */}
        <div className="col-span-1 sm:col-span-2">
          <h2 className="text-lg font-medium text-gray-900">Recent Recipes</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">No recipes yet. Add your first recipe to get started!</p>
            </div>
          </div>
        </div>

        {/* Upcoming Meals */}
        <div className="col-span-1 sm:col-span-2">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Meals</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">No meals planned. Start planning your meals!</p>
            </div>
          </div>
        </div>

        {/* Shopping List Preview */}
        <div className="col-span-1 sm:col-span-2">
          <h2 className="text-lg font-medium text-gray-900">Shopping List</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">Your shopping list is empty.</p>
            </div>
          </div>
        </div>

        {/* Inventory Status */}
        <div className="col-span-1 sm:col-span-2">
          <h2 className="text-lg font-medium text-gray-900">Inventory Status</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">Start adding items to your inventory!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 