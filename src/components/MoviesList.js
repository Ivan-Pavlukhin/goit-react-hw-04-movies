import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class MoviesList extends Component {

    render() {
        return (
            <>
                <ul>
                <p>list</p>
                    {this.props.movies && this.props.movies.map(movie => <li key={movie.id}>
                        <NavLink to={{
                            pathname: `/movies/${movie.id}`,
                            state: { from: this.props.location }
                        }}>
                            {movie.title}
                        </NavLink>
                    </li>)}
                </ul>
            </>)
    }
    
}

export default withRouter(MoviesList)