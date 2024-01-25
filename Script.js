/* Variables */

/*Section Variables */
const ourMenuSection = document.querySelector('.Our-Menu')
const deliverySection = document.querySelector('.Delivery')
const advantadesSection = document.querySelector('.Advantages')
const faqSection = document.querySelector('.FAQ')
const feedbackSection = document.querySelector('.Feedback')
const sectionArr = [ourMenuSection, deliverySection, advantadesSection, faqSection, feedbackSection]

/* Header */
const headerLinks = document.getElementById('header-links')
const headerLinksItems = Array.from(headerLinks.children)
const headerLinksItemsNotLinks = headerLinksItems.splice(0, 2)
const headerNavElement = document.getElementById('header-nav-element')
const headerNavElementItems = Array.from(headerNavElement.children)
const headerNavElement3ItemItems = Array.from(headerNavElementItems[2].children)

/* Our Menu Section */
const ourMenuRow = document.querySelector('.our-menu-row')
const ourMenuRowItems = Array.from(ourMenuRow.children)
const ourMenuCardNavRow = document.querySelector('.our-menu-card-nav-row')
const ourMenuCardNavRowItems = Array.from(ourMenuCardNavRow.children)
const ourMenuCardNavSlider = document.querySelector('.our-menu-card-nav-slider')
const ourMenuCardNavSliderItems = Array.from(ourMenuCardNavSlider.children)
const ourMenuCardNavSlider2ItemItems = Array.from(ourMenuCardNavSliderItems[1].children)

const ourMenuSlider = document.querySelector('.our-menu-card-slider')
const ourMenuSliderItems = Array.from(ourMenuSlider.children)
const ourMenuSliderBtnPrev = ourMenuSliderItems[0]
const ourMenuSliderBtnNext = ourMenuSliderItems[2]
const ourMenuSliderContent = document.getElementById('our-menu-slider-content')
const ourMenuSliderPoints = document.querySelector('.our-menu-card-slider-circles')
const ourMenuSliderPointsItems = Array.from(ourMenuSliderPoints.children)

const ourMenuCardMenuContent = document.querySelector('.our-menu-card-menu-content')
const ourMenuCardMenuContentItems = Array.from(ourMenuCardMenuContent.children)

/* FAQ Section */
const faqRow = document.getElementById('faq-row')
const raqRowItems = Array.from(faqRow.children)
const faqMenu = document.querySelector('.faq-menu')
const faqMenuItems = Array.from(faqMenu.children)

/* For Privacy policy */

/* Footer */
const footerLinks = document.getElementById('footer-links')
const footerLinksItems = Array.from(footerLinks.children)

/* Functions */

/* Header */
headerLinksItems.forEach(function (element, index) {
  element.addEventListener('click', function () {
    sectionArr[index].scrollIntoView({behavior: 'smooth'})
  })
})

headerNavElement.addEventListener('click', function () {
  headerNavElement.classList.toggle('active')
})

headerNavElementItems[2].addEventListener('click', function (event) {
  event.stopPropagation()
})

headerNavElement3ItemItems.forEach(function(element) {
  element.addEventListener('click', function () {
    headerNavElementItems[0].innerHTML = element.textContent
  })
})

/* Our Menu Section */
window.addEventListener('load', function () {
  if (window.innerWidth < 600) {
    ourMenuCardNavRow
  }
})

console.log(-ourMenuCardNavRow.offsetWidth)

ourMenuRowItems.forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active')
  })
})

function changeHtmlContent () {
  let weekArr = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  if (window.innerWidth <= 1250) {
    ourMenuCardNavRowItems.forEach(function (element, index) {
      element.dataset.index = index
      element.innerHTML = `${weekArr[index]}`
    })
  let ourMenuCardMenuContentItemsFirstItemChildren = Array.from(ourMenuCardMenuContentItems[0].children)
  ourMenuCardMenuContentItemsFirstItemChildren[1].innerHTML = 'Total: 1435 kcal'
  } 
}

changeHtmlContent()

ourMenuCardNavRowItems.forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active')
  })
})

let number = 1

ourMenuCardNavSliderItems[2].addEventListener('click', function () {
  number++
  ourMenuCardNavSliderItems[1].innerHTML = `Week ${number} <span>This week</span>`
})

ourMenuCardNavSliderItems[0].addEventListener('click', function () {
  if (number > 1) {
    number--
  }
  ourMenuCardNavSliderItems[1].innerHTML = `Week ${number} <span>This week</span>`
})

console.log(ourMenuCardNavSliderItems[1])

/* Our Menu Section Slider */
ourMenuSliderPointsItems.forEach(function (element, index) {
  element.dataset.index = index
  ourMenuSliderPointsItems[0].classList.add('active')
  ourMenuSliderPointsItems[0].setAttribute('data-active', '')
})

function changeColorOfPoints (direction) {
  let currentPoint = ourMenuSliderPoints.querySelector('[data-active]')
  let currentPointIndex = +currentPoint.dataset.index
  currentPoint.removeAttribute('data-active', '')
  currentPoint.classList.remove('active')

  let nextPointIndex;
  if (direction === 'prev') {
    nextPointIndex = currentPointIndex === 0 ? ourMenuSliderPointsItems.length - 1 : currentPointIndex - 1
  } else if (direction === 'next') {
    nextPointIndex = currentPointIndex + 1 === ourMenuSliderPointsItems.length ? 0 : currentPointIndex + 1
  }

  let nextPoint = ourMenuSliderPoints.querySelector(`[data-index = '${nextPointIndex}']`)
  nextPoint.setAttribute('data-active', '')
  nextPoint.classList.add('active')
}

ourMenuSliderBtnNext.addEventListener('click', function () {
  let ourMenuSliderContentItems = Array.from(ourMenuSliderContent.children)
  ourMenuSliderContent.scrollLeft +=  ourMenuSliderContentItems[0].offsetWidth + 6 
  changeColorOfPoints('next')
})

ourMenuSliderBtnPrev.addEventListener('click', function () {
  let ourMenuSliderContentItems = Array.from(ourMenuSliderContent.children)
  ourMenuSliderContent.scrollLeft -=  ourMenuSliderContentItems[0].offsetWidth + 6
  changeColorOfPoints('prev')
})

if (window.innerWidth <= 768) {
  ourMenuSliderContent.scrollLeft = 75
}

/* FAQ Section */
raqRowItems.forEach(function(element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active');
  })
})

faqMenuItems.forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active')
  })
})

/* For Privacy policy */

/* Footer */
footerLinksItems.forEach(function (element, index) {
  element.addEventListener('click', function () {
    sectionArr[index].scrollIntoView({behavior: 'smooth'})
  })
})
