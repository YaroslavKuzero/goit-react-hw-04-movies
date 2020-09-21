import React, { Component } from 'react';

import { fetchTrendingMovie } from '../../services/moviesAPI';

import MoviesList from '../../components/MoviesList';

class HomePage extends Component {
  state = {
    trendMovies: [],
  }

  async componentDidMount() {
    const data = await fetchTrendingMovie()
    if (data) {
      this.setState({ trendMovies: data })
    }
  }

  render() {
    const { trendMovies } = this.state
    return (
      <MoviesList data={trendMovies} />
    )
  }
}

export default HomePage;