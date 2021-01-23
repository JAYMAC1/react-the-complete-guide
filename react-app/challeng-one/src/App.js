import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    name: 'Mr Nobody',
  }
  onNameChangeHandler = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput changed={this.onNameChangeHandler} name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput />
      </div>
    )
  }
}

export default App
