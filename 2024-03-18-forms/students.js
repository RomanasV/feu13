const studentForm = document.querySelector('#student-form')
const studentsList = document.querySelector('#students-list')

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

  console.log('Name', name)
  console.log('Surname', surname)
  console.log('Age', age)
  console.log('Phone', phone)
  console.log('Email', email)
  console.log('IT Knowledge', itKnowledge)
  console.log('Group', group)
  console.log('Interests', interests)

  interests.forEach(interest => {
    console.log(interest.value)
  })


  studentsList.prepend(studentItem)
})