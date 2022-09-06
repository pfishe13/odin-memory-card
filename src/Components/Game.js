import React, { useState } from 'react';
import CardContainer from './CardContainer';
import Scoreboard from './Scoreboard';

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);

  function cardClicked(e) {
    const clicked = e.target.id;
    const alreadyClicked = checkMatch(clicked);
    if (!alreadyClicked) {
      addToClickedArray(clicked);
      setScore(score + 1);
    } else {
      resetScore();
    }
  }

  function resetScore() {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setClickedArray([]);
  }

  function addToClickedArray(name) {
    setClickedArray((arr) => [...arr, name]);
  }

  function checkMatch(name) {
    const indexFound = clickedArray.find((item) => item === name);
    return indexFound === undefined ? false : true;
  }

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <CardContainer score={score} cardClicked={cardClicked} />
    </>
  );
}

export default Game;
