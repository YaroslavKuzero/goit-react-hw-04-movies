import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = () => {
  return <div className={s.header}>
    <NavLink
      activeClassName={s.linkActive}
      className={s.link}
      exact to='/'>Home</NavLink>
    <NavLink
      activeClassName={s.linkActive}
      className={s.link}
      to='/movies'>Movies</NavLink>
  </div>

}

export default Header;