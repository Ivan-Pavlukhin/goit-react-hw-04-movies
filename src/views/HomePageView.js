import { Component } from 'react'
import {fetchMovies} from '../service/service'
import MoviesList from '../components/MoviesList'

 class HomePageView extends Component {
    state = {
        movies: null,
        loading: false,
        error: null,
    }
     componentDidMount() {
        this.setState({loading: true})
         
        fetchMovies()
            .then(data => this.setState({ movies: data.data.results }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({loading: false}))
    }

     render() {
        const {movies, loading} = this.state 
        return (
            <div>
                <h1>Trending today</h1>
                {loading && <p>Загружаем</p>}
                {movies && <MoviesList movies={movies} />}
            </div>
        )
    }
}

export default HomePageView