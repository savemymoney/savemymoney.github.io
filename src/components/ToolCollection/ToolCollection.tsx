import Link from 'next/link'
import { linkCollection } from './toolsLinkCollection'

export default function ToolCollection() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {linkCollection.map((link) => (
          <Link key={link.href} href={link.href}>
            <div className='bg-gray-800 rounded-lg overflow-hidden p-6 h-full flex flex-col transition duration-300 ease-in-out'>
              <div className='flex-grow'>
                <h3 className='text-xl font-semibold mb-2 text-gray-200'>
                  {link.title}
                </h3>
                <p className='text-gray-400'>{link.description}</p>
              </div>
              <div className='mt-4'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md'>
                  {link.linkText} ➡️
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
