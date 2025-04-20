document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("cambiarColorBtn");
  
    const colores = ["#33ffbb", "#9f33ff", "#000000", "#14ffa7", "#ff14ff", "#edff14", "#FF0000", "#c600eb", "#008080", "#000080", "#00FF00", "#00FFFF"];
  
    boton.addEventListener("click", () => {
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      document.body.style.backgroundColor = colorAleatorio;
      console.log("El color fue cambiado a por el grupo20:", colorAleatorio);
    });
  });
  