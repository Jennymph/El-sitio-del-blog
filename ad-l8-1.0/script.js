document.getElementById('submit-btn').addEventListener('click', function (event)
{
    event.preventDefault();
    alert('Mensaje enviado');
});

document.getElementById("contact-form").addEventListener("submit", function (event)
{
    event.preventDefault(); 

    let email = document.getElementById("form_email").value;
    let name = document.getElementById("form_name").value;
    let message = document.getElementById("form_message").value;

    let mailtoLink = `mailto:tucorreo@ejemplo.com?subject=Mensaje de ${name}&body=Correo: ${email}%0D%0AMensaje: ${message}`;

    window.location.href = mailtoLink;
});
