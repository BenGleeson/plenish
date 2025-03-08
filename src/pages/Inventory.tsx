import { PlusIcon } from '@heroicons/react/24/outline'
import { IngredientCategory } from '../types/recipe'

export default function Inventory() {
  const categories = Object.values(IngredientCategory)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Inventory</h1>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Add Item
        </button>
      </div>

      {/* Inventory Categories */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category} className="rounded-lg border border-gray-200 bg-white shadow">
            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
              <h3 className="text-sm font-medium text-gray-900">{category}</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">No items in this category.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
          <PlusIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No inventory items</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding items to your inventory.</p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add Item
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 