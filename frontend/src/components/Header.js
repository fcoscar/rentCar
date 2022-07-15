import React from 'react'

  import '../App.css'

function Header() {
  return (
    <header className='bg-neutral-50 flex px-4 py-1 shadow-sm sticky top-0 z-50'>
      <div> 
        <img className='relative h-10 w-20' src='images/W.jpg'/>
      </div>
      <div className='mx-2'>
        Some text
      </div>
      <div className='text-right'>
        log in/log out
      </div>
    </header>
  )
}

export default Header