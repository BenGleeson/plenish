import { PlusIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Recipes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Recipes</h1>
        <Link
          to="/recipes/new"
          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Recipe
        </Link>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Empty State */}
        <div className="col-span-full">
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <PlusIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No recipes</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new recipe.</p>
            <div className="mt-6">
              <Link
                to="/recipes/new"
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                New Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 