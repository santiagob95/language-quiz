import React from 'react';
import Letter from './Letter';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/**
 * Contains clickable letters used for guessing the answer.
 */
const Letters = ((props) => {
  const letters = alphabet.map((letter, index) =>
    <Letter
      revealed={props.revealed}
      letter={letter}
      revealLetter={props.revealLetter}
      key={index}
    />
  , this);

  return (
    <div className="letters-area">
      {letters}
    </div>
  );
});



export default Letters;
