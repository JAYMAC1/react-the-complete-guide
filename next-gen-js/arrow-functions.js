// Standard function
function printMyName(name) {
  console.log(name)
}
printMyName('James')

//  arrow function
const printMyNameArrow = (name) => {
  console.log(name)
}
printMyNameArrow('Millie')

const multply = (number) => number * 2
console.log(multply(10))

class Human {
  constructor(gender) {
    this.gender = gender
  }

  printGender() {
    console.log(`I am ${this.gender}`)
  }
}

class Person extends Human {
  constructor(name, age, gender) {
    super() // required keyword when extending from method
    this.name = name
    this.age = age
    this.gender = gender
  }
  printMyDetails() {
    console.log(
      `my name is ${this.name}. My age is ${this.age}. My gender is ${this.gender}`
    )
  }
}

const james = new Person('James', 48, 'male')

james.printMyDetails()
james.printGender('male')

// Modern Classes, Properties & Methods

class Giant {
  size = 'huge'

  printSize = () => {
    console.log(`Giants are huge ${this.size}`)
  }
}

class BigPerson extends Giant {
  name = 'Jess'
  size = 'medium'

  printMyName = () => {
    console.log(`My name is ${this.name}. My height is ${this.size}`)
  }
}

const Jess = new BigPerson()
Jess.printMyName()
