import React, { useEffect, useState } from 'react'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



function LoginPage() {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username,password))
        navigate('/')
    }

  return (

    <div className='flex items-center justify-center h-80 '>
        <form onSubmit={submitHandler}>
            <div className='w-96 p-6 rounded shadow-md border-black border'>
                <label className='text-xs uppercase font-bold tracking-wider'>Nombre de Usuario</label>
                <input 
                className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                type='text'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <label className='text-xs uppercase font-bold tracking-wider'>Contrasena</label>
                <input 
                className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <button type='submit' className='w-full rounded-full py-2 text-xs uppercase font-bold tracking-wider border-black border-2 hover:bg-gray-100 transition-colors' >Entrar</button>
                <span>Aun no tienes una cuenta? <a href='/signup' className='underline '>Registrate</a></span>
            </div>
        </form>

    </div>
  )
}

export default LoginPage 