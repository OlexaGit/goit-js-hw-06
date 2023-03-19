const inputNameEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputNameEl.addEventListener("input", inputChange);

function inputChange(event) {
  nameOutput.textContent =
    event.currentTarget.value.trim().length === 0
      ? "Anonymous"
      : event.currentTarget.value;
}
