function init() {
  getRandomJoke()
  getJokeByCategory()
}

init()

function getRandomJoke() {
  const randomJokeButton = document.querySelector('#random-joke-button')

  randomJokeButton.addEventListener('click', () => {
    const jokeParagraph = document.querySelector('#joke-paragraph')
    jokeParagraph.textContent = 'Loading...'
  
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => {
        const joke = data.value
        
        jokeParagraph.textContent = joke
      })
  })
}

function getJokeByCategory() {
  fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => res.json())
    .then(categories => {
      const categoryForm = document.querySelector('#category-form')
      const selectElement = document.querySelector('#category')

      categories.forEach(category => {
        const categoryOptionElement = document.createElement('option')
        categoryOptionElement.textContent = category
        
        selectElement.append(categoryOptionElement)
      })

      categoryForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const selectedCategory = event.target.elements.category.value

      })
    })
}