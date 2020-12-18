import { combineReducers } from 'redux'

import request from './request'
import likedReview from './likedReview'
import userRating from './userRating'

export default combineReducers({ request, likedReview, userRating });