const form = document.querySelector(".login-form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const email = form.elements.email.value;
  const password = form.elements.password.value
  if (email === "" || password === "")
  {alert("Upomnienij się, że wszystkie pola zostały wypełnione.");
  }
  else {
    const formData = {
      email: email,
      password: password
    }
    console.log(formData)
    form.reset()
  }
})