(function() {
  'use strict';

  var devToolsPors = chrome.runtime.connect({
    name: 'devtools'
  });

  document.addEventListener('click', function(ev) {
    devToolsPors.postMessage({
      greeting: 'Hello from the devtools panel'
    });
  });
})();
