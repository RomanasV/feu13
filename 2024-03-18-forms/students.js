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
  // phoneElement.textContent = `Phone: ${phone}`
  phoneElement.textContent = `Phone: ****`

  const emailElement = document.createElement('p')
  // emailElement.textContent = `Email: ${email}`
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

  studentItem.append(nameElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapperElement)
  studentsList.prepend(studentItem)
  form.reset()
  knowledgeOutput.textContent = knowledgeInput.value

  const alertMessage = document.querySelector('#alert-message')

  alertMessage.textContent = `Student (${name} ${surname}) was created!`

  setTimeout(() => {
    alertMessage.textContent = ''
  }, 5000)
  
})