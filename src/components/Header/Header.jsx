import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li>
        <NavLink to="/movies" className={({ isActive}) => (isActive ? 'active' : '')}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
