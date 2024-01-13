import {combineReducers} from 'redux'
import {adminReducer} from './adminReducer'
import {productReducer} from './productReducer'
import {userReducer} from './userReducer'

export default combineReducers({
    adminState:adminReducer,
    productState:productReducer,
    userState:userReducer,
})