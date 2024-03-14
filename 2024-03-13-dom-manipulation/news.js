let primaryNewsData = [
  {
    title: 'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
    url: '#',
    imageSrc: 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
    imageAlt: '',
    category: 'Programavimas',
    date: '2024-02-01',
  },
  {
    title: 'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
    url: '#',
    imageSrc: 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
    imageAlt: '',
    category: 'Programavimas',
    date: '2024-02-01',
  },
]

// let content = document.querySelector('#content')
let content = document.getElementById('content')

// let container = document.createElement('div')
// container.classList.add('container')
// content.append(container)

let container = createElement('container')
content.append(container)

// let pageContent = document.createElement('div')
// pageContent.classList.add('page-content')
// container.append(pageContent)

let pageContent = createElement('page-content')
container.append(pageContent)

// let mainContent = document.createElement('main')
// mainContent.classList.add('main-content')
// pageContent.append(mainContent)

let mainContent = createElement('main-content', 'main')
pageContent.append(mainContent)

// let newsSection = document.createElement('div')
// newsSection.classList.add('news-section')
// mainContent.append(newsSection)

let newsSection = createElement('news-section')
mainContent.append(newsSection)

let pageTitle = createElement('page-title', 'h1', 'Naujienos')

let primaryNewsList = createElement('primary-news-list')


// let primaryNewsItem1 = createNewsItem(
//   '#', 
//   'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
//   '', 
//   'Programavimas', 
//   'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
//   '2024-02-01'
// )

// let primaryNewsItem2 = createNewsItem(
//   '#', 
//   '',
//   '', 
//   'AI', 
//   'Pavadinimas'
// )

// primaryNewsList.append(primaryNewsItem1, primaryNewsItem2)

primaryNewsData.forEach(newsData => {
  // let primaryNewsItem = createNewsItem(
  //   newsData.url, 
  //   newsData.imageSrc,
  //   newsData.imageAlt, 
  //   newsData.category, 
  //   newsData.title,
  //   newsData.date
  // )

  // let url = newsData.url
  // let imageSrc = newsData.imageSrc
  // let imageAlt = newsData.imageAlt
  // let category = newsData.category
  // let title = newsData.title
  // let date = newsData.date

  let { url, imageSrc, imageAlt, category, title, date } = newsData

  let primaryNewsItem = createNewsItem(url, title, imageSrc, imageAlt, category, date)

  primaryNewsList.append(primaryNewsItem)
})



let secondaryNewsList = createElement('secondary-news-list')

let secondaryNewsItem1 = createNewsItem(
  '#', 
  'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
  '', 
  'Programavimas', 
  'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
  '2024-02-01'
)

let secondaryNewsItem2 = createNewsItem(
  '#', 
  'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
  '', 
  'Programavimas', 
  'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
  '2024-02-01'
)

let secondaryNewsItem3 = createNewsItem(
  '#', 
  'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
  '', 
  'Programavimas', 
  'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
  '2024-02-01'
)

let secondaryNewsItem4 = createNewsItem(
  '#', 
  'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
  '', 
  'Programavimas', 
  'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
  '2024-02-01'
)

secondaryNewsList.append(secondaryNewsItem1, secondaryNewsItem2, secondaryNewsItem3, secondaryNewsItem4)


let moreNewsButton = largeLink('#', 'Visos naujienos')

newsSection.append(pageTitle, primaryNewsList, secondaryNewsList, moreNewsButton)

// let videoSection = document.createElement('div')
// videoSection.classList.add('video-section')
// mainContent.append(videoSection)

let videoSection = createElement('news-section')
mainContent.append(videoSection)














// let sidebarContent = document.createElement('aside')
// sidebarContent.classList.add('sidebar-content')
// pageContent.append(sidebarContent)

let sidebarContent = createElement('sidebar-content', 'aside')
pageContent.append(sidebarContent)



function createElement(className, type = 'div', content = '') {
  let element = document.createElement(type)
  
  if (className) {
    element.classList.add(className)
  }
  
  element.textContent = content

  return element
}

function largeLink(url, content = '') {
  let element = document.createElement('a')
  element.classList.add('large-button')
  element.href = url
  element.textContent = content

  return element
}

function createNewsItem(url, title, imageSrc, imageAlt, category, date) {
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