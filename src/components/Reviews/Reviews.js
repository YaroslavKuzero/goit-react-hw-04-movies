import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchReviews } from '../../services/moviesAPI';

import s from './Reviews.module.css';

class Reviews extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
  }

  state = {
    reviews: []
  }

  async componentDidMount() {
    const { movieId } = this.props
    const { results } = await fetchReviews(movieId)
    this.setState({ reviews: results })
  }

  render() {
    const { reviews } = this.state
    return reviews.length ? <ul className={s.reviewsList}>{reviews.map(({ id, author, content }) => (
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
