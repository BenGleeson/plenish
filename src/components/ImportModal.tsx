import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, GlobeAltIcon, CameraIcon, ClipboardDocumentIcon, PencilIcon } from '@heroicons/react/24/outline'
import URLImportModal from './URLImportModal'

interface ImportModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ImportOption {
  id: string
  name: string
  icon: typeof GlobeAltIcon
  description: string
  action: () => void
}

export default function ImportModal({ isOpen, onClose }: ImportModalProps) {
  const [showUrlImport, setShowUrlImport] = useState(false)

  const importOptions: ImportOption[] = [
    {
      id: 'browser',
      name: 'Browser',
      icon: GlobeAltIcon,
      description: 'Import from a website URL',
      action: () => {
        setShowUrlImport(true)
      },
    },
    {
      id: 'camera',
      name: 'Camera',
      icon: CameraIcon,
      description: 'Take a photo of a recipe',
      action: () => {
        // TODO: Implement camera import
        console.log('Camera import')
        onClose()
      },
    },
    {
      id: 'paste',
      name: 'Paste Text',
      icon: ClipboardDocumentIcon,
      description: 'Paste recipe text directly',
      action: () => {
        // TODO: Implement text paste
        console.log('Text paste')
        onClose()
      },
    },
  ]

  const handleUrlImport = (url: string) => {
    console.log('Imported URL:', url)
    // TODO: Handle the imported recipe
    onClose()
  }

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div className="absolute right-0 top-0 pr-4 pt-4">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div>
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Import recipe
                    </Dialog.Title>
                    <div className="mt-4">
                      <div className="grid grid-cols-3 gap-4">
                        {importOptions.map((option) => (
                          <button
                            key={option.id}
                            className="flex flex-col items-center justify-center rounded-lg bg-orange-50 p-4 text-center hover:bg-orange-100"
                            onClick={option.action}
                          >
                            <option.icon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                            <span className="mt-2 text-sm font-medium text-orange-500">{option.name}</span>
                          </button>
                        ))}
                      </div>
                      <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="bg-white px-2 text-gray-500">or</span>
                        </div>
                      </div>
                      <button
                        className="mt-6 flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400"
                        onClick={() => {
                          // TODO: Implement manual entry
                          console.log('Manual entry')
                          onClose()
                        }}
                      >
                        <PencilIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-2 text-sm font-medium text-gray-600">Write from scratch</span>
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <URLImportModal
        isOpen={showUrlImport}
        onClose={() => setShowUrlImport(false)}
        onImport={handleUrlImport}
      />
    </>
  )
} 