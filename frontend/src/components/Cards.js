import React from 'react'

function Cards({car}) {
  return (
    <div className='m-2 mt-5 space-x-1 cursor-pointer hover:scale-105 transition transform duration-200 ease-out'>
        <div className='rounded-md'>
            <img src={ `images${car.image}`} alt='' className='rounded-xl px-5' />      
        </div>
        <div className='overflow-hidden whitespace-nowrap font-bold px-4  mt'>
            {car.name}   
        </div>
        <div className='text-xs whitespace-normal overflow-hidden px-4  text-gray-500'>
            {car.location} - {car.year} - {car.combustible}   
        </div>
        <div className='text-xs whitespace-normal overflow-hidden px-4  text-black font-bold'>
            ${car.price} / Dia  
        </div>
    </div>
  )
}

export default Cards