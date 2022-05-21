/* let edad = prompt("Ingresá tu edad");

if (edad >= 18) {
    alert('Puede ingresar');
} else {
    alert('Afuera chiquito!')
} */

/* let emailUser, passwordUser, celUser;
emailUser = prompt("Ingrese su email");
celUser = prompt("Ingrese su número de celular")
passUser = prompt("Ingrese su contraseña");

function validarUser(emailUser, celUser, passUser) {
    while (emailUser == "" || celUser == "" && passUser == "") {
        alert("Tiene que ingresar un email y/o una contraseña");
        emailUser = prompt("Ingrese su email");
        celUser = prompt("Ingrese su número de celular")
        passUser = prompt("Ingrese su contraseña");
    }
    impresion(emailUser, passUser, celUser);
}

validarUser(emailUser, passUser, celUser);

function impresion(emailUser, passwordUser, celUser) {
    console.log("User: " + emailUser);
    console.log("Numero: " + celUser);
    console.log("Contraseña: " + passwordUser);
    alert("Bienvenido a VapeLife: " + emailUser);
} */

// Objetos (acá vas a ver Eze lo que te preguntaba para la entrega de Arrays)

/* class Equipos {
    constructor(marca, modelo, precio, id) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.id = id;
    }

    sumarImportacion() {
        this.precio = this.precio * 1.8
    }

    asignarId(array) {
        this.id = array.length;
    }
}

class Atomizadores {
    constructor(marca, modelo, precio) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
    }
    sumarImportacion() {
        this.precio = this.precio * 1.8
    }
}
class Eliquids {
    constructor(marca, nombre, precio) {
        this.marca = marca.toUpperCase();
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
    }
    sumarImportacion() {
        this.precio = this.precio * 1.8
    }
}
//Equipo para principiantes
/* const equiposPrincipiantes = [
    new Equipos('SMOK', 'nord4', 1100, 1),
    new Equipos('SMOK', 'vapePen22', 1500, 2),
    new Equipos('SMOK', 'stickPrince', 2000, 3),
    new Equipos('Vaporesso', 'skySolo', 2000, 4),
    new Equipos('Joytech', 'exceed', 1800, 5),
    new Equipos('Vaporesso', 'pod', 1100, 6)
]
console.log(equiposPrincipiantes);
//Equipo intermedios
const equiposIntermedios = [
    new Equipos('Voopoo', 'dragXPlus', 2200, 7),
    new Equipos('Geekvape', 'aegisMax', 2500, 8),
    new Equipos('Geekvape', 'boostPro', 2100, 9),
    new Equipos('Vaporesso', 'genS', 2800, 10)
]
console.log(equiposIntermedios);
//Equipos pro
const equiposPro = [
    new Equipos('Ehpro', 'armor', 2500, 11),
    new Equipos('Geekvape', 'drag3', 3000, 12),
    new Equipos('Vaporesso', 'luxe', 3000, 13),
    new Equipos('Desire', 'cut', 2800, 14),
    new Equipos('Augvape', 'vx217', 2800, 15),
    new Equipos('Hellvape', 'arez', 2800, 16)
]
console.log(equiposPro); */



//PREGUNTA: me conviene hacer dos constructores, o mejor hacer uno solo y separar Equipos, Atomizadores y etc según su categoría?
//porque en realidad, dentro de EQUIPOS hay equipos más para pro y otros más sencillos, entonces no sé qué me convendrá.
//y solo menciono Atomizadores y Equipos porque en realidad son los que comparten el 100% de las características.

// Faltan los atomizadores y los equipos, pero paré por la duda que te plantee y no lo borré porque imagino que me podrá servir para la primera entrega final(actualización 2hs después: Si me sirve que estén ahí mientras los paso a arrays (; ).






const catalogoEquipos = [
    {
        id: 1,
        marca: 'SMOK',
        modelo: 'Nord 4',
        precio: 1100,
    },
    {
        id: 2,
        marca: 'SMOK',
        modelo: 'VapePen 22',
        precio: 1500,
    },
    {
        id: 3,
        marca: 'SMOK',
        modelo: 'Stick Prince',
        precio: 2000,
    },
    {
        id: 4,
        marca: 'Vaporesso',
        modelo: 'Sky Solo',
        precio: 2000,
    },
    {
        id: 5,
        marca: 'Joytech',
        modelo: 'Exceed',
        precio: 1800,
    },
    {
        id: 6,
        marca: 'Vaporesso',
        modelo: 'Pod',
        precio: 1100,

    },
];

const Carrito = [];

const agregarProducto = () => {
    let list = 'Seleccioná el producto que desees \n';
    for (const Equipo of catalogoEquipos) {
        list += Equipo.id + '-' + Equipo.marca + '-' + Equipo.modelo + '\n'
    }
    let productoSeleccionado = parseInt(prompt(list));
    for (const element of catalogoEquipos) {
        if (element.id == productoSeleccionado) {
            Carrito.push(element);
            alert("Producto agregado!")
            return;
        }
    }

    alert('mmm... intentá con otra opción')
    return;
}

const verCarrito = () => {
    let list = 'Tu carrito tiene lo siguiente: \n';
    let index = 1;
    for (const Equipo of Carrito) {
        list += index++ + '-' + Equipo.marca + '-' + Equipo.modelo + '\n';
    }

    alert(list);
}

const eliminarProductos = () => {
    let list = 'Tu carrito tiene lo siguiente: \n';
    let index = 1;
    for (const Equipo of Carrito) {
        list += index++ + '-' + Equipo.marca + '-' + Equipo.modelo + '\n';
    }

    let opcion = parseInt (prompt(list));
    Carrito.splice(opcion - 1, 1)
    alert ('Producto eliminado')
}

let menu = '';
menu += 'Bienvenido a VapeLife, qué estás buscando?\n';
menu += '1 - Agregar productos\n';
menu += '2 - Mostrar carrito\n';
menu += '3 - Eliminar productos\n';
menu += '0 - Salir\n';

let totalVapeLife = 0

while (true) {
    let value = parseInt(prompt(menu));
    switch (value) {
        case 0:
            break;
        case 1:
            agregarProducto();
            break;
        case 2:
            verCarrito();
            break;
        case 3:
            eliminarProductos();
            break;
        default:
            alert('Elegí una opción válida');
            break;
    }
    if (value == 0) {
        alert('Hasta luego!');
        break;
    }
}

