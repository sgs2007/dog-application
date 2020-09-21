import {createStore, applyMiddleware, combineReducers, } from 'redux'
import thunk from 'redux-thunk'
import {recordReducer} from './reducers/record'

const rootReducer = combineReducers({
    record: recordReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))