function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundEl = document.querySelector("body");
const valueColorEl = document.querySelector(".color");
const targetBtnEl = document.querySelector(".change-color");

targetBtnEl.addEventListener("click", () => {
  let valueColor = getRandomHexColor();
  valueColorEl.textContent = valueColor;
  backgroundEl.style.backgroundColor = valueColor;
});
