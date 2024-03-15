let h1Element = document.querySelector('h1')
let h2Element = document.querySelector('h2')
let h3Element = document.querySelector('h3')
let h4Element = document.querySelector('h4')
let h5Element = document.querySelector('h5')

h1Element.addEventListener('click', function() {
  h1Element.style.backgroundColor = 'pink'
  h1Element.style.color = 'green'
  h1Element.textContent = 'Clicked'
})

h2Element.addEventListener('click', () => {
  h2Element.style.fontSize = '40px'
})

h3Element.addEventListener('click', () => {
  h3Element.style.color = 'purple'
  h1Element.style.color = 'purple'
})

// h4Element.addEventListener('click', () => {
//   h4Element.style.border = '2px dashed black'
//   h1Element.style.border = '2px dashed black'
// })

// h5Element.addEventListener('click', () => {
//   h4Element.style.border = '2px dashed black'
//   h1Element.style.border = '2px dashed black'
// })

h4Element.addEventListener('click', changeBorders)
h5Element.addEventListener('click', changeBorders)

function changeBorders() {
  h4Element.style.border = '2px dashed black'
  h1Element.style.border = '2px dashed black'

  let paragraph = document.createElement('p')
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sunt tempora quod officiis, officia obcaecati qui accusamus consequuntur? Autem illo sunt suscipit odit numquam illum inventore ullam non consectetur sequi!'

  h5Element.after(paragraph)
}
