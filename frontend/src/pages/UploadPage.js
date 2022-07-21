import React, { useState } from 'react'
import { vehicleTypes } from '../constants/carConstants'


function UploadPage() {
    const [type, setType] = useState('tipo...')

    const submitHandler = () => {

    }

  return (
    <div className=' flex justify-center flex-col items-center'>
        <h1 className='text-md uppercase font-bold tracking-wider'>Comienza a generar dinero alquilando tu vehiculo</h1>        
        <div className='w-96 p-6 rounded shadow-md border-black border'>
            <form onSubmit={submitHandler}>
            <label>Tipo de Vehiculo</label>
            <select className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4">
            <option selected onChange={setType}>{type}</option>
            {vehicleTypes.map((type) => (
                <option value={type}>{type}</option>
            ))}
            </select>
                <label>Modelo del Vehiculo</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
                <label>Marca de Vehiculo</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
                <label>Marca del Vehiculo</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
                <label>Marca del Vehiculo</label>
                <input 
                    type='text'
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
            </form>
        </div>
    </div>
  )
}

export default UploadPage