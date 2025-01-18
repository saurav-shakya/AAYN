// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Attention All You Need extension installed.");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
        }).catch(err => console.error('Failed to inject script:', err));
    }
});