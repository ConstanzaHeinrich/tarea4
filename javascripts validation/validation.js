// Función que valida el correo electrónico
function emailValidation() {
    // Obtener el formulario por su ID
    const formulario = document.getElementById('form');
    
    // Obtener el campo de confirmación de correo electrónico por su ID
    const emailConfirmField = document.getElementById('email_confirm');
    
    // Crear un nuevo elemento <p> para mostrar mensajes de alerta
    const elemento = document.createElement('p');
    
    // Crear el texto del mensaje de alerta
    const mensaje = document.createTextNode("El correo electrónico no coincide");
    
    // Añadir el texto al elemento <p>
    elemento.appendChild(mensaje);
    
    // Añadir la clase CSS color_de_alerta al elemento de mensaje
    elemento.classList.add('color_de_alerta');
    
    // Añadir un evento de escucha al campo de confirmación de correo electrónico
    emailConfirmField.addEventListener('input', e => {
      // Si el correo electrónico del formulario no coincide con el de confirmación
      if (formulario.email.value !== formulario.email_confirm.value) {
        // Si no existe un elemento de alerta ya en el documento
        if (!document.getElementById('alert')) {
          // Asignar un ID al elemento de alerta para poder identificarlo posteriormente
          elemento.id = 'alert';
          // Insertar el mensaje de alerta después del campo de confirmación
          emailConfirmField.parentNode.appendChild(elemento);
          // Añadir una clase CSS para resaltar el campo de confirmación
          emailConfirmField.classList.add("alert_bg");
        }
      } else {
        // Si los correos coinciden, eliminar la clase CSS de alerta
        emailConfirmField.classList.remove("alert_bg");
        // Eliminar el mensaje de alerta si existe
        if (document.getElementById('alert')) {
          emailConfirmField.parentNode.removeChild(elemento);
        }
      }
    });
  };
  
  // Ejecutar la función emailValidation al cargar la página
  window.onload = function() {
    emailValidation();
  };
  
  