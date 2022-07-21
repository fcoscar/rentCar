import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'


function SignUpPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signup(email,username,password,name,lastName))
        navigate('/')

    }

  return (
    <div className='flex items-center justify-center p-10'>
        <form onSubmit={submitHandler}>
            <div className='w-96 p-6 rounded shadow-md border-black border'>
                <label className='text-xs uppercase font-bold tracking-wider'>Correo Electronico</label>
                <input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'    
                />
                <label className='text-xs uppercase font-bold tracking-wider'>Nombre de Usuario</label>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
                <labe className='text-xs uppercase font-bold tracking-wider'>Contrasena</labe>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
                <labe className='text-xs uppercase font-bold tracking-wider'>Nombres</labe>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
                <labe className='text-xs uppercase font-bold tracking-wider'>Apellidos</labe>
                <input
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                />
                <labe className='text-xs uppercase font-bold tracking-wider'>Numero de telefono</labe>
                <input
                    className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4'
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type='submit' className='w-full rounded-full py-2 text-xs uppercase font-bold tracking-wider border-black border-2 hover:bg-gray-100 transition-colors' >Entrar</button>
                <span>Ya tienes una cuenta? <a href='/login' className='underline '>Inicia Sesion</a></span>
            </div>
        </form>
    </div>
  )
}

export default SignUpPage