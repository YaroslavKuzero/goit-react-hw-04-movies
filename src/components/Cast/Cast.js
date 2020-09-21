import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchCast, getImgUrl } from '../../services/moviesAPI';

import s from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
  }

  state = {
    cast: []
  }

  async componentDidMount() {
    const { movieId } = this.props
    const { cast } = await fetchCast(movieId)
    this.setState({ cast: cast })
  }

  render() {
    const { cast } = this.state
    return cast.length && <ul className={s.actorsList}>
      {cast.map(({ id, name, profile_path }) => (
        <li
          className={s.actorInfo}
          key={id}>
          <img
            className={s.actorAvatar}
            src={getImgUrl(profile_path)}
            alt={name}
            width='100' />
          <p className={s.actorName}>{name}</p>
        </li>))}
    </ul>
  }
}

export default Cast;
