"use strict";
// Progressive enhancement only; all content and navigation work without JavaScript.
// No cookies, browser storage, analytics, or network requests.
document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    item.querySelector("summary").setAttribute("aria-expanded", String(item.open));
  });
});
