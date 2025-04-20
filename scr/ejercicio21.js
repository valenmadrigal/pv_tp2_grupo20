const entrada = document.getElementById("entrada");
const texto = document.getElementById("texto");

entrada.addEventListener("input", () => {
  texto.innerText = entrada.value;
});
