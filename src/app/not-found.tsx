import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center p-8 bg-white rounded-lg shadow-lg max-w-sm w-full'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>
          Oops! Page Not Found
        </h2>
        <p className='text-lg text-gray-600 mb-6'>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href='/' passHref>
          <button className='bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition duration-300'>
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  )
}
