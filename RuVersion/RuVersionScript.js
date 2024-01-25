/* Variables */

/* Our Menu Section */
const OurMenuWeekRow = document.getElementById('our-menu-week-row');
const OurMenuWeekRowItems = Array.from(OurMenuWeekRow.children);

const OurMenuCardNavSlider = document.querySelector('.our-menu-card-nav-slider')
const OurMenuCardNavSliderItems = Array.from(ourMenuCardNavSlider.children)
console.log(ourMenuCardNavSlider)

/* Functions */

/* Our Menu Section */
window.addEventListener('load', function () {
  if (window.innerWidth <= 1250) {
    OurMenuWeekRowItems.forEach(function(element, index) {
      let weekArr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
      element.innerHTML = weekArr[index];
    })
  };
})

let num = 1

OurMenuCardNavSliderItems[2].addEventListener('click', function () {
  num++
  OurMenuCardNavSliderItems[1].innerHTML = `Неделя ${num} <span>Эта неделя</span>`
})

OurMenuCardNavSliderItems[0].addEventListener('click', function () {
  if (num > 1) {
    num--
  }
  OurMenuCardNavSliderItems[1].innerHTML = `Неделя ${num} <span>Эта наделя</span>`
})