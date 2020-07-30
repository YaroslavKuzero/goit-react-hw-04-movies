import React, { Component } from 'react';
import moviesAPI from '../moviesAPI';
import styles from './Reviews.module.css'

class Reviews extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    const { movieId } = this.props
    moviesAPI.fetchReviews(movieId).then(data => this.setState({ reviews: data.results }))
  }

  render() {
    const { reviews } = this.state
    return (
      <ul className={styles.reviewsList}>
        {reviews.length > 0 ? reviews.map(review => (<li className={styles.reviewsItem} key={review.id}><p className={styles.reviewsAuthor}>{review.author}</p><p className={styles.reviewsContent}>{review.content}</p></li>)) : <p>We have not reviews to this movie.</p>}
      </ul>
    )
  }
}

export default Reviews;
