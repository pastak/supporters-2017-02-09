chrome.browserAction.setPopup({popup: '/popup.html'})
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'hi') {
    chrome.tabs.create({url: 'http://supporterz.jp'})
  } else if (message.action === 'foo') {
    sendResponse('<marquee>welcome</marquee>')
  } else if (message.action === 'reg-button') {
    chrome.tabs.remove(sender.tab.id)
  }
  return true
})
chrome.contextMenus.create({
  id: "supporterz",
  title: "Open supporterz",
  contexts: ["all"]
})

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'supporterz') {
    chrome.tabs.create({url: 'http://supporterz.jp'})
  }
})
