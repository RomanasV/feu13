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

// let password = '                       #fsdsdfsdfsdfsdf        '.trimStart().trimEnd()

let originalPassword = '                       #fsdsd        '
let password = originalPassword.trim()
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

// AMŽIUS
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

// let age = prompt('Enter your age')
let age = '15'

if (isNaN(age)) {
  console.log('Amžius privalo būti skaičius.')
} else if (age < 0) {
  console.log('Nurodytas amžius yra per mažas. Jis privalo būti 0 arba daugiau.')
} else if (age < 6) {
  console.log('Į mokyklą neina')
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
  console.log('Pradinė')
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
  console.log('Pagrindinė')
} else if (age < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
  console.log('Gimnazija')
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age < 120) {
  console.log('Mokyklą baigė')
} else {
  console.log('Nurodytas amžius yra per mažas. Jis negali būti didesnis už 120.')
}

// GALVOSŪKIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

let correctAnswer11 = 1 
let correctAnswer12 = 1

let playerAnswer11 = 1
let playerAnswer12 = 0

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer11 === playerAnswer11) {
  console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else if (correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

let correctAnswer21 = 1 
let correctAnswer22 = 1

let playerAnswer21 = 577
let playerAnswer22 = 1

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer21 === playerAnswer21) {
  console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else if (correctAnswer22 === playerAnswer22) {
  console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}




















let isLoggedIn = true
let userName = 'John'
let time = 20
let isBirthday = true