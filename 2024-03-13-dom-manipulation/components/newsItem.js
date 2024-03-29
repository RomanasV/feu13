import createElement from './createElement.js'

export default function createNewsItem(data) {
  // let url = data.url
  // let title = data.title
  // let imageSrc = data.imageSrc
  // let imageAlt = data.imageAlt
  // let category = data.category
  // let date = data.date

  let { url, title, imageSrc, imageAlt, category, date } = data

  if (!url || !title) {
    return ''
  }

  let newsItem = createElement('news-item')

  let link = createElement('', 'a')
  link.href = url
  newsItem.append(link)

  if (imageSrc) {
    let imageWrapper = createElement('news-image-wrapper')
    link.append(imageWrapper)
    
    let imageElement = createElement('news-image', 'img')
    // imageElement.src = 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg'
    imageElement.src = imageSrc
    imageElement.alt = imageAlt
    imageWrapper.append(imageElement)
  }

  let contentWrapper = createElement('news-content-wrapper')
  link.append(contentWrapper)

  if (category) {
    let categoryElement = createElement('news-category', 'span', category)
    contentWrapper.append(categoryElement)
  }

  let titleElement = createElement('news-title', 'h2', title)
  contentWrapper.append(titleElement)

  if (date) {
    let dateElement = createElement('news-date', 'span', date)
    contentWrapper.append(dateElement)
  }

  return newsItem
}