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

function crearTarjeta() {
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar una tarjeta ${arrayEstilos[0].nombre} color ${arrayEstilos[0].color}\nPulse 2 si desea llevar una tarjeta ${arrayEstilos[1].nombre} color ${arrayEstilos[1].color}Pulse 3 si desea llevar una tarjeta ${arrayEstilos[2].nombre} color ${arrayEstilos[2].color}\nPulse 4 si desea llevar una tarjeta ${arrayEstilos[3].nombre} color ${arrayEstilos[3].color}\n`))

    while (opciones < 1 || opciones > 4) {
        opciones = parseInt(prompt(`Pulse 1 si desea llevar una tarjeta ${arrayEstilos[0].nombre} color ${arrayEstilos[0].color}\nPulse 2 si desea llevar una tarjeta ${arrayEstilos[1].nombre} color ${arrayEstilos[1].color}Pulse 3 si desea llevar una tarjeta ${arrayEstilos[2].nombre} color ${arrayEstilos[2].color}\nPulse 4 si desea llevar una tarjeta ${arrayEstilos[3].nombre} color ${arrayEstilos[3].color}\n`))
    }

    let productoElegido;
    if (opciones == 1) {
        productoElegido = arrayEstilos[0]
    }
    else if (opciones == 2) {
        productoElegido = arrayEstilos[1]
    }
    else if (opciones == 3) {
        productoElegido = arrayEstilos[2]
    }
    else if (opciones == 4) {
        productoElegido = arrayEstilos[3]
    }

    let confirmacion = confirm(`Usted eligió el estilo ${productoElegido.nombre} y es color ${productoElegido.color}, ¿está satisfecho/a?`)
    if (confirmacion == true) {
        let confirmacion2 = confirm("El producto se está generando.")
    } else {
        let confirmacion3 = confirm("Desea comenzar de vuelta?")
        if (confirmacion3 == true) {
            crearTarjeta()
        } else {
            alert("Ok, nos vemos pronto!")
        }
    }
}






