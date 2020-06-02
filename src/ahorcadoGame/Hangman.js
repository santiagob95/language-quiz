import React from 'react';

/**
 * Display Hangman.
 */
const Hangman = (props) => {
  let ouch = ' ';

  if (props.gameState === 'lose') {
    return (
      <div className="hangman">
        OMG!! I said OUCH, you killed me!!
      </div>
    );
  }

  for (let i = 0; i < props.incorrectCount; i++) {
    ouch += 'Ouch!  ';
  }

  return (
    <div className="hangman">
      <span>{ouch}</span>
    </div>
  );
};


export default Hangman;
