const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordconfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordconfirmationValue = passwordconfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "O nome deve ter no minímo 3 letras");
  } else if (usernameValue.length > 25) {
    setErrorFor(username, "O nome deve conter no maximo 25 letras");
  } else {
    SetSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "o email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido");
  } else {
    SetSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha é muito curta.");
  } else {
    SetSuccessFor(password);
  }

  if (passwordconfirmationValue === "") {
    setErrorFor(passwordconfirmation, "A comfirmação da senha é obrigatória.");
  } else if (passwordconfirmationValue.length < 8) {
    setErrorFor(passwordconfirmation, "A senha é muito curta");
  } else if (passwordconfirmationValue != passwordValue) {
    setErrorFor(passwordconfirmation, "As senhas não são iguais.");
  } else {
    SetSuccessFor(passwordconfirmation);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //adcionar mensagem
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = "form-control error";
}

function SetSuccessFor(input) {
  const formControl = input.parentElement;

  //adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true; //button remains disabled
  } else {
    button.disabled = false; //button is enabled
  }
}
