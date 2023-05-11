const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const mensaje = document.getElementById('mensaje');
  let isValid = true;

  // Validacion nombre
  if (nombre.value.trim() === '') {
    isValid = false;
    nombre.classList.add('is-invalid');
    nombre.nextElementSibling.innerHTML = 'Por favor, ingrese un nombre v&aacute;lido.';
  } else {
    nombre.classList.remove('is-invalid');
    nombre.classList.add('is-valid');
    nombre.nextElementSibling.innerHTML = '';
  }

  // Validacion email
  if (email.value.trim() === '') {
    isValid = false;
    email.classList.add('is-invalid');
    email.nextElementSibling.innerHTML = 'Por favor, ingrese un correo electr&oacute;nico v&aacute;lido.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      isValid = false;
      email.classList.add('is-invalid');
      email.nextElementSibling.innerHTML = 'Por favor, ingrese un correo electr&oacute;nico v&aacute;lido.';
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      email.nextElementSibling.innerHTML = '';
    }
  }

  if (isValid) {
    form.submit();
  }
});
