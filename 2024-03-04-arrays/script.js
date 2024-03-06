// Masyvo sukūrimas
let numsArray = [5, 500, 16, 18.4, -60, -75.5, 0, 'du']
// Index         0   1    2    3     4    5    6   7

console.log(numsArray)
console.log(numsArray.length)

// Masyvo narių pasiekimas
// console.log(numsArray[0])
// console.log(numsArray[1])
// console.log(numsArray[2])
// console.log(numsArray[3])
// console.log(numsArray[4])
// console.log(numsArray[5])
// console.log(numsArray[6])
// console.log(numsArray[7])

// for (let i = 0; i < numsArray.length; i++) {
//   console.log(numsArray[i])
// }

let newArray = ['vienas', 'du', 'trys', 5, true, [1, 2, 5]]
// Index           0       1       2    3   4        5
//                                                0  1  2 

console.log(newArray)
console.log(newArray[0])
console.log(newArray[1])
console.log(newArray[2])
console.log(newArray[3])
console.log(newArray[4])

console.log(newArray[5])
console.log(newArray[5][0])
console.log(newArray[5][1])
console.log(newArray[5][2])

console.log(newArray)
newArray[0] = 1
console.log(newArray)

newArray[newArray.length] = 100
console.log(newArray)

let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities)

// pop, push, shift, unshift ir splice metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
let lastCity = cities.pop()
console.log(lastCity)

cities.pop()
console.log(cities)

// shift() metodas - pašalina pirmą masyvo narį.
let firstCity = cities.shift()
console.log(firstCity)

cities.shift()
console.log(cities)

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
let updatedCitiesLength = cities.push('Vilnius')
console.log(updatedCitiesLength)

cities.push('Šîauliai')
cities.push('Kaunas', 'Panevėžys')

console.log(cities)

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
let updatedCitiesLength2 = cities.unshift('Nida')
console.log(updatedCitiesLength2)

cities.unshift('Tauragė', 'Palanga')

console.log(cities)

// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [  1  ,   2  ,   3  ,   4  ,   5  ,   6  ,   7  ,   10  ];
// Index      0      1      2      3      4      5      6      7
//         0     1      2      3      4      5      6      7       8
//        -8    -7     -6     -5     -4     -3     -2     -1

console.log(nums)

// let splicedNums = nums.splice(2)
// let splicedNums = nums.splice(5)
// let splicedNums = nums.splice(0)
// let splicedNums = nums.splice(-2)
// let splicedNums = nums.splice(-5)
// let splicedNums = nums.splice(10)
// let splicedNums = nums.splice(-10)
// let splicedNums = nums.splice(0, 2)
// let splicedNums = nums.splice(2, 1)
// let splicedNums = nums.splice(2, 3)
// let splicedNums = nums.splice(-3, 2)
// let splicedNums = nums.splice(-3, 2, 2)
// let splicedNums = nums.splice(2, 1, 50)
// let splicedNums = nums.splice(0, 1, 30)
// let splicedNums = nums.splice(-1, 1, 100)
// let splicedNums = nums.splice(-3, 2, 40, 60)
// let splicedNums = nums.splice(0, 0, 0.5, 0.8)
let splicedNums = nums.splice(-1)

console.log(splicedNums)
console.log(nums)


let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy']
// Index              0          1         2          3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1        

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo

console.log('-----------SLICE-------------')
console.log(countries)


let slicedCountries1 = countries.slice()
console.log(slicedCountries1)

let slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)

let slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)

let slicedCountries4 = countries.slice(0, 2)
console.log(slicedCountries4)

let slicedCountries5 = countries.slice(2, 4)
console.log(slicedCountries5)

let slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)

let slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)

let slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)

let slicedCountries9 = countries.slice(-3, 2)
console.log(slicedCountries9)

let slicedCountries10 = countries.slice(-5, 2)
console.log(slicedCountries10)

let slicedCountries11 = countries.slice(2, -2)
console.log(slicedCountries11)

let slicedCountries12 = countries.slice(-2, -4)
console.log(slicedCountries12)

let slicedCountries13 = countries.slice(4, 2)
console.log(slicedCountries13)

// FILTER
let originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(originalNums);

let filteredArray1 = []

for (let i = 0; i < originalNums.length; i++) {
  if (originalNums[i] > 5) {
    filteredArray1.push(originalNums[i])
  }
}

console.log(filteredArray1)

// let filteredArray2 = originalNums.filter(function(num, index, originalArr) {
//   console.log(num, index, originalArr)
// })

let filteredArray2 = originalNums.filter(function(num) {
  // console.log(num)
  // console.log(num > 5)
  return num > 5
})

console.log(filteredArray2)

let filteredArray3 = originalNums.filter(function(num) {
  return num > 4 && num <= 8
})

console.log(filteredArray3)

let filteredArray4 = originalNums.filter(function(num) {
  return num > 4 && num <= 8 && num % 2 === 0
})

console.log(filteredArray4)

let filteredArray5 = originalNums.filter(function(num) {
  // return num > 4 && num <= 8 && num % 2 === 0

  if (num > 4 && num <= 8 && num % 2 === 0) {
    return true
  } else {
    return false
  }
})

console.log(filteredArray5)

let stringsArr = ['vienas', 'du', 'trys', 'keturi', 'vienuolika']

let filteredStrings = stringsArr.filter(function(str) {
  return str.length > 4 && str[0] === 'v'
})

console.log(filteredStrings)