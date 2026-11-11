const card = document.querySelector(".card");
const openButton = document.getElementById("openButton");
const letter = document.getElementById("letter");

openButton.addEventListener("click", () => {
  const isOpen = card.classList.toggle("is-open");
  openButton.setAttribute("aria-expanded", String(isOpen));
  openButton.querySelector("span:first-child").textContent =
    isOpen ? "Close message" : "Open our message";
  openButton.querySelector(".button-arrow").textContent = isOpen ? "↙" : "↗";

  if (isOpen) {
    letter.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
