import { Component } from 'react'
import {fetchMovies} from '../service/service'
import {Link} from 'react-router-dom'

export class HomePage extends Component {
    state = {
        movies: null
    }
    componentDidMount() {
        fetchMovies()
            .then(data => this.setState({ movies: data.data.results }))
    }

    render() {
        return (
            <div>
                <h1>Trending today</h1>
                <ul>
                    {this.state.movies && this.state.movies.map(movie => (<li key={movie.id}><Link to={`/movies/${movie.id}`} >{movie.title}</Link></li>))}
                </ul>
            </div>
        )
    }
}

// 03e6172e4bc61c0101ae952fe696d818