import queryString from 'query-string';
import { Component } from "react";
import { fetchMoviesQuery } from "../service/service";
import MoviesList from "../components/MoviesList";
import { NavLink, Route } from "react-router-dom";

class MoviesView extends Component {
    state = {
        value: null,
        movies: null,
        loading: false,
        error: null
    }

    

    componentDidMount() {
        // const paramsString = "q=URLUtils.searchParams&topic=api";
        // class searchParams = new URLSearchParams(paramsString);
        const queryParams = queryString.parse(this.props.location.search);
        console.log(queryParams)
        if (this.props.location.search) {
            this.setState({value: queryParams.query})
            // console.log(this.props.location.search)
            this.fetchMovies(queryParams.query)
        }
    }

    handelChange = (e) => {
        e.preventDefault();
        this.setState({value: e.currentTarget.value})
    }

     handelSubmit = (e) => {
         if (this.state.value) {
             this.setState({ loading: true })
             this.fetchMovies(this.state.value)
         }
        
    }
    fetchMovies = (query) => {
        return fetchMoviesQuery(query)
            .then(res => this.setState({ movies: res.data.results }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({loading: false}))
    }

    render() {
        const {movies, loading, value} = this.state
        return (
            <>
                {/* {console.log(this.props.match.url)} */}
                <input type="text" onChange={this.handelChange}/>
                <NavLink to={`${this.props.match.url}?query=${this.state.value}`}
                onClick={this.handelSubmit}>Search</NavLink>
                {loading && <p>Загружаем</p>}
                {/* {<Route path={`/movies?query=${this.state.value}`}
                    render={(props) => <MoviesList {...props} movies={this.state.movies} />} />} */}
                {movies && <MoviesList movies={movies} query={value}/>}
            </>
        )
    }
}

export default MoviesView;