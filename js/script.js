class Equipos {
    constructor(id, marca, modelo, precio, categoria, img, description, alt) {
        this.id = id
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.categoria = categoria.toUpperCase();
        this.img = img;
        this.description = description;
        this.alt = alt;
    }
}

const catalogoEquipos = []
// Cargo equipos principiantes
catalogoEquipos.push(new Equipos(1, 'SMOK', 'nord4', 1100, 'principiantes', "./imagenes/1 Principiantes/Nord Pod/1.jpg", "Estilo POD, lo más sencillo pero eficiente", "Equipo de inicio, de marca smok modelo Nord 4"))
catalogoEquipos.push(new Equipos(2, 'SMOK', 'vapePen22', 1500, 'principiantes', "./imagenes/1 Principiantes/VapePen 22/1.jpg", "Simple pero elegante", "Equipo de inicio, de marca Smok, modelo VapePen 22"))
catalogoEquipos.push(new Equipos(3, 'SMOK', 'stickPrince', 2000, 'principiantes', "./imagenes/1 Principiantes/Smok Stick Prince/1.jpg", "Kit de inicio... a lo grande", "Equipo de inicio, de marca Smok, modelo Prince"))
catalogoEquipos.push(new Equipos(4, 'Vaporesso', 'skySolo', 2000, 'principiantes', "./imagenes/1 Principiantes/Sky Solo/1.jpg", "Cabe en el bolsillo pero el límite es el cielo.", "Equipo de inicio, de marca Vaporesso, modelo Sky Solo"))
catalogoEquipos.push(new Equipos(5, 'Joytech', 'exceed', 1800, 'principiantes', "./imagenes/1 Principiantes/Joyctech exceed grip/1.jpg", "Simple pero poderoso", "Equipo de inicio, de marca Joytech, modelo Exceed Grip"))
catalogoEquipos.push(new Equipos(6, 'Vaporesso', 'pod', 1100, 'principiantes', "./imagenes/1 Principiantes/Vaporesso Pod/1.jpg", "Estilo POD, el pequeño primer paso", "Equipo de inicio, de marca Joytech, modelo Exceed Grip"))
// Cargo equipos avanzados
catalogoEquipos.push(new Equipos(7, 'Voopoo', 'dragXPlus', 2200, 'avanzados', "./imagenes/2 Avanzados/Kit voopoo drag 3/1.jpg", "Drag en formato kit... Nada puede salir mal", "Equipo avanzado, de marca Voopoo, modelo Drag X"))
catalogoEquipos.push(new Equipos(8, 'Geekvape', 'aegisMax', 2500, 'avanzados', "./imagenes/2 Avanzados/Kit Aegis Max/1.jpg", "Un todo terreno con un tanque poderoso", "Equipo avanzado, de marca GeekVape, modelo Aegis MAX"))
catalogoEquipos.push(new Equipos(9, 'Geekvape', 'boostPro', 2100, 'avanzados', "./imagenes/2 Avanzados/Aegis Boost+/1.jpg", "Sencillamente revolucionario y potente", "Equipo avanzado, de marca GeekVape, modelo Aegis Boost Pro"))
catalogoEquipos.push(new Equipos(10, 'Vaporesso', 'genS', 2800, 'avanzados', "./imagenes/2 Avanzados/Vaporesso Gen S/1.jpg", "El mejor chip del mercado y la mejor estética", "Equipo avanzado, de marca Vaporesso, modelo Gen S"))
// Cargo equipos pro
catalogoEquipos.push(new Equipos(11, 'Ehpro', 'armor', 2500, 'pro', "./imagenes/3 Pro/Equipo pro 1.jpg", "Semi mecánico... Poderoso y seguro", "Mod para vapeo, de marca Ehpro, modelo Armor"))
catalogoEquipos.push(new Equipos(12, 'Geekvape', 'drag3', 3000, 'pro', "./imagenes/3 Pro/Equipo pro 2.jpg", "Calidad, estética y potencia, todo en uno", "Mod para vapeo, de marca Voopoo, modelo Drag 3"))
catalogoEquipos.push(new Equipos(13, 'Vaporesso', 'luxe', 3000, 'pro', "./imagenes/3 Pro/Equipo pro 3.jpg", "Nuestro único mod de pantalla táctil", "Mod para vapeo, de marca Vaporesso, modelo Luxe"))
catalogoEquipos.push(new Equipos(14, 'Desire', 'cut', 2800, 'pro', "./imagenes/3 Pro/Equipo pro 4.jpg", "Mod potente y portátil", "Mod para vapeo, de marca Desire, modelo Cut"))
catalogoEquipos.push(new Equipos(15, 'Augvape', 'vx217', 2800, 'pro', "./imagenes/3 Pro/Equipo pro 5.jpg", "Mod compatible con baterias 21700, 20700 y 18650", "Mod para vapeo, de marca Augvape, modelo VX217"))
catalogoEquipos.push(new Equipos(16, 'Hellvape', 'arez', 2800, 'pro', "./imagenes/3 Pro/Equipo pro 6.jpg", "Mod de baja potencia pero de una bateria", "Mod para vapeo, de marca Hellvape, modelo Arez"))

