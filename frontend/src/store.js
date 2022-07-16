import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { carReducer } from './reducers/carReducer'
import { userLoginReducer } from './reducers/userReducer'

const reducer = combineReducers({
    cars : carReducer,
    userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null

    const initialState = {
        userLogin: {userInfo:userInfoFromStorage},   
    }    
    
const store = configureStore({
    reducer,
    preloadedState: initialState
})
export default store