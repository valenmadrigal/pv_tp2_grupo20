function sumarRango(inicio, final) 
    {
        if (inicio > final) 
            {
              return "El número inicial debe ser menor o igual que el número final.";
            }
        let suma = 0; // Variable para acumular la suma
        for (let i = inicio; i <= final; i++) // Usamos for para sumar los números
            {
             suma += i;
            }

        return suma;   // Retorna el resultado
    }
    console.log(sumarRango(1, 8));   // (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) El resultado es: 36
    console.log(sumarRango(10, 7));  // Resultado: "El número inicial debe ser menor o igual que el número final."
    console.log(sumarRango(0, 0));   // Resultado: 0    