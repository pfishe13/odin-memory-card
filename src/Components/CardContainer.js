import React, { useEffect, useState } from 'react';
import Card from './Card';

function CardContainer({ score, cardClicked }) {
  const [nameArray, setNameArray] = useState([
    'brandon-goodwin',
    'caris-levert',
    'cedi-osman',
    'darius-garland',
    'dean-wade',
    'dylan-windler',
    'evan-mobley',
    'isaac-okoro',
    'jarrett-allen',
    'kevin-love',
    'lamar-stevens',
    'rajon-rondo',
  ]);

  function shuffle(array) {
    let shuffled = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffled;
  }

  useEffect(() => {
    let newCards = [...nameArray];
    newCards = shuffle(newCards);
    setNameArray(newCards);
  }, [score]);

  return (
    <div className="cards-container">
      {nameArray.map((name, index) => {
        return <Card name={name} key={index} cardClicked={cardClicked} />;
      })}
    </div>
  );
}

export default CardContainer;
