
function horasACobrar(minutos) {
    return Math.ceil(minutos / 60);
}

function calcularTarifa(minutos) {

    const horas = horasACobrar(minutos);
    let tarifa;

    if (horas <= 1) {
        tarifa = 1.00;
    } else {
        tarifa = 1.00 + (horas - 1) * 0.50;
    }

    if (tarifa > 5.00) {
        tarifa = 5.00;
    }

    return tarifa;
}
