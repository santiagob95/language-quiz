import React from 'react';
import './base.css'
import Button from '../components/Button'
// TODO: play next game? reveal answer
const Output = (props) => {
  let output;
  if (props.gameState === 'play') {
    output = <div className="outputahorcado">Adivina el pais!</div>;
  } else if (props.gameState === 'win' || props.gameState === 'lose') {
    output = (
      <div className="output">
        <Button onClick={props.nextGame}>Play Again</Button>
      </div>
    );
  }
  return output;
};

export default Output;
