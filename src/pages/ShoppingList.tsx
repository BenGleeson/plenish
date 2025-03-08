import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function ShoppingList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Shopping List</h1>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Add Item
        </button>
      </div>

      {/* Shopping List */}
      <div className="rounded-lg border border-gray-200 bg-white shadow">
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">Current List</h3>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Clear Completed
            </button>
          </div>
        </div>
        <div className="p-4">
          {/* Empty State */}
          <div className="text-center">
            <CheckIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No items</h3>
            <p className="mt-1 text-sm text-gray-500">Add items to your shopping list.</p>
          </div>
        </div>
      </div>

      {/* Recipe-based Shopping */}
      <div className="rounded-lg border border-gray-200 bg-white shadow">
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
          <h3 className="text-sm font-medium text-gray-900">Generate from Recipes</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500">Select recipes to generate a shopping list.</p>
          <button
            type="button"
            className="mt-4 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Choose Recipes
          </button>
        </div>
      </div>
    </div>
  )
} 