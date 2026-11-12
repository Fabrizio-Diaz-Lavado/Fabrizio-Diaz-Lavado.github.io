const boton = document.getElementById("btn-registro");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "¡Listo! Tu registro gratuito simulado ha comenzado.";
  boton.textContent = "Registro iniciado";
  boton.disabled = true;
  boton.setAttribute("aria-disabled", "true");
});