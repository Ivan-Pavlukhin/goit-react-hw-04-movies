import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { fetchMovieId } from '../service/service';
import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews'

import style from '../style/MovieDetailsView.module.css'

const POSTER_URL = 'https://image.tmdb.org/t/p/original'

 class MovieDetailsView extends Component {
  state = {
    poster_path: null,
    title: null,
    overview: null,
    release_date: null,
    vote_average: null,
    genres: null,
    error: null,
    loading: false,
    
  };
   async componentDidMount() {
     this.setState({loading: true})
     try {
      const { movieId } = this.props.match.params;
      const response = await fetchMovieId(movieId);
      this.setState({ ...response.data });
     } catch(error) {
       this.setState({error: error})
     } finally {
       this.setState({loading: false})
     }
    
   }
   
   handelBack = () => {
     const { history, location } = this.props
     
     if (location.state && location.state.from) {
       history.push(location.state.from)
       return
     }
     
      history.push('/')
   }

   render() {
     const { title, release_date, vote_average, overview, genres, loading } = this.state
     const {location, match} = this.props
    return (
        <>
          <button type="button" onClick={this.handelBack}>&larr; To back</button>
          <div className={style.container}>
            {loading && <p>Загружаем</p>}
            <img className={style.container__item}
                src={`${POSTER_URL}${this.state.poster_path}`}
                width="480"
                alt="poster"
            />
            <div
              className={style.container__item}>
                <h1>
                {title} ({release_date})
                </h1>
                <p>User score: {vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres </h2>
                <ul>
                  {genres &&
                    genres.map(genre => <li key={genre.name}>{genre.name}</li>)}
                </ul>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
                <li>
                  <Link to={{
                    pathname: `${match.url}/credits`,
                    state: { from: location }
                  }}  >Cast</Link>
                </li>
                <li>
                  <Link to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location }
                  }}>Reviews</Link>
                </li>
            </ul>
            <Route path={`${match.path}/credits`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </div>
        </>
    );
  }
}

export default MovieDetailsView