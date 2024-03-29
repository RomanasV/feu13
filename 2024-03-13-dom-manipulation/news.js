import createElement from './components/createElement.js'
import largeLink from './components/largeLink.js'
import createNewsItem from './components/newsItem.js'
import { eventsDate, podcastsListData, primaryNewsData, secondaryNewsData } from './config.js'

function init() {
  let content = document.getElementById('content')

  let container = createElement('container')
  content.append(container)
  
  let pageContent = createElement('page-content')
  container.append(pageContent)
  
  let mainContent = createElement('main-content', 'main')
  pageContent.append(mainContent)
  
  let newsSection = createElement('news-section')
  mainContent.append(newsSection)
  
  let pageTitle = createElement('page-title', 'h1', 'Naujienos')
  
  let primaryNewsList = createElement('primary-news-list')
  
  primaryNewsData.forEach(newsData => {
    let primaryNewsItem = createNewsItem(newsData)
  
    primaryNewsList.append(primaryNewsItem)
  })
  
  
  let secondaryNewsList = createElement('secondary-news-list')
  
  secondaryNewsData.forEach(newsData => secondaryNewsList.append(createNewsItem(newsData)))
  
  let moreNewsButton = largeLink('#', 'Visos naujienos')
  
  newsSection.append(pageTitle, primaryNewsList, secondaryNewsList, moreNewsButton)
  
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
  
  
  let sidebarContent = createElement('sidebar-content', 'aside')
  pageContent.append(sidebarContent)
  
  let podcastsSection = createPodcastsSection(podcastsListData, 'Podcastai ir radijo laidos')
  let eventsSection = createEventsSection(eventsDate, 'Renginiai')
  sidebarContent.append(podcastsSection, eventsSection)
}

init()


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

function createPodcastsSection(podcastsData, sectionTitle) {
  let section = createElement('podcasts-section')

  let titleElement = createElement('section-title', 'h2', sectionTitle)
  section.append(titleElement)

  let podcastsListElement = createElement('podcasts-list')
  section.append(podcastsListElement)

  podcastsData.forEach(podcastData => {
    let podcastItem = createPodcastItem(podcastData)
    podcastsListElement.append(podcastItem)
  })

  return section
}

function createPodcastItem(data) {
  let podcastItem = createElement('podcast-item')

  if (data.imageSrc) {
    let imageElement = createElement('podcast-image', 'img')
    imageElement.src = data.imageSrc
    imageElement.alt = data.imageAlt
    podcastItem.append(imageElement)
  }

  let lengthElement = createElement('podcast-length', 'span', `Trukmė: ${data.length}`)
  podcastItem.append(lengthElement)

  let playElement = createElement('podcast-play', 'button', 'Play')
  podcastItem.append(playElement)

  let podcastContentElement = createElement('podcast-content')
  podcastItem.append(podcastContentElement)

  let podcastTitleElement = createElement('podcast-title', 'h3', data.title)
  podcastContentElement.append(podcastTitleElement)

  let podcastDateElement = createElement('podcast-date', 'span', data.date)
  podcastContentElement.append(podcastDateElement)

  return podcastItem
}

function createEventsSection(eventsData, sectionTitle) {
  let sectionElement = createElement('events-section')
  
  let titleElement = createElement('section-title', 'h2', sectionTitle)
  sectionElement.append(titleElement)
  
  let eventsListElement = createElement('events-list')
  sectionElement.append(eventsListElement)
  
  eventsData.forEach(eventData => {
    let eventItem = createEventItem(eventData)
    eventsListElement.append(eventItem)
  })

  return sectionElement
}

function createEventItem(data) {
  let { date, imageAlt, imageSrc, location, title, url } = data

  let eventItem = createElement('event-item')

  let eventLink = createElement('', 'a')
  eventLink.href = url

  eventItem.append(eventLink)

  if (imageSrc) {
    let imageWrapperElement = createElement('event-image-wrapper')
    eventLink.append(imageWrapperElement)

    let imageElement = createElement('event-image', 'img')
    imageElement.src = imageSrc
    imageElement.alt = imageAlt
    imageWrapperElement.append(imageElement)
  }

  let contentWrapper = createElement('event-content-wrapper')
  eventLink.append(contentWrapper)

  let dateElement = createElement('event-date')
  contentWrapper.append(dateElement)

  let dayElement = createElement('event-day', 'div', date.day)
  let monthElement = createElement('event-month', 'div', date.month)
  dateElement.append(dayElement, monthElement)

  let contentElement = createElement('event-content')
  contentWrapper.append(contentElement)

  let eventLocation = createElement('event-location', 'span', location)
  contentElement.append(eventLocation)
  
  let eventTitle = createElement('event-title', 'h3', title)
  contentElement.append(eventTitle)

  return eventItem
}
