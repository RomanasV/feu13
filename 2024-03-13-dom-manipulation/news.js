let primaryNewsData = [
  {
    title: 'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
    imageSrc: 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
    url: '#',
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

let secondaryNewsData = [
  {
    title: 'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
    imageSrc: 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
    url: '#',
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
  {
    title: 'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
    imageSrc: 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
    url: '#',
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

  // let { url, imageSrc, imageAlt, category, title, date } = newsData
  // let primaryNewsItem = createNewsItem(url, title, imageSrc, imageAlt, category, date)

  let primaryNewsItem = createNewsItem(newsData)

  primaryNewsList.append(primaryNewsItem)
})



let secondaryNewsList = createElement('secondary-news-list')

// let secondaryNewsItem1 = createNewsItem(
//   '#', 
//   'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
//   '', 
//   'Programavimas', 
//   'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
//   '2024-02-01'
// )

// let secondaryNewsItem2 = createNewsItem(
//   '#', 
//   'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
//   '', 
//   'Programavimas', 
//   'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
//   '2024-02-01'
// )

// let secondaryNewsItem3 = createNewsItem(
//   '#', 
//   'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
//   '', 
//   'Programavimas', 
//   'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
//   '2024-02-01'
// )

// let secondaryNewsItem4 = createNewsItem(
//   '#', 
//   'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg',
//   '', 
//   'Programavimas', 
//   'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų',
//   '2024-02-01'
// )

// secondaryNewsList.append(secondaryNewsItem1, secondaryNewsItem2, secondaryNewsItem3, secondaryNewsItem4)

// secondaryNewsData.forEach(newsData => {
//   let secondaryNewsItem = createNewsItem(newsData)
//   secondaryNewsList.append(secondaryNewsItem)
// })

secondaryNewsData.forEach(newsData => secondaryNewsList.append(createNewsItem(newsData)))

let moreNewsButton = largeLink('#', 'Visos naujienos')

newsSection.append(pageTitle, primaryNewsList, secondaryNewsList, moreNewsButton)

// let videoSection = document.createElement('div')
// videoSection.classList.add('video-section')
// mainContent.append(videoSection)

let videoSection = createElement('video-section')
mainContent.append(videoSection)

let videoSectionTitle = createElement('section-title', 'h2', 'Vaizdo įrašai')
let primaryVideoWrapper = createElement('primary-video-wrapper')

let primaryVideoElement = createVideoElement(
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  '#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien'
)

primaryVideoWrapper.append(primaryVideoElement)

let secondaryVideoWrapper = createElement('secondary-video-wrapper')

let secondaryVideoElement1 = createVideoElement(
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  'Susipažink su mūsų įdarbinimo partneriais – Danske Bank!'
)

let secondaryVideoElement2 = createVideoElement(
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  '#3 Kaip atrodo Web Dizainerio (UX/UI) karjera?'
)

secondaryVideoWrapper.append(secondaryVideoElement1, secondaryVideoElement2)

let videoButton = largeLink('#', 'Visi vaizdo įrašai')

videoSection.append(videoSectionTitle, primaryVideoWrapper, secondaryVideoWrapper, videoButton)



























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

function createNewsItem(data) {
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

function createVideoElement(iframe, title) {
  if (!iframe) {
    return ''
  }

  let wrapper = createElement('video-wrapper')

  wrapper.innerHTML = iframe

  if (title) {
    let titleElement = createElement('video-title', 'h3', title)
    wrapper.prepend(titleElement)
  }

  return wrapper
}


{/* <div class="video-wrapper">
  <h3 class="video-title">#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien</h3>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div> */}