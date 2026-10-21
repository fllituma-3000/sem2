
function operar(a, b, operador) {

    switch (operador) {

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "No se puede dividir para 0";
            } else {
                return a / b;
            }

        default:
            return "Operador no válido";
    }

}
