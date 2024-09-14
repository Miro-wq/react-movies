// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName="active">Movies</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
