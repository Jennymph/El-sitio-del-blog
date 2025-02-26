document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío real del formulario

    let alertMessage = document.getElementById("alertMessage");
    alertMessage.classList.remove("d-none");
  });
