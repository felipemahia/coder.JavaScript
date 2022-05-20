/* let edad = prompt("Ingresá tu edad");

if (edad >= 18) {
    alert('Puede ingresar');
} else {
    alert('Afuera chiquito!')
} */

/* let ingreso = prompt("Bienvenido a VapeLife, qué estás buscando? \n1- Equipo\n2- Atomizador\n3- E-Liquids\n4- Salir")
let totalVapeLife = 0

function compra(parametro) {
    switch (parametro) {
        case "1":
            total(4000)
            alert("Gran elección! Agregaste Equipo al carrito. \nEl total de tu pedido es de " + totalVapeLife)
            break

        case "2":
            total(1500)
            alert("Gran elección! Agregaste Atomizador al carrito. \nEl total de tu pedido es de " + totalVapeLife)
            break

        case "3":
            total(2500)
            alert("Gran elección! Agregaste Eliquids al carrito. \nEl total de tu pedido es de " + totalVapeLife)
            break
    }
}

function total(num) {
    totalVapeLife += num
}


while (ingreso != "4") {//

    compra(ingreso)

    ingreso = prompt("Que producto quieres comprar ? \n1- Equipo\n2-Atomizador\n3-E-Liquids\n4-Salir")

    console.log(ingreso)

}
alert('El monto total de su compra es de ' + totalVapeLife) */

let emailUser, passwordUser, celUser;
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
    console.log("Contraseña: " + passwordUser);
    console.log("Numero: " + celUser);
    alert("Bienvenido a VapeLife: " + emailUser);
}

// Objetos (acá vas a ver Eze lo que te preguntaba para la entrega de Arrays)

class Equipos {
    constructor(marca, modelo, precio) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = precio.toUpperCase();
    }
    sumarImportacion() {
        this.precio = this.precio * 1.8
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
//Equipos para principiantes
const equipoPrincipiantes1 = new Equipos('SMOK', 'nord4', 1100)
const equipoPrincipiantes2 = new Equipos('SMOK', 'vapePen22', 1500)
const equipoPrincipiantes3 = new Equipos('SMOK', 'stickPrince', 2000)
const equipoPrincipiantes4 = new Equipos('Vaporesso', 'skySolo', 2000)
const equipoPrincipiantes5 = new Equipos('Joytech', 'exceed', 1800)
const equipoPrincipiantes6 = new Equipos('Vaporesso', 'pod', 1100)

//Equipos intermedios
const equipoIntermedio1 = new Equipos('Voopoo', 'dragXPlus', 2200)
const equipoIntermedio2 = new Equipos('Geekvape', 'aegisMax', 2500)
const equipoIntermedio3 = new Equipos('Geekvape', 'boostPro', 2100)
const equipoIntermedio4 = new Equipos('Vaporesso', 'genS', 2800)

//Equipos pro
const equipoPro1 = new Equipos('Ehpro', 'armor', 2500)
const equipoPro2 = new Equipos('Geekvape', 'drag3', 3000)
const equipoPro3 = new Equipos('Vaporesso', 'luxe', 3000)
const equipoPro4 = new Equipos('Desire', 'cut', 2800)
const equipoPro5 = new Equipos('Augvape', 'vx217', 2800)
const equipoPro6 = new Equipos('Hellvape', 'arez', 2800)

equipoIntermedio4.sumarImportacion();
console.log(equipoIntermedio4.precio);

//PREGUNTA: me conviene hacer dos constructores, o mejor hacer uno solo y separar Equipos, Atomizadores y etc según su categoría?
//porque en realidad, dentro de EQUIPOS hay equipos más para pro y otros más sencillos, entonces no sé qué me convendrá.
//y solo menciono Atomizadores y Equipos porque en realidad son los que comparten el 100% de las características.

// Faltan los atomizadores y los equipos, pero paré por la duda que te plantee y no lo borré porque imagino que me podrá servir para la primera entrega final(actualización 2hs después: Si me sirve que estén ahí mientras los paso a arrays (; ).

//Si para esa entrega primera entrega final esto sigue acá, hay tabla XD





//ARRAYS

const arrayCarrito = [];

const arrayEquiposPrincipiantes = [];
arrayEquiposPrincipiantes.push(new Equipos('SMOK', 'nord4', 1100));
arrayEquiposPrincipiantes.push(new Equipos('SMOK', 'vapePen22', 1500));
arrayEquiposPrincipiantes.push(new Equipos('SMOK', 'stickPrince', 2000));
arrayEquiposPrincipiantes.push(new Equipos('Vaporesso', 'skySolo', 2000));
arrayEquiposPrincipiantes.push(new Equipos('Joytech', 'exceed', 1800));
arrayEquiposPrincipiantes.push(new Equipos('Vaporesso', 'pod', 1100));
for (const Equipos of arrayEquiposPrincipiantes) {
    Equipos.sumarImportacion();
}