import React from 'react';
import _ from 'lodash';
import Answer from './Answer';
import Hangman from './Hangman';
import Letters from './Letters';
import Output from './Output';
// import { restaurants } from './answerList';
import got from './pais';

/**
 * The app container, lord of all components. Probably the one with the state.
 */
class Container extends React.Component {
  constructor() {
    super();
    const answers = _.shuffle(got);
    const answer = answers.pop();
    // console.log(answer);
    this.state = {
      answers,
      answer,
      revealed: [],
      incorrectCount: 0,
      gameState: 'play', //TODO: throw in constant file
    };
    this.revealLetter = this.revealLetter.bind(this);
    this.nextGame = this.nextGame.bind(this);
  }

  nextGame() {
    const answers = _.clone(this.state.answers);
    const answer = answers.pop();
    this.setState({
      answers,
      answer,
      revealed: [],
      incorrectCount: 0,
      gameState: 'play',
    });
  }

  /**
   * Reveal a letter in the answer and update gameState
   */
  revealLetter(letter) {
    // is this too much logic for a component?
    let { revealed, gameState, incorrectCount } = this.state;
    const answerArray = this.toAlphanumericArray(this.state.answer.toLowerCase());

    if (this.state.gameState === 'play') {
      revealed = revealed.concat(letter);
      incorrectCount = _.difference(revealed, answerArray).length;

      if (_.difference(answerArray, revealed).length === 0) {
        gameState = 'win';
      } else if (incorrectCount === 5) {
        gameState = 'lose';
      }

      this.setState({
        revealed,
        gameState,
        incorrectCount,
      });
    }
  }

  toAlphanumericArray(str) {
    return str.replace(/\W/g, '').split('');
  }

  render() {
    return (
      <div className="container">
        <Hangman
          incorrectCount={this.state.incorrectCount}
          gameState={this.state.gameState}
        /> 
        <Output
          gameState={this.state.gameState}
          nextGame={this.nextGame}
        />
        <Answer
          answer={this.state.answer}
          revealed={this.state.revealed}
        /> 
        <Letters
          revealLetter={this.revealLetter}
          revealed={this.state.revealed}
        /> 
      </div>
    );
  }
}

export default Container;
