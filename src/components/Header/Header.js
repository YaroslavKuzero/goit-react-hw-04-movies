import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </div>
    )
  }
}

export default Header;