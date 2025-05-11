// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)
const messageCustom = urlSearchParams.get('message')

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

const containerLetter = document.querySelector('.container-letter')
const overlay = document.querySelector('.overlay')
const paper = document.querySelector('.paper')
let isOpen = false

containerLetter.addEventListener('click', () => {
  if (!isOpen) {
    openLetter()
  }
})

overlay.addEventListener('click', () => {
  if (isOpen) {
    closeLetter()
  }
})

function openLetter() {
  isOpen = true
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(() => {
    coverElement.style.zIndex = -1
    
    // Show overlay and paper
    overlay.classList.add('active')
    paper.classList.add('open-paper')

    // heart animation
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  }, 500)
}

function closeLetter() {
  isOpen = false
  const coverElement = document.querySelector('.cover')
  paper.classList.remove('open-paper')
  overlay.classList.remove('active')
  
  setTimeout(() => {
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // heart animation
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  }, 300)
}
