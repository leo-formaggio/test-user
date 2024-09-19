import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink>
        </li>
        <li>
          <NavLink to="/welcome" className={({ isActive }) => (isActive ? 'active' : '')}>Welcome</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;