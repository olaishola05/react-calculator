import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={link.path} exact="true" className="links">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