class Eliquids {
    constructor(id, marca, modelo, precio, img, description, alt) {
        this.id = id;
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.img = img;
        this.description = description;
        this.alt = alt;
    }
}

const catalogoLiquidos = []
// Cargo eliquids King Crest
catalogoLiquidos.push(new Eliquids(17, 'King Crest', 'Don Juan', 1200, './imagenes/Eliquids/King Crest/king crest 1.jpg', 'La versión reserva del popular sabor Don Juan', "eliquid de marca King Crest sabor Don Juan"));
catalogoLiquidos.push(new Eliquids(18, 'King Crest', 'Alien Pop', 1200, './imagenes/Eliquids/King Crest/alien pop.webp', 'Chupetín de frutilla que pareciera ser de otro mundo', "Eliquid de la marca King Crest, sabor Alien Pop, chupetin de frutilla"));
catalogoLiquidos.push(new Eliquids(19, 'King Crest', 'Planet Pop', 1200, './imagenes/Eliquids/King Crest/planet pops blue.jpg', 'Sabor a caramelo de frutos rojos y arándanos', "Eliquid de la marca King Crest, sabor Planet Pop, sabor a frutos rojos y arandanos"));
// Cargo eliquids IceMonster
catalogoLiquidos.push(new Eliquids(20, 'Ice Monster', 'Mixed Berry Ice', 1500, './imagenes/Eliquids/Ice Monster/ice monster 1.png', 'Sabrosos frutos rojos congelados', "Eliquid de marca Ice Monster con sabor a frutos rojos frescos"));
catalogoLiquidos.push(new Eliquids(21, 'Ice Monster', 'Mandarina y Guayava', 1500, './imagenes/Eliquids/Ice Monster/ice monster 2.png', 'Combinación de mandarina y guayaba refrescante', "Eliquid de marca Ice Monster con sabor a mandarina y guayava con un golpe fresco"));
catalogoLiquidos.push(new Eliquids(22, 'Ice Monster', 'Melon Colada', 1500, './imagenes/Eliquids/Ice Monster/ice monster 3.jpg', 'Sabor a melón, con frutas tropicales y un golpe fresco', "Eliquid de marca Ice Monster con sabor a melón"));
catalogoLiquidos.push(new Eliquids(23, 'Ice Monster', 'Strawmelon-Apple', 1500, './imagenes/Eliquids/Ice Monster/ice monster 4.jpg', 'Sandías y frutillas... Pero en un invierno en tu boca', "Eliquid de marca Ice Monster con sabor a sandía y frutilla, con un final fresco"));
catalogoLiquidos.push(new Eliquids(24, 'Ice Monster', 'Banana Ice', 1500, './imagenes/Eliquids/Ice Monster/ice monster 5.webp', 'Sabor fiel a Banana, con un golpe frío al paladar', "Eliquid de marca Ice Monster con sabor a banana y un golpe fresco"));
catalogoLiquidos.push(new Eliquids(25, 'Ice Monster', 'Acid Ice', 1500, './imagenes/Eliquids/Ice Monster/ice monster 6.jpg', 'Frutos rojos, frutillas y limón con un final fresco', "Eliquid de marca Ice Monster con sabor a frutos rojos, limon y frutillas con un golpe fresco"));
// Cargo eliquids Vapetasia
catalogoLiquidos.push(new Eliquids(26, 'Vapetasia', 'Killer Kustard', 1400, './imagenes/Eliquids/Vapetasia/vapetasia.webp', 'Sabor vainilla y crema', "Eliquid de marca Vapetasia con sabor a vainilla y crema"))
catalogoLiquidos.push(new Eliquids(27, 'Vapetasia', 'Rainbow Road', 1400, './imagenes/Eliquids/Vapetasia/vapetasia 2.webp', 'Cereal con leche y frutos rojos', "Eliquid de marca Vapetasia con sabor a cereal con leche y frutos rojos"))
catalogoLiquidos.push(new Eliquids(28, 'Vapetasia', 'Royalty Two', 1400, './imagenes/Eliquids/Vapetasia/vapetasia 3.png', 'Tabaco, crema, vainilla y nueces', "Eliquid de marca Vapetasia con sabor a tabaco, crema, vainilla y nueces"))

