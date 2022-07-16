import React from 'react'
import { SearchCircleIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'

function Header() {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const btnHandler = () => {
    dispatch(logout())
  }

  return (
    <header className='bg-neutral-50 flex justify-between flex-nowrap space px-4 py-3 shadow-sm sticky top-0 z-50 border-y-2'>
      <div> 
        <a href='/'> <img className='relative h-10 w-20' src='images/W.jpg' alt=''/></a>
      </div>
      {/* <form className='flex flex-1 items-center space-x-2 rounded-xl border border-gray-500 bg-gray-100 px-3 py-1'>
        <input 
        className='flex-1 bg-transparent outline-none' 
        type='text' 
        placeholder='Buscar carros' 
        />
        <SearchIcon className='h-6 w-5' />       
      </form> */}

      <div className='flex items-center rounded-3xl border border-gray-400 space-x-4 px-3 py-1 shadow-md'>
        <button className='whitespace-nowrap overflow-hidden '>Cualquier lugar?</button>
        <span className='text-gray-400 text-xl '>|</span>
        <button className='whitespace-nowrap overflow-hidden '>Cualquier semana?</button>
        <SearchCircleIcon className='h-7 w-7 text-black cursor-pointer' />
      </div>

      
      {userInfo ? (
        <div className='flex items-center'>
          <span className='py-2 px-3 text-xs uppercase font-bold tracking-wider'>Bievenido {userInfo.username}</span>
          <button className='rounded-full py-2 px-3 text-xs uppercase font-bold tracking-wider border-black border-2' onClick={btnHandler}>Cerrar Sesion</button>
        </div>
      ) : (
        <div className='flex items-center'>
        <a href='/login'><button className='rounded-full py-2 px-3 text-xs uppercase font-bold tracking-wider border-black border-2' onClick={btnHandler}>Iniciar Sesion</button></a>
      </div>
      )

      }

    </header>
  )
}

export default Header