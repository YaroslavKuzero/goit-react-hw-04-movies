import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moviesAPI from '../moviesAPI';

import s from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
  }

  state = {
    cast: []
  }

  componentDidMount() {
    const { movieId } = this.props
    moviesAPI.fetchCast(movieId).then(({ cast }) => this.setState({ cast: cast }))
  }

  render() {
    const { cast } = this.state
    return cast.length > 0 && <ul className={s.actorsList}>
      {cast.map(({ id, name, profile_path }) => (
        <li
          className={s.actorInfo}
          key={id}>
          <img
            className={s.actorAvatar}
            src={moviesAPI.getImgUrl(profile_path)}
            alt={name}
            width='100' />
          <p className={s.actorName}>{name}</p>
        </li>))}
    </ul>
  }
}

export default Cast;
