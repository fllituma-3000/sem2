
function generarTabla(numero, hasta) {

    let tabla = "<table border='1'>";

    for (let i = 1; i <= hasta; i++) {
        tabla = tabla + "<tr>";
        tabla = tabla + "<td>" + numero + " x " + i + "</td>";
        tabla = tabla + "<td>" + (numero * i) + "</td>";
        tabla = tabla + "</tr>";
    }

    tabla = tabla + "</table>";

    return tabla;
}
