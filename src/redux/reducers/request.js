import { NEW_REQUEST } from '../actionTypes'


const intialState = {
    request: '',
    info: []
};

export default function(state = intialState, action) {
    switch(action.type) {
        case NEW_REQUEST: {
            return {
                //copy initial state
                ...state,
                //change this part of state
                request: action.payload.request,
                info: [
                    //make a copy of info
                    ...state.info,
                    {
                        //destructuring as a prop
                        //prevents need to be explicit
                        //spread syntax
                        ...action.payload.info
                    }
                ]
            }
        }
        default:
            return state;
    }
}