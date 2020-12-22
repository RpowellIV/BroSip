import { combineReducers } from 'redux'

import request from './request'
import likedReview from './likedReview'
import userRating from './userRating'
import mostLiked from './likeCount'

export default combineReducers({ request, likedReview, userRating, mostLiked });