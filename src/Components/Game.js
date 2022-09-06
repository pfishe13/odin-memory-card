import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
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
      console.log('Adding', clicked);
      addToClickedArray(clicked);
      setScore(score + 1);
    } else {
      if (score > highScore) {
        setHighScore(score);
        setScore(0);
      }
    }
  }

  function addToClickedArray(name) {
    setClickedArray((arr) => [...arr, name]);
  }

  function checkMatch(name) {
    const indexFound = clickedArray.find((item) => item === name);
    console.log('Index found', indexFound);
    if (indexFound === undefined) return false;
    return true;
  }

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <CardContainer score={score} cardClicked={cardClicked} />
    </>
  );
}

export default Game;
