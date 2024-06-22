export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("youtube.com/watch")) {
      chrome.tabs.sendMessage(tabId, { type: "YT_WATCH_PAGE" });
      console.log("Found yt page");
    }
  });
});
