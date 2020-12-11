import { TXFR_FROM_CHECKING } from '../actionTypes'

const intialState = {
    // label: 'Checking'
    balance: 1000,
    transactions: []
    
};

export default function(state = intialState, action) {
    switch(action.type) {
        case TXFR_FROM_CHECKING: {
            return {
                //copy initial state
                ...state, //balance: 1000, transactions: []
                //change this part of state
                balance: state.balance + action.payload.amount,
                transactions: [
                    //make a copy of transactions
                    ...state.transactions,
                    {
                        //destructuring as a prop
                        //prevents need to be explicit
                        //spread syntax
                        ...action.payload.transaction
                    }
                ]
            }
        }
        default:
            return state;
    }
}