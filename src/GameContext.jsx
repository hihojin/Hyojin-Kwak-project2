import React, {createContext, useState} from 'react';

// global variable
export const gameContext = createContext();

export function GameProvider(props) {
    const [normalBoard, setNormalBoard] = useState([
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', '']
    ]);

    const [hardBoard, setHardBoard] = useState([
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
    ]);

    const [totalRow, setTotalRow] = useState(6);
    const [hardRow, setHardRows] = useState(5);
    // begins from board[0][0] and as we enter letter, column gets updated.
    // attempt gets updated when the last index is filled with letter and user hit enter
    const [attempt, setAttempt] = useState(0); // start row
    const [column, setColumn] = useState(0); // start cols
    const [message, setMessage] = useState(`${totalRow} attempts left`);
    const [messageHard, setMessageHard] = useState(`${hardRow} attempts left`);
    const [gameOver, setGameOver] = useState(false);

    const dictionary_6_letters = ['Office', 'Single', 'Groups', 'Method', 'French', 'Report', 'Future', 'Higher', 'Amount', 'Really', 'Indeed', 'Growth', 'Market', 'Energy', 'Living', 'Return', 'Toward', 'Strong', 'Rights', 'Letter', 'Looked', 'Seemed', 'Ground', 'Modern', 'Moment', 'Values', 'Turned', 'Across', 'Middle', 'Longer', 'Spirit', 'Simple', 'Series', 'Source', 'Months', 'Likely', 'Behind', 'Taking', 'Twenty', 'Income', 'Beyond', 'Design', 'Except', 'Latter', 'Points', 'Direct', 'Manner', 'Appear', 'German', 'Wordle'];
    const chosenWord = dictionary_6_letters[Math.floor(Math.random() * dictionary_6_letters.length)];
    const [correctWord, setCorrectWord] = useState(chosenWord);

    const dict_7_letters = ['Between', 'Without', 'General', 'Another', 'Against', 'Present', 'Example', 'Several', 'Chapter', 'Society', 'Nothing', 'Service', 'Further', 'English', 'Perhaps', 'Members', 'Support', 'Results', 'Usually', 'Special', 'Similar', 'Brought', 'British', 'Natural', 'Account', 'Changes', 'Studies', 'Greater', 'Foreign', 'England', 'Working', 'Surface'];
    const hardWord = dict_7_letters[Math.floor(Math.random() * dict_7_letters.length)];
    const [hardCorrect, setHardCorrect] =useState(hardWord);
    
  const [checkDuplicate, setDup] = useState([]);

    const stateObject = {
        normalBoard,
        setNormalBoard,
        hardBoard,
        setHardBoard,
        attempt,
        setAttempt,
        column,
        setColumn,
        correctWord,
        message,
        setMessage,
        gameOver,
        setGameOver,
        totalRow,
        setTotalRow,
        dictionary_6_letters,
        checkDuplicate,
        setDup,
        setCorrectWord,
        chosenWord,
        hardRow,
        setHardRows,
        messageHard,
        setMessageHard,
        hardCorrect,
        setHardCorrect,
        hardWord
    };

    return (
        <gameContext.Provider value={stateObject}>
            {props.children}
        </gameContext.Provider>
    );
}