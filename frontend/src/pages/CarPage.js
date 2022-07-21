import React, { useEffect } from 'react'
import {useParams}from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarById } from '../actions/car'
import { StarIcon } from '@heroicons/react/solid'


function CarPage() {
    const {carId} = useParams()
    const dispatch = useDispatch()
    const carDetails = useSelector(state => state.carDetails)
    const {error, loading, car} = carDetails

    useEffect(() => {
        dispatch(getCarById(carId))
    }, [carId, dispatch])
  return (
    <div>
        <div>
            <div className='text-4xl font-semibold px-4 mt-5 whitespace-nowrap ml-12'>
                {car?.name} - {car?.year}
            </div>
            <div className=' px-4 flex ml-12'>
             <StarIcon className='h-5 w-5'/>  4.7 - 12 reviews - {car?.location}
            </div>
        </div>

        <div className='flex ml-16 space-x-16'>
                <div className='' >
                    <img src={car?.image} />
                </div>

            <div className='flex border border-gray-300  rounded-lg shadow-lg'>
                <div className=''>
                    <h1 className='text-xl uppercase font-bold tracking-wider text-gray-500'>Datos Generales</h1>
                    <h1><strong>Precio:</strong> ${car?.price} / Dia</h1>
                    <h1><strong>Traccion:</strong> {car?.traccion}</h1>
                    <h1><strong>Transmisiom:</strong> {car?.transmission}</h1>
                    <h1><strong>Combustible:</strong> {car?.combustible}</h1>
                    <h1><strong>Color exterior:</strong> {car?.exterior}</h1>
                    <h1><strong>Color interior:</strong> {car?.interior}</h1>
                </div>
                <div className=''>
                    <h1><strong>Tipo:</strong> {car?.type}</h1>
                    <h1><strong>Pasajeros:</strong> {car?.passengers}</h1>
                    <h1><strong>Puertas:</strong> {car?.doors}</h1>
                    <h1><strong>Kilometraje:</strong> {car?.kilometraje} kms</h1>
                </div>

            </div>
            <div className='border border-gray-300  rounded-lg shadow-lg w-96  '>
                <h1 className='text-xl uppercase font-bold tracking-wider text-gray-500'>Descripcion/ Detalles </h1>
                <p className=''>{car?.description}</p>    
            </div>

        </div>



    </div>
  )
}

export default CarPage