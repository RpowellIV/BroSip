import { TXFR_FROM_SAVINGS } from '../actionTypes'


const intialState = {
    balance: 2010
};

export default function(state = intialState, action) {
    switch(action.type) {
        case TXFR_FROM_SAVINGS: {
            return {
                //copy initial state
                ...state,
                //change this part of state
                balance: state.balance + action.payload.amount

            }
        }
        default:
            return state;
    }
}