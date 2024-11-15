/// EJERCICIO 1

const imagen = document.querySelector("#img");
debugger;
imagen.addEventListener("click", function () {
  imagen.classList.toggle("border");
});

/// EJERCICIO 2

const boton = document.querySelector("#verificar");
const resultado = document.querySelector("#resultado");
boton.addEventListener("click", calcular);
function calcular() {
  const b1 = parseInt(document.querySelector("#b1").value);
  const b2 = parseInt(document.querySelector("#b2").value);
  const b3 = parseInt(document.querySelector("#b3").value);
  let total = b1 + b2 + b3;
  if (total <= 10) {
    resultado.innerHTML = `<h2>Llevas ${total} stickers</h2>`;
  } else {
    resultado.innerHTML = "<h2>Llevas demaciados sticker</h2>";
  }
}

/// EJERCICIO 3

const validar = document.querySelector("#validar");
const mensaje = document.querySelector("#mensaje");
validar.addEventListener("click", password);
function password() {
  const number1 = parseInt(document.querySelector("#number1").value);
  const number2 = parseInt(document.querySelector("#number2").value);
  const number3 = parseInt(document.querySelector("#number3").value);
  if (number1 === 9 && number2 === 1 && number3 === 1) {
    mensaje.innerHTML = "<h2>Contraseña Correcta</h2>";
  } else if (number1 === 7 && number2 === 1 && number3 === 4) {
    mensaje.innerHTML = "<h2>Contraseña Correcta</h2>";
  } else {
    mensaje.innerHTML = `<h2>Contraseña Incorrecta. Siga participando</h2>`;
  }
}
