import { USER_RATING } from '../actionTypes'


const intialState = [
        {
            id: 0,
            lookup:'Babadook',
            rating:'-1',
            linkTo:'/Movies/Babadook',
            poster:'https://64.media.tumblr.com/59bd87ac2f16c1196301bd42c88fb564/tumblr_osi48pJOSG1s80h8lo1_1280.jpg'
        },
        {
            id: 1,
            lookup:'mother',
            rating:'-1',
            linkTo:'/Movies/mother',
            poster:'https://thefridacinema.org/wp-content/uploads/2019/12/Mother-poster.jpg'
        },
        {
            id: 2,
            lookup:'Behind The Mask',
            rating:'-1',
            linkTo:'/Movies/Behind+The+Mask',
            poster:'https://alternativemovieposters.com/wp-content/uploads/2016/02/therrien_friday.jpg'
        },
        {
            id: 3,
            lookup:"Pan's Labyrinth",
            rating:'-1',
            linkTo:"/Movies/Pan's+Labyrinth",
            poster:'https://d1f7geppf3ca7.cloudfront.net/origin/266782/pans-labyrinth-movie-silk-poster-pans-labyrinth-film-by-guillermo-del-toro-v3.jpg'
        },
        {
            id: 4,
            lookup:'Baskin',
            rating:'-1',
            linkTo:'/Movies/Baskin',
            poster:'https://i.pinimg.com/originals/70/66/37/70663779ed71135014205fba9316f876.jpg'
        },
        {
            id: 5,
            lookup:'The 36th Chamber',
            rating:'-1',
            linkTo:'/Movies/The+36th+Chamber',
            poster:'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_36th_Chamber_of_Shaolin.jpg/220px-The_36th_Chamber_of_Shaolin.jpg'
        },
        {
            id: 6,
            lookup:'Blue Iguana',
            rating:'-1',
            linkTo:'/Movies/Blue+Iguana+2018',
            poster:'https://m.media-amazon.com/images/M/MV5BN2Y0ZmEwODAtODQzOC00ZjcwLTg5MjMtMWM3OTM0YmUzYWQ2XkEyXkFqcGdeQXVyNzM5Mjg3ODg@._V1_.jpg'
        },
        {
            id: 7,
            lookup:'The Strangers',
            rating:'-1',
            linkTo:'/Movies/The+Strangers',
            poster:'https://i.pinimg.com/originals/cf/eb/be/cfebbe7902b28ddedb32a9eb3afcde10.png'
        },
        {
            id: 8,
            lookup:'Koroshiya',
            rating:'-1',
            linkTo:'/Movies/Koroshiya',
            poster:'https://posterspy.com/wp-content/uploads/2020/10/ichithekillerdef-480x672.jpg'
        },
        {
            id: 9,
            lookup:'He loves Me',
            rating:'-1',
            linkTo:'/Movies/He+Loves+Me',
            poster:'https://i.pinimg.com/originals/77/bf/3b/77bf3b99b2103b453a4b6e5031db1717.jpg'
        },
        {
            id: 10,
            lookup:'Demon Knight',
            rating:'-1',
            linkTo:'/Movies/Demon+Knight',
            poster:'https://64.media.tumblr.com/48f30edf22ec858957e7f30de40321fc/tumblr_pn7lwlKGHs1ssmbizo1_640.jpg'
        },
        {
            id: 11,
            lookup:"Adam's Apples",
            rating:'-1',
            linkTo:"/Movies/Adam's+Apples",
            poster:'https://images-na.ssl-images-amazon.com/images/I/51gncA%2BsWFL._SY445_.jpg'
        },
        {
            id:12,
            lookup:'Oculus',
            rating:'-1',
            linkTo:'/Movies/Oculus',
            poster:'https://images-na.ssl-images-amazon.com/images/I/41NeU0bEbRL._AC_.jpg'
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
