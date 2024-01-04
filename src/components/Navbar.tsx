import React from 'react'
import dynamic from "next/dynamic";
import Button from './placeholder/button';
import PasswordForm from './PasswordForm';
const DrawerModal = dynamic(() => import("./DrawerModal"), {
  ssr: false,
  loading: () => <Button />,
})
const Navbar = () => {
  return (
    <header className='w-screen fixed top-0 backdrop-filter backdrop-blur-sm border-b'>
      <div className='container py-2 flex justify-between items-center'>
        <h1>logo</h1>
        <DrawerModal title='NOting' buttonText={'Create Password'}>
          <PasswordForm />
        </DrawerModal>
      </div>
    </header>
  )
}

export default Navbar