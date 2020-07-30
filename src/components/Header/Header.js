import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <NavLink activeClassName={styles.linkActive} className={styles.link} exact to='/'>Home</NavLink>
        <NavLink activeClassName={styles.linkActive} className={styles.link} to='/movies'>Movies</NavLink>
      </div>
    )
  }
}

export default Header;