import React from 'react'

const PasswordForm = () => {
  return (
    <form>
        <label htmlFor="">
            <input type='text' className='block px-4 py-2 border border-black w-full' />
        </label>
        <label htmlFor="">
            <input type='text' className='block px-4 py-2 border border-black w-full' />
        </label>
        <label htmlFor="">
            <input type='text' className='block px-4 py-2 border border-black w-full' />
        </label>
        <button type="submit">create</button>
    </form>
  )
}

export default PasswordForm