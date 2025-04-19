const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Canadá": "Ottawa",
    "México": "Ciudad de México",
    "Perú": "Lima",
    "Estados Unidos": "Washington D.C."
  };
  
  const selectPais = document.getElementById("pais");
  const selectCapital = document.getElementById("capital");
  
  selectPais.addEventListener("change", function() {
    const paisSeleccionado = this.value;
  
    if (paisSeleccionado) {
      const capitalCorrespondiente = paisesCapitales[paisSeleccionado];
  
      // Limpiar opciones anteriores
      selectCapital.innerHTML = "";
  
      // Agregar la capital correspondiente
      const opcionCapital = document.createElement("option");
      opcionCapital.value = capitalCorrespondiente;
      opcionCapital.textContent = capitalCorrespondiente;
      selectCapital.appendChild(opcionCapital);
      selectCapital.disabled = false;
  
      // Mostrar en consola
      console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capitalCorrespondiente}`);
    } else {
      selectCapital.innerHTML = "<option value=''>--Selecciona una capital--</option>";
      selectCapital.disabled = true;
    }
  });