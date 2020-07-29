import React, { Component } from 'react';
import moviesAPI from '../../components/moviesAPI';
import { NavLink } from 'react-router-dom'

class MoviesPage extends Component {
  state = {
    query: '',
    result: []
  }

  handleChange = event =>
    this.setState({ query: event.currentTarget.value });

  handleSubmit = event => {
    event.preventDefault()
    moviesAPI.fetchQuery(this.state.query).then(data => this.setState({ result: data.results }))
    this.setState({ query: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            placeholder="Search movies"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
        <ul>
          {this.state.result.length > 0 && this.state.result.map(movie => (<li key={movie.id}>
            <NavLink exact to={`${this.props.match.url}/${movie.id}`}>{movie.title}
            </NavLink>
          </li>))}
        </ul>
      </div>
    )
  }
}

export default MoviesPage;