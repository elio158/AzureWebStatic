document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Mostrar un mensaje
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `Gracias por tu mensaje, ${name}! Te responderemos pronto.`;
    
    // Limpiar el formulario
    document.getElementById('contact-form').reset();
});
