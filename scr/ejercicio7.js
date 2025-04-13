const nombres = ["Juan", "María", "Ale", "Isabella", "Sebastián", "MAXIMILIANO"];

const NomMasLargo = (arrayDeNombres) => {
  if (!arrayDeNombres || arrayDeNombres.length === 0) {
    return null; 
  }

  let nombreMasLargo = arrayDeNombres[0]; 

  for (let i = 1; i < arrayDeNombres.length; i++) {
    if (arrayDeNombres[i].length > nombreMasLargo.length) {
      nombreMasLargo = arrayDeNombres[i];
    }
  }

  return nombreMasLargo;
};


const nombreMasLargo = NomMasLargo(nombres);


if (nombreMasLargo) {
  console.log("El nombre más largo es:", nombreMasLargo);
} else {
  console.log("El array de nombres está vacío o no es válido.");
}