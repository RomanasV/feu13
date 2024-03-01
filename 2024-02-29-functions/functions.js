function streetLight(originalLight) {
  let light = originalLight.toLowerCase()
  
  if (light === 'green') {
    return 'Galima eiti'
  }
  
  if (light === 'yellow') {
    return 'Pasiruošk'
  }
  
  if (light === 'red') {
    return 'STOP'
  }

  return 'Sugedo :('
}

console.log(streetLight('green'))
console.log(streetLight('yellow'))
console.log(streetLight('orange'))