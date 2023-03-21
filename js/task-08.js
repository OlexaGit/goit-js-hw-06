const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email.length === 0 || password.length === 0) {
    alert("Please fill in all fields");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    formEl.reset();
  }
}
