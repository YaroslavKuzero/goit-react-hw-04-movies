import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import moviesAPI from '../../services/moviesAPI';

import s from './MovieList.module.css';

const MoviesList = ({ data }) => (
  data?.length && <ul className={s.movieList}>
    {data.map(({ id, title, name, poster_path }) => (
      <li
        key={id}
        className={s.movieItem}>
        <NavLink
          className={s.movieLink}
          activeClassName={s.movieActiveLink}
          exact to={`movies/${id}`}>
          <img
            src={moviesAPI.getImgUrl(poster_path)}
            alt={title}
            width="140" />
          <p className={s.movieTitle}>{title}{name}</p>
        </NavLink>
      </li>
    ))}
  </ul>
)

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default MoviesList;
