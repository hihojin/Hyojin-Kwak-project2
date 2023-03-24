import React from "react";
import NavBar from "./NavBar";
import './Rule.css';

export default function GameRule() {

    return (
        <>
        <NavBar />
        <div className="containerRule">
            <div className="flexRuleBox ruleTitle">How To Play</div>
            <div className="flexRuleBox">Choose Difficulty of Game.</div>
            <ul>
                <li><div className="flexRuleBox">Normal</div></li>
                <li><div className="flexRuleBox">Hard</div></li>
            </ul>
            <div className="flexRuleBox ruleTitle">Normal</div>
            <ul>
                <li><div className="flexRuleBox">Each guess must be 6-letter word.</div></li>
                <li><div className="flexRuleBox">The color of the tiles will change to show
                 how close your guess was to the word.</div></li>
                 <li><div className="flexRuleBox">You will be given 6 opportunities to guess.</div></li>
            </ul>
            <div className="flexRuleBox ruleTitle">Hard</div>
            <ul>
                <li><div className="flexRuleBox">Each guess must be 7-letter word.</div></li>
                <li><div className="flexRuleBox">The color of the tiles will change to show
                 how close your guess was to the word.</div></li>
                 <li><div className="flexRuleBox">You will be given 5 opportunities to guess.</div></li>
            </ul>
            <div className="flexRuleBox ruleTitle">Examples</div>
            <div className="boxContainer">
                <div className="box">V</div>
                <div className="box">I</div>
                <div className="box">L</div>
                <div className="box">L</div>
                <div className="box">A</div>
                <div className="box">I</div>
                <div className="box">N</div>
            </div>

            <div className="flexRuleBox">V is in the word and in the correct spot.</div>
            <div className="flexRuleBox">L is in the word but in the wrong spot.</div>
            <div className="flexRuleBox">A is not in the word in any spot.</div>
        </div>
        </>  
    );

}