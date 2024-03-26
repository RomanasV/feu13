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
    console.log(movies)

    movies.forEach(movie => {
      const movieItem = document.createElement('div')
      movieItem.classList.add('movie-item')
      moviesList.append(movieItem)

      console.log(movie)
      console.log(movie.title)

      const titleElement = document.createElement('h2')
      titleElement.textContent = movie.title
      movieItem.append(titleElement)

      console.log(movie.releaseDate)
      console.log(movie.description)

      console.log(movie.ranking)
      console.log(movie.ranking.average)
      console.log(movie.ranking.total)

      console.log(movie.genres)
      movie.genres.forEach(genre => {
        console.log(genre)
      })

      console.log(movie.directors)
      movie.directors.forEach(director => {
        console.log(director)
      })

      console.log(movie.actors)
      movie.actors.forEach(actor => {
        console.log(actor)
      })

    })
  })