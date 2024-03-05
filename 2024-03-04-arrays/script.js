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