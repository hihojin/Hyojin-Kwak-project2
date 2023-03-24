import './Board.css';

import React, { useContext, useEffect, useState } from 'react';
import { gameContext } from './GameContext';
import HardTile from './hardTile';

export default function Hard() {
  const gameStateObject = useContext(gameContext);
  // to use the global variables
  const setBoard = gameStateObject.setHardBoard;
  const row = gameStateObject.attempt;
  const col = gameStateObject.column;
  const setRow = gameStateObject.setAttempt;
  const setCol = gameStateObject.setColumn;
  const prompt = gameStateObject.messageHard;
  const setPrompt = gameStateObject.setMessageHard;
  const board = gameStateObject.hardBoard;
  const hardRows = gameStateObject.hardRow;
  const setHardRows = gameStateObject.setHardRows;
  const isGameOver = gameStateObject.gameOver;
  const setIsGameOver = gameStateObject.setGameOver;
  const target = gameStateObject.hardCorrect;
  const checkDuplicate = gameStateObject.checkDuplicate;
  const setDup = gameStateObject.setDup;
  const setHardCorrect = gameStateObject.setHardCorrect;
  const hardWord = gameStateObject.hardWord;
  let word = '';
  const [allFilled, setAllFilled] = useState(false); // ask if a row is fullly filled
  
  function checkGameOver(word) {
    // user guessed a correct word
    if (word.toLowerCase() === target.toLowerCase()) {
      setIsGameOver(true);
      setPrompt('Congratulations!');
    }
    //no correct word found and reached the last row
    else if (row === board.length - 1) {
      setIsGameOver(true);
      setPrompt('Correct word is ' + target);
    }
  }

  function toInnitialState() {
    setRow(0);
    setCol(0);
    setBoard([
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ]);
    
    setHardRows(board.length);
    setPrompt(board.length + ' attempts left');
    setIsGameOver(false);
    setDup([]);
    setAllFilled(false);
    setHardCorrect(hardWord);
  }

  function checkDuplicateing(letter) {
    // get the guess letters -- for counting purpose for duplicates
    checkDuplicate.push(letter);
    setDup([...checkDuplicate]);
  }
  // this is needed to handle keyboard input on screen without first clicking on body
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  function handleKeyDown(event) {
    let letter = event.key;
    const onlyLetter = /^[a-zA-Z]+$/; // regex only english letters
    if (
      onlyLetter.test(letter) &&
      letter.length == 1 &&
      col < board[0].length
    ) {
      if (row > 4 || isGameOver) {
        return;
      } else {
        // set board
        board[row][col] = letter;
        setTimeout(setBoard([...board]),5000);
        checkDuplicateing(letter);
        setCol(col + 1);
        setAllFilled(false);
      }
    } else if (letter == 'Enter') {
      if (row > 4 || isGameOver) {
        return;
      }
      if (col == board[0].length) {
        word = board[row].join('');
        //word = word.charAt(0).toUpperCase() + word.slice(1);
        // if (dict.includes(word)) { -->> this will be useful once dictionary has more words.
        // right now, dictionary has 50 words. so I decided to comment this out for now.
        
        setRow((row) => row + 1);
        setCol(0);
        setDup([]);
        setHardRows((hardRows) => hardRows - 1);
        setPrompt(`${hardRows - 1} attempts left`);
        setAllFilled(true);
        // else {
        //   setPrompt('not a valid word');
        // }
      } else {
        word = board[row].join('');
        setPrompt(`${word} is too short`);
        setAllFilled(false);
      }
      checkGameOver(word);
    } else if (letter == 'Backspace') {
      if (col <= 0) {
        return;
      } else {
        checkDuplicate.splice(checkDuplicate.indexOf(board[row][col-1]), 1);
        setDup([...checkDuplicate]);
        board[row][col - 1] = '';
        setBoard([...board]);
        setCol((col) => col - 1);
        setPrompt(`${hardRows - 1} attempts left`);
        setAllFilled(false);
      }
    }
    
  }

  return (
    <>
      {/* for the keyboard event to be triggered div needs to be focused as div is not
        focused unlike input does.
    */}
      <div className="entireGame" onKeyDown={handleKeyDown}>
        <div className="messagePrompt">{prompt}</div>
        <div className="buttonContainer">
          <button className="reset" onClick={toInnitialState}>
            Reset
          </button>
        </div>
        <div className="normalBoardContainer">
          <HardTile row={0} col={0} board={board} dup={checkDuplicate} filled={allFilled} />
          <HardTile row={0} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={0} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={0} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={0} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={0} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={0} col={6} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <HardTile row={1} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={1} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={1} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={1} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={1} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={1} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={1} col={6} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <HardTile row={2} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={2} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={2} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={2} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={2} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={2} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={2} col={6} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>

        </div>

        <div className="normalBoardContainer">
          <HardTile row={3} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={3} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={3} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={3} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={3} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={3} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={3} col={6} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <HardTile row={4} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={4} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={4} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={4} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={4} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={4} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <HardTile row={4} col={6} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>
      </div>
    </>
  );
}
