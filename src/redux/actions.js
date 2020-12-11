import { TXFR_FROM_CHECKING, TXFR_FROM_SAVINGS, BILL_PAY } from './actionTypes'

export const txfrFromChecking = amount => {
    //code that calculates new balance
    //dont use state.xxx us imuteability
    //updating state replaces entire thing
    return {
        type: TXFR_FROM_CHECKING,
        payload: {
            amount,
            transaction: {
                amount,
                date: Date.now(),
                destination: 'savings',
                source: 'checking'
                }
        }
    }
}


export const txfrFromSavings = amount => {
    return {
        type: TXFR_FROM_SAVINGS,
        payload: {
            amount
        }
    }
}


export const billPay = (amount, vendor)=> dispatch => {
    dispatch(checkingChange(amount));
    dispatch(recordBillPay(amount, vendor));
}


const checkingChange = amount => {
    return {
        type: TXFR_FROM_CHECKING,
        payload: {
            amount,
            type: 'modify'
        }
    }
}

const recordBillPay = (amount, vendor) => {
    return {
        type: BILL_PAY,
        payload: {
            amount,
            date: Date.now(),
            destination: vendor,
            source: 'checking'
        }
    }
}