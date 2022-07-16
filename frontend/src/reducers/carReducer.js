import { CAR_FAIL, CAR_REQUEST, CAR_SUCCESS, CAR_BRANDS_SUCCES} from '../constants/carConstants'

export const carReducer = (state = { cars: [], brands:[] }, action ) => {
    switch(action.type){
        case CAR_REQUEST:
            return { loading: true, cars: [], brands: []}
        
        case CAR_SUCCESS:
            return { loading: false, cars: action.payload }

        case CAR_BRANDS_SUCCES:
            return { ...state, brands: action.payload }
        
        case CAR_FAIL:
            return { loading: false, error: action.payload}

        default:
            return state
    }
}