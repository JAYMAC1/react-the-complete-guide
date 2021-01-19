// Primitive - makes copy of variable

const number = 10
const newNumber = number

console.log(newNumber)

// Reference - pointer to info held in memory (Objects & Arrays)
const person = {
  name: 'James',
}

const secondPerson = {
  ...person, // Makes a copy of person object. The below reassignment won't affect
}

person.name = 'Millie'

console.log(secondPerson)

// Array functions

const numbers = [1, 2, 3]
const doubleNumArray = numbers.map((num) => num * 2)
console.log(numbers)
console.log(doubleNumArray)
