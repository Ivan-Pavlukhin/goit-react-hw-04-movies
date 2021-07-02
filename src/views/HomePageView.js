import { Component } from 'react'
import {fetchMovies} from '../service/service'
import MoviesList from '../components/MoviesList'

 class HomePageView extends Component {
    state = {
        movies: null
    }
    componentDidMount() {
        fetchMovies()
            .then(data => this.setState({ movies: data.data.results }))
    }

     render() {
        const {movies} = this.state 
        return (
            <div>
                <h1>Trending today</h1>

                {movies && <MoviesList movies={movies} />}
            </div>
        )
    }
}

export default HomePageView