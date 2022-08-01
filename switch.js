const edad = 35;
let mensaje = "";

if (edad == 5) {
mensaje = "Es un infante";
} else if (edad == 15) { 
mensaje = "Es un adolescente";
} else if (edad == 35) {
mensaje = "Es un adulto";
}

switch (edad) {
case 5:
mensaje = "Es un infante";
break;
case 15:
mensaje = "Es un adolescente";
break;
case 35:
mensaje = "Es un adulto";
break;
default:
mensaje = "Es viejo"; 
}

console.log(mensaje);



