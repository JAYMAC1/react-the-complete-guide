// Spread Operator

const numbers = [1, 2, 3, 4]

// ...numbers spreads out the numbers array within the newNumbers Array
const newNumbers = [...numbers, 5, 6, 7, 8]
console.log(newNumbers)

const person = {
  name: 'James',
}

// ...person spreads out the person object properties within the newPerson object
const newPerson = {
  ...person,
  age: 48,
}

console.log(person)
console.log(newPerson)

// Rest operator

const filter = (...args) => {
  return args.filter((args) => args === 3)
}

console.log(filter(1, 2, 3, 4))
