import React, { useEffect, useState } from 'react'
import { MenuIcon, SearchCircleIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { createCar, getBrands } from '../actions/car'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { es } from 'date-fns/locale'
import { Link, useNavigate } from 'react-router-dom'
import Moment from 'moment';
import { provincias } from '../constants/carConstants'

function Header() {


  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const cars = useSelector(state => state.cars)
  const {brands} = cars
  const [calendar, setCalendar] = useState(false)
  const [location, setLocation] = useState(false)
  const [provincia, setProvincia] = useState('')
  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false)

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
    setCalendar(!calendar)
    setLocation(false)
  }

  const btnHandler3 = () => {
    setLocation(!location)
    setCalendar(false)
  }

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const handleLoc = (loc) => {
    setProvincia(loc)
  }

  const goTo = () => {
    setLocation(false)
    setCalendar(false)
    if(provincia && startDate && endDate){
      navigate(`/location=${provincia}?startDate=${Moment(startDate).format('DD-MM-YYYY')}?endDate=${Moment(endDate).format('DD-MM-YYYY')}`)
    }
  }

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  window.addEventListener('scroll', () => {
    if(calendar){
      setCalendar(!calendar) 
    }
    if(location){
      setLocation(!location)
    }
    if(dropdown){
      setDropdown(!dropdown)
    }

  })

  useEffect(()=>{
    dispatch(getBrands())
  },[dispatch])

  return (
    <header className='sticky top-0 z-50 bg-white '>
      
      <div className='bg-neutral-50 flex-nowrap space px-4 py-3 shadow-sm border-y '>
      <div className='flex justify-between xl:ml-72 xl:mr-80'>
      <div> 
        <a href='/'> <img className='relative h-10 w-20 ml-12' src='https://i.ibb.co/2jb1xdD/W.jpg' alt=''/></a>
      </div>
      {/* <form className='flex flex-1 items-center space-x-2 rounded-xl border border-gray-500 bg-gray-100 px-3 py-1'>
        <input 
        className='flex-1 bg-transparent outline-none' 
        type='text' 
        placeholder='Buscar carros' 
        />
        <SearchIcon className='h-6 w-5' />       
      </form> */}
      
       <div className='flex items-center rounded-3xl border border-gray-400 space-x-4 px-3 py-1 shadow-sm cursor-pointer hover:shadow-md' >  
        <button className='whitespace-nowrap overflow-hidden font-semibold hover:scale-95' onClick={btnHandler3} >{provincia ? provincia : 'Cualquier lugar?'}</button>
        <span className='text-gray-400 text-xl '>|</span>
        
        <button className='whitespace-nowrap overflow-hidden font-semibold hover:scale-95' onClick={btnHandler2}>{startDate && endDate ?  `${Moment(startDate).format('MMM D YY')} hasta ${Moment(endDate).format('MMM D YY')}` : 'Cualquier semana?'}</button>

        <button><SearchCircleIcon className='h-7 w-7 text-black cursor-pointer' onClick={goTo} /></button>
      </div>   
      
      {userInfo ? (
        <div class="relative inline-block text-left mr-12">
            <div>
              <button onClick={handleDropdown}  type="button" class="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  " id="menu-button" aria-expanded="true" aria-haspopup="true">
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6'/>
              </button>
            </div>
            {dropdown ? (
                          <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-49" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                          <div class="py-1" role="none">
                            <Link to="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Cuenta</Link>
                            <Link to='/list-car' class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Alquila tu vehiculo</Link>
                            <form method="POST" action="#" role="none">
                              <button onClick={btnHandler} type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Cerrar Sesion</button>
                            </form>
                          </div>
                      </div>
            ) : ( <div></div> )}
      </div>
      ) : (
        <div className='flex items-center mr-12'>
        <Link to='/signin'><button className='rounded-full py-2 px-3 text-xs uppercase font-bold tracking-wider border-gray-300 border-2' onClick={btnHandler}>Iniciar Sesion</button></Link>
      </div>
      )

      }
      </div>
      </div>


      {calendar ? (
              <div className='w-screen flex justify-center'>
              <div className='fixed flex bg-white z-10 rounded-xl border-gray-300 border' >
              <DateRange 
                months={2} 
                rangeColors={['#000000']} 
                editableDateInputs={true}  
                moveRangeOnFirstSelection={false} 
                direction="horizontal" 
                minDate={new Date()} 
                onChange={handleSelect} 
                ranges={[selectionRange]} 
                locale={es}
                className= 'm-5'
              />
              </div>
              </div>
      ) : ( <div></div> )}

      {location ? (
            <div className='w-screen flex justify-center'>
            <div className='grid grid-cols-5 space-y-5 bg-white fixed z-10 border-gray-300 border rounded-xl'>
              {provincias.map((provincia, id,) => (
                <button className='m-2 text-xs uppercase font-semibold tracking-wider hover:text-gray-400 pb-2' key={id} onClick={() => handleLoc(provincia)} value={provincia}>{provincia}</button>
              ))}
          </div>
          </div>
      ) : ( <div></div>)}


      <div className='border-b-1 border-gray-100'>
      <div className='flex items-center sticky top-14 xl:pl-72 xl:pr-80 text-center bg-white border-b-1 shadow-sm h-8'>
        
        <ChevronLeftIcon className='h-12 w-12 mt-3 cursor-pointer text-gray-600  hover:text-black opacity-50 pb-3 ml-14' onClick={slideLeft}/>        
        <div id='slider' className='flex overflow-x-scroll scroll-smooth scrollbar-hide items-center text-center pb-3'>
          
          {brands?.map((brand, id) => 
            <a className='mx-9 mt-3 text-gray-600 text-xs uppercase font-bold tracking-wider cursor-pointer hover:text-black hover:border-b-2 ease-out whitespace-nowrap' href={`/?brand=${brand}`} key={id}><h1>{brand}</h1></a>

          )}
        </div>
        <ChevronRightIcon className='h-12 w-12 mt-3 cursor-pointer text-gray-600  hover:text-black opacity-50 pb-3' onClick={slideRight}/>
        
        <div className='flex items-center rounded-md border border-black mr-16 ml-3 cursor-pointer'>
        <AdjustmentsIcon className='h-5 w-5 ml-2 mr-1 rotate-90'/>
          
          <p className=' text-gray-600 text-xs uppercase font-bold tracking-wider cursor-pointer mr-2 ml-0'>Filtros</p>
        </div>
        
        </div>
      </div>

            
      
      
      

 

    </header>
    
  )
}

export default Header