
function clasificarNota(nota) {

    if (nota < 0 || nota > 10) {
        return "Nota no válida";
    } 
    else if (nota >= 9) {
        return "Excelente";
    } 
    else if (nota >= 7) {
        return "Aprobado";
    } 
    else if (nota >= 5) {
        return "En recuperación";
    } 
    else {
        return "Reprobado";
    }

}
