import React, { useContext } from 'react';
import { gameContext } from './GameContext';

export default function Tile(props) {
  //hardmode, css coloring, deploy to render
  const gameStateObject = useContext(gameContext);
  const target = gameStateObject.correctWord;
  const board = props.board;
  const row = props.row;
  const col = props.col;
  const duplicates = props.checkDuplicate;
  const filled = props.filled;
  let letter = board[row][col]; // to show letter on screen
  let color = '';
  let copyTarget = [...target.toUpperCase()];
  letter = letter.toUpperCase();
  let cnt1 = 0;
  let cnt = 0;
  let cntVal = 0;
  //console.log(duplicates);
  if (duplicates) {
    cntVal = duplicates.filter(function sameLetter(l) {
    if (l == letter.toLowerCase()) {cnt ++;}
  })
  }

  const cntVal1 = copyTarget.filter(function sameLetter(l) {
    if (l == letter) {cnt1 ++;}
  })

  if (!(letter in copyTarget)) {color = 'gray'};

  if (letter == target[col].toUpperCase()) { 
    color = 'green';
  }

  else if (duplicates && copyTarget.includes(letter) && cntVal <= cntVal1) {
    color = 'yellow';
    console.log(cntVal);
    console.log(cntVal1);
  }
  else if (board[row][col] == '') {
    color = 'default';
  }

    return (
        <>
        <div className="cell" id={filled ? color : ''}>{letter}</div>
        </>
    );
}
