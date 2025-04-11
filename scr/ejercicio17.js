//Ejercicio17:Escribir una función llamada contarLetraA que reciba un string y retorne el número de veces que aparece la letra "a". 
function contarLetraA(texto) 
{
    const letra = 'a';
    let contador = 0; // Inicia un contador en 0 para contar las letras "a"
    for (let i = 0; i < texto.length; i++)  // Recorre el string con un for
        {
            if (texto[i] === letra) 
                {
                    contador++;
                }
        }
    // Retorna el total de las "a"
    return contador;
}
  console.log(contarLetraA("bananas")); // Res:3
  console.log(contarLetraA("maracuya")); // Res:3
  console.log(contarLetraA("cara")); // Res:2
  console.log(contarLetraA("programacion")); // Res:2