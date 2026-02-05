import {combineReducers} from 'redux'
import foodReducer from './reducers'
export default combineReducers({
    food: foodReducer
})