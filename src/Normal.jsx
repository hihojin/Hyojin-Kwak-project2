import './Board.css';
import Tile from './Tile';

import React, { useContext, useEffect, useState } from 'react';
import { gameContext } from './GameContext';

export default function Normal() {
  const gameStateObject = useContext(gameContext);
  // to use the global variables
  const setBoard = gameStateObject.setNormalBoard;
  const row = gameStateObject.attempt;
  const col = gameStateObject.column;
  const setRow = gameStateObject.setAttempt;
  const setCol = gameStateObject.setColumn;
  const prompt = gameStateObject.message;
  const setPrompt = gameStateObject.setMessage;
  const board = gameStateObject.normalBoard;
  const deductAttempt = gameStateObject.totalRow;
  const setDeductAttempt = gameStateObject.setTotalRow;
  const isGameOver = gameStateObject.gameOver;
  const setIsGameOver = gameStateObject.setGameOver;
  const target = gameStateObject.correctWord;
  const checkDuplicate = gameStateObject.checkDuplicate;
  const setDup = gameStateObject.setDup;
  const setCorrectWord = gameStateObject.setCorrectWord;
  const chosenWord = gameStateObject.chosenWord;
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
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ]);
    setDeductAttempt(board.length);
    setPrompt(board.length + ' attempts left');
    setIsGameOver(false);
    setDup([]);
    setAllFilled(false);
    setCorrectWord(chosenWord);
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
      if (row > 5 || isGameOver) {
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
      if (row > 5 || isGameOver) {
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
        setDeductAttempt((deductAttempt) => deductAttempt - 1);
        setPrompt(`${deductAttempt - 1} attempts left`);
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
        setPrompt(`${deductAttempt - 1} attempts left`);
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
          <Tile row={0} col={0} board={board} dup={checkDuplicate} filled={allFilled} />
          <Tile row={0} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={0} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={0} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={0} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={0} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <Tile row={1} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={1} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={1} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={1} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={1} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={1} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <Tile row={2} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={2} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={2} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={2} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={2} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={2} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <Tile row={3} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={3} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={3} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={3} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={3} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={3} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <Tile row={4} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={4} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={4} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={4} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={4} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={4} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>

        <div className="normalBoardContainer">
          <Tile row={5} col={0} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={5} col={1} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={5} col={2} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={5} col={3} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={5} col={4} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
          <Tile row={5} col={5} board={board} checkDuplicate={checkDuplicate} filled={allFilled}/>
        </div>
      </div>
    </>
  );
}
