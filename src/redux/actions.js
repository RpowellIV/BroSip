import { NEW_REQUEST, USER_RATING, LIKED_MOVIE, TOP_RATED, MOST_REQUEST, MOST_LIKED } from './actionTypes'



export const newRequest = (email, request) => {
    return {
        type: NEW_REQUEST,
        payload: {
            request,
            info: {
                email,
                request,
                date: Date.now()
                }
        }
    }
}


export const userRating = (rating) => {
    return {
        type: USER_RATING,
        payload: {
            userRate: {
                rating,
                date: Date.now()
                }
        }
    }
}

export const likedMovie = (like) => {
    return {
        type: LIKED_MOVIE,
        payload: {
            liked: {
                like,
                date: Date.now()
                }
        }
    }
}

export const mostLiked = (likeCount) => {
    return {
        type: MOST_LIKED,
        payload: {
            likeCount
        }
    }
}
export const topRated = (ratings, average) => {
    return {
        type: TOP_RATED,
        payload: {
            totalRate: {
                ratings,
                average,
                date: Date.now()
                }
        }
    }
}

export const mostRequested = (reqCount) => {
    return {
        type: MOST_REQUEST,
        payload: {
            total: {
                reqCount,
                date: Date.now()
                }
        }
    }
}


// export const billPay = (amount, vendor)=> dispatch => {
//     dispatch(checkingChange(amount));
//     dispatch(recordBillPay(amount, vendor));
// }


// const checkingChange = amount => {
//     return {
//         type: TXFR_FROM_CHECKING,
//         payload: {
//             amount,
//             type: 'modify'
//         }
//     }
// }

