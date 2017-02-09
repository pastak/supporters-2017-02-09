(() => {
  document.body.style.background = 'red'
  Array.from(document.querySelectorAll('img')).forEach((img) => {
    img.src = 'https://i.gyazo.com/28f6e987103409c495df18338dbe3f3d.png'
    img.addEventListener('click', () => alert('こんにちは'))
  })
  document.querySelector('body').addEventListener('click', (e) => {
    e.preventDefault()
    chrome.runtime.sendMessage({action: 'reg-button'})
  })
})()
