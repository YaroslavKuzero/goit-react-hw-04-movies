import React, { Component } from 'react';
import moviesAPI from '../../components/moviesAPI';
import MovieList from '../../components/MoviesList'
import styles from './MoviesPage.module.css'

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
    const { result, query } = this.state
    return (
      <div className={styles.page}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            placeholder="Search movies"
            className={styles.input}
          />
          <button className={styles.button} type="submit">
          </button>
        </form>

        <MovieList data={result} />
      </div>
    )
  }
}

export default MoviesPage;
