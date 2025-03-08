import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { MealType } from '../types/recipe'

export default function MealPlanner() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const mealTypes = Object.values(MealType)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Meal Planner</h1>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <CalendarIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Today
          </button>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="inline-flex items-center rounded-md p-1 text-gray-400 hover:text-gray-500"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="text-sm font-medium">March 8-14, 2024</span>
            <button
              type="button"
              className="inline-flex items-center rounded-md p-1 text-gray-400 hover:text-gray-500"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Calendar */}
      <div className="rounded-lg border border-gray-200 bg-white shadow">
        <div className="grid grid-cols-7 gap-px border-b border-gray-200 bg-gray-50 text-center text-xs font-semibold leading-6 text-gray-700">
          {days.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {days.map((day) => (
            <div key={day} className="bg-white p-4">
              <div className="space-y-2">
                {mealTypes.map((mealType) => (
                  <button
                    key={mealType}
                    className="w-full rounded-md border border-dashed border-gray-300 p-2 text-left text-sm hover:border-gray-400"
                  >
                    <span className="block text-xs font-medium text-gray-500">{mealType}</span>
                    <span className="block text-gray-500">+ Add meal</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping List Generation */}
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Generate Shopping List</h3>
            <p className="mt-1 text-sm text-gray-500">Create a shopping list for your planned meals.</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Generate List
          </button>
        </div>
      </div>
    </div>
  )
} 