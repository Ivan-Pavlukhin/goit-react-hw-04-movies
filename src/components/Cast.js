import { fetchInfo} from "../service/service"
import {Component} from "react"

export class Cast extends Component {
    state = {
        actors: null
    }

    componentDidMount() {
        fetchInfo(this.props.match.params.movieId, "credits").then(actors => this.setState({actors: actors.data.cast}))
    }

    render() {
        const {actors} = this.state
        return actors ? (
            <ul>
                {actors.map(actor =>
                    (<li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                        alt={actor.name}
                        width="240"/>
                        <h2>{actor.name}</h2>
                        <p>Character {`${actor.character}`}</p>
                    </li>)
                )}
            </ul>) :
            null
    }
        
    
}