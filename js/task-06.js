const validatorInputEl = document.querySelector("#validation-input");
const characterLength = document.querySelector('[data-length="6"]');

validatorInputEl.addEventListener("blur", (event) => {
  validatorInputEl.classList.add("invalid");
  if (
    event.currentTarget.value.length === Number(characterLength.dataset.length)
  ) {
    validatorInputEl.classList.replace("invalid", "valid");
  }
});
