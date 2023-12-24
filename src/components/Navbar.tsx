import React from 'react'

const Navbar = () => {
  return (
    <header className='w-screen fixed top-0 backdrop-filter backdrop-blur-sm border-b'>
        <div className='container py-2 flex justify-between items-center'>
        <h1>logo</h1>
        <button>
            Create Password
        </button>
        </div>
    </header>
  )
}

export default Navbar