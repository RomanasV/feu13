// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanYears) {
  let dogYears = humanYears * 7
  let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`
  return output
}

console.log(humanToDogYears(10))

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function daysPerBook(books) {
  let days = Math.round(365 / books)
  let output = `Norint perskaityti ${books} knygų per metus, vienai knygai perskaityti turėsi ${days} dienas.`
  console.log(output)

}

daysPerBook(10)

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeeks(days) {
  let weeks = (days / 7).toFixed(1)
  let output = `${days} dienos yra ${weeks} savaitės.`
  console.log(output)
}

daysToWeeks(10)

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
  let years = (days / 365).toFixed(2)

  if (days >= 365) {
    years = Math.floor(days / 365)
  }

  let output = `${days} dienos yra ${years} metai.`
  console.log(output)
}

daysToYears(200)

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years) {
  let hours = years * 365 * 24
  let output = `${years} metai turi ${hours} valandas.`
  console.log(output)
}

yearsToHours(15)

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(months) {
  let hours = months * 30 * 24
  let output = `${months} mėnesiai turi ${hours} valandas.`
  console.log(output)
}

monthsToHours(3)

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes(months) {
  let minutes = months * 30 * 24 * 60
  let output = `${months} mėnesiai turi ${minutes} minutes.`
  console.log(output)
}

monthsToMinutes(2)

// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function convertDays(days, format) {
  // if (format === 'minutes') {
  //   let minutes = days * 24 * 60
  //   return `${days} days - ${minutes} minutes.`
  // } else if (format === 'hours') {
  //   let hours = days * 24
  //   return `${days} days - ${hours} hours.`
  // } else if (format === 'weeks') {
  //   let weeks = (days / 7).toFixed(1)
  //   return `${days} days - ${weeks} weeks.`
  // } else if (format === 'months') {
  //   let months = (days / 30).toFixed(2)
  //   return `${days} days - ${months} months.`
  // } else if (format === 'years') {
  //   let years = (days / 365).toFixed(2)
  //   return `${days} days - ${years} years.`
  // } else {
  //   return 'Norodytas formatas yra netinkamas. Jis turėtų būti: minutes, hours, weeks, months arba years.'
  // }
  
  // if (format === 'minutes') {
    // let minutes = days * 24 * 60
    // return `${days} days - ${minutes} minutes.`
  // }
  
  // if (format === 'hours') {
  //   let hours = days * 24
  //   return `${days} days - ${hours} hours.`
  // }
  
  // if (format === 'weeks') {
    // let weeks = (days / 7).toFixed(1)
    // return `${days} days - ${weeks} weeks.`
  // }
  
  // if (format === 'months') {
    // let months = (days / 30).toFixed(2)
    // return `${days} days - ${months} months.`
  // }
  
  // if (format === 'years') {
    // let years = (days / 365).toFixed(2)
    // return `${days} days - ${years} years.`
  // }
  
  // return 'Norodytas formatas yra netinkamas. Jis turėtų būti: minutes, hours, weeks, months arba years.'

  switch (format) {
    case 'minutes':
      let minutes = days * 24 * 60
      return `${days} days - ${minutes} minutes.`

    case 'hours':
      let hours = days * 24
      return `${days} days - ${hours} hours.`

    case 'weeks':
      let weeks = (days / 7).toFixed(1)
      return `${days} days - ${weeks} weeks.`

    case 'months':
      let months = (days / 30).toFixed(2)
      return `${days} days - ${months} months.`

    case 'years':
      let years = (days / 365).toFixed(2)
      return `${days} days - ${years} years.`
      
    default:
      return 'Norodytas formatas yra netinkamas. Jis turėtų būti: minutes, hours, weeks, months arba years.'
  }
}

console.log(convertDays(100, 'years'))

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function checkNumbers(num1, num2) {
  let answer = num1 % num2

  if (answer === 0) {
    return `${num1} dalinasi iš ${num2}.`
  }

  return `Skaičius ${num1} nesidalina iš ${num2}. Liekana yra ${answer}.`
}

console.log(checkNumbers(10, 4))

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function checkText(str) {
  if (str.length % 2 === 0) {
    return `Žodis ${str} turi porinį raidžių skaičių.`
  }

  return `Žodis ${str} turi neporinį raidžių skaičių.`
}

console.log(checkText('laba'))

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė nuo galo yra "b".

function getSybmol(str, num) {
  if (!str || !num) {
    return 'Neteisingai įvesti duomenys'
  }

  if (typeof str !== 'string') {
    return 'ERROR: pirmas parametras privalo būti tekstas (string)'
  }

  if (isNaN(num)) {
    return 'ERROR: antras parametras privalo būti skaičius (number)'
  }

  // let strLength = str.length

  // if (strLength < num) {
  //   return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${num}.`
  // }

  // let absNum = Math.abs(num)

  // if (num < 0 && strLength < absNum) {
  //   return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${absNum} simbolį nuo galo.`
  // }

  // if (num < 0) {
  //   let symbol = str.at(num)
  //   return `Teksto "${str}" ${absNum} raidė nuo galo yra "${symbol}".`
  // } else {
  //   let symbol = str.at(num - 1)
  //   return `Teksto "${str}" ${absNum} galo yra "${symbol}".`
  // }

  let strLength = str.length

  if (num >= 0) {
    if (strLength < num) {
      return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${num}.`
    }

    let symbol = str.at(num - 1)
    return `Teksto "${str}" ${absNum} galo yra "${symbol}".`
  }

  let absNum = Math.abs(num)

  if (strLength < absNum) {
    return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${absNum} simbolį nuo galo.`
  }

  let symbol = str.at(num)
  return `Teksto "${str}" ${absNum} raidė nuo galo yra "${symbol}".`
}

console.log(getSybmol('labas', -2))