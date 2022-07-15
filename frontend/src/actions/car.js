import { CAR_FAIL, CAR_REQUEST, CAR_SUCCESS} from '../constants/carConstants'

export const getByZone = (zone) => async (dispatch) => {
    try {
        dispatch({type:CAR_REQUEST})
        const response = await fetch(`http://localhost:8000/api/${zone}`)
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