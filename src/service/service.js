// 03e6172e4bc61c0101ae952fe696d818

import axios from 'axios'

// axios.defaults.headers.common['Autorization'] =
//     'Bearer 03e6172e4bc61c0101ae952fe696d818';

const API_KEY = '03e6172e4bc61c0101ae952fe696d818'

const fetchMovies = () => {
    return axios
        .get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        )
}

const fetchMovieId = (movieId) => {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        
    )
}

const fetchMoviesQuery = (query) => {
    return axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
}

export {fetchMovies, fetchMovieId, fetchMoviesQuery}