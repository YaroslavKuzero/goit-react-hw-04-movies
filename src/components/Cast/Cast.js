import React, { Component } from 'react';
import moviesAPI from '../moviesAPI';
import styles from './Cast.module.css';
import PropTypes from 'prop-types';

class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
  }

  state = {
    cast: []
  }

  componentDidMount() {
    const { movieId } = this.props
    moviesAPI.fetchCast(movieId).then(data => this.setState({ cast: data.cast }))
  }

  render() {
    const { cast } = this.state
    return (
      <ul className={styles.actorsList}>
        {cast.length > 0 && cast.map(actor => (<li className={styles.actorInfo} key={actor.id}><img className={styles.actorAvatar} src={moviesAPI.getImgUrl(actor.profile_path)} alt={actor.name} width='100' /><p className={styles.actorName}>{actor.name}</p></li>))}
      </ul>
    )
  }
}


export default Cast;
