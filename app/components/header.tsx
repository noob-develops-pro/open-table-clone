'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Header = () => {
  const handleClick = (btn: string) => {
    console.log(btn)
  }
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='bg-white max-w-screen-xl mx-auto'>
        {/* navbar */}
        <nav className='bg-white p-2 flex justify-between'>
          <Link href='#' className='font-bold text-3xl text-gray-700'>
            OpenTable
          </Link>
          <div className='flex justify-between space-x-1'>
            <button
              className='px-4 bg-blue-400 border rounded-md text-white'
              onClick={() => handleClick('signIn')}
            >
              Sign In
            </button>
            <button
              className='px-4 bg-white border rounded-lg'
              onClick={() => handleClick('signUp')}
            >
              Sign Up
            </button>
          </div>
        </nav>
        {/* navbar */}
        {/* header */}
        <main>
          <header className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
            <div className='text-center mt-10'>
              <h1 className='text-white text-5xl font-bold mb-2 '>
                Find Your Table for any Occasion
              </h1>
            </div>
            {/* searchbar */}
            <div className='flex flex-1 justify-center space-x-1 mt-8 text-lg'>
              <input
                type='text'
                className='p-4 rounded bg-white w-[450px]'
                placeholder='State, City or Town'
              />
              <button className='bg-red-500 text-white px-9 rounded font-bold'>
                Let's go
              </button>
            </div>
          </header>
        </main>
        {/* header */}
        {/* Cards Area */}

        <div className='py-3 px-36 mt-10 flex flex-wrap'>
          <div className='w-64 h-72 bg-white border shadow-xl rounded'>
            <h3>hello world</h3>
          </div>
        </div>
      </main>
    </main>
  )
}

export default Header
