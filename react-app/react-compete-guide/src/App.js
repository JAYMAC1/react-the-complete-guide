import React, { Component } from 'react'
import './App.css'
import './Person/Person.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 48 },
      { name: 'Manu', age: 47 },
      { name: 'Stephanie', age: 46 },
    ],
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 48 },
        { name: 'Manu', age: 47 },
        { name: 'Stephanie', age: 46 },
      ],
    })
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Max', age: 48 },
        { name: e.target.value, age: 47 },
        { name: 'Stephanie', age: 46 },
      ],
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!!!</p>
        <button
          className='button'
          onClick={(e) => this.switchNameHandler('Jess')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'James')}
          changed={this.nameChangedHandler}>
          My hobbyies: Makup, nails
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App
