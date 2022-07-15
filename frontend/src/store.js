import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { carReducer } from './reducers/carReducer'

const reducer = combineReducers({
    cars : carReducer
})


const store = configureStore({
    reducer,
})
export default store