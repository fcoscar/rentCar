import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { carDetailsReducer, carReducer, carCreateReducer, carCreatedReducer } from './reducers/carReducer'
import { userLoginReducer, userRgisterReducer } from './reducers/userReducer'
    
    const reducer = combineReducers({
        cars : carReducer,
        userLogin: userLoginReducer,
        carDetails: carDetailsReducer,
        userRegister: userRgisterReducer,
        carCreate: carCreateReducer,
        carCreated: carCreatedReducer
    })

    const userInfoFromStorage = localStorage.getItem('userInfo') ? 
        JSON.parse(localStorage.getItem('userInfo')) : null

    const brandsFromStorage = localStorage.getItem('brands') ? 
        JSON.parse(localStorage.getItem('brands')) : []
        
    const initialState = {
        userLogin: {userInfo:userInfoFromStorage},
        cars: {brands:brandsFromStorage, cars:[]},
    }    
    
    const store = configureStore({
        preloadedState: initialState,
        reducer,
    })
export default store