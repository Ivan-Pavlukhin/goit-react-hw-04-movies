// import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { fetchMovieId} from "../service/service";

export class MovieDetailsView extends Component {
    state = {
        poster_path: null,
        title: null,
        overview: null,
        release_date: null,
        vote_average: null,
        genres: null

    }
    async componentDidMount() {
        const{movieId} = this.props.match.params
        const response = await fetchMovieId(movieId)
        this.setState({...response.data})
        // console.log(response)
        console.log(this.state.genres.map(genre => genre.name))
        // this.setState(prevState => {
        //     const g = prevState.genres.map(genre => genre.name)
        //     return ({genres: g})
        // })
    }

    render() {
        return (
            <>
                <div>
                    <button type="button">&larr; To back</button>
                    <img src={this.state.poster_path} alt="poster" />
                    <div>
                        <h1>{this.state.title} ({this.state.release_date})</h1>
                        <p>User score: {this.state.vote_average * 10}%</p>
                        <h2>Overview</h2>
                        <p>{this.state.overview}</p>
                        <h2>Genres </h2>
                        <ul>
                            {this.state.genres && this.state.genres.map(genre => <li key={genre.name}>{genre.name}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Additional information</p>
                    <ul>
                        <li><Link to="/movies/:movieId/cast">Cast</Link></li>
                        <li><Link to="/movies/:movieId/reviews">Reviews</Link></li>
                    </ul>
                </div>
            </>
            
        )
    }
}