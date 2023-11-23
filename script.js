let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGQRSTUVWXYZ0123456789!@/";

let newPass = "";

sizepassword.innerHTML = sliderElement.value 

slider.oninput = function () {
  sizepassword.innerText = this.value;
}


function generatePassword(){

  let pass = '';

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass
  newPass = pass
}


function novasenha(){
  navigator.clipboard.writeText(newPass)
  alert(`Senha copiada com sucesso!! ${newPass}`)

}

containerPassword.addEventListener("click", novasenha)

buttonElement.addEventListener("click", generatePassword);

