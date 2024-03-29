export default function createElement(className, type = 'div', content = '') {
  let element = document.createElement(type)
  
  if (className) {
    element.classList.add(className)
  }
  
  element.textContent = content

  return element
}