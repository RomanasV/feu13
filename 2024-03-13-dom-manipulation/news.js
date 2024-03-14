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





let primaryNewsItem1 = createElement('news-item')
primaryNewsList.append(primaryNewsItem1)

let primaryNewsItemLink1 = createElement('a')
primaryNewsItemLink1.href = '#'
primaryNewsItem1.append(primaryNewsItemLink1)

let primaryNewsImageWrapper1 = createElement('news-image-wrapper')
primaryNewsItemLink1.append(primaryNewsImageWrapper1)

let primaryNewsImage1 = createElement('news-image', 'img')
primaryNewsImage1.src = 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg'
primaryNewsImage1.alt = ''
primaryNewsImageWrapper1.append(primaryNewsImage1)

let primaryNewsContentWrapper1 = createElement('news-content-wrapper')
primaryNewsItemLink1.append(primaryNewsContentWrapper1)

let primaryNewsCategory1 = createElement('news-category', 'span', 'Programavimas')
primaryNewsContentWrapper1.append(primaryNewsCategory1)

let primaryNewsTitle1 = createElement('news-title', 'h2', 'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų')
primaryNewsContentWrapper1.append(primaryNewsTitle1)

let primaryNewsDate1 = createElement('news-date', 'span', '2024-02-01')
primaryNewsContentWrapper1.append(primaryNewsDate1)







let primaryNewsItem2 = createElement('news-item')
primaryNewsList.append(primaryNewsItem2)

let primaryNewsItemLink2 = createElement('a')
primaryNewsItemLink2.href = '#'
primaryNewsItem2.append(primaryNewsItemLink2)

let primaryNewsImageWrapper2 = createElement('news-image-wrapper')
primaryNewsItemLink2.append(primaryNewsImageWrapper2)

let primaryNewsImage2 = createElement('news-image', 'img')
primaryNewsImage2.src = 'https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg'
primaryNewsImage2.alt = ''
primaryNewsImageWrapper2.append(primaryNewsImage2)

let primaryNewsContentWrapper2 = createElement('news-content-wrapper')
primaryNewsItemLink2.append(primaryNewsContentWrapper2)

let primaryNewsCategory2 = createElement('news-category', 'span', 'Programavimas')
primaryNewsContentWrapper2.append(primaryNewsCategory2)

let primaryNewsTitle2 = createElement('news-title', 'h2', 'Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 52 mln. papildomų eurų')
primaryNewsContentWrapper2.append(primaryNewsTitle2)

let primaryNewsDate2 = createElement('news-date', 'span', '2024-02-02')
primaryNewsContentWrapper2.append(primaryNewsDate2)




let secondaryNewsList = createElement('secondary-news-list')
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
  element.classList.add(className)
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