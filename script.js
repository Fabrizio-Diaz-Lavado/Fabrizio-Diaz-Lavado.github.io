const boton = document.getElementById("btn-registro");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "¡Listo! Tu registro gratuito ha comenzado.";
  mensaje.style.color = "#1ed760";
  boton.textContent = "Registro iniciado";
  boton.disabled = true;
  boton.setAttribute("aria-disabled", "true");
});
