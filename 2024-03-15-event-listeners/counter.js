// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"

const initialCounter = 9
let counter = initialCounter

// let wrapper = document.getElementById('numbers')
const wrapper = document.querySelector('#numbers')

const numberDisplay = document.createElement('h3')
// numberDisplay.textContent = counter
// wrapper.append(numberDisplay)

const numberInput = document.createElement('input')
// numberInput.setAttribute('type', 'number')
numberInput.type = 'number'
numberInput.min = 1
numberInput.max = 10

const plus5Button = document.createElement('button')
plus5Button.textContent = '+5'

const plus2Button = document.createElement('button')
plus2Button.textContent = '+2'

const plusButton = document.createElement('button')
plusButton.textContent = '+'
// wrapper.append(plusButton)

const minusButton = document.createElement('button')
minusButton.textContent = '-'
// wrapper.append(minusButton)

const minus2Button = document.createElement('button')
minus2Button.textContent = '-2'

const minus5Button = document.createElement('button')
minus5Button.textContent = '-5'

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'


wrapper.append(numberInput, numberDisplay, plus5Button, plus2Button, plusButton, minusButton, minus2Button, minus5Button, resetButton)

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 13. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

checkData(0)

numberInput.addEventListener('change', () => {
  console.log(numberInput.value)
})

plusButton.addEventListener('click', () => checkData(1))
minusButton.addEventListener('click', () => checkData(-1))
plus2Button.addEventListener('click', () => checkData(2))
minus2Button.addEventListener('click', () => checkData(-2))
plus5Button.addEventListener('click', () => checkData(5))
minus5Button.addEventListener('click', () => checkData(-5))

resetButton.addEventListener('click', () => {
  counter = initialCounter
  checkData(0)
})

function checkData(num) {
  counter = counter + num
  numberDisplay.textContent = counter
  numberInput.value = counter

  if (counter > 9) {
    plusButton.setAttribute('disabled', true)
  } else {
    plusButton.removeAttribute('disabled')
  }

  if (counter > 8) {
    plus2Button.setAttribute('disabled', true)
  } else {
    plus2Button.removeAttribute('disabled')
  }

  if (counter > 5) {
    plus5Button.setAttribute('disabled', true)
  } else {
    plus5Button.removeAttribute('disabled')
  }

  if (counter < 2) {
    minusButton.setAttribute('disabled', true)
  } else {
    minusButton.removeAttribute('disabled')
  }

  if (counter < 3) {
    minus2Button.setAttribute('disabled', true)
  } else {
    minus2Button.removeAttribute('disabled')
  }

  if (counter < 6) {
    minus5Button.setAttribute('disabled', true)
  } else {
    minus5Button.removeAttribute('disabled')
  }

  checkColor()
}

function checkColor() {
  if (counter >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
}