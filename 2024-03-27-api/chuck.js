function init() {
  getRandomJoke()
  getJokeByCategory()
  getJokeByPhrase()
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
  const categoryForm = document.querySelector('#category-form')
  const submitButton = categoryForm.querySelector('#category-submit')
  submitButton.setAttribute('disabled', true)

  fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => res.json())
    .then(categories => {
      const selectElement = document.querySelector('#category')

      categories.forEach(category => {
        const categoryOptionElement = document.createElement('option')
        categoryOptionElement.textContent = '- ' + category
        categoryOptionElement.value = category
        
        selectElement.append(categoryOptionElement)
      })

      submitButton.removeAttribute('disabled')

      categoryForm.addEventListener('submit', (event) => {
        event.preventDefault()

        submitButton.setAttribute('disabled', true)

        const jokeParagraph = document.querySelector('#joke-paragraph')
        jokeParagraph.textContent = 'Loading...'

        const selectedCategory = event.target.elements.category.value
        console.log(selectedCategory)

        fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
          .then(res => res.json())
          .then(joke => {
            jokeParagraph.textContent = joke.value
            submitButton.removeAttribute('disabled')
          })
      })
    })
}

function getJokeByPhrase() {
  const form = document.querySelector('#search-form')
  const submitButton = form.querySelector('#search-submit')

  form.addEventListener('submit', event => {
    event.preventDefault()

    submitButton.setAttribute('disabled', true)

    const jokeParagraph = document.querySelector('#joke-paragraph')
    jokeParagraph.textContent = 'Loading...'

    const searchPhrase = event.target.search.value

    fetch(`https://api.chucknorris.io/jokes/search?query=${searchPhrase}`)
      .then(res => res.json())
      .then(data => {
        const jokesCount = data.total
        
        if (jokesCount > 0) { 
          const randomIndex = Math.floor(Math.random() * jokesCount)
          const jokeData = data.result[randomIndex]
          const joke = jokeData.value
          
          jokeParagraph.textContent = joke
        } else {
          jokeParagraph.textContent = `No joke was found with phrase '${searchPhrase}' :(`
        }

        submitButton.removeAttribute('disabled')
      })

  })
}