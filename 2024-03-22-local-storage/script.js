console.log(localStorage)

// Sukurti localStorage
localStorage.setItem('test', 'hello')
localStorage.setItem('test2', 5)
localStorage.setItem('test3', false)
localStorage.setItem('test4', [1, 5, 6])
localStorage.setItem('test5', { test: 5 })

// Paimti localStorage reikšmę
console.log(localStorage.test)
console.log(localStorage.getItem('test'))

// Pašalinti localStorage reikšmę
localStorage.removeItem('test')
console.log(localStorage)

// Išvalyti visą localStorage
// localStorage.clear()
console.log(localStorage)


console.log(typeof localStorage.getItem('test2'))
console.log(localStorage.getItem('test3'))
console.log(typeof localStorage.getItem('test3'))
console.log(localStorage.getItem('test4'))
console.log(localStorage.getItem('test5'))

if (localStorage.getItem('test3')) {
  console.log('True')
} else {
  console.log('False')
}

// JSON
let obj = {
  name: 'John',
  age: 15,
}

let arr = [1, 5, 6, 7]

// OBJ/ARR to JSON obj/arr
let objJSON = JSON.stringify(obj)
let arrJSON = JSON.stringify(arr)

console.log(typeof objJSON, objJSON)
console.log(typeof arrJSON, arrJSON)

// JSON įdėjimas į localStorage
localStorage.setItem('obj', objJSON)
localStorage.setItem('arr', arrJSON)

console.log(localStorage)

// JSON išėmimas iš localStorage
let jsonObjLocal = localStorage.getItem('obj')
let jsonArrLocal = localStorage.getItem('arr')

// JSON obj/arr to OBJ/ARR
let objFromJson = JSON.parse(jsonObjLocal)
let arrFromJson = JSON.parse(jsonArrLocal)

console.log(objFromJson)
console.log(objFromJson.name)
console.log(objFromJson.age)

console.log(arrFromJson)
console.log(arrFromJson[0])
console.log(arrFromJson[1])




// Darbas su forma (localStorage)
function populateFormFromLocalStorage() {
  const form = document.querySelector('form')

  const nameInput = form.querySelector('#first-name')
  const localStorageName = localStorage.getItem('first-name')
  
  if (localStorageName) {
    nameInput.value = localStorageName
  }
  
  nameInput.addEventListener('input', (event) => {
    const currentValue = event.target.value
  
    localStorage.setItem('first-name', currentValue)
  })
  
  const ageInput = form.querySelector('#age')
  const localStorageAge = localStorage.getItem('age')
  
  if (localStorageAge) {
    ageInput.value = localStorageAge
  }
  
  ageInput.addEventListener('input', (event) => {
    localStorage.setItem('age', event.target.value)
  })
  
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
  
    localStorage.removeItem('age')
    localStorage.removeItem('first-name')
    form.reset()
  })
}

populateFormFromLocalStorage()
