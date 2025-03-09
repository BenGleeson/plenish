import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import ImportModal from './ImportModal'

export default function ImportFAB() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Import Recipe"
      >
        <PlusIcon className="h-6 w-6" />
      </button>

      <ImportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
} 