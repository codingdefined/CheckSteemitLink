chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  if(document.getElementById('currentsite') !== null) {
    var url = new URL(tabs[0].url)
    var domain = url.hostname
    document.getElementById('currentsite').innerHTML = "You are currently on <b>" + domain + "</b>, if you intended to go to Steemit, then the correct link is <b><a href='https://steemit.com'>Steemit.com</a></b>.";
  }
});
