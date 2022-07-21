import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { carDetailsReducer, carReducer } from './reducers/carReducer'
import { userLoginReducer } from './reducers/userReducer'
    
    const reducer = combineReducers({
        cars : carReducer,
        userLogin: userLoginReducer,
        carDetails: carDetailsReducer,
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