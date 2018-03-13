import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationHeader.css';
const navigationHeader = (props) => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/staff'>Staff</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default navigationHeader;