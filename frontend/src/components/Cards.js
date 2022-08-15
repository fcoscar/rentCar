import React from 'react'

function Cards({car, image}) {
  return ( 
    <a href={`/car/${car.id}`} target="_blank" >
    <div className='mt-5 space-x-1 cursor-pointer hover:scale-105 transition transform duration-200 ease-out'>
        <div className='flex justify-center items-center h-44 overflow-hidden '>
        <img src={image.image_url} alt='' className=''/>      
        </div>
        <div className='text-md font-semibold whitespace-normal overflow-hidden text-black'>
            {car.name}   
        </div>
        <div className='text-xs whitespace-normal overflow-hidden text-gray-500'>
            {car.location} - {car.year} - {car.combustible}   
        </div>
        <div className='text-xs whitespace-normal overflow-hidden text-black font-bold'>
            ${car.price} / Dia  
        </div>
    </div>
    </a>
  )
}

export default Cards