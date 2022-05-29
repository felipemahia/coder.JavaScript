let edad = prompt("Ingresá tu edad"); //Si me animo y si se aprende acá, voy a hacer un login/register antes de ir a la página principal.

if (edad < 18) {
    alert('Afuera chiquito!')
        window.location.href = "siEsMenor.html"  /* Lo puse así para que no se pueda ir para atrás, perdón si jode mucho xD. */
    
} else {
    alert('Puede ingresar');
}

/* let emailUser, passwordUser, celUser,;
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



class Equipos {
    constructor(id, marca, modelo, precio, categoria, img) {
        this.id = id
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.categoria = categoria.toUpperCase();
        this.img = img;
        // Acá falta agregar this.descripción y agregarle la descripción de cada objeto del array.
        ;
    }

    sumarImportacion() {
        this.precio = this.precio * 1.8
    }
}
const catalogoEquipos = []



//Equipo para principiantes
catalogoEquipos.push(new Equipos(1, 'SMOK', 'nord4', 1100, 'principiantes', "./imagenes/1 Principiantes/Nord Pod/1.jpg"))
catalogoEquipos.push(new Equipos(2, 'SMOK', 'vapePen22', 1500, 'principiantes', "./imagenes/1 Principiantes/VapePen 22/1.jpg"))
catalogoEquipos.push(new Equipos(3, 'SMOK', 'stickPrince', 2000, 'principiantes', "./imagenes/1 Principiantes/Smok Stick Prince/1.jpg"))
catalogoEquipos.push(new Equipos(4, 'Vaporesso', 'skySolo', 2000, 'principiantes', "./imagenes/1 Principiantes/Sky Solo/1.jpg"))
catalogoEquipos.push(new Equipos(5, 'Joytech', 'exceed', 1800, 'principiantes', "./imagenes/1 Principiantes/Joyctech exceed grip/1.jpg"))
catalogoEquipos.push(new Equipos(6, 'Vaporesso', 'pod', 1100, 'principiantes', "./imagenes/1 Principiantes/Vaporesso Pod/1.jpg"))
//Equipo avanzados
catalogoEquipos.push(new Equipos(7, 'Voopoo', 'dragXPlus', 2200, 'avanzados', "./imagenes/2 Avanzados/Kit voopoo drag 3/1.jpg"))
catalogoEquipos.push(new Equipos(8, 'Geekvape', 'aegisMax', 2500, 'avanzados', "./imagenes/2 Avanzados/Kit Aegis Max/1.jpg"))
catalogoEquipos.push(new Equipos(9, 'Geekvape', 'boostPro', 2100, 'avanzados', "./imagenes/2 Avanzados/Aegis Boost+/1.jpg"))
catalogoEquipos.push(new Equipos(10, 'Vaporesso', 'genS', 2800, 'avanzados', "./imagenes/2 Avanzados/Vaporesso Gen S/1.jpg"))
//Equipos pro
catalogoEquipos.push(new Equipos(11, 'Ehpro', 'armor', 2500, 'pro', "./imagenes/3 Pro/Equipo pro 1.jpg"))
catalogoEquipos.push(new Equipos(12, 'Geekvape', 'drag3', 3000, 'pro', "./imagenes/3 Pro/Equipo pro 2.jpg"))
catalogoEquipos.push(new Equipos(13, 'Vaporesso', 'luxe', 3000, 'pro', "./imagenes/3 Pro/Equipo pro 3.jpg"))
catalogoEquipos.push(new Equipos(14, 'Desire', 'cut', 2800, 'pro', "./imagenes/3 Pro/Equipo pro 4.jpg"))
catalogoEquipos.push(new Equipos(15, 'Augvape', 'vx217', 2800, 'pro', "./imagenes/3 Pro/Equipo pro 5.jpg"))
catalogoEquipos.push(new Equipos(16, 'Hellvape', 'arez', 2800, 'pro', "./imagenes/3 Pro/Equipo pro 6.jpg"))
// Creando arrays por categoría mediante slice
const equiposPrincipiantes = catalogoEquipos.slice(0, 6);
const equiposAvanzados = catalogoEquipos.slice(6, 10);
const equiposPro = catalogoEquipos.slice(10, 16)
//
const seccionEquipos = document.getElementById('idEquipos')
//
const cardsEquiposPrincipiantes = (equiposPrincipiantes) => {
    for (let element of equiposPrincipiantes) {
        if (element.id <= (6)) {     /* Esto me funciona, pero no sé cómo hacerlo para los que van del ID 7 a 10 y de 11 a 16, así que le busqué otra vuelta y por eso están hechas subcategorías mediante slice en las líneas 74 a 76. 
        No se si es mejor o peor, pero fue la solución que encontré ahora. O sea, si sacas este if anda igual. 
        
        3:24 del domingo, me doy cuenta que capaz se solucionas haciendo if (Equipos.id) <=6) y ahí toma el id del class Equipos de más arriba.*/
            let div = document.createElement('div')
            div.className = 'col-md-4 card'
            div.style = 'max-width: 18rem;'
            console.log(div);
            div.innerHTML = `
    <img class="img-fluid" src="${element.img}" class="card-img-top" alt="Equipo de inicio, de marca smok modelo Nord 4">
    <div class="card-body">
    <h5 class="card-title">${element.marca} ${element.modelo}</h5>
    <p class="card-text">Esto será una descripción personalizada. ${element.precio}</p>
    <div id=${element.id} class="cardflex"><a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>
    `
            seccionEquipos.append(div)
        }
    }
}
cardsEquiposPrincipiantes(equiposPrincipiantes);

