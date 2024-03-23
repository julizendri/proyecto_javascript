let nombre = prompt("Ingrese su nombre y apellido aquí!")

class Estilo {
    constructor(nombre, color) {
        this.nombre = nombre
        this.color = color
    }
}

let llamativa = new Estilo("llamativa", "roja")
let profesional = new Estilo("profesional", "azul");
let basica = new Estilo("basica", "blanca");
let premium = new Estilo("premium", "gris");

const arrayEstilos = [llamativa, profesional, basica, premium]

alert("Biendenido/a " + nombre);

function elegir() {
    let pedir = prompt("¿Ya sabe el estilo de tarjeta que desea? Ingrese SI o NO ");

    if ((pedir === "no") || (pedir === "No") || (pedir === "NO") || (pedir === "nO")) {
        alert("¡Regrese pronto!");
    } else {
        let orden = prompt("seleccione uno: llamativa / profesional / basica / premium");

        switch (orden) {
            case ("llamativa"):
                alert("Su tarjeta ahora es " + llamativa);

                break;

            case "profesional":
                alert("Su tarjeta ahora es " + profesional);

                break;

            case "basica":
                alert("Su tarjeta ahora es " + basica);
                break;

            case "premium":
                alert("Su tarjeta ahora es " + premium);
                break;
        }
    }


    let email = prompt("Ingrese su email aqui!")
    let telefono = prompt("Ingrese su teléfono aqui!")

    function despedir() {
        alert(nombre + ", a continuación está su tarjeta. Esperamoos que la disfrute.");
    }

    despedir()
}
