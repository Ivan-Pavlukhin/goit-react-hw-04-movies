import {  } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import style from './style/App.module.css'

const MoviesView = lazy(() => import('./views/MoviesView' /*webpackChunkName: "movies-view" */)) 
const HomePageView = lazy(() => import('./views/HomePageView.js' /*webpackChunkName: "home-page-view" */))
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView.js' /*webpackChunkName: "movies-details-view" */))


const App = () => (
  <div className={style.wrapper}>
    <header>
      <NavLink className={style.header__link} to="/">Home</NavLink>
      <NavLink className={style.header__link} to="/movies">Movies</NavLink>
    </header>
    <Suspense fallback={<h1>Загрузка</h1>}>
    <Switch>
      <Route path="/movies/:movieId" component={MovieDetailsView} />
      <Route path="/movies" exact component={MoviesView} />
      <Route path="/" component={HomePageView} />
      <Redirect to="/" />
    </Switch>
    </Suspense>
  </div>
)


export default App;
