window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(artists)
  activateMenuAtCurrentSection(tattos)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #wrapper,
  #artists,
  #artists .content,
  #artists .cards,
  #artists .card
  #tattos,
  #tattos header,
  #tattos .gallery,
  #tattos .gallery-items,
  #tattos img,
  #about, 
  #about header, 
  #about .content,
  #contact,
  #contact img,
  #contact header,
  #contact .content`)
