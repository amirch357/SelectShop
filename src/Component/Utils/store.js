import {applyMiddleware,combineReducers} from "redux"
import {  configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import cartReducer from "./Reducers/Cart";
let reducers = combineReducers({
Cart:cartReducer
})

const store = configureStore({reducer:reducers}, applyMiddleware(thunk));

export default store