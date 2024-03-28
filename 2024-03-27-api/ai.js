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

async function init() {
  const resultParagraph = document.querySelector('#result')
  const name = 'John'

  const ageRes = await fetch('https://api.agify.io?name=' + name)
  const ageData = await ageRes.json()

  const countryRes = await fetch('https://api.nationalize.io/?name=' + name)
  const countryData = await countryRes.json()
  
  const genderRes = await fetch('https://api.genderize.io?name=' + name)
  const genderData = await genderRes.json()

  const age = ageData.age
  const country = countryData.country[0].country_id
  const gender = genderData.gender
  
  const result = `${name} is a ${gender}, ${age} years old from ${country}.`
  resultParagraph.textContent = result
}

init()