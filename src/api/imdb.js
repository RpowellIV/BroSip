import axios from 'axios';

const API_KEY = 'db51f57c';

export default axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=",
    params: {api_key: API_KEY}  
})

