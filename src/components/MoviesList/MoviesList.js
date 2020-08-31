import React from 'react';
import { NavLink } from 'react-router-dom';
import moviesAPI from '../moviesAPI';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ data }) => (
  <ul className={s.movieList}>
    {data?.length > 0 && data.map(({ id, title, name, poster_path }) => (
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
