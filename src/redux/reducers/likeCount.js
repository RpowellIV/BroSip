import { MOST_LIKED } from '../actionTypes'


const intialState = {
    likeIt: 1,
    dislikeIt: 1,
    movie: ''
};

export default function(state = intialState, action) {
    switch(action.type) {
        case MOST_LIKED: {
            return {
                //copy initial state
                ...state,
                //change this part of state
                likeIt: action.payload.likeIt,
                dislikeIt: action.payload.dislikeIt,
                movie: action.payload.movie

            }
        }
        default:
            return state;
    }
}