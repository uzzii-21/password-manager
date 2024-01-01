import React from 'react'

const Navbar = () => {
  return (
    <header className='w-screen fixed top-0 backdrop-filter backdrop-blur-sm border-b'>
        <div className='container py-2 flex justify-between items-center'>
        <h1>logo</h1>
        <button className='border border-gray-300 px-6 py-2 rounded-full text-sm'>
            Create Password
        </button>
        </div>
    </header>
  )
}

export default Navbar