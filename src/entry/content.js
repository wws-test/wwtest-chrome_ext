console.log('hello world content todo something~')


// Listens for messages from the popup
// eslint-disable-next-line no-unused-vars
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === 'log') {
        console.log(msg.message);
    }
});

