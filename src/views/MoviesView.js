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

    handelChange = (e) => {
        e.preventDefault();
        this.setState({value: e.currentTarget.value})
    }

     handelSubmit = (e) => {
         e.preventDefault()
         this.setState({loading: true})
         fetchMoviesQuery(this.state.value)
            .then(res => this.setState({ movies: res.data.results }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({loading: false}))
        
    }

    render() {
        const {movies, loading} = this.state
        return (
            <>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" onChange={this.handelChange}/>
                    <button type="submit">Search</button>
                </form>
                {loading && <p>Загружаем</p>}
                {movies && <MoviesList movies={movies} />}
            </>
        )
    }
}

export default MoviesView;