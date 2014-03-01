chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        'file': './js/switch.js'
    });
});