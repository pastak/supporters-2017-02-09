document.querySelector('button').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'hi'
  })
})

document.querySelector('#foo').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'foo'
  }, (response) => {
    document.body.innerHTML = response
  })
})
