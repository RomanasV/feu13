// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:

// 1. Padaugina skaičių iš 2.
function task1(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    console.log(i * 2)
  }
}

// task1(10, 50, 5)

// 2. Padaugina skaičių iš 5.
function task2() {
  for (let i = 1; i <= 100; i++) {
    console.log(i * 5)
  }
}

// task2()

// 3. Prideda prie skaičiaus 5.
function task3() {
  for (let i = 1; i <= 100; i++) {
    console.log(i + 5)
  }
}

// task3()

// 4. Atima iš skaičiaus 2.
function task4() {
  for (let i = 1; i <= 100; i++) {
    console.log(i - 2)
  }
}

// task4()

// 5. Pakelia skaičių kvadratu.
function task5() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i)
    // console.log(i**2)
    console.log(Math.pow(i, 2))
  }
}

// task5()

// 6. Pakelia skaičių kūbu.
function task6() {
  for (let i = 1; i <= 100; i++) {
    console.log(Math.pow(i, 3))
  }
}

// task6()

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

function task21() {
  for (let i = 100; i > 0; i--) {
    let answer = i * 2
    let output = `${i} * 2 = ${answer}`
    console.log(output)
  }
}

// task21()

function task22() {
  for (let i = 100; i > 0; i--) {
    let answer = i * 5
    let output = `${i} * 5 = ${answer}`
    console.log(output)
  }
}

// task22()

function task23() {
  for (let i = 100; i > 0; i--) {
    let answer = i + 5
    let output = `${i} + 5 = ${answer}`
    console.log(output)
  }
}

// task23()

function task24() {
  for (let i = 100; i > 0; i--) {
    let answer = i - 2
    let output = `${i} - 2 = ${answer}`
    console.log(output)
  }
}

// task24()

function task25() {
  for (let i = 100; i > 0; i--) {
    // console.log(i * i)
    // console.log(i**2)
    // console.log(Math.pow(i, 2))

    let answer = Math.pow(i, 2)
    let output = `${i} ** 2 = ${answer}`
    console.log(output)
  }
}

// task25()


// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus veiks ciklas.
// 9.3. Nusakytų kas kelinto ciklo metu turi išvesti atsakymą į konsolę.

// function task26(start, end, nth) {
//   for (let i = start; i >= end; i--) {
//     if (i % nth === 0) {
//       let answer = Math.pow(i, 3)
//       let output = `${i} ** 3 = ${answer}`
//       console.log(output)
//     }
//   }
// }

function task26(start, end, nth) {
  for (let i = start; i >= end; i = i - nth) {
    let answer = Math.pow(i, 3)
    let output = `${i} ** 3 = ${answer}`
    console.log(output)
  }
}

// task26(100, 1, 10)

// let num = 5
// console.log(num)

// console.log(num + 1)

// console.log(num)

// num = num + 1
// console.log(num)

// num = num + 10
// console.log(num)

// num += 1
// console.log(num)

// num += 10
// console.log(num)

// num++
// console.log(num)


function fizzBuzz() {
  for (let i = 1; i <= 110; i++) {

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log('FizzBuzzBiff')
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log('FizzBiff')
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log('BuzzBiff')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 7 === 0) {
      console.log('Biff')
    } else {
      console.log(i)
    }

  }
}

// fizzBuzz()


function fizzBuzz2() {
  for (let i = 1; i <= 110; i++) {
    let output = ''

    if (i % 3 === 0) {
      output += 'Fizz'
    }

    if (i % 5 === 0) {
      output += 'Buzz'
    }

    if (i % 7 === 0) {
      output += 'Biff'
    }

    if (i % 9 === 0) {
      output += 'Fuzz'
    }

    if (i % 11 === 0) {
      output += 'Bizz'
    }

    if (!output) {
      output = i
    }

    console.log(output)
  }
}

fizzBuzz2()
