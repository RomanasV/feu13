// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.
// 3. Pridėti funkciją 'getDiscount', kuri, kaip argumentą, priima nuolaidos dydį ir grąžina kainą su nuolaida.
// 4. Pridėti property 'mileage' ir papildoti automobilių objektus pridedant jų ridą.
// 5. Pakoreguoti kainų funkcijas:
//        5.1. Jeigu rida daugiau nei 0, tai kaina sumažėja 10%.
//        5.2. Jeigu rida daugiau nei 20000, tai kaina sumažėja 15%.
//        5.3. Jeigu rida daugiau nei 50000, tai kaina sumažėja 20%.
//        5.4. Jeigu rida daugiau nei 100000, tai kaina sumažėja 30%.
//        5.5. Jeigu rida daugiau nei 400000, tai kaina sumažėja 50%.

class Car {
  constructor(brand, model, engine, basePrice, mileage) {
    this.brand = brand
    this.model = model
    this.engine = engine
    this.basePrice = basePrice
    this.mileage = mileage
  }

  turnOn() {
    alert('vrooom')
  }

  getPrice() {
    const basePrice = this.basePrice

    const enginePrice = this.getEnginePrice()
    
    const mileageDiscount = this.getMileageDiscount()

    return basePrice + enginePrice - mileageDiscount
  }

  getEnginePrice() {
    const engine = this.engine

    if (engine === 'electric') {
      return 10000
    } 
    
    if (engine === 'diesel') {
      return 5000
    }

    return 0
  }

  getMileageDiscount() {
    const basePrice = this.basePrice
    const mileage = this.mileage

    if (mileage === 0) {
      return basePrice / 100 * 0
    } 
    
    if (mileage < 20000) {
      return basePrice / 100 * 10
    } 
    
    if (mileage < 50000) {
      return basePrice / 100 * 15
    } 
    
    if (mileage < 100000) {
      return basePrice / 100 * 20
    } 
    
    if (mileage < 400000) {
      return basePrice / 100 * 30
    } 
    
    return basePrice / 100 * 50
  }

  getDiscount(discount) {
    const price = this.getPrice()

    const priceAfterDiscount = price - (price / 100 * discount)
    return priceAfterDiscount
  }
}

const car1 = new Car('Toyota', 'Prius', 'petrol', 10000, 0)

console.log(car1)

console.log(car1.getPrice())
console.log(car1.getDiscount(10))