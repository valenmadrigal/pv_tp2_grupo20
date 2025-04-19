const btn = document.querySelector('#mostrarBtn');

btn.addEventListener('click', () => {
  const nombreInput = document.querySelector('#nombre');
  const apellidoInput = document.querySelector('#apellido');
  const libretaInput = document.querySelector('#libreta');
  // Eliminar errores
  [nombreInput, apellidoInput, libretaInput].forEach(input => {
    input.classList.remove('error');
  });

  const nombre = nombreInput.value.trim();
  const apellido = apellidoInput.value.trim();
  const libreta = libretaInput.value.trim();

  let tieneError = false;

  if (!nombre) {
    nombreInput.classList.add('ERRORR');
    tieneError = true;
  }

  if (!apellido) {
    apellidoInput.classList.add('ERRORR');
    tieneError = true;
  }

  if (!libreta) {
    libretaInput.classList.add('ERRORR');
    tieneError = true;
  }

  if (tieneError) {
    alert('Complete todos los campos por favor.');
    return;
  }

  alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);

  nombreInput.value = '';
  apellidoInput.value = '';
  libretaInput.value = '';
});
