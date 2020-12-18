import { LIKED_REVIEW } from '../actionTypes'


const intialState = {
    liked: false
};

export default function(state = intialState, action) {
    switch(action.type) {
        case LIKED_REVIEW: {
            return {
                //copy initial state
                ...state,
                //change this part of state
                liked: [
                    //make a copy of liked
                    ...state.liked,
                    {
                        //destructuring as a prop
                        //prevents need to be explicit
                        //spread syntax
                        ...action.payload.liked
                    }
                ]
            }
        }
        default:
            return state;
    }
}