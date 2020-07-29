import React, { Component } from 'react';
import moviesAPI from '../moviesAPI'

class Cast extends Component {
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
      <ul>
        {cast.length > 0 && cast.map(actor => (<li key={actor.id}><p>{actor.name}</p><img src={moviesAPI.getImgUrl(actor.profile_path)} alt={actor.name} width='100' height='150' /></li>))}
      </ul>
    )
  }
}

export default Cast;
