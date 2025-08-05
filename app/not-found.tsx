import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - La\'Moniega Printing Services',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go back home
          </Link>
          
          <div className="text-sm text-gray-500">
            <Link 
              href="/shop"
              className="text-blue-600 hover:text-blue-800 mr-4"
            >
              Browse Products
            </Link>
            <Link 
              href="/about"
              className="text-blue-600 hover:text-blue-800"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}