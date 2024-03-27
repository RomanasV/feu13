function init() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      const form = document.querySelector('#dogs-form')
      const breedsSelect = form.querySelector('#breed')
      const submitButton = form.querySelector('#breed-submit')

      submitButton.setAttribute('disabled', true)

      const breeds = data.message

      // PIRMAS BŪDAS
      // for (let breed in breeds) {
      //   const breedOption = document.createElement('option')
      //   breedOption.textContent = breed

      //   breedsSelect.append(breedOption)
      // }

      // ANTRAS BŪDAS
      const mainBreeds = Object.keys(breeds)

      mainBreeds.forEach(breed => {
        const breedOption = document.createElement('option')
        breedOption.textContent = breed

        breedsSelect.append(breedOption)
      })

      submitButton.removeAttribute('disabled')

      form.addEventListener('submit', event => {
        event.preventDefault()
        submitButton.setAttribute('disabled', true)

        const selectedBreed = event.target.breed.value

        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
          .then(res => res.json())
          .then(data => {
            const imageUrl = data.message
            const dogImageElement = document.querySelector('#dog-image')
            dogImageElement.src = imageUrl
            dogImageElement.alt = `Dog of ${selectedBreed} breed`
            dogImageElement.width = 300
            submitButton.removeAttribute('disabled')
          })
      })
    })
}

init()