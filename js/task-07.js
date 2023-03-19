const inputEl = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  //   console.log(typeof inputEl.value);
  textControl.style.fontSize = inputEl.value + "px";
});
