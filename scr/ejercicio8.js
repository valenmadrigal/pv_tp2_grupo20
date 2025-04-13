
const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
      alert(`El número mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
      alert(`El número mayor es: ${numero2}`);
    } else {
      alert("Los números son iguales.");
    }
  };
  
  
  calcularMayor(10, 5);
  calcularMayor(3, 8);
  calcularMayor(7, 7);