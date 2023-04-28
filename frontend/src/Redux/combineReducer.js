import { combineReducers } from 'redux'
import { userReducer } from './reducer'

export const combineReducer = combineReducers({
    user: userReducer
})