import React, { Component } from 'react';
import Cast from '../../components/Cast'
import Reviews from '../../components/Reviews'
import moviesAPI from '../../components/moviesAPI'
import { NavLink, Route } from 'react-router-dom'

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  }


  componentDidMount() {
    const { movieId } = this.props.match.params;
    moviesAPI.fetchDetailsMovie(movieId).then(data => this.setState({ movie: data }))
  }


  render() {
    return (
      <>
        <h3>{this.state.movie.title}</h3>
        <NavLink exact to={`${this.props.match.url}/cast`}>cast</NavLink>
        <NavLink exact to={`${this.props.match.url}/reviews`} >reviews</NavLink>
        <Route
          path={`${this.props.match.path}/cast`}
          render={props => {
            const movieId = Number(props.match.params.movieId);
            return <Cast {...props} movieId={movieId} />;
          }}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={props => {
            const movieId = Number(props.match.params.movieId);
            return <Reviews {...props} movieId={movieId} />;
          }}
        />
      </>
    )
  }
}

export default MovieDetailsPage;
