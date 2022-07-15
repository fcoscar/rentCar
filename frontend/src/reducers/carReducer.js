import { CAR_FAIL, CAR_REQUEST, CAR_SUCCESS} from '../constants/carConstants'

export const carReducer = (state = { cars: []}, action ) => {
    switch(action.type){
        case CAR_REQUEST:
            return { loading: true, cars: []}
        
        case CAR_SUCCESS:
            return { loading: false, cars: action.payload }
        
        case CAR_FAIL:
            return { loading: false, error: action.payload}

        default:
            return state
    }
}