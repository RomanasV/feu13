// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// let company1 = new Object()
let company1 = {}

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC'

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2008

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 4654312135487

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 24

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe'

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = true

// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
company1.workingLocations = ['Lithuania', 'Poland']

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['Marketing', 'Sales']

// 2.9. Property „contacts", kuris turės:
company1.contacts = {}

//       2.9.1. „phone"
company1.contacts.phone = '+37045464313'

//       2.9.2. „email"
company1.contacts.email = 'info@companyabc.lt'

//       2.9.3. „address", kuris turės:
company1.contacts.address = {}

//           2.9.3.1. „country"
company1.contacts.address.country = 'Lithuania'

//           2.9.3.2. „city"
company1.contacts.address.city = 'Vilnius'

//           2.9.3.3. „street"
company1.contacts.address.street = 'Vilnius st.'

//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 15

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getAddress = function() {
  // let output = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`

  // let street = this.contacts.address.street
  // let apartment = this.contacts.address.apartment
  // let city = this.contacts.address.city
  // let country = this.contacts.address.country

  let { street, apartment, city, country } = this.contacts.address

  let output = `${street} ${apartment}, ${city}, ${country}.`
  return output
}

console.log(company1.getAddress())

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVO = function() {
  this.nvo = true
  return this.nvo
}

console.log(company1.setNVO())

//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function() {
  this.nvo = false
  return this.nvo
}

console.log(company1.setNonNVO())

//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
company1.switchNVO = function() {
  this.nvo = !this.nvo
  return this.nvo
}

console.log(company1.switchNVO())

//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function() {
  return this.workingLocations.join(', ')
}

console.log(company1.getWorkingLocations())

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function() {
  return this.activityAreas.join(', ')
}

console.log(company1.getActivityAreas())

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.setWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation)

  return this.workingLocations
}

console.log(company1.setWorkingLocation('Italy'))

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.setActivityArea = function(newArea) {
  this.activityAreas.push(newArea)

  return this.activityAreas
}

console.log(company1.setActivityArea('B2B sales'))

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function(locationToRemove) {
  let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove)

  this.workingLocations = updatedLocations

  return this.workingLocations
}

console.log(company1.removeWorkingLocation('Poland'))

//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityArea = function(areaToRemove) {
  this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove)

  return this.activityAreas
}

console.log(company1.removeActivityArea('Marketing'))

console.log(company1)

let company2 = {
  'company name': 'Company XYZ',
  opened: 2010,
  companyCode: 73132165876435,
  employees: 50,
  ceo: 'Doe John',
  nvo: true,
  workingLocations: ['Latvia'],
  activityAreas: ['Tourism'],
  concats: {
    phone: '+37043153773',
    email: 'info@companyxyz.lt',
    address: {
      country: 'Lithuania',
      city: 'Kaunas',
      street: 'Vilniaus st.',
      apartment: 20,
    }
  },
  getAddress: function() {
    let { street, apartment, city, country } = this.contacts.address
  
    let output = `${street} ${apartment}, ${city}, ${country}.`
    return output
  },
  setNVO: function() {
    this.nvo = true
    return this.nvo
  },
  setNonNVO: function() {
    this.nvo = false
    return this.nvo
  },
  switchNVO: function() {
    this.nvo = !this.nvo
    return this.nvo
  },
  getWorkingLocations: function() {
    return this.workingLocations.join(', ')
  },
  getActivityAreas: function() {
    return this.activityAreas.join(', ')
  },
  setWorkingLocation: function(newLocation) {
    this.workingLocations.push(newLocation)
  
    return this.workingLocations
  },
  setActivityArea: function(newArea) {
    this.activityAreas.push(newArea)
  
    return this.activityAreas
  },
  removeWorkingLocation: function(locationToRemove) {
    let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove)
  
    this.workingLocations = updatedLocations
  
    return this.workingLocations
  },
  removeActivityArea: function(areaToRemove) {
    this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove)
  
    return this.activityAreas
  },
}