export default defineContentScript({
  matches: ["*://*.google.com/*", "*://*.youtube.com/*"],
  main() {
    console.log("Hello content.");

    document.addEventListener("DOMContentLoaded", () => {
      console.log("Hello content.");

      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "YT_WATCH_PAGE") {
          console.log("Navigated to a YouTube watch page!");
        }
      });
    });
  },
});
