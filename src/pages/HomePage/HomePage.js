import React, { Component } from 'react';
import moviesAPI from '../../components/moviesAPI'
import { NavLink } from 'react-router-dom'

class HomePage extends Component {
  state = {
    trendMovies: [],
  }

  componentDidMount() {
    moviesAPI.fetchTrendingMovie().then(data => this.setState({ trendMovies: data }))
  }

  render() {
    return (
      <>
        <ul>
          {this.state.trendMovies.map(movie => (
            <li key={movie.id}>
              <NavLink exact to={`movies/${movie.id}`}>{movie.title}{movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default HomePage;