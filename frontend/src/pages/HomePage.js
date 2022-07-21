import React, {useEffect} from 'react'
import {getAll} from '../actions/car'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../components/Cards'
import { useSearchParams }from 'react-router-dom'
import Loader from '../components/Loader'
import Skeleton from '../components/Skeleton'

function HomePage() {
    const dispatch = useDispatch()
    const carros = useSelector(state => state.cars)
    const {loading, cars} = carros
    const [searchParams] = useSearchParams()
    const brand = searchParams.get('brand')

    useEffect(() => {          
      dispatch(getAll(brand))  
    }, [brand])

    // const slideLeft = () => {
    //   var slider = document.getElementById('slider')
    //   slider.scrollLeft = slider.scrollLeft - 500
    // }

    // const slideRight = () => {
    //   var slider = document.getElementById('slider')
    //   slider.scrollLeft = slider.scrollLeft + 500
    // }

  return (   
    <section className='pt-4'>
        <h2 className='text-4xl font-semibold px-4 ml-12'>Encuentra un vehiculo</h2>        
        {/* <div className='flex items-center sticky top-14 z-50 text-center bg-white border-b-1 shadow-sm h-8 border-b-1 border-gray-100 '>
        <ChevronLeftIcon className='h-7 w-7 mt-3 cursor-pointer text-gray-600  hover:text-black opacity-50 pb-3' onClick={slideLeft}/>        
        <div id='slider' className='flex overflow-x-scroll scroll-smooth scrollbar-hide items-center text-center pb-3'>
          
          {brands?.map((brand) => 
            <a className='mx-9 mt-3 text-gray-600 text-xs uppercase font-bold tracking-wider cursor-pointer hover:text-black hover:border-b-2 ease-out whitespace-nowrap' href={`/?q=${brand}`} key={brand}><h1>{brand}</h1></a>

          )}
        </div>
        <ChevronRightIcon className='h-7 w-7 mt-3 cursor-pointer text-gray-600  hover:text-black opacity-50 pb-3' onClick={slideRight}/>
        </div> */}

        {loading ? (
          <div className='grid sm:grid-cols-3 lg:grid-cols-4 ml-10 mr-14 '>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className='grid sm:grid-cols-3 lg:grid-cols-4 ml-10 mr-14'>
          {cars.map(car => 
          <div key={car.id} className='ml-5' >
            <Cards car={car}/>
          </div>
          )}          
        </div>
        )}

    </section>
 
  )
}

export default HomePage