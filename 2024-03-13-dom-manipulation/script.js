// Paselektinti HTML elementą
let paragraph = document.querySelector('p')
paragraph.textContent = 'Sveikas'
paragraph.innerHTML = 'Labas <span class="test" style="color: red;">rytas</span>'

// Sukurti HTML elementą
let spanElement = document.createElement('span')
spanElement.textContent = '!'

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement)

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement)

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement)

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement)

// Remove - pašalina HTML elementą
spanElement.remove()

let newParagraph = document.createElement('p')
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus at voluptatum qui tempora totam dicta commodi esse delectus! Iusto ab dignissimos, nihil nemo laudantium aperiam quibusdam assumenda quasi provident?'

paragraph.after(newParagraph)

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase'

// newParagraph.classList = newParagraph.classList + ' trecia-klase'
newParagraph.classList += ' trecia-klase'

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase')
newParagraph.classList.add('penkta-klase', 'sesta-klase')

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('pirma-klase')
newParagraph.classList.remove('trecia-klase', 'sesta-klase')

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('antra-klase', 'pirma-klase')

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase') // prideda
newParagraph.classList.toggle('toggle-klase') // pašalina
newParagraph.classList.toggle('toggle-klase') // prideda

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'))
console.log(newParagraph.classList.contains('trecia-klase'))
console.log(newParagraph.classList.contains('klase'))

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id'

let link = document.createElement('a')
link.textContent = 'nuoroda'
newParagraph.after(link)

// link.href = 'https://www.google.com'
// link.target = '_blank'

// link['href'] = 'https://www.google.com'
// link['target'] = '_blank'

link.setAttribute('href', 'https://www.google.com')
link.setAttribute('target', '_blank')
link.setAttribute('title', 'cia yra nuoroda')
link.setAttribute('class', 'nuorodos-klase')
link.setAttribute('class', 'nauja-nuorodos-klase')
link.setAttribute('id', 'nuorodos-id')

link.removeAttribute('class')
link.removeAttribute('title')

link.style.color = 'red'
link.style.border = '2px solid black'
link.style.padding = '5px 10px'
link.style.display = 'inline-block'
link.style.fontSize = '25px'

link.style = `color: red; 
              border: 2px solid black;
              padding: 5px 10px;
              display: inline-block;
              font-size: 25px;`