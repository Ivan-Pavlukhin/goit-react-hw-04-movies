import { Component } from "react";
import { fetchInfo } from "../service/service";

export class Reviews extends Component{
    state = {
        reviews: null
    }

    componentDidMount() {
        fetchInfo(this.props.match.params.movieId, "reviews").then(data => this.setState({reviews: data.data.results}))
    }

    render() {
        if (this.state.reviews && this.state.reviews.length > 0) {
                return (<ul>
                {this.state.reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>))}
            </ul>)
        } else {
            return  <p>We don't have any reviews for this movie.</p>
            }     
    }
}