console.log('hello world background todo something~')
// background.js

function getActiveTab(tabs) {
    if (tabs.length > 0) {
        return tabs[0];
    } else {
        console.info('Error: No active tabs found.');
        return null;
    }
}

function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = getActiveTab(tabs);
        if (activeTab) {
            chrome.tabs.sendMessage(activeTab.id, message);
        } else {
            console.info('Error: The active tab is not a valid web page.');
        }
    });
}

// eslint-disable-next-line no-unused-vars
function handleMessage(msg, sender, sendResponse) {
    if (msg.action === 'log') {
        sendMessageToContentScript({ action: 'log', message: msg.message });
    }

}

chrome.runtime.onMessage.addListener(handleMessage);
