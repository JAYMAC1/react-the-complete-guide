import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    length: 0,
    word: '',
  };

  inputWordHandler = (event) => {
    const word = event.target.value;
    const length = word.length;
    this.setState({
      length,
      word,
      wordArray: word.split(''),
    });
  };

  deleteCharHandler = (index) => {
    const wordArray = this.state.wordArray;
    wordArray.splice(index, 1);
    const word = wordArray.join('');

    this.setState({
      length: word.length,
      word: word,
      wordArray: wordArray,
    });
  };

  render() {
    let characters = null;

    if (this.state.word) {
      characters = (
        <div>
          {this.state.wordArray.map((letter, index) => {
            return (
              <CharComponent
                key={index}
                char={letter}
                delete={() => this.deleteCharHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <input
          type='text'
          onChange={(event) => this.inputWordHandler(event)}
          value={this.state.word}
        />
        <p className='App-intro'>
          The word is {this.state.length} letters long!
        </p>
        <ValidationComponent length={this.state.length} />
        {characters}
      </div>
    );
  }
}

export default App;
