import axios from 'axios'


const API_KEY = '03e6172e4bc61c0101ae952fe696d818'
const BASE_URL = 'https://api.themoviedb.org/3/'
const fetchMovies = () => {
    return axios
        .get(
            `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
        )
}

const fetchMovieId = (movieId) => {
    return axios
        .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
        
    )
}

const fetchMoviesQuery = (query) => {
    return axios
        .get(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
}

const fetchInfo = (movieId, category) => {
    return axios
    .get(`${BASE_URL}movie/${movieId}/${category}?api_key=${API_KEY}&language=en-US`)
}

export {fetchMovies, fetchMovieId, fetchMoviesQuery, fetchInfo}