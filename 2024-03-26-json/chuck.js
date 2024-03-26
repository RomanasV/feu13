function init() {
  const jokeParagraph = document.querySelector('#joke-paragraph')
  jokeParagraph.textContent = 'Loading...'

  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
      const joke = data.value
      
      jokeParagraph.textContent = joke
    })
  
}

init()