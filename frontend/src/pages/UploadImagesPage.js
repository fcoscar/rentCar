import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

function UploadImagesPage() {
    const dispatch = useDispatch()

    const [file, setFile] = useState('')

    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const navigate = useNavigate()
    
    const handleFile = async (e) => {
      setFile(e.target.files[0])
      console.log(file)
    }

    const submitHandler = async (e) => {
      const fileToSend = file
      const formData = new FormData()

      formData.append('image', fileToSend)

      try {
        const config = {
          headers:{
            'Content-Type':'multipart/form-data',
            'Authorization': 'Bearer ' + userInfo.token
          }
        }

        const {data} = axios.post('http://127.0.0.1:8000/api/car/register/upload-image/', formData, config)

        console.log('Image Uploaded')


      } catch (error) {
        console.log('Error')
      }
    }

  return (
    
          <div>
            <input
              className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"
              type='file'
              custom='true'
              onChange={(e) => handleFile(e)}
              />
              <button onClick={(e) => submitHandler(e)} className='w-full rounded-full py-2 text-xs uppercase font-bold tracking-wider border-black border-2 hover:bg-gray-100 transition-colors' >Subir</button>
          </div>
            


  )
}

export default UploadImagesPage