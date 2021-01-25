import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    length: 0,
    word: undefined,
  };

  inputWordHandler = (event) => {
    const word = event.target.value;
    const length = word.length;
    this.setState({
      length,
      word,
    });
  };

  render() {
    let characters = null;

    return (
      <div className='App'>
        <input
          type='text'
          name=''
          id=''
          onChange={(event) => this.inputWordHandler(event)}
        />
        <p className='App-intro'>
          The word is {this.state.length} letters long!
        </p>
        <ValidationComponent length={this.state.length} />
      </div>
    );
  }
}

export default App;
