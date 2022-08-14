import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import axios from 'axios'

function UploadImagesPage() {

    const [file, setFile] = useState('')
    const [response,setResponse] = useState(null)

    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const navigate = useNavigate()
    
    const handleFile = async (e) => {
      setFile(e.target.files[0])
    }

    const submitHandler = async (e) => {
      e.preventDefault()
      const fileToSend = file
      const formData = new FormData()

      formData.append('image', fileToSend)

      try {

        axios.post('https://api.imgbb.com/1/upload?expiration=600&key=abadfd0638d44a30ecd1238a605f8d34', formData)
          .then((data) => {
            setResponse(data)        
          })
        console.log('Image Uploaded')
        await fetch('http://127.0.0.1:8000/api/car/register/upload-image/', {
          method: 'POST',
          body: JSON.stringify({
            image: response.data.data.url
          }),
          headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userInfo.token
          }
          
        })

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