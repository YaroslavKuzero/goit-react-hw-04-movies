import React, { Component } from 'react';
import moviesAPI from '../../components/moviesAPI';
import MoviesList from '../../components/MoviesList';


class HomePage extends Component {
  state = {
    trendMovies: [],
  }

  componentDidMount() {
    moviesAPI.fetchTrendingMovie().then(data => this.setState({ trendMovies: data }))
  }

  render() {
    const { trendMovies } = this.state
    return (
      <MoviesList data={trendMovies} />
    )
  }
}

export default HomePage;