const cardsEquiposAvanzados = (equiposAvanzados) => {

    for (let element of equiposAvanzados) {
        /* if (element.id > (6)){ */     /* Esto es una media solución, porque va desde el id 7 al 10, o sea, me falta un corte más */
        let div = document.createElement('div')
        div.className = 'col-md-4 card'
        div.style = 'max-width: 18rem;'
        console.log(div);

        div.innerHTML = `

    <img class="img-fluid" src="${element.img}" class="card-img-top" alt="Equipo de inicio, de marca smok modelo Nord 4">
    <div class="card-body">
    <h5 class="card-title">${element.marca} ${element.modelo}</h5>
    <p class="card-text">Esto será una descripción personalizada. ${element.precio}</p>
    <div id=${element.id} class="cardflex"><a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>
    `
        seccionEquipos.append(div)
    }
}
cardsEquiposAvanzados(equiposAvanzados)

const cardsEquiposPro = (equiposPro) => {

    for (let element of equiposPro) {
        /* if (element.id > (6)){ */     /* Acá está el resto xD */
        let div = document.createElement('div');
        div.className = 'col-md-4 card';
        div.style = 'max-width: 18rem;,  justify-content: center';
        console.log(div);

        div.innerHTML = `

    <img class="img-fluid" src="${element.img}" class="card-img-top" alt="Equipo de inicio, de marca smok modelo Nord 4">
    <div class="card-body">
    <h5 class="card-title">${element.marca} ${element.modelo}</h5>
    <p class="card-text">Esto será una descripción personalizada. ${element.precio}</p>
    <div id=${element.id} class="cardflex"><a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>
    `
        seccionEquipos.append(div)
    }
}
cardsEquiposPro(equiposPro)

// EVENTOS

const btnEnviar = document.querySelector('#btnEnviar')

function agradecerContacto (nombre){
    alert (`Gracias por contactarte con VapeLife, ${nombre} \nTe responderemos a la brevedad!`)
}
btnEnviar.onclick = () =>{
    let nombre = document.getElementById('fname').value;
    agradecerContacto(nombre)
}

// EVENTOS




//De aquí para abajo está comentado porque voy a fusionarlo con la entrega de Eventos. 





/* const Carrito = [];

const agregarProducto = () => {
    let list = 'Seleccioná el producto que desees \n';
    for (const Equipo of catalogoEquipos) {
        list += Equipo.id + ' - ' + Equipo.marca + ' - ' + Equipo.modelo + ' - ' + Equipo.precio + ' pesos' + '\n'
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
        list += index++ + ' - ' + Equipo.marca + ' - ' + Equipo.modelo + ' - ' + Equipo.precio + '\n';
    }

    alert(list);
}

const eliminarProductos = () => {
    let list = 'Tu carrito tiene lo siguiente: \n';
    let index = 1;
    for (const Equipo of Carrito) {
        list += index++ + ' - ' + Equipo.marca + ' - ' + Equipo.modelo + '\n';
    }

    let opcion = parseInt(prompt(list));
    Carrito.splice(opcion - 1, 1)
    alert('Producto eliminado')
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

let criterioDeOrden = parseInt(prompt('Elegí cómo queres ordenar los productos:\n 1 - Por marca\n 2 - Por precio ascendente\n 3 - Por precio descendente\n  4 - Por categoría\n'))

function ordenar(criterioDeOrden, array) {
    let arrayOrdenado = array;

    switch (criterioDeOrden) {
        case 1:
            let marcaAscendente = arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca));
            return marcaAscendente;
        case 2:
            let precioAscendente = arrayOrdenado.sort((a, b) => a.precio - b.precio);
            return precioAscendente;
        case 3:
            let precioDescendente = arrayOrdenado.sort((a, b) => b.precio - a.precio);
            return precioDescendente;
        case 4:
            let porCategoria = arrayOrdenado.sort((a, b) => a.categoria.localeCompare(b.categoria));
            return porCategoria;
        default:
            alert('No es un criterio válido');
            break;
    }
}


function mostrar(array) {
    let info = '';
    array.forEach(element => {
        info += 'Marca: ' + element.marca + '\nModelo: ' + element.modelo + '\nPrecio: ' + element.precio + 'pesos' + '\nCategoria: ' + element.categoria + '\n \n'
    });
    return info;
}

//console.log((mostrar(ordenar(criterioDeOrden, catalogoEquipos))));

alert(mostrar(ordenar(criterioDeOrden, catalogoEquipos)));
 */