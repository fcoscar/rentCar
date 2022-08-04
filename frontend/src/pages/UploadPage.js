import React, { useState } from 'react'
import { vehicleTypes } from '../constants/carConstants'
import { useDispatch, useSelector } from 'react-redux'
import { createCar } from '../actions/car'
import { Navigate, useNavigate } from 'react-router-dom'

function UploadPage() {
    const [type, setType] = useState('tipo...')
    const [brand ,setBrand] = useState('')
    const [model, setModel] = useState('')
    const [location, setLocation] = useState('')
    const [combustible, setCombustible] = useState('')
    const [price, setPrice] = useState('')
    const [year, setYear] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler =  (e) => {
        dispatch(createCar(type,brand,model,location,combustible,price,year))
        navigate('/upload-images')
    }

  return (
    <div className=' flex justify-center flex-col items-center'>
        <h1 className='text-md uppercase font-bold tracking-wider'>Comienza a generar dinero alquilando tu vehiculo</h1>        
        <div className='w-96 p-6 rounded shadow-md border-black border'>
            <form onSubmit={submitHandler}>
            <label>Tipo de Vehiculo</label>
            <select onChange={(e) => setType(e.target.value)} className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4">
            {vehicleTypes.map((type, id) => (
                <option key={id} value={type}>{type}</option>
            ))}
            </select>
                <label>Marca del Vehiculo</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                    onChange={(e) => setBrand(e.target.value)}
                />
                <label>Modelo de Vehiculo</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                    onChange={(e) => setModel(e.target.value)}
                />
                <label>Tipo de Combustible</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                    onChange={(e) => setCombustible(e.target.value)}
                />
                <label>Precio</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Fotos</label>

                
                <label>Ubicacion</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                    onChange={(e) => setLocation(e.target.value)}
                />

                <label>Ano</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                    onChange={(e) => setYear(e.target.value)}
                />

                <button type='submit' className='w-full rounded-full py-2 text-xs uppercase font-bold tracking-wider border-black border-2 hover:bg-gray-100 transition-colors' >Subir</button>
            </form>
        </div>
    </div>
  )
}

export default UploadPage