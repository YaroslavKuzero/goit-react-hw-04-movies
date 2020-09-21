import React, { Component } from 'react';

import { fetchQuery } from '../../services/moviesAPI';

import MovieList from '../../components/MoviesList'

import s from './MoviesPage.module.css'

class MoviesPage extends Component {
  state = {
    query: '',
    result: []
  }

  handleChange = ({ currentTarget: { value } }) =>
    this.setState({ query: value });

  handleSubmit = async e => {
    const { query } = this.state
    e.preventDefault()
    const { results } = await fetchQuery(query)
    this.setState({ result: results, query: '' })
  }

  render() {
    const { result, query } = this.state
    return (
      <div className={s.page}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            placeholder="Search movies"
            className={s.input}
          />
          <button className={s.button} type="submit" />
        </form>

        <MovieList data={result} />
      </div>
    )
  }
}

export default MoviesPage;
