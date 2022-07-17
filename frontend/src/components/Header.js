import React, { useEffect } from 'react'
import { MenuIcon, SearchCircleIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { getBrands } from '../actions/car'
import { AdjustmentsIcon } from '@heroicons/react/outline'

function Header() {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const cars = useSelector(state => state.cars)
  const {brands} = cars

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const btnHandler = () => {
    dispatch(logout())
  }

  const btnHandler2 = () => {
    console.log('w')
  }

  useEffect(()=>{
    dispatch(getBrands())
  },[dispatch])

  return (
    <header className='sticky top-0 z-50 '>
      <div className='bg-neutral-50 flex justify-between flex-nowrap space px-4 py-3 shadow-sm border-y'>
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

      
      
       <button className='flex items-center rounded-3xl border border-gray-400 space-x-4 px-3 py-1 shadow-sm cursor-pointer hover:shadow-md' onClick={btnHandler2}>
        <span className='whitespace-nowrap overflow-hidden font-semibold'>Cualquier lugar?</span>
        <span className='text-gray-400 text-xl '>|</span>
        <span className='whitespace-nowrap overflow-hidden font-semibold '>Cualquier semana?</span>
        <SearchCircleIcon className='h-7 w-7 text-black cursor-pointer' />
      </button>
      
      {userInfo ? (
        <div className='flex items-center'>
          <span className='py-2 px-3 text-xs uppercase font-bold tracking-wider'>Bievenido {userInfo.username}</span>
          <div className='flex items-center space-x-2 border-2 border-gray-500 rounded-full p-2 hover:shadow-md cursor-pointer'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6'/>
          </div>
        </div>
      ) : (
        <div className='flex items-center'>
        <a href='/login'><button className='rounded-full py-2 px-3 text-xs uppercase font-bold tracking-wider border-black border-2' onClick={btnHandler}>Iniciar Sesion</button></a>
      </div>
      )

      }

      </div>


      <div>
      <div className='flex items-center sticky top-14 z-50 text-center bg-white border-b-1 shadow-sm h-8 border-b-1 border-gray-100 '>
        
        <ChevronLeftIcon className='h-12 w-12 mt-3 cursor-pointer text-gray-600  hover:text-black opacity-50 pb-3 ml-6' onClick={slideLeft}/>        
        <div id='slider' className='flex overflow-x-scroll scroll-smooth scrollbar-hide items-center text-center pb-3'>
          
          {brands?.map((brand) => 
            <a className='mx-9 mt-3 text-gray-600 text-xs uppercase font-bold tracking-wider cursor-pointer hover:text-black hover:border-b-2 ease-out whitespace-nowrap' href={`/?brand=${brand}`} key={brand}><h1>{brand}</h1></a>

          )}
        </div>
        <ChevronRightIcon className='h-12 w-12 mt-3 cursor-pointer text-gray-600  hover:text-black opacity-50 pb-3' onClick={slideRight}/>
        
        <div className='flex items-center rounded-md border border-black mr-8 ml-3 cursor-pointer'>
        <AdjustmentsIcon className='h-5 w-5 ml-2 mr-1 rotate-90'/>
          
          <p className=' text-gray-600 text-xs uppercase font-bold tracking-wider cursor-pointer mr-2 ml-0'>Filtros</p>
        </div>
        
        </div>
      </div>

    </header>
    
  )
}

export default Header