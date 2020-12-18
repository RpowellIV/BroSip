import { USER_RATING } from '../actionTypes'


const intialState = {
    rating: 0,
    movie:''
};

export default function(state = intialState, action) {
    switch(action.type) {
        case USER_RATING: {
            return {
                //copy initial state
                ...state,
                //change this part of state
                rating: state.rating + action.payload.rating,
                movie: action.payload.movie

            }
        }
        default:
            return state;
    }
}