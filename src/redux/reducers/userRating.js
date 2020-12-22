import { USER_RATING } from '../actionTypes'


const intialState = [
        {
            id: 0,
            lookup:'Demon Knight',
            rating:'-1',
            linkTo:'/Movies/Demon+Knight',
            poster:'https://64.media.tumblr.com/48f30edf22ec858957e7f30de40321fc/tumblr_pn7lwlKGHs1ssmbizo1_640.jpg'
        },
        {
            id: 1,
            lookup:'Babadook',
            rating:'-1',
            linkTo:'/Movies/Babadook',
            poster:'https://64.media.tumblr.com/59bd87ac2f16c1196301bd42c88fb564/tumblr_osi48pJOSG1s80h8lo1_1280.jpg'
        },
        {
            id: 2,
            lookup:'The 36th Chamber',
            rating:'-1',
            linkTo:'/Movies/The+36th+Chamber',
            poster:'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_36th_Chamber_of_Shaolin.jpg/220px-The_36th_Chamber_of_Shaolin.jpg'
        },
        {
            id: 3,
            lookup:'Blue Iguana ',
            rating:'-1',
            linkTo:'/Movies/Blue+Iguana+2018',
            poster:'https://m.media-amazon.com/images/M/MV5BN2Y0ZmEwODAtODQzOC00ZjcwLTg5MjMtMWM3OTM0YmUzYWQ2XkEyXkFqcGdeQXVyNzM5Mjg3ODg@._V1_.jpg'
        },
        {
            id: 4,
            lookup:'',
            rating:'-1',
            linkTo:'',
            poster:''
        }
];

export default function(state = intialState, action) {
    switch(action.type) {
        case USER_RATING: {
            // const index = state.findIndex(x => x.id === action.payload.id)
            const index = action.payload.id
            console.log(action.payload.rating)
            return {
                // ...state.slice(0, index),
                        ...state,
                        index:{
                            ...state[index],
                            rating: action.payload.rating
                        },
                // ...state.slice(index + 1)
            }
        }
        default:
            return state;
    }
}
