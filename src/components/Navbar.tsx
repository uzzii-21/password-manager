import React from 'react'
import dynamic from "next/dynamic";
import Button from './placeholder/button';
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
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 mb-2">
              This component can be used as a Dialog replacement on mobile and tablet devices.
            </p>
            <p className="text-gray-600 mb-2">
              It comes unstyled, has gesture-driven animations, and is made by{' '}
              <a href="https://emilkowal.ski/" className="underline" target="_blank">
                Emil Kowalski
              </a>
              .
            </p>
            <p className="text-gray-600 mb-8">
              It uses{' '}
              <a
                href="https://www.radix-ui.com/docs/primitives/components/dialog"
                className="underline"
                target="_blank"
              >
                Radix's Dialog primitive
              </a>{' '}
              under the hood and is inspired by{' '}
              <a
                href="https://twitter.com/devongovett/status/1674470185783402496"
                className="underline"
                target="_blank"
              >
                this tweet.
              </a>
            </p>
          </div>
        </DrawerModal>
      </div>
    </header>
  )
}

export default Navbar