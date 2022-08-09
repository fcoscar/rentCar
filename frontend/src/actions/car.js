import { 
    CAR_FAIL, CAR_REQUEST, CAR_SUCCESS, 
    CAR_BRANDS_SUCCES,
    CAR_DETAILS_FAIL, CAR_DETAILS_REQUEST, CAR_DETAILS_SUCCESS,
    CAR_CREATE_FAIL, CAR_CREATE_REQUEST, CAR_CREATE_SUCCESS,
    CAR_GET_UPDATE_IMAGE_FAIL, CAR_GET_UPDATE_IMAGE_SUCCESS, CAR_GET_UPDATE_IMAGE_REQUEST

} from '../constants/carConstants'


export const getAll = (brand) => async (dispatch) => {
    try {
        
        dispatch({type:CAR_REQUEST})
                
        const response = brand ? await fetch(`/all?brand=${brand}`) 
        : await fetch(`/all`)      
        const data = await response.json()
        dispatch({
            type: CAR_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CAR_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }
    
}

export const getBrands = () => async (dispatch, useSelector) => {
    const response2 = await fetch(`/brands`)
    const data2 = await response2.json()
    const brands = ['All'].concat(data2)

    dispatch({
        type: CAR_BRANDS_SUCCES,
        payload: brands
    }) 
    localStorage.setItem('brands', JSON.stringify(brands))
}

export const getCarById = (id) => async (dispatch) => {
    try {           
        dispatch({
            type: CAR_DETAILS_REQUEST
        })
        
        const response = await fetch(`/car/${id}/`)
        const data = await response.json()

        dispatch({
            type: CAR_DETAILS_SUCCESS,
            payload: data
        })        
    } catch (error) {
        dispatch({
            type:CAR_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })     
    }


}

export const createCar = (type,brand,model,location,combustible,price,year) => async (dispatch, getState, navigate) => {
    try {
        dispatch({
            type: CAR_CREATE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const token = 'Bearer ' + userInfo.token

        const request = await fetch('car/register/' , {
            method: 'POST',
            body: JSON.stringify(
                {
                    brand: brand,
                    location: location,
                    model: model,
                    type: type,
                    price: price,
                    combustible: combustible,
                    year: year,
                }
            ),
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }
        })
        const data = await request.json()
        console.log(data)
        dispatch({
            type: CAR_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:CAR_CREATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })   
    }
} 
