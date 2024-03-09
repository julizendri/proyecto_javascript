let nombre = prompt ("Ingrese su nombre y apellido aquí!")

let llamativa = "roja";
let profesional = "azul";
let basica = "blanca";
let premium = "gris";

alert ("Biendenido/a " + nombre );

let pedir = prompt ("¿Ya sabe el estilo de tarjeta que desea? Ingrese SI o NO ");

if ((pedir === "no") || (pedir === "No")|| (pedir === "NO") || (pedir === "nO")){
    alert ("¡Regrese pronto!");
} else {
    let orden = prompt ("seleccione uno: llamativa / profesional / basica / premium");

switch (orden){
    case "llamativa": 
    alert ("Su tarjeta ahora es " + llamativa);

    break;



    case "profesional": 
    alert ("Su tarjeta ahora es " + profesional);

    break;



    case "basica": 
    alert ("Su tarjeta ahora es " + basica);
    break;



    case "premium": 
    alert ("Su tarjeta ahora es " + premium);
    break;

}
}

let email = prompt ("Ingrese su email aqui!")
let telefono = prompt ("Ingrese su teléfono aqui!")

function despedir (){
    alert ( nombre + ", a continuación esta su tarjeta. Esperamoos que la disfrute.");
}

despedir ()
