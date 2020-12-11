import { combineReducers } from 'redux'
import checking from './checking'
import savings from './savings'
import billing from './billing'

export default combineReducers({ checking, savings, billing });