// Creando arrays por categoría mediante slice
const equiposPrincipiantes = catalogoEquipos.slice(0, 6);
const equiposAvanzados = catalogoEquipos.slice(6, 10);
const equiposPro = catalogoEquipos.slice(10, 16);
// Creando Arrays por marca de Eliquids
const eliquidsKC = catalogoLiquidos.slice(0, 3);
const eliquidsIM = catalogoLiquidos.slice(3, 9);
const eliquidsVapetasia = catalogoLiquidos.slice(9, 12);
//Creación de catalogo completo para poder desagregar productos por id.
const catalogoCompleto = catalogoEquipos.concat(catalogoLiquidos)

//Agregar producto al carrito
let carrito = []
const agregandoProducto = (index) => {
    let producto = catalogoCompleto.find(element => element.id == index)
    let ingresarProducto = carrito.findIndex(element => element == producto)
    if (ingresarProducto == -1) {
        producto.cantidad = 1
        carrito.push(producto)
    } else {
        carrito[ingresarProducto].cantidad++
    }
    localStorage.setItem("cart", JSON.stringify(carrito));
    let compraRealizada = 'Se agregó ' + producto.marca + ' ' + producto.modelo + ' a tu carrito';
    Swal.fire(
        'Producto agregado!',
        (`${compraRealizada}`),
        'success'
    )
    console.log(compraRealizada);
}

/* Las cards que empiezan en las líneas 116 y 157 (ambas con fetch) 
no tienen el evento cargado; no entiendo por qué porque no cambié nada,
es más, fue agregar alguna cosa arriba para que tome el item del .json y poco más.*/
const cargarEvento = () => {
    let botonCompra = document.getElementsByClassName('btn-compra');
    for (let i = 0; i < botonCompra.length; i++) {
        let item = document.getElementsByClassName('btn-compra')[i];
        console.log(item);
        item.addEventListener('click', () => {
            agregandoProducto(item.id);
        });
    }
}

//Creación de cards de equipos//

/* FETCH 
const Principiantes = document.querySelector('#Principiantes')
const cardsEquiposPrincipiantes = () =>{
fetch(`products.json`)
.then((res) => res.json())
.then((data) => {
let cardsEquiposPrincipiantes = equiposPrincipiantes;
let Principiantes = document.getElementById('Principiantes')
cardsEquiposPrincipiantes.forEach(equipos => {
let div = document.createElement('div');
div.className = 'card-group col-md-4'
div.innerHTML =
`
<div class="card">
<img class="img-fluid" src="${equipos.img}" class="card-img-top" alt="${equipos.alt}">
<h5 class="card-title">${equipos.marca} ${equipos.modelo}</h5>
<p class="card-text">${equipos.description}. $${equipos.precio}</p>
<button id=${equipos.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
</div>
`;
Principiantes.append(div);
});
})
}

const Avanzados = document.querySelector('#Avanzados')
const cardsEquiposAvanzados = () => {
fetch('products.json')
.then((res) => res.json())
.then((data) => {
let cardsEquiposAvanzados = equiposAvanzados;
let Avanzados = document.getElementById('Avanzados')
cardsEquiposAvanzados.forEach(equipos => {
let div = document.createElement('div');
div.className = 'card-group col-md-6'
div.innerHTML =
`
<div class="card">
<img class="img-fluid" src="${equipos.img}" class="card-img-top" alt="${equipos.alt}">
<h5 class="card-title">${equipos.marca} ${equipos.modelo}</h5>
<p class="card-text">${equipos.description}. $${equipos.precio}</p>
<button id=${equipos.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
</div>
`;
Avanzados.append(div);
});
}); */
/* HASTÁ ACÁ PRUEBA DE FETCH */

