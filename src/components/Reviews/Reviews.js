import React, { Component } from 'react';
import moviesAPI from '../moviesAPI'

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
      <ul>
        {reviews.length > 0 && reviews.map(review => (<li key={review.id}><p>{review.author}</p><p>{review.content}</p></li>))}
      </ul>
    )
  }
}

export default Reviews;
