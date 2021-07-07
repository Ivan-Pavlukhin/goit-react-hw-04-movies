import queryString from 'query-string';
import { Component } from "react";
import { fetchMoviesQuery } from "../service/service";
import MoviesList from "../components/MoviesList";

class MoviesView extends Component {
    state = {
        value: null,
        movies: null,
        loading: false,
        error: null
    }

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        if (this.props.location.search) {
            this.setState({value: queryParams.query})
            this.fetchMovies(queryParams.query)
        }
    }

    handelChange = (e) => {
        e.preventDefault();
        this.setState({value: e.currentTarget.value})
    }

    handelSubmit = (e) => {
         e.preventDefault()
         if (this.state.value) {
             this.setState({ loading: true })
             this.fetchMovies(this.state.value)
            this.props.history.push(`${this.props.match.url}?query=${this.state.value}`)  
         }
        
    }
    fetchMovies = (query) => {
        return fetchMoviesQuery(query)
            .then(res => this.setState({ movies: res.data.results }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({loading: false}))
    }

    render() {
        const { movies, loading, value } = this.state
        return (
            <>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" onChange={this.handelChange}/>
                    <button type="submit">Search</button>
                </form>

                {loading && <p>Загружаем</p>}

                {movies && <MoviesList movies={movies} value={value}/>} 
            </>
        )
    }
}

export default MoviesView;