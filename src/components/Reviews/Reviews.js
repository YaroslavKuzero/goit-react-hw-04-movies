import React, { Component } from 'react';
import moviesAPI from '../moviesAPI';
import PropTypes from 'prop-types';
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
    return (
      <>
        {
          reviews.length > 0 ? reviews.map(({ id, author, content }) => (
            <ul className={s.reviewsList}>
              <li
                className={s.reviewsItem}
                key={id}>
                <p className={s.reviewsAuthor}>{author}</p>
                <p className={s.reviewsContent}>{content}</p>
              </li>
            </ul>))
            : <p>We have not reviews of choosen movie.</p>
        }
      </>
    )
  }
}

export default Reviews;
