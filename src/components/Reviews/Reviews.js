import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moviesAPI from '../../services/moviesAPI';

import s from './Reviews.module.css';

class Reviews extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
  }

  state = {
    reviews: []
  }

  componentDidMount() {
    const { movieId } = this.props
    moviesAPI.fetchReviews(movieId).then(({ results }) => this.setState({ reviews: results }))
  }

  render() {
    const { reviews } = this.state
    return reviews.length > 0 ? <ul className={s.reviewsList}>{reviews.map(({ id, author, content }) => (
      <li
        className={s.reviewsItem}
        key={id}>
        <p className={s.reviewsAuthor}>{author}</p>
        <p className={s.reviewsContent}>{content}</p>
      </li>))}
    </ul>
      : <p>We have not reviews of choosen movie.</p>
  }
}

export default Reviews;
