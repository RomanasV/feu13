import { BUTTON_TEXT, LABEL_NAME, getAgeByName, getCountryByName, getGenderByName } from './functions.js'
import nameOutput from './nameOutput.js'

// function init() {
//   const resultParagraph = document.querySelector('#result')
//   const name = 'John'
  
//   fetch('https://api.agify.io?name=' + name)
//     .then(res => res.json())
//     .then(data => {
//       const age = data.age

//       fetch('https://api.nationalize.io/?name=' + name)
//         .then(res => res.json())
//         .then(data => {
//           const country = data.country[0].country_id

//           fetch('https://api.genderize.io?name=' + name)
//             .then(res => res.json())
//             .then(data => {
//               const gender = data.gender

//               const result = `${name} is a ${gender}, from ${country}, ${age} age old.`

//               resultParagraph.textContent = result
//             })
//         })
//     })
// }

// function init() {
//   const resultParagraph = document.querySelector('#result')
//   const name = 'John'

//   const ageRes = fetch('https://api.agify.io?name=' + name).then(res => res.json())
//   const countryRes = fetch('https://api.nationalize.io/?name=' + name).then(res => res.json())
//   const genderRes = fetch('https://api.genderize.io?name=' + name).then(res => res.json())

//   Promise.all([ageRes, countryRes, genderRes]).then(data => {
//     const ageData = data[0]
//     const countryData = data[1]
//     const genderData = data[2]
    
//     const age = ageData.age
//     const country = countryData.country[0].country_id
//     const gender = genderData.gender
    
//     const result = `${name} is a ${gender}, ${age} years old from ${country}.`
//     resultParagraph.textContent = result
//   })
// }

function init() {
  const nameForm = document.querySelector('#name-form')
  const label = nameForm.querySelector('label')
  label.textContent = LABEL_NAME

  const submitButton = nameForm.querySelector('input[type="submit"]')
  submitButton.value = BUTTON_TEXT

  // nameForm.addEventListener('submit', async event => {
  //   event.preventDefault()

  //   const name = event.target.name.value
  
  //   const age = await getAgeByName(name)
  //   const country = await getCountryByName(name)
  //   const gender = await getGenderByName(name)
    
  //   const result = `${name} is a ${gender}, ${age} years old from ${country}.`
    
  //   const resultParagraph = document.querySelector('#result')
  //   resultParagraph.textContent = result
  // })

  nameForm.addEventListener('submit', nameFormSubmit)
}

init()

async function nameFormSubmit(event) {
  event.preventDefault()

  const name = event.target.name.value

  const age = await getAgeByName(name)
  const country = await getCountryByName(name)
  const gender = await getGenderByName(name)
  
  const resultParagraph = nameOutput(name, age, country, gender)

  event.target.after(resultParagraph)
}
