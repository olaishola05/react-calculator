/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calulator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <div className="nav">
      <h1>Math Magicians</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              exact="true"
              className="links"
              style={({ isActive }) => ({
                textDecoration: 'none',
                margin: '0 10px',
                borderBottom: isActive ? 'solid 5px #f5913e' : '',
                color: isActive ? '#f5913e' : 'black',
              })}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
