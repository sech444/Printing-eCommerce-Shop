'use client'

import { Metadata } from 'next'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-gray-200">500</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Something went wrong
              </h2>
              <p className="text-gray-600 mb-8">
                We're sorry, but something went wrong on our end.
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => reset()}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
              >
                Try again
              </button>
              
              <a 
                href="/"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Go back home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}