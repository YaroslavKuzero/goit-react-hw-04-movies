import React, { Component } from 'react';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import moviesAPI from '../../components/moviesAPI';
import { NavLink, Route } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';

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
      <div>
        <div className={styles.movieDetails}>
          <img className={styles.movieImg} src={moviesAPI.getImgUrl(poster_path)} alt={title} width='300' />
          <div className={styles.movieInfo}>
            <h3 className={styles.movieTitle}>{title}</h3>
            <p className={styles.movieRelease}>Date of release: {release_date}</p>
            <p className={styles.movieOverview}>{overview}</p>
            {genres && (<><span className={styles.genresText}>Genres:</span>
              <ul className={styles.genreList}>
                {genres.map(genre => (<li className={styles.genreItem} key={genre.id}>{genre.name}</li>))}
              </ul></>)}
          </div>
        </div>

        <NavLink className={styles.link} activeClassName={styles.activeLink} exact to={`${this.props.match.url}/cast`}>cast</NavLink>
        <NavLink className={styles.link} activeClassName={styles.activeLink} exact to={`${this.props.match.url}/reviews`} >reviews</NavLink>
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
      </div>
    )
  }
}

export default MovieDetailsPage;
