import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