const cardsEquiposPrincipiantes = () => {
    let Principiantes = document.getElementById('Principiantes')
    for (const equipo of equiposPrincipiantes) {
        let div = document.createElement('div');
        div.className = 'card-group col-md-4'
        div.innerHTML =
            `
            <div class="card">
            <img class="img-fluid" src="${equipo.img}" class="card-img-top" alt="${equipo.alt}">
            <h5 class="card-title">${equipo.marca} ${equipo.modelo}</h5>
            <p class="card-text">${equipo.description}. $${equipo.precio}</p>
            <button id=${equipo.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
            </div>
            `;
        Principiantes.append(div);
    }
}

const cardsEquiposAvanzados = () => {
    let Avanzados = document.getElementById('Avanzados')
    for (const equipo of equiposAvanzados) {
        let div = document.createElement('div');
        div.className = 'card-group col-md-6'
        div.innerHTML =
            `
            <div class="card">
            <img class="img-fluid" src="${equipo.img}" class="card-img-top" alt="${equipo.alt}>
            <h5 class="card-title">${equipo.marca} ${equipo.modelo}</h5>
            <p class="card-text">${equipo.description}. $${equipo.precio}</p>
            <button id=${equipo.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
            </div>
            `;
        Avanzados.append(div)
    }
}

const cardsEquiposPro = () => {
    let Pro = document.getElementById('Pro')
    for (const equipo of equiposPro) {
        let div = document.createElement('div');
        div.className = 'card-group col-md-4'
        div.innerHTML = `
            <div class="card">
            <img class="img-fluid" src="${equipo.img}" class="card-img-top" alt="${equipo.alt}>
            <h5 class="card-title">${equipo.marca} ${equipo.modelo}</h5>
            <p class="card-text">${equipo.description}. $${equipo.precio}</p>
            <button id=${equipo.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
            </div>
            `;
        Pro.append(div);
    }
}
// Creacion de cards de ELIQUIDS
const cardsEliquidsKC = () => {
    let kingCrest = document.getElementById('kingCrest')
    for (const eliquid of eliquidsKC) {
        let div = document.createElement('div');
        div.className = 'card-group col-md-4'
        div.innerHTML = `
            <div class="card">
            <img class="img-fluid" src="${eliquid.img}" class="card-img-top" alt="${eliquid.alt}">
            <h5 class="card-title">${eliquid.marca} ${eliquid.modelo}</h5>
            <p class="card-text">${eliquid.description}. $${eliquid.precio}</p>
            <button id=${eliquid.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
            </div>
            `;
        kingCrest.append(div);
    }
}
const cardsEliquidsIM = () => {
    let iceMonster = document.getElementById('iceMonster')
    for (const eliquid of eliquidsIM) {
        let div = document.createElement('div');
        div.className = 'card-group col-md-4'
        div.innerHTML = `
            <div class="card">
            <img class="img-fluid" src="${eliquid.img}" class="card-img-top" alt="${eliquid.alt}">
            <h5 class="card-title">${eliquid.marca} ${eliquid.modelo}</h5>
            <p class="card-text">${eliquid.description}. $${eliquid.precio}</p>
            <button id=${eliquid.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
            </div>
            `;
        iceMonster.append(div);
    }
}
const cardsEliquidsVapetasia = () => {
    let vapetasia = document.getElementById('vapetasia')
    for (const eliquid of eliquidsVapetasia) {
        let div = document.createElement('div');
        div.className = 'card-group col-md-4'
        div.innerHTML = `
            <div class="card">
            <img class="img-fluid" src="${eliquid.img}" class="card-img-top" alt="${eliquid.alt}">
            <h5 class="card-title">${eliquid.marca} ${eliquid.modelo}</h5>
            <p class="card-text">${eliquid.description}. $${eliquid.precio}</p>
            <button id=${eliquid.id} class="btn btn-primary btn-compra cardflex">Agregar al carrito</button>
            </div>
            `;
        vapetasia.append(div);
    }
}

//Ejecución de las cards y eventos//
function mostrarTarjetas() {
    cardsEquiposPrincipiantes();
    cardsEquiposAvanzados();
    cardsEquiposPro();
    cardsEliquidsKC();
    cardsEliquidsIM();
    cardsEliquidsVapetasia();
}
mostrarTarjetas();
cargarEvento();

function agradecerContacto(nombre) {
    alert(`Gracias por contactarte con VapeLife, ${nombre} \nTe responderemos a la brevedad!`)
}

btnEnviar.onclick = () => {
    let nombre = document.getElementById('fname').value;
    agradecerContacto(nombre)
}