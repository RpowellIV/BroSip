import axios from 'axios';


export default axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=db51f57c&t=",

})

