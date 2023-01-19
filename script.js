
//Recopilación de los datos ingresados de cada campo solicitado
//Se utiliza .value para obtener los valores ingresados
document.getElementById("day").value
function getData() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("months").value;
    let year = document.getElementById("year").value;
    let monthIndex;
    switch (month) {
        case "Enero":
            monthIndex = 0;
            break;
        case "Febrero":
            monthIndex = 1;
            break;
        case "Marzo":
            monthIndex = 2;
            break;
        case "Abril":
        monthIndex = 3;
            break;
        case "Mayo":
        monthIndex = 4;
            break;
        case "Junio":
        monthIndex = 5;
            break;
        case "Julio":
            monthIndex = 6;
            break;
        case "Agosto":
            monthIndex = 7;
            break;
        case "Septiembre":
            monthIndex = 8;
            break;
        case "Octubre":
            monthIndex = 9;
            break;
        case "Noviembre":
            monthIndex = 10;
            break;
        case "Diciembre":
            monthIndex = 11;
            break;
    }

    return new Date(year, monthIndex, day);
    
}

/* Calcular el día de la semana a partir de una fecha dada y conocer si es día laboral o fin de semana */
const calculate = () => {
    
    //Pasar el número del día de la semana al nombre que le corresponde
    dayWeek = getData();
    let numberOfTheWeek = dayWeek.getDay();
    const daysOfTheWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    let dayOfTheWeek = daysOfTheWeek[numberOfTheWeek];
    document.getElementById("dayOfTheWeek").value = dayOfTheWeek;

    //Asignar los días de la semana entre laboral y fin de semana
    let whatDayIs = "";
    switch(dayOfTheWeek){
        case "Lunes":
        case "Martes":
        case "Miércoles":
        case "Jueves":
        case "Viernes":
            whatDayIs = "Laboral"
            break;
        case "Sábado":
        case "Domingo":
            whatDayIs = "Fin de semana"
            break;
    }
    document.getElementById("whatDayIs").value = whatDayIs;
}







