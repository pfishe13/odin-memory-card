import React, { useState } from 'react';

function Card({ name, cardClicked }) {
  return (
    <div className="card" onClick={cardClicked}>
      <img id={name} alt="" src={'/images/' + name + '.png'}></img>
      <span></span>
    </div>
  );
}

export default Card;
