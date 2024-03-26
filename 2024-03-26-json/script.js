console.groupCollapsed('JSON basics')

const obj = {
  name: 'John',
  age: 28, 
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.', 
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddress() {
    return `Address is ${this.address.street} ${this.address.city} ${this.address.country}.`
  },
  test1: undefined,
  test2: null,
}

console.log(obj)
console.log(obj.name)
console.log(obj['age'])
console.log(obj.children[0])
console.log(obj.address.street)
console.log(obj.getAddress())

// Įprastas objektas
console.log(obj)

// Įprastas objektas į JSON objektą
const json = JSON.stringify(obj)
console.log(json)

// JSON to OBJ
const convertedJson = JSON.parse(json)
console.log(convertedJson)

// fetch('obj.json')
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(obj) {
//     console.log(obj)
//   })

// let str = 'Start'
// console.log(1)

// fetch('obj.json')
//   .then((response) => {
//     console.log(2)
//     return response.json()
//   })
//   .then((obj) => {
//     console.log(3)
//     str = 'end'
//     console.log(obj)
//   })

// console.log(4)
// console.log(str)


// fetch('obj.json')
//   .then(response => response.json())
//   .then(obj => {

//     console.log(obj)
//     console.log(obj.name)
//     console.log(obj.age)
//     console.log(obj.children)

//     const title = document.createElement('h1')
//     title.textContent = obj.name
//     document.body.prepend(title)

//   })

console.groupEnd()

fetch('movies.json')
  .then(response => response.json())
  .then(movies => {
    const moviesList = document.querySelector('#movies-list')

    movies.forEach(movie => {
      const movieItem = document.createElement('div')
      movieItem.classList.add('movie-item')
      moviesList.append(movieItem)

      const titleElement = document.createElement('h2')
      titleElement.textContent = `${movie.title} (${movie.releaseDate})`
      movieItem.append(titleElement)

      const rankingElement = document.createElement('span')
      rankingElement.textContent = `${movie.ranking.average} (${movie.ranking.total})`
      movieItem.append(rankingElement)

      const descriptionElement = document.createElement('p')
      descriptionElement.textContent = movie.description
      movieItem.append(descriptionElement)

      const genresWrapper = document.createElement('div')
      movieItem.append(genresWrapper)
      const genresTitle = document.createElement('h3')
      genresTitle.textContent = 'Genres:'
      genresWrapper.append(genresTitle)

      const genresList = document.createElement('ul')
      genresWrapper.append(genresList)

      movie.genres.forEach(genre => {
        const genreItem = document.createElement('li')
        genreItem.textContent = genre
        genresList.append(genreItem)
      })

      const directorsWrapper = document.createElement('div')
      movieItem.append(directorsWrapper)
      const directorsTitle = document.createElement('h3')
      directorsTitle.textContent = 'Directors:'
      directorsWrapper.append(directorsTitle)

      const directorsList = document.createElement('ul')
      directorsWrapper.append(directorsList)

      movie.directors.forEach(director => {
        const directorItem = document.createElement('li')
        directorItem.textContent = director
        directorsList.append(directorItem)
      })

      const actorsWrapper = document.createElement('div')
      movieItem.append(actorsWrapper)
      const actorsTitle = document.createElement('h3')
      actorsTitle.textContent = 'Actors:'
      actorsWrapper.append(actorsTitle)

      const actorsList = document.createElement('ul')
      actorsWrapper.append(actorsList)

      movie.actors.forEach(actor => {
        const actorItem = document.createElement('li')
        actorItem.textContent = actor
        actorsList.append(actorItem)
      })
    })
  })