const a = 1;

//Se suman los dos valores de entrada
function suma(a, b) {
    return a + b;
}
 //Se restan los ods valores de entrada
function restar(a, b) {
    return a - b;
}
//Se dividen los ods valores de entrada
function dividir(a, b) {
    if (b === 0) {
        return "impossible to divide";
    }
    return a/b;
}
//Se multiplican los dos valors de entrada.
function multiplicar(a,b) {
    return a*b;
}