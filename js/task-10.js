function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

const totalArray = [];

refs.inputEl.addEventListener("input", enterInput);
console.log();
function enterInput(event) {
  let amount = event.target.value;
  refs.createBtn.addEventListener("click", () => {
    createBoxes(amount);
    appElementHtml(amount);
  });

  refs.destroyBtn.addEventListener("click", () => {
    refs.boxesEl.innerHTML = "";
    totalArray.splice(0, amount);
    amount = 0;
    event.target.value = "";
  });
}

function appElementHtml() {
  refs.boxesEl.append(...totalArray);
}

function createBoxes(amount) {
  let stepPx = 0;
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = 30 + stepPx + "px";
    divEl.style.height = 30 + stepPx + "px";
    stepPx += 10;
    totalArray.push(divEl);
  }
}
