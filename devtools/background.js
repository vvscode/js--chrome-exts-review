(function() {
  'use strict';

  chrome.runtime.onConnect.addListener(function(devToolsPort){
    devToolsPort.onMessage.addListener(function(message) {
      console.log(message);
      alert(message.greeting);
    });
  });
})();
