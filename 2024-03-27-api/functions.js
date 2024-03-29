export const LABEL_NAME = 'Name:'
export const BUTTON_TEXT = 'Search by name'

export async function getAgeByName(name) {
  const res = await fetch('https://api.agify.io?name=' + name)
  const data = await res.json()
  const age = data.age
  return age
}

export async function getCountryByName(name) {
  const res = await fetch('https://api.nationalize.io/?name=' + name)
  const data = await res.json()
  const country = data.country[0].country_id
  return country
}

export async function getGenderByName(name) {
  const res = await fetch('https://api.genderize.io?name=' + name)
  const data = await res.json()
  const gender = data.gender
  return gender
}
