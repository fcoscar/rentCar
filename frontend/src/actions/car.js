import { CAR_FAIL, CAR_REQUEST, CAR_SUCCESS, CAR_BRANDS_SUCCES} from '../constants/carConstants'

export const getAll = () => async (dispatch) => {
    try {
        
        dispatch({type:CAR_REQUEST})
        
        const response = await fetch(`http://localhost:8000/api/all`)
        const data = await response.json()
        dispatch({
            type: CAR_SUCCESS,
            payload: data
        })

        const brands = [...new Set(data.map(car => car.brand))].sort()  
        dispatch({
            type: CAR_BRANDS_SUCCES,
            payload: brands
        })

    } catch (error) {
        dispatch({
            type: CAR_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }
    

}


