import { Component } from "react";
import { fetchMoviesQuery } from "../service/service";
import { NavLink } from "react-router-dom";

export class Movies extends Component {
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
        // this.setState({movies: [...response]})
    }

    render() {
        return (
            <>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" onChange={this.handelChange}/>
                    <button type="submit">Search</button>
                </form>
                <ul>
                    {this.state.movies && this.state.movies.map(movie => <li key={movie.id}><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></li>)}
                </ul>
            </>)
}
}