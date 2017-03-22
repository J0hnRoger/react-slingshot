// Set up your root reducer here...
import { combineReducers } from 'redux';
import signatures from './signatureReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  signatures,
  routing: routerReducer
});

export default rootReducer