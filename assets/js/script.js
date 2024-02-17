let calcularMostrarResultado = (num) => {
    if (num < 1 || num > 20){
        console.log("Número fuera de rango.");
        return false;
    }
    for (let i = 1; i <= num; i++){
        let multiplicacion = i * num;
        console.log(`${i} x ${num} = ${multiplicacion}`);
    }

    for(let i = 1; i <= num; i++){
        let resultado = 1;
        for (let j = 1; j <= i; j++){
            resultado = resultado * j;
        }
        console.log(`Factorial de ${i} es: ${resultado}`);
    }
}

calcularMostrarResultado(12);

