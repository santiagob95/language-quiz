import React from 'react';

// TODO: play next game? reveal answer
const Output = (props) => {
  let output;
  if (props.gameState === 'play') {
    output = <div className="output">Topic: A character from the "Game of Thrones" series</div>;
  } else if (props.gameState === 'win' || props.gameState === 'lose') {
    output = (
      <div className="output">
        <button onClick={props.nextGame}>Play Again</button>
      </div>
    );
  }
  return output;
};

export default Output;
