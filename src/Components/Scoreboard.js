import React, { useState } from 'react';

function Scoreboard({ score, highScore }) {
  return (
    <div className="header">
      <div>
        <h1>Cavs Memory Game</h1>
        <h4>Don't select a Cav more than once!</h4>
      </div>
      <div>
        <h2>Score:{score}</h2>
        <h2>High Score:{highScore}</h2>
      </div>
    </div>
  );
}

export default Scoreboard;
