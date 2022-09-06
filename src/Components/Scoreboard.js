import React, { useState } from 'react';

function Scoreboard({ score, highScore }) {
  return (
    <>
      <h1>Score:{score}</h1>
      <h1>High Score:{highScore}</h1>
    </>
  );
}

export default Scoreboard;
