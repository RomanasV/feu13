// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:

// 1. Padaugina skaičių iš 2.
function task1() {
  for (let i = 1; i <= 100; i++) {
    console.log(i * 2)
  }
}

// task1()

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

function task26() {
  for (let i = 100; i > 0; i--) {
    // console.log(Math.pow(i, 3))

    let answer = Math.pow(i, 3)
    let output = `${i} ** 3 = ${answer}`
    console.log(output)
  }
}

task26(500, 450, 10)