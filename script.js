document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const campos = ["nombre", "correo", "mensaje"];
  const feedbackContainer = document.getElementById("form-feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valido = true;

    // Limpiar mensajes anteriores
    feedbackContainer.innerHTML = "";

    campos.forEach((campo) => {
      const input = document.getElementById(campo);
      const feedback = input.nextElementSibling;

      if (!input.value.trim()) {
        input.classList.add("is-invalid");
        feedback.textContent = `El campo "${campo}" es obligatorio.`;
        valido = false;
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedback.textContent = "";
      }
    });

    if (valido) {
      feedbackContainer.innerHTML = `
        <div class="alert alert-success mt-3" role="alert">
          ✅ ¡Formulario enviado correctamente!
        </div>`;
      form.reset();

      // Limpiar estilos de validación después de 2 segundos
      setTimeout(() => {
        campos.forEach((campo) => {
          document.getElementById(campo).classList.remove("is-valid");
        });
        feedbackContainer.innerHTML = "";
      }, 2000);
    }
  });
});