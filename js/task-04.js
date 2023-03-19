let counterValue = 0;
const value = document.querySelector("#value");
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const clickButtonDecrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const clickButtonIncrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

buttonDecrement.addEventListener("click", clickButtonDecrement);
buttonIncrement.addEventListener("click", clickButtonIncrement);
