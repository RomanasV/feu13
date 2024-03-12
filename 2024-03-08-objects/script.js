console.groupCollapsed('Masyvai')

// Masyvo sukūrimas
let students = ['John', 'Steve', 'Peter']

// Masyvo narių pasiekimas
console.log(students[0])
console.log(students[1])
console.log(students[2])

console.log('for ciklas:')
for (let i = 0; i < students.length; i++) {
  console.log(students[i])
}

console.log('map ciklas:')
students.map(student => {
  console.log(student)
})

console.log('forEach ciklas:')
students.forEach(student => {
  console.log(student)
})

console.log('while ciklas:')
let n = 0
while (n < students.length) {
  console.log(students[n])
  n++
}

console.log('do... while ciklas:')
let m = 0
do {
  console.log(students[m])
  m++
} while (m < students.length)

console.log('for ...of ciklas:')
for (let student of students) {
  console.log(student)
}

//               Vardas  Pav.  Amz.   Miest.  
let student1 = ['John', 'Doe', 28, 'Vilnius', 13, 'Kaunas', 'Joe']

console.log(student1)
console.log(student1[0])
console.log(student1[1])
console.log(student1[2])
console.log(student1[3])
console.log(student1[4])

console.groupEnd()

/* 

Studentas 1:
  - Vardas: John,
  - Pavarde: Doe,
  - Amzius: 28,
  - Miestas: Vilnius,
  - Grupe: 13,
  - Gimtasis miestas: Kaunas.  

*/

/*

Objekto sintaksė:

let obj = {
  key: value,
}

*/

let studentObj = {
  name: 'John', // Property (key: value)
  surname: 'Doe',
  age: 28,
  city: 'Vilnius',
  group: 13,
  'birth city': 'Kaunas',
  grades: [8, 7, 10, 10],
  address: {
    city: 'Vilnius',
    street: 'Vilniaus st.',
  },
  getFullName: function() {
    return `${this.name} ${this.surname}, ${this.city}.`
  },
  setStudentInactive: function() {
    this.isActive = false
    return this.isActive
  },
  setStudentActive() {
    this.isActive = true
    // return this.isActive
    return true
  },
  getHobbies: function() {
    let output = `Hobbies are: ${this.hobbies.join(', ')}.`
    return output
  },
  removeHobby: function(hobbyToRemove) {
    // let updatedHobbies = this.hobbies.filter(hobby => {
    //   return hobby !== hobbyToRemove
    // })

    // this.hobbies = updatedHobbies

    this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove)

    return this.hobbies
  },
}

console.log(studentObj.getFullName())

console.log(studentObj)

// Objekto properties pasiekimas
console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.age)
console.log(studentObj.city)
console.log(studentObj.group)

console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])
console.log(studentObj['birth city'])

let propertyName = 'age'
console.log(studentObj[propertyName])

// Objekto properties pakeitimas
console.log(studentObj.age)
// studentObj.age = 29
studentObj.age = studentObj.age + 1
console.log(studentObj.age)

console.log(studentObj['city'])
studentObj['city'] = 'Klaipėda'
console.log(studentObj['city'])

console.log(studentObj['birth city'])
studentObj['birth city'] = 'Šiauliai'
console.log(studentObj['birth city'])

// Objekto properties sukūrimas
console.log(studentObj.isActive)
// studentObj['isActive'] = true
studentObj.isActive = true
console.log(studentObj.isActive)

// Objekto properties ištrynimas
console.log(studentObj['birth city'])
delete studentObj['birth city']
console.log(studentObj['birth city'])

console.log(studentObj.grades)
console.log(studentObj.grades[0])
console.log(studentObj.grades[1])
console.log(studentObj.grades[2])
console.log(studentObj.grades[3])

studentObj.grades.forEach(grade => console.log(grade))
const goodGrades = studentObj.grades.filter(grade => grade > 7)
console.log(goodGrades)

studentObj.hobbies = ['sports', 'reading']

console.log(studentObj.hobbies)

studentObj.hobbies.map(hobby => console.log(hobby))

studentObj.hobbies.push('traveling')
console.log(studentObj.hobbies)

console.log(studentObj.address)
console.log(studentObj.address.city)
console.log(studentObj.address['city'])
console.log(studentObj.address.street)
console.log(studentObj.address['street'])

// studentObj.contacts = {
//   phone: '06453435487',
//   email: 'vardas@pavarde.lt'
// }

// studentObj.contacts = {}
studentObj.contacts = new Object()
studentObj.contacts.phone = '06453435487',
studentObj.contacts.email = 'vardas@pavarde.lt'

console.log(studentObj.contacts)
console.log(studentObj.contacts.phone)
console.log(studentObj.contacts.email)

// Ternery operators (ne į temą)
let time = 15
let output

if (time > 15) {
  output = 'Antra dienos puse'
} else {
  output = 'Pirma dienos puse'
}

let output2 = time > 15 ? 'Antra dienos puse' : 'Pirma dienos puse'


// Objektai masyvuose

let studentsList = [
  {
    name: 'John',
    age: 25,
  },
  {
    name: 'Steve',
    age: 32,
  },
  {
    name: 'Peter',
    age: 20,
  },
]

console.log(studentsList)

console.log(studentsList[0])
console.log(studentsList[0].name)
console.log(studentsList[0].age)

console.log(studentsList[1])
console.log(studentsList[1].name)
console.log(studentsList[1].age)

console.log(studentsList[2])
console.log(studentsList[2].name)
console.log(studentsList[2].age)

for (let i = 0; i < studentsList.length; i++) {
  console.log(studentsList[i])
  console.log(studentsList[i].name)
  console.log(studentsList[i].age)

  console.log(`${studentsList[i].name} is ${studentsList[i].age} years old.`)
}

studentsList.forEach((student) => {
  console.log(student)
  console.log(student.name)
  console.log(student.age)

  console.log(`${student.name} is ${student.age} years old.`)
})

// let studentDescriptions = studentsList.map(student => {
//   return `${student.name} is ${student.age} years old.`
// })

let studentDescriptions = studentsList.map(student => `${student.name} is ${student.age} years old.`)

console.log(studentDescriptions)

studentDescriptions.forEach(text => console.log(text))

let filteredStudents = studentsList.filter(student => student.age > 20)
console.log(filteredStudents)

// Funkcijos objektuose (methods)
console.log(studentObj)
console.log(studentObj.getFullName())

console.log(studentObj.isActive)
console.log(studentObj.setStudentInactive())
console.log(studentObj.isActive)

console.log(studentObj.setStudentActive())
console.log(studentObj.isActive)

studentObj.switchStudentActivity = function() {
  // if (this.isActive) {
  //   this.isActive = false
  // } else {
  //   this.isActive = true
  // }

  this.isActive = !this.isActive

  return this.isActive
}

console.log(studentObj.switchStudentActivity())
console.log(studentObj.switchStudentActivity())
console.log(studentObj.switchStudentActivity())

console.log(studentObj.getHobbies())

studentObj.addNewHobby = function(newHobby) {
  this.hobbies.push(newHobby)
  return this.hobbies
}

console.log(studentObj.addNewHobby('writing'))
console.log(studentObj.hobbies)

console.log(studentObj.removeHobby('reading'))


// let company1 = new Object()
let company1 = {}
company1.ceo = 'John Doe'


let company2 = {
  ceo: 'John Doe',
}