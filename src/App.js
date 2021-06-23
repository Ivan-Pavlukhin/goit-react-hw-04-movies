import {  } from 'react-router-dom';
import './App.css';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { HomePage } from './views/HomePageView'
import { Movies } from './views/Movies'
import { MovieDetailsView } from './views/MovieDetailsView';

const App = () => (
  <>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </header>
    <Switch>
      <Route path="/movies/:movieId" component={MovieDetailsView} />
      <Route path="/movies" component={Movies} />
      <Route path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
    
  </>
)


export default App;
