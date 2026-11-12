const form = document.getElementById("form-registro");
const boton = document.getElementById("btn-registro");
const btnReiniciar = document.getElementById("btn-reiniciar");
const mensaje = document.getElementById("mensaje");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const valorCorreo = emailInput.value.trim();
  const correoValido = valorCorreo === "" || emailInput.checkValidity();

  emailInput.setAttribute("aria-invalid", String(!correoValido));
  emailError.hidden = correoValido;

  if (!correoValido) {
    mensaje.textContent = "";
    emailInput.focus();
    return;
  }

  const planSeleccionado = document.querySelector('input[name="plan"]:checked');
  const nombrePlan = planSeleccionado ? planSeleccionado.value : "Gratis";

  mensaje.textContent = "¡Listo! Tu registro gratuito (" + nombrePlan + ") ha comenzado (simulación).";
  mensaje.style.color = "#1ed760";
  mensaje.style.borderColor = "rgba(29, 185, 84, 0.45)";

  boton.textContent = "Registro iniciado";
  boton.disabled = true;
  boton.setAttribute("aria-disabled", "true");
  btnReiniciar.classList.remove("hidden");
});

btnReiniciar.addEventListener("click", function () {
  boton.disabled = false;
  boton.removeAttribute("aria-disabled");
  boton.textContent = "Regístrate gratis";
  mensaje.textContent = "";
  mensaje.style.borderColor = "transparent";
  emailInput.value = "";
  emailInput.setAttribute("aria-invalid", "false");
  emailError.hidden = true;
  btnReiniciar.classList.add("hidden");
  boton.focus();
});
