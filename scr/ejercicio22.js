function actualizarTexto() {
    outputText.textContent = inputText.value;
    console.log("Longitud del texto:", inputText.value.length); // Ver la longitud
    cambiarColorFondo(inputText.value.length);
}

function cambiarColorFondo(longitud) {
    console.log("Longitud recibida en cambiarColorFondo:", longitud); // Ver la longitud recibida
    if (longitud > 20) {
        outputText.classList.add('long-text');
        console.log("Clase 'long-text' agregada");
    } else {
        outputText.classList.remove('long-text');
        console.log("Clase 'long-text' removida");
    }
}