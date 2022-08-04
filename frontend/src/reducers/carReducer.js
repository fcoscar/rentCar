import { 
    CAR_FAIL, CAR_REQUEST, CAR_SUCCESS, CAR_BRANDS_SUCCES,
    CAR_DETAILS_FAIL, CAR_DETAILS_REQUEST, CAR_DETAILS_SUCCESS,
    CAR_CREATE_FAIL, CAR_CREATE_REQUEST, CAR_CREATE_SUCCESS,
    CAR_GET_UPDATE_IMAGE_FAIL, CAR_GET_UPDATE_IMAGE_SUCCESS, CAR_GET_UPDATE_IMAGE_REQUEST
} from '../constants/carConstants'

export const carReducer = (state = { cars: [], brands:[] }, action ) => {
    switch(action.type){
        case CAR_REQUEST:
            return { ...state,loading: true, cars: [], brands: []}
        
        case CAR_SUCCESS:
            return { ...state, loading: false, cars: action.payload }

        case CAR_BRANDS_SUCCES:
            return { ...state, brands: action.payload }
        
        case CAR_FAIL:
            return { loading: false, error: action.payload}

        default:
            return state
    }
}

export const carDetailsReducer = (state = { carDetails: {}}, action) => {
    switch(action.type){
        case CAR_DETAILS_REQUEST:
            return { laoding: true, ...state}
        case CAR_DETAILS_SUCCESS:
            return { loading: false, car: action.payload }
        case CAR_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const carCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case CAR_CREATE_REQUEST:
            return { loading: true }
        case CAR_CREATE_SUCCESS:
            return { loading: false, success: true, car: action.payload}
        case CAR_CREATE_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
    
}

export const carCreatedReducer = (state = { carCreated: {}}, action) => {
    switch(action.type){
        case CAR_GET_UPDATE_IMAGE_REQUEST:
            return { laoding: true, ...state}
        case CAR_GET_UPDATE_IMAGE_SUCCESS:
            return { loading: false, car: action.payload }
        case CAR_GET_UPDATE_IMAGE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}