function somar(n1, n2) {
    let res = n1 + n2;
    //console.log("Resultado = " + res);
    return res;
}

let resultado = somar(10, 20);

console.log(resultado);

//Arrow Function
const multiplicar = (n1, n2) => {
    console.log("Resultado = " + (n1 * n2));
};

multiplicar(10, 10);