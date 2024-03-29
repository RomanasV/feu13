export default function nameOutput(name, gender, age, country) {
  const previousResultParagraph = document.querySelector('#result')
  
  let resultParagraph = previousResultParagraph

  if (!previousResultParagraph) {
    resultParagraph = document.createElement('p')
    resultParagraph.id = 'result'
  }

  const result = `${name} is a ${gender}, ${age} years old from ${country}.`
  resultParagraph.textContent = result

  return resultParagraph
}