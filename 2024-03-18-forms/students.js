const initialData = [
  {
    name: 'Steve',
    surname: 'Doe',
    age: 45,
    phone: '+37045641315',
    email: 'steve@doe.com',
    itKnowledge: 8,
    group: 'FEU 10',
    interests: ['HTML', 'CSS'],
  },
  {
    name: 'Peter',
    surname: 'Doe',
    age: 35,
    phone: '+37045641315',
    email: 'steve@doe.com',
    itKnowledge: 10,
    group: 'FEU 15',
    interests: ['JavaScript', 'CSS'],
  },
]

const studentForm = document.querySelector('#student-form')
const studentsList = document.querySelector('#students-list')

console.log(initialData)

initialData.forEach(studentData => {
  console.log(studentData)
  console.log(studentData.name)
  console.log(studentData.surname)
  console.log(studentData.age)
  console.log(studentData.phone)
  console.log(studentData.email)
  console.log(studentData.itKnowledge)
  console.log(studentData.group)
  console.log(studentData.interests)
})

function createStudentItem() {
  
}


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

  const requiredInputs = form.querySelectorAll('input:required')
  console.log(requiredInputs)

  let formIsValid = true

  requiredInputs.forEach(input => {
    const value = input.value

    if (!value) {
      showInputError(input, 'This field is required')

      formIsValid = false
    } else {

      const id = input.id

      if (id === 'name' && value.length < 3) {

        showInputError(input, 'Name mus be at least 3 letters long.')
        formIsValid = false

      } else if (id === 'surname' && value.length < 3) {

        showInputError(input, 'Surname mus be at least 3 letters long.')
        formIsValid = false

      } else if (id === 'age') {

        if (value < 0) {
          showInputError(input, 'Age must be at least 0 years')
          formIsValid = false
        } else if (value >= 100) {
          showInputError(input, 'Age must be less then 100 years')
          formIsValid = false
        }

      } else if (id === 'phone' && (value.length < 9 || value.length > 12)) {

        showInputError(input, 'Phone number is invalid')
        formIsValid = false

      } else if (id === 'email' && (value.length < 8 || !value.includes('@') || !value.includes('.'))) {

        showInputError(input, 'Email is invalid')
        formIsValid = false

      }
    }
  })

  return formIsValid
}

function showInputError(input, errorText) {
  input.classList.add('input-error')

  const inputErrorMessage = document.createElement('span')
  inputErrorMessage.classList.add('input-error-message')
  inputErrorMessage.textContent = errorText

  input.after(inputErrorMessage)
}

