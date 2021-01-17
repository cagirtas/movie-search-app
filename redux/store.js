import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk";
import rootRecuder from './rootReducer'

const store = createStore(rootRecuder, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
