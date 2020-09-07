import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import moviesAPI from '../../components/moviesAPI';

import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

import s from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    moviesAPI.fetchDetailsMovie(movieId).then(data => this.setState({ movie: data }))
  }

  render() {
    const { poster_path, title, release_date, overview, genres } = this.state.movie
    return (
      <>
        <div className={s.movieDetails}>
          <img className={s.movieImg} src={moviesAPI.getImgUrl(poster_path)} alt={title} width='300' />
          <div className={s.movieInfo}>
            <h3 className={s.movieTitle}>{title}</h3>
            <p className={s.movieRelease}>Date of release: {release_date}</p>
            <p className={s.movieOverview}>{overview}</p>
            {genres && (<><span className={s.genresText}>Genres:</span>
              <ul className={s.genreList}>
                {genres.map(({ id, name }) => (<li className={s.genreItem} key={id}>{name}</li>))}
              </ul></>)}
          </div>
        </div>

        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          exact to={`${this.props.match.url}/cast`}>cast</NavLink>
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          exact to={`${this.props.match.url}/reviews`} >reviews</NavLink>
        <Route
          path={`${this.props.match.path}/cast`}
          render={props => {
            const movieId = Number(props.match.params.movieId);
            return <Cast {...props} movieId={movieId} />;
          }}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={props => {
            const movieId = Number(props.match.params.movieId);
            return <Reviews {...props} movieId={movieId} />;
          }}
        />
      </>
    )
  }
}

export default MovieDetailsPage;
