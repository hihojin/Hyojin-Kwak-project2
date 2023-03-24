import React from 'react';
import { Link } from 'react-router-dom';
import DifficultyList from './DifficultyList';

export default function Home() {
  return (
    <>
      <div className="title">Wordle</div>
      <div className="container">
        <div className="rule">
          <Link to="/game-rule" className='fontStyle'>Game Rule</Link>
        </div>
        <DifficultyList />
      </div>
    </>
  );
}
