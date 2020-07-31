import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Spinner from './Loader';

const HomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: "HomePage"*/));
const MoviesPage = lazy(() => import('../pages/MoviesPage' /* webpackChunkName: "MoviesPage"*/));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/));

class MovieApp extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId"
              component={MovieDetailsPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    )
  }
}

export default MovieApp;
