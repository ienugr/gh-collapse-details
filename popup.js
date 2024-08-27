document.getElementById("collapse-details").addEventListener("click", () => {
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.getCurrent().id },
    function: collapseDetails,
  });
});

function collapseDetails() {
  const openDetailsElements = document.querySelectorAll("details[open]");
  openDetailsElements.forEach((details) => {
    details.removeAttribute("open");
  });
}
