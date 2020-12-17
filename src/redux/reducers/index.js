import { combineReducers } from 'redux'

import request from './request'
import likedMovie from './likedMovie'


export default combineReducers({ request, likedMovie });