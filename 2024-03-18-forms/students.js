// let arr = [1, 5, 3, 52]
// console.log(arr)

// let item1 = arr.slice(1, 2)
// let item2 = arr.splice(1, 2)
// let item3 = arr.pop()

// let forEachArr = arr.forEach((item) => {
//   return item
// })
// console.log(forEachArr)

// let mapArr = arr.map((item) => {
//   return item + " * 2 = " + (item * 2)
// })
// console.log(mapArr)

function init() {
  // const initialData = [
  //   {
  //       name: 'Sam',
  //       surname: 'Buca',
  //       age: 24,
  //       phone: '869268973',
  //       email: 'rokas@gmail.com',
  //       itKnowledge: 7,
  //       interests: ['JavaScript', 'PHP', 'C++'],
  //       group: 'FEU 14',
  //   },
  //   {
  //       name: 'Kick',
  //       surname: 'Ass',
  //       age: 22,
  //       phone: '+37069268973',
  //       email: 'arunas@gmail.com',
  //       itKnowledge: 9,
  //       interests: ['C', 'C++'],
  //       group: 'FEU 10',
  //   },
  //   {
  //       name: 'Bil',
  //       surname: 'Asde',
  //       age: 20,
  //       phone: '869987529',
  //       email: 'pricepas@gmail.com',
  //       itKnowledge: 10,
  //       interests: ['JavaScript', 'PHP', 'C++', 'Python'],
  //       group: 'FEU 16',
  //   },
  //   {
  //       name: 'Alus',
  //       surname: 'Sula',
  //       age: 30,
  //       phone: '+370612141',
  //       email: 'Petras@gmail.com',
  //       itKnowledge: 6,
  //       interests: ['C#'],
  //       group: 'FEU 14',
  //   },
  //   {
  //       name: 'Sam',
  //       surname: 'Buca',
  //       age: 24,
  //       phone: '869268973',
  //       email: 'rokas@gmail.com',
  //       itKnowledge: 7,
  //       interests: ['JavaScript', 'PHP', 'C++'],
  //       group: 'FEU 14',
  //   },
  // ]

  const initialDataLocalStorage = JSON.parse(localStorage.getItem('students-data'))
  const initialData = initialDataLocalStorage ? initialDataLocalStorage : []

  initialData.forEach(studentData => {
    createStudentElement(studentData)
  })

  const studentForm = document.querySelector('#student-form')

  formDataInLocalStorage(studentForm)
  itKnowledgeHandler(studentForm)

  studentForm.addEventListener('submit', studentFormHandler)
}

init()

function studentFormHandler(event) {
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

  // SPREAD OPERATOR
  const interestsData = [...interests].map(interest => interest.value)

  const newStudentData = {
    id: Math.random(),
    name,
    surname,
    age,
    phone,
    email,
    itKnowledge,
    interests: interestsData,
    group,
  }

  createStudentElement(newStudentData)

  const studentsListLocalStorage = JSON.parse(localStorage.getItem('students-data'))
  const studentsListData = studentsListLocalStorage ? studentsListLocalStorage : []

  studentsListData.push(newStudentData)
  localStorage.setItem('students-data', JSON.stringify(studentsListData))

  form.reset()
  itKnowledgeHandler(form)

  const inputNames = getInputNames(form)
  inputNames.forEach(name => localStorage.removeItem(name))

  alertMessage(`Student (${name} ${surname}) was created!`, 'alert-success')
}

function createStudentElement(data) {
  const studentsList = document.querySelector('#students-list')

  const { name, surname, age, phone, email, itKnowledge, group, interests, id } = data

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

      interestElement.textContent = interest
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

    const studentsListData = JSON.parse(localStorage.getItem('students-data'))

    if (studentsListData) {
      const updatedStudentsList = studentsListData.filter(student => student.id !== id)
      localStorage.setItem('students-data', JSON.stringify(updatedStudentsList))
    }

    alertMessage(`Student (${name} ${surname}) was removed!`, 'alert-danger')
  })

  studentItem.append(nameElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapperElement, privateInfoButton, removeStudentButton)
  studentsList.prepend(studentItem)
}

function itKnowledgeHandler(form) {
  const knowledgeInput = form.querySelector('#it-knowledge')
  const knowledgeOutput = form.querySelector('#it-knowledge-output')
  
  knowledgeOutput.textContent = knowledgeInput.value
  
  knowledgeInput.addEventListener('input', (event) => {
    knowledgeOutput.textContent = event.target.value
  })
}

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

function formDataInLocalStorage(form) {
  form.addEventListener('input', (event) => {
    const input = event.target
    // const { value, name, type } = input
    const value = input.value
    const name = input.name
    const type = input.type
    
    if (type === 'checkbox') {
      const checkedInterestInputs = form.querySelectorAll(`[name="${name}"]:checked`)
      const interestsData = [...checkedInterestInputs].map(interest => interest.value)
      localStorage.setItem(name, JSON.stringify(interestsData))
    } else {
      localStorage.setItem(name, JSON.stringify(value))
    }
  })

  const inputNames = getInputNames(form)
  inputNames.forEach(name => {
    populateInputFromLocalStorage(name, form)
  })
}

function populateInputFromLocalStorage(key, form) {
  const input = form[key]
  const localStorageValue = JSON.parse(localStorage.getItem(key))
  
  if (localStorageValue !== null) {
    if (input.length > 0 && input[0].type === 'checkbox') {
      localStorageValue.forEach(interest => {
        form.querySelector(`[name="${key}"][value="${interest}"]`).checked = true
      })
    } else {
      input.value = localStorageValue
    }
  }
}

function getInputNames(form) {
  const formInputs = form.elements
  const inputNames = []

  for (input of formInputs) {
    const name = input.name

    if (name && !inputNames.includes(name)) {
      inputNames.push(name)
    }
  }

  return inputNames
}
