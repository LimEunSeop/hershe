$(function () {
  $('.professional__slider').slick({
    arrows: true,
    dots: true,
    prevArrow:
      '<button type="button" class="professional__slider-prevbutton"><img src="images/cp_prev.png" alt="이전" /></button>',
    nextArrow:
      '<button type="button" class="professional__slider-nextbutton"><img src="images/cp_next.png" alt="다음" /></button>',
  })

  $('.academic__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  })

  var mainVideoSection = document.querySelector('.main-video')
  var mainVideoDimmer = document.querySelector('.main-video__dimmer')
  var professionalSection = document.querySelector('.professional')
  var academicSection = document.querySelector('.academic')
  var focusSection = document.querySelector('.focus')
  var programSection = document.querySelector('.program')
  var reviewSection = document.querySelector('.review')
  var etc = document.querySelector('.etc')
  var sns = document.querySelector('.sns')

  var sections = [
    mainVideoSection,
    professionalSection,
    academicSection,
    focusSection,
    programSection,
    reviewSection,
    etc,
    sns,
  ]

  var focusItems = focusSection.querySelectorAll('.focus__item')
  focusItems.forEach(function (item) {
    var button = item.querySelector('button')
    button.addEventListener('click', function (e) {
      focusItems.forEach(function (toDeactivateItem) {
        toDeactivateItem.classList.remove('active')
      })
      item.classList.add('active')
    })
  })

  window.addEventListener('scroll', function (e) {
    var scrollTop = window.scrollY
    var scrollBottom = scrollTop + window.innerHeight

    activateSections(sections, scrollBottom)
    dimVideoByScroll(mainVideoSection, mainVideoDimmer, scrollY)
  })
})

function activateSections(sections, scrollBottom) {
  sections.forEach(function (section) {
    if (scrollBottom > getCenterOffset(section)) {
      section.classList.add('active')
    } else {
      section.classList.remove('active')
    }
  })
}

function dimVideoByScroll(videoEl, videoDimmer, scrollY) {
  var videoScrollStart = videoEl.offsetTop

  var scrollOffsetFromVideo =
    scrollY - videoScrollStart > 0 ? scrollY - videoScrollStart : 0
  var videoHeight = videoEl.offsetHeight

  var opacity =
    scrollOffsetFromVideo / videoHeight > 1
      ? 1
      : scrollOffsetFromVideo / videoHeight

  videoDimmer.style.opacity = opacity
}

function getCenterOffset(element) {
  return element.offsetTop + element.offsetHeight / 2
}
