import React, { Component } from 'react'
import './App.css'
import './Person/Person.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 48 },
      { id: 2, name: 'Manu', age: 47 },
      { id: 3, name: 'Stephanie', age: 46 },
    ],
    showPersons: true,
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons (Bad practice DO NOT USE)
    // const persons = this.state.persons.splice() (Uising slicw with no args simpley makes a copy of an array)
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id
    })
    const person = {
      ...this.state.persons[personIndex],
    }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow,
    })
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={index}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!!!</p>
        <button className='button' onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App
