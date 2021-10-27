//ejercicio dia de la semana.
//creamos vatriables para almacenar el dia de la semana.
let dia = prompt("ingresa un dia de la semana");
//comvertimos en minusculas todo lo que el usuario escriba
dia =dia.toLowerCase();
//validamos si el dia es entre semana.
if (dia == "lunes" || dia =="martes" || dia =="miercoles" || dia =="jueves" || dia =="viernes") {
   alert("Es un dia entre semana")
} else {
   if (dia == "sabado" || dia =="domingo") {
      alert("es un fin de semana");
   } else {
       alert("No estas ingresando un dia");
   }
  
}

//quedamos clase 8 minuto 2:03