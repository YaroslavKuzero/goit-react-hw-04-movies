import React from 'react';
import { NavLink } from 'react-router-dom';
import moviesAPI from '../moviesAPI';
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ data }) => (
  <ul className={styles.movieList}>
    {data?.length > 0 && data.map(({ id, title, name, poster_path }) => (
      <li key={id} className={styles.movieItem}>
        <NavLink className={styles.movieLink} activeClassName={styles.movieActiveLink} exact to={`movies/${id}`}>
          <img src={moviesAPI.getImgUrl(poster_path)} alt={title} width="140" />
          <p className={styles.movieTitle}>{title}{name}</p>
        </NavLink>
      </li>
    ))}
  </ul>
)

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
}


export default MoviesList;
