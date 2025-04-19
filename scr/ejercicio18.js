// Función 
function cambiarTexto() 
{
    const parrafo = document.getElementById("miParrafo");
    parrafo.textContent = "Las ventajas de utilizar el HTML son:Cualquier modificación del HTML puede hacerse desde un editor de texto. No es necesario ningún software o conocimiento de programa alguno.Puede integrar diferentes tipos de lenguaje de marcas, XML por ejemplo.";
}
  // boton
  const boton = document.getElementById("miBoton");
 boton.addEventListener("click", cambiarTexto);