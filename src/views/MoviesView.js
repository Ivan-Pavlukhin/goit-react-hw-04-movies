import { Component } from "react";
import { fetchMoviesQuery } from "../service/service";
import MoviesList from "../components/MoviesList";

class MoviesView extends Component {
    state = {
        value: null,
        movies: null
    }

    handelChange = (e) => {
        e.preventDefault();
        this.setState({value: e.currentTarget.value})
    }

     handelSubmit = (e) => {
        e.preventDefault()
        fetchMoviesQuery(this.state.value).then(res => this.setState({movies: res.data.results}))
        
    }

    render() {
        const {movies} = this.state
        return (
            <>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" onChange={this.handelChange}/>
                    <button type="submit">Search</button>
                </form>
                {movies && <MoviesList movies={movies} />}
            </>
        )
    }
}

export default MoviesView;