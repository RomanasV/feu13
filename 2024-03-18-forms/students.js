const studentForm = document.querySelector('#student-form')
const studentsList = document.querySelector('#students-list')

const knowledgeInput = studentForm.querySelector('#it-knowledge')
const knowledgeOutput = studentForm.querySelector('#it-knowledge-output')

knowledgeOutput.textContent = knowledgeInput.value

knowledgeInput.addEventListener('input', (event) => {
  knowledgeOutput.textContent = event.target.value
})

studentForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const form = event.target

  const formIsValid = validateForm(form)

  if (!formIsValid) {
    alertMessage('Form is invalid', 'alert-danger')

    return
  }

  const name = form.name.value
  const surname = form.surname.value
  const age = form.age.value
  const phone = form.phone.value
  const email = form.email.value
  const itKnowledge = form['it-knowledge'].value
  const group = form.group.value
  const interests = form.querySelectorAll('input[name="interests"]:checked')

  const studentItem = document.createElement('div')
  studentItem.classList.add('student-item')

  const nameElement = document.createElement('h2')
  nameElement.classList.add('student-name')
  nameElement.textContent = `${name} ${surname} (${age})`

  const phoneElement = document.createElement('p')
  phoneElement.textContent = `Phone: ****`

  const emailElement = document.createElement('p')
  emailElement.textContent = `Email: ****`

  const itKnowledgeElement = document.createElement('p')
  itKnowledgeElement.textContent = `IT Knowledge: ${itKnowledge}/10`

  const groupElement = document.createElement('p')
  groupElement.textContent = `Group: ${group}  gr.`

  const interestsWrapperElement = document.createElement('div')
  interestsWrapperElement.classList.add('interests-wrapper')

  const interestsTitle = document.createElement('h3')
  interestsTitle.textContent = 'No interests selected...'
  interestsWrapperElement.append(interestsTitle)

  if (interests.length > 0) {
    interestsTitle.textContent = 'Interests:'

    const interestsListElement = document.createElement('ul')
    interestsWrapperElement.append(interestsListElement)

    interests.forEach(interest => {
      const interestElement = document.createElement('li')
      interestElement.textContent = interest.value
      interestsListElement.append(interestElement)
    })
  }

  const privateInfoButton = document.createElement('button')
  privateInfoButton.textContent = 'Show private info'

  let privateInfoIsShown = false

  privateInfoButton.addEventListener('click', () => {
    privateInfoIsShown = !privateInfoIsShown

    if (privateInfoIsShown) {
      phoneElement.textContent = `Phone: ${phone}`
      emailElement.textContent = `Email: ${email}`
      privateInfoButton.textContent = 'Hide private info'
    } else {
      phoneElement.textContent = `Phone: ****`
      emailElement.textContent = `Email: ****`
      privateInfoButton.textContent = 'Show private info'
    }
  })

  const removeStudentButton = document.createElement('button')
  removeStudentButton.textContent = 'Remove Student'

  removeStudentButton.addEventListener('click', () => {
    studentItem.remove()

    alertMessage(`Student (${name} ${surname}) was removed!`, 'alert-danger')
  })

  studentItem.append(nameElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapperElement, privateInfoButton, removeStudentButton)
  studentsList.prepend(studentItem)
  form.reset()
  knowledgeOutput.textContent = knowledgeInput.value

  alertMessage(`Student (${name} ${surname}) was created!`, 'alert-success')
  
})

function alertMessage(text, className) {
  const alertMessage = document.querySelector('#alert-message')
  alertMessage.className = ''

  if (className) {
    alertMessage.classList.add(className)
  }

  alertMessage.textContent = text

  setTimeout(() => {
    alertMessage.textContent = ''
  }, 5000)
}

function validateForm(form) {
  const previousInputErrorMessages = form.querySelectorAll('.input-error-message')
  previousInputErrorMessages.forEach(message => message.remove())

  const previousErrorInputs = form.querySelectorAll('.input-error')
  previousErrorInputs.forEach(input => input.classList.remove('input-error'))

  let formIsValid = true

  const nameElement = form.name
  const name = nameElement.value
  
  // nameElement.classList.remove('input-error')

  if (!name) {
    nameElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'This field is required'
    nameElement.after(inputErrorMessage)

    formIsValid = false
  } else if (name.length < 3) {
    nameElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'Name mus be at least 3 letters long.'
    nameElement.after(inputErrorMessage)

    formIsValid = false
  }




  const surnameElement = form.surname
  const surname = surnameElement.value
  
  // surnameElement.classList.remove('input-error')

  if (!surname) {
    surnameElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'This field is required'
    surnameElement.after(inputErrorMessage)

    formIsValid = false
  } else if (surname.length < 3) {
    surnameElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'Surname mus be at least 3 letters long.'
    surnameElement.after(inputErrorMessage)

    formIsValid = false
  }



  const ageElement = form.age
  const age = ageElement.value
  
  if (!age) {
    ageElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'This field is required'
    ageElement.after(inputErrorMessage)

    formIsValid = false
  } else if (age < 0) {
    ageElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'Age must be at least 0 years'
    ageElement.after(inputErrorMessage)

    formIsValid = false
  } else if (age >= 100) {
    ageElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'Age must be less then 100 years'
    ageElement.after(inputErrorMessage)

    formIsValid = false
  }





  const phoneElement = form.phone
  const phone = phoneElement.value
  
  if (!phone) {
    phoneElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'This field is required'
    phoneElement.after(inputErrorMessage)

    formIsValid = false
  } else if (phone.length < 9 || phone.length > 12) {
    phoneElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'Phone number is invalid'
    phoneElement.after(inputErrorMessage)

    formIsValid = false
  }





  const emailElement = form.email
  const email = emailElement.value
  
  if (!email) {
    emailElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'This field is required'
    emailElement.after(inputErrorMessage)

    formIsValid = false
  } else if (email.length < 8 || !email.includes('@') || !email.includes('.')) {
    emailElement.classList.add('input-error')
    const inputErrorMessage = document.createElement('span')
    inputErrorMessage.classList.add('input-error-message')
    inputErrorMessage.textContent = 'Email is invalid'
    emailElement.after(inputErrorMessage)

    formIsValid = false
  }




  return formIsValid
}
