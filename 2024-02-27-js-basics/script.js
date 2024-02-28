console.groupCollapsed('JS Basics')

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = 'John' // String (tekstas) duomenų tipas
let pavarde = "Doe" // String (tekstas) duomenų tipas
let miestas = `Vilnius` // String (tekstas) duomenų tipas
let amzius = 30 // Number (skaičius) duomenų tipas
let yraStudentas = false // Boolean (true/false) duomenų tipas
const asmensKodas = 378645312154 // Number (skaičius) duomenų tipas

console.log(vardas)
console.log(pavarde)
console.log(miestas)
console.log(amzius)
console.log(yraStudentas)

console.log(vardas, typeof vardas)
console.log(pavarde, typeof pavarde)
console.log(miestas, typeof miestas)
console.log(amzius, typeof amzius)
console.log(yraStudentas, typeof yraStudentas)
console.log(asmensKodas, typeof asmensKodas)

console.log(pavarde)
pavarde = 'Steve'
console.log(pavarde)

console.log(amzius)
amzius = 31
console.log(amzius)

console.log('Hello, ' + vardas + ' ' + pavarde + '.')
console.log("Hello, " + vardas + " " + pavarde + ".")
console.log(`Hello, ${vardas} ${pavarde}.`)


// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.
console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.')

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.')

console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".")

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`)

// John said: "Good morning".
console.log('John said: "Good morning".')
console.log(`John said: "Good morning".`)
// console.log("John said: "Good morning".")

// That's my car.
console.log("That's my car.")
console.log(`That's my car.`)
console.log('That\'s my car.')

// John said: "That's my car".
console.log(`John said: "That's my car".`)
console.log("John said: \"That's my car\".")
console.log('John said: "That\'s my car".')

// John `said`: "That's my car".
console.log('John `said`: "That\'s my car".')
console.log("John `said`: \"That's my car\".")
console.log(`John \`said\`: "That's my car".`)

// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".')
console.log("John \\`said\\`: \"That's my car\".")
console.log(`John \\\`said\\\`: "That's my car".`)

let sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam, repellendus neque.'

console.log(sentence)
console.log(sentence.length) // String simbolių skaičius
console.log(sentence[0])
console.log(sentence.charAt(0))
console.log(sentence.at(0))
console.log(sentence.toUpperCase())
console.log(sentence.toLowerCase())

console.groupEnd()

console.groupCollapsed('Math Operators')
// Matematiniai operatoriai
let num1 = 22
let num2 = 10
let num3 = '10'

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

console.log(num1 + num3)
console.log(22 + '10')
console.log('22' + '10')
console.log('2210')

console.log(num1 - num3)
console.log(num1 * num3)
console.log(num1 / num3)
console.log(num1 % num3)

console.log(num1 + num3 * num3)
console.log(22 + '10' * '10')
console.log(22 + 100)
console.log(122)

console.log((num1 + num3) * num3)
console.log((22 + '10') * '10')
console.log(('22' + '10') * '10')
console.log('2210' * '10')
console.log(22100)

console.groupEnd()

// SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10) // true
console.log('vienas' == 'vienas') // true
console.log('10' == '10') // true
console.log(10 == '10') // true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10) // true
console.log('vienas' === 'vienas') // true
console.log('10' === '10') // true
console.log(10 === '10') // false

console.log(10 > 10) // false
console.log(10 < 10) // false
console.log(10 >= 10) // true
console.log(10 <= 10) // true

console.log(10 == 10) // true
console.log(10 != 10) // false

console.log(10 === 10) // true
console.log(10 !== 10) // false

console.log(true) // true
console.log(!true) // false
console.log(false) // false
console.log(!false) // true
console.log(!!false) // false

// IF, ELSE IF, ELSE
let originalLight = 'Green'
let light = originalLight.toLowerCase()

console.log(light)

if (light === 'green') {
  console.log('Galima eiti')
} else if (light === 'yellow') {
  console.log('Pasiruošk')
} else if (light === 'red') {
  console.log('STOP')
} else {
  console.log('Sugedo :(')
}


let letter1 = 'a' 
let letter2 = 'b'

// AND operator - &&
if (letter1 === 'a' && letter2 === 'b') {
  console.log('Pirma raidė yra a ir antra raidė yra b')
} else {
  console.log('Pirma raidė nėra a arba antra raidė nėra b')
}

// OR operator - ||
if (letter1 === 'a' || letter2 === 'b') {
  console.log('Pirma raidė yra a arba antra raidė yra b')
} else {
  console.log('Pirma raidė nėra a ir antra raidė nėra b')
}

let personAge = 17

if (personAge >= 18) {
  console.log('Pirkti gali')
} else {
  console.log('Pirkti negali')
}

if (personAge < 18) {
  console.log('Pirkti negali')
} else {
  console.log('Pirkti gali')
}

if (personAge > 17) {
  console.log('Pirkti gali')
} else {
  console.log('Pirkti negali')
}

if (personAge <= 17) {
  console.log('Pirkti negali')
} else {
  console.log('Pirkti gali')
}


personAge = 15

// if (personAge < 16) {
//   console.log('Pirkti negali')
// } else if (personAge >= 16 && personAge < 18) {
//   console.log('Galima pirkti su tėvų sutikimu')
// } else {
//   console.log('Pirkti gali')
// }

if (personAge < 16) {
  console.log('Pirkti negali')
} else if (personAge < 18) {
  console.log('Galima pirkti su tėvų sutikimu')
} else {
  console.log('Pirkti gali')
}

if (personAge >= 18) {
  console.log('Pirkti gali')
} else if (personAge >= 16) {
  console.log('Galima pirkti su tėvų sutikimu')
} else {
  console.log('Pirkti negali')
}


// Nesting
if (personAge >= 18) {
  console.log('Pirkti gali')
} else {

  // if (personAge < 16) {
  //   console.log('Pirkti negali')
  // } else {
  //   console.log('Galima pirkti su tėvų sutikimu')
  // }

  if (personAge >= 16) {
    console.log('Galima pirkti su tėvų sutikimu')
  } else {
    console.log('Pirkti negali')
  }

}


if (personAge < 18) {
  // if (personAge < 16) {
  //   console.log('Pirkti negali')
  // } else {
  //   console.log('Galima pirkti su tėvų sutikimu')
  // }

  if (personAge >= 16) {
    console.log('Galima pirkti su tėvų sutikimu')
  } else {
    console.log('Pirkti negali')
  }
} else {
  console.log('Pirkti gali')
}


// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

let password = 'fsdfsdgflkjsakl'
let passLength = password.length
console.log(password)
console.log(!password.includes('#'))
console.log(passLength)

// if (passLength < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
// } else if (passLength > 15) {
//   if (passLength > 20) {
//     console.log('Slaptažodis tinkamas')
//   } else if (passLength <= 20) {
//     console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
//   }
// }

// 0. Jeigu nėra # - error
// 1. 0 - 15
// 2. 16 - 20
// 3. 21+

if (!password.includes('#')) {
  console.log('Slaptažodis privalo turėti grotažymes')
} else if (passLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if (passLength < 21) {
  console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
  console.log('Slaptažodis tinkamas')
}



















// let age = prompt('Enter your age')
// console.log(age)

// Kiek bus 123 + 456
let correctAnswer11 = 579 
let correctAnswer12 = 1

let playerAnswer11 = 577
let playerAnswer12 = 1


let correctAnswer21 = 1 
let correctAnswer22 = 1

let playerAnswer21 = 577
let playerAnswer22 = 1