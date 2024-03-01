// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('- ' + (10 + 10) * 2 + ' cm.')
// console.log('- ' + (10 + 25) * 2 + ' cm.')
// console.log('- ' + (10 + 30) * 2 + ' cm.')
// console.log('- ' + (10 + 35) * 2 + ' cm.')
// console.log('- ' + (10 + 40) * 2 + ' cm.')
// console.log('- ' + (10 + 45) * 2 + ' cm.')
// console.log('- ' + (10 + 50) * 2 + ' cm.')
// console.log('- ' + (10 + 55) * 2 + ' cm.')
// console.log('- ' + (10 + 60) * 2 + ' cm.')
// console.log('- ' + (10 + 120) * 2 + ' cm.')

// DRY - Don't Repeat Yourself

// FUNKCIJOS

// Funkcijos sukūrimas:
// 1. Iniciavimo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos parametrams
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
  return 'Hello'
}

// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai ()

console.log(hello())
document.querySelector('h1').textContent = hello()
let helloText = hello() + '!'
console.log(helloText)


// function helloWithName(firstName, secondName) {
//   let output = ''

//   if (firstName && secondName) {
//     output = `Hello, ${firstName} ${secondName}!`
//   } else if (firstName) {
//     output = `Hello, ${firstName}!`
//   } else {
//     output = `Hello!`
//   }

//   console.log(output)
// }

// function helloWithName(firstName, secondName) {
//   let output = ''

//   if (firstName && secondName) {
//     output = `Hello, ${firstName} ${secondName}!`
//   } else if (firstName) {
//     output = `Hello, ${firstName}!`
//   } else {
//     output = `Hello!`
//   }

//   return output
// }

function helloWithName(firstName, secondName) {
  if (firstName && secondName) {
    return `Hello, ${firstName} ${secondName}!`
  }
  
  if (firstName) {
    return `Hello, ${firstName}!`
  }
    
  return `Hello!`
}

console.log(helloWithName('John', 'Doe'))
console.log(helloWithName('Peter'))
console.log(helloWithName())

// function getPerimeter(length, width) {
//   if (length > 0 && width > 0) { 
//     let perimeter = (length + width) * 2
//     let output = 'Perimetras: ' + perimeter + ' cm.'
//     return output
//   } else {
//     return 'Ilgis ir plotis privalo bŪti teigiami skaičiai.'
//   }
// }

function getPerimeter(length, width) {
  if (length > 0 && width > 0) { 
    let perimeter = (length + width) * 2
    let output = 'Perimetras: ' + perimeter + ' cm.'
    return output
  }

  return 'Ilgis ir plotis privalo bŪti teigiami skaičiai.'
}

console.log(getPerimeter(10, 10))
console.log(getPerimeter(10, 20))
console.log(getPerimeter(10, 25))
console.log(getPerimeter())
console.log(getPerimeter(15))
console.log(getPerimeter(333, -5))


let num3 = 100
console.log(num3)

let num = 5
console.log(num)

function func(globalNum) {
  console.log(num3)

  let num = 10
  console.log(num)

  let num1 = 20
  console.log(num1)

  console.log(globalNum)

  if (true) {
    console.log(num3)

    let num = 30
    console.log(num)
    console.log(num1)

    let num2 = 50
    console.log(num2)
  }

}

func(num)