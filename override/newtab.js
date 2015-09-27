chrome.topSites.get(function(sites) {
  console.log('Sites:');
  console.log(sites);
});

chrome.bookmarks.getRecent(10, function(bookmarks) {
  console.log('Bookmarks:');
  console.log(bookmarks);
});

chrome.history.search({ text: ''}, function(results) {
  console.log('Results', results);
});
