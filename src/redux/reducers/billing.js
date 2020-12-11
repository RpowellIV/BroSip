import { BILL_PAY } from '../actionTypes'

const intialState = {
    transactions: []
    
};

export default function(state = intialState, action) {
    switch(action.type) {
        case BILL_PAY: {
            return {
                //copy initial state
                ...state, 
                transactions: [
                    //make a copy of transactions
                    ...state.transactions,
                    {
                        ...action.payload
                    }
                ]
            }
        }
        default:
            return state;
    }
}