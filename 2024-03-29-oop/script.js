// Objekto kūrimo būdai

// 1
const obj = {
  name: 'John',
  age: 30,
}

console.log(obj)
console.log(obj.name)
console.log(obj.age)

// 2
// const obj2 = {}
const obj2 = new Object()
obj2.name = 'John'
obj2.age = 30

console.log(obj2)
console.log(obj2.name)
console.log(obj2.age)

// 3 - constructor function (prieš ES6 - EcmaScript 6)
function Person(name, age) {
  this.name = name
  this.age = age
}

const person1 = new Person('John', 25)
console.log(person1)
console.log(person1.name)
console.log(person1.age)

const person2 = new Person('Steve', 30)
console.log(person2)
console.log(person2.name)
console.log(person2.age)

// 4 - Class (po ES6)
class Person2 {
  constructor(personName, personAge) {
    this.name = personName
    this.age = personAge
  }

  getPersonInfo() {
    return `${this.name} is ${this.age} years old!`
  }

  sayHello() {
    return 'Hello, ' + this.name + '.'
  }
}

const person3 = new Person2('Peter', 32)
console.log(person3)
console.log(person3.getPersonInfo())
console.log(person3.sayHello())

const person4 = new Person2('Steve', 54)
console.log(person4)
console.log(person4.getPersonInfo())
console.log(person4.sayHello())

const person5 = new Person2('John', 44)
console.log(person5)
console.log(person5.getPersonInfo())
console.log(person5.sayHello())


class Company {
  constructor(name, opened, code, employees, ceo, nvo, workingLocations, activityAreas, contacts) {
    this['company name'] = name
    this.opened = opened
    this.companyCode = code
    this.employees = employees
    this.ceo = ceo
    this.nvo = nvo
    this.workingLocations = workingLocations
    this.activityAreas = activityAreas
    this.contacts = contacts
  }

  getAddress() {
    let { street, apartment, city, country } = this.contacts.address
  
    let output = `${street} ${apartment}, ${city}, ${country}.`
    return output
  }

  setNVO() {
    this.nvo = true
    return this.nvo
  }
  
  setNonNVO() {
    this.nvo = false
    return this.nvo
  }
  
  switchNVO() {
    this.nvo = !this.nvo
    return this.nvo
  }
  
  getWorkingLocations() {
    return this.workingLocations.join(', ')
  }
  
  getActivityAreas() {
    return this.activityAreas.join(', ')
  }
  
  setWorkingLocation(newLocation) {
    this.workingLocations.push(newLocation)
  
    return this.workingLocations
  }
  
  setActivityArea(newArea) {
    this.activityAreas.push(newArea)
  
    return this.activityAreas
  }
  
  removeWorkingLocation(locationToRemove) {
    let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove)
  
    this.workingLocations = updatedLocations
  
    return this.workingLocations
  }
  
  removeActivityArea(areaToRemove) {
    this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove)
  
    return this.activityAreas
  }
}

const company1 = new Company(
  'Company XYZ', 
  2010, 
  73132165876435,
  50,
  'Doe John',
  true,
  ['Latvia'],
  ['Tourism'],
  {
    phone: '+37043153773',
    email: 'info@companyxyz.lt',
    address: {
      country: 'Lithuania',
      city: 'Kaunas',
      street: 'Vilniaus st.',
      apartment: 20,
    }
  }
)

const company2 = new Company(
  'Company ABC', 
  2010, 
  73132165876435,
  50,
  'Doe John',
  true,
  ['Latvia'],
  ['Tourism'],
  {
    phone: '+37043153773',
    email: 'info@companyxyz.lt',
    address: {
      country: 'Lithuania',
      city: 'Kaunas',
      street: 'Vilniaus st.',
      apartment: 20,
    }
  }
)

console.log(company1)
console.log(company1.getActivityAreas())
console.log(company1.getAddress())
console.log(company2)
console.log(company2.getWorkingLocations())
console.log(company2.getAddress())
