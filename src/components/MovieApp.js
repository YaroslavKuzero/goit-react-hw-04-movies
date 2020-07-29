import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header'
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

class MovieApp extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId"
            component={MovieDetailsPage} />
          <Route component={HomePage} />
        </Switch>
      </>
    )
  }
}

export default MovieApp;
