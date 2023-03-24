import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <nav className="navigation">
      <h1 className={clicked ? 'hideTitle': 'navTitle'}>Wordle</h1>
      <ul className={clicked ? 'activeTable' : 'nonActiveTable'}>
        <li className='activeFontStyle'>
          <Link to="/">Home</Link>
        </li>
        <li className='activeFontStyle'>
          <Link to="/game-rule">Rule</Link>
        </li>
        <li className='activeFontStyle'>
          <Link to="/game/normal">Normal</Link>
        </li>
        <li className='activeFontStyle'>
          <Link to="/game/hard">Hard</Link>
        </li>
      </ul>
      {/* mobile menu bar when screen size goes below 500 width */}
      {clicked ? (<FontAwesomeIcon icon={faX} className='burgerMenu' onClick={handleClick}></FontAwesomeIcon>)
      : (<FontAwesomeIcon icon={faBars} className='burgerMenu' onClick={handleClick}></FontAwesomeIcon>)}
    </nav>
  );
}
