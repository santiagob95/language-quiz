import React from 'react';
import _ from 'lodash';
import './base.css'

/**
 * Answer to the secret word/phrase. Word. https://goo.gl/3IHMc9
 */
const Answer = ((props) => {
  // using index for the key is not recommended...but we don't shuffle them around so should be ok
  const word = props.answer.split('')
    .map((letter, i) => {
      const nonAlphabet = (new RegExp(/[^a-zA-Z]/).test(letter));
      const letterIsRevealed = _.includes(props.revealed, letter.toLowerCase());
      
      if (nonAlphabet || letterIsRevealed) {
        return <div className="answer-char" key={i}>{letter}</div>;
      }
      return <div className="answer-char" key={i}>_</div>;
    });

  return (
    <div className="answer">
      {word}
    </div>
  );
});



export default Answer;
