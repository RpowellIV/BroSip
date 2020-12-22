import { LIKED_REVIEW } from '../actionTypes'


const intialState = {
    liked: '',
};

export default function(state = intialState, action) {
    switch(action.type) {
        case LIKED_REVIEW: {
            return {
                //copy initial state
                ...state,
                //change this part of state
                liked: action.payload.liked
            }
        }
        default:
            return state;
    }
}