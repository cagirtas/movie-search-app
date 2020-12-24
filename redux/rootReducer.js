import { combineReducers } from '@reduxjs/toolkit'
import reducers from './Reducers'

const rootReducer = combineReducers({
    globalStateMovies: reducers
})

export default rootReducer
