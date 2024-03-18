const testForm = document.querySelector('#test-form')

testForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const form = event.target
  
  console.dir(form.elements)


  // const firstName = document.querySelector('#person-name').value
  // const firstName = testForm.querySelector('#person-name').value
  // const firstName = event.target.querySelector('#person-name').value
  // const firstName = form.querySelector('#person-name').value
  // const firstName = form.elements['first-name'].value
  const firstName = form['first-name'].value
  
  // const color = document.querySelector('#color').value
  // const color = document.getElementById('color').value
  // const color = form.elements.color.value
  // const colorValue = color.value
  const color = form.color.value

  const email = form.email.value

  console.log(firstName)
  console.log(color)
  console.log(email)
})