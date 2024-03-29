export default function largeLink(url, content = '') {
  let element = document.createElement('a')
  element.classList.add('large-button')
  element.href = url
  element.textContent = content

  return element
}