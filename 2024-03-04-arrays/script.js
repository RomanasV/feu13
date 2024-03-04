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

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
let lastCity = cities.pop()
console.log(lastCity)

cities.pop()
console.log(cities)