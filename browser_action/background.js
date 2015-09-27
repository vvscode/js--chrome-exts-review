function handleButtonClick() {
  chrome.tabs.create({
    index: 0,
    url: 'http://ya.ru'
  }, function(tab){
    console.log(tab.url);
  });
}
