import React, {useEffect} from 'react'
import {getByZone} from '../actions/car'
import { useDispatch, useSelector } from 'react-redux'


function HomePage() {
    const dispatch = useDispatch()
    const carros = useSelector(state => state.cars)
    const {error, loading, cars } = carros

    useEffect(() => {
        dispatch(getByZone('distrito nacional'))
    }, [dispatch])

  return (
    <div className='text-3xl font-bold underline'>{cars.map(car => 
        <div key={car.id}>{car.name}</div>
        )}</div>
  )
}

export default HomePage