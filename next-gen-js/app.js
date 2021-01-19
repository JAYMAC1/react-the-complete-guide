// Primitive - makes copy of variable

const number = 10
const newNumber = number

console.log(newNumber)

// Reference - pointer to info held in memory
const person = {
  name: 'James',
}

const secondPerson = {
  ...person, // Makes a copy of person object. The below reassignment won't affect
}

person.name = 'Millie'

console.log(secondPerson)
