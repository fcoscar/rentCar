import { CAR_FAIL, CAR_REQUEST, CAR_SUCCESS, CAR_BRANDS_SUCCES} from '../constants/carConstants'

export const getAll = (brand) => async (dispatch) => {
    try {
        
        dispatch({type:CAR_REQUEST})
                
        const response = brand ? await fetch(`http://localhost:8000/api/all?brand=${brand}`) 
        : await fetch(`http://localhost:8000/api/all`)      
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
    const response2 = await fetch(`http://localhost:8000/api/all`)
    const data2 = await response2.json()

    const brandsList = [...new Set(data2.map(car => car.brand))].sort()
    const brandAll =  'All'
    const brands = [brandAll].concat(brandsList)


    dispatch({
        type: CAR_BRANDS_SUCCES,
        payload: brands
    }) 
    localStorage.setItem('brands', JSON.stringify(brands))
}

