import React from 'react';
import { Link } from 'react-router-dom';

export default function DifficultyList() {
  return (
    <>
      <div className="rule">
        <Link to="/game/normal" className='fontStyle'>Normal</Link>
      </div>
      <div className="rule">
        <Link to="/game/hard" className='fontStyle'>Hard</Link>
      </div>
    </>
  );
}
