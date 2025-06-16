document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('nombre');
    const telefonoInput = document.getElementById('telefono');

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const telefonoRegex = /^\d{4}-\d{4}$/;

    // Validación en vivo y restricción para el nombre
    nombreInput.addEventListener('input', function () {
        const soloLetras = nombreInput.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        if (nombreInput.value !== soloLetras) {
            nombreInput.value = soloLetras; // Elimina caracteres inválidos
        }

        nombreInput.classList.toggle('is-valid', nombreRegex.test(nombreInput.value));
        nombreInput.classList.toggle('is-invalid', !nombreRegex.test(nombreInput.value));
    });

    // Restricción y validación para teléfono
    telefonoInput.addEventListener('input', function () {
        // Solo permite números y un guion en la quinta posición
        let value = telefonoInput.value.replace(/[^\d]/g, '');
        if (value.length > 4) {
            value = value.slice(0, 4) + '-' + value.slice(4, 8);
        }
        telefonoInput.value = value.slice(0, 9);

        telefonoInput.classList.toggle('is-valid', telefonoRegex.test(telefonoInput.value));
        telefonoInput.classList.toggle('is-invalid', !telefonoRegex.test(telefonoInput.value));
    });

    // Previene pegar contenido inválido
    telefonoInput.addEventListener('paste', (e) => e.preventDefault());
    nombreInput.addEventListener('paste', (e) => e.preventDefault());
});


async function guardarLead(event) {
  // Prevenir que el formulario recargue la página
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("correo").value;
  const phone = document.getElementById("telefono").value;
  
  // Mostrar el spinner mientras se procesa la solicitud
  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor espera mientras procesamos tu solicitud',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
    backdrop: true
  });
  
  try {
    const response = await fetch('https://fundacionsantateresa.azurewebsites.net/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: nombre,
        Email: email,
        Phone: phone
      })
    });
    
    // Cerrar el spinner de carga
    Swal.close();
    
    if (response.ok) {
      const resultado = await response.json();
      console.log('Lead enviado exitosamente:', resultado);
      
      // Mostrar mensaje de éxito
      Swal.fire({
        title: '¡Solicitud exitosa!',
        text: `Gracias por apoyarnos, ${nombre}!`,
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#3085d6'
      });
      
      // Limpiar el formulario
      document.getElementById("nombre").value = '';
      document.getElementById("correo").value = '';
        document.getElementById("telefono").value = '';
      
      return resultado;
    } else {
      console.error('Error al enviar lead:', response.status);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo completar la Solicitud. Por favor, intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#d33'
      });
      throw new Error(`Error al enviar lead: ${response.status}`);
    }
  } catch (error) {
    // Asegurarse de cerrar el spinner en caso de error
    Swal.close();
    
    console.error('Error en la solicitud:', error);
    Swal.fire({
      title: 'Error de conexión',
      text: 'No se pudo conectar al servidor. Por favor, verifica tu conexión e intenta nuevamente.',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#d33'
    });
    throw error;
  }
}