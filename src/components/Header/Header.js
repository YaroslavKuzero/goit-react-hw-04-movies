import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={s.header}>
        <NavLink
          activeClassName={s.linkActive}
          className={s.link}
          exact to='/'>Home</NavLink>
        <NavLink
          activeClassName={s.linkActive}
          className={s.link}
          to='/movies'>Movies</NavLink>
      </div>
    )
  }
}

export default Header;