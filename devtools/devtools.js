chrome.devtools.panels.create(
  'Example panel',
  null,
  "panel/panel.html",
  null
);

chrome.devtools.panels.elements.createSidebarPane('My element pane', function(pane) {
  pane.setPage('pane_for_elements/pane.html');
});

chrome.devtools.panels.sources.createSidebarPane('My sources pane', function(pane){
  pane.setPage('pane_for_sources/pane.html');
  pane.setHeight('200px');
  pane.onShown.addListener(function() {
    pane.setExpression('(' + getAllTheDivs.toString() + ')()');
  });
});

function getAllTheDivs() {
  return [].slice.call(document.getElementsByTagName('div'));
}
