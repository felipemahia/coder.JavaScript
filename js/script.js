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

//  /////////////////////////VOS ME DECÍS QUE ESTO DE ACÁ ABAJO (de la línea 36 a la 69) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/*
class Equipos {
    constructor(id, marca, modelo, precio, categoria) {
        this.id = id
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.categoria = categoria.toUpperCase();
        ;
    }

    sumarImportacion() {
        this.precio = this.precio * 1.8
    }
}
const Equipos = []
//Equipo para principiantes
    Equipos.push(new Equipos(1, 'SMOK', 'nord4', 1100, 'principiantes'));
    Equipos.push(new Equipos(2, 'SMOK', 'vapePen22', 1500, 'principiantes'));
    Equipos.push(new Equipos(3, 'SMOK', 'stickPrince', 2000, 'principiantes'));
    Equipos.push(new Equipos(4, 'Vaporesso', 'skySolo', 2000, 'principiantes'));
    Equipos.push(new Equipos(5, 'Joytech', 'exceed', 1800, 'principiantes'));
    Equipos.push(new Equipos(6, 'Vaporesso', 'pod', 1100, 'principiantes'));
//Equipo avanzados
    Equipos.push(new Equipos(7, 'Voopoo', 'dragXPlus', 2200, 'avanzados'));
    Equipos.push(new Equipos(8, 'Geekvape', 'aegisMax', 2500, 'avanzados'));
    Equipos.push(new Equipos(9, 'Geekvape', 'boostPro', 2100, 'avanzados'));
    Equipos.push(new Equipos(10, 'Vaporesso', 'genS', 2800, 'avanzados'));
//Equipos pro
    Equipos.push(new Equipos(11, 'Ehpro', 'armor', 2500, 'pro'));
    Equipos.push(new Equipos(12, 'Geekvape', 'drag3', 3000, 'pro'));
    Equipos.push(new Equipos(13, 'Vaporesso', 'luxe', 3000, 'pro'));
    Equipos.push(new Equipos(14, 'Desire', 'cut', 2800, 'pro'));
    Equipos.push(new Equipos(15, 'Augvape', 'vx217', 2800, 'pro'));
    Equipos.push(new Equipos(16, 'Hellvape', 'arez', 2800, 'pro'));

console.log(Equipos); */


//ES EXACTAMENTE IGUAL QUE LO QUE VA DE LA LINEA 78 A LA 193?????? O igual tengo que agregarle el push? Sigue sin quedarme claro esto, no puedo creerlo.




const catalogoEquipos = [
    {
        id: 1,
        marca: 'SMOK',
        modelo: 'nord4',
        precio: 1100,
        categoria: 'principiante',
    },
    {
        id: 2,
        marca: 'SMOK',
        modelo: 'vapePen22',
        precio: 1500,
        categoria: 'principiante',
    },
    {
        id: 3,
        marca: 'SMOK',
        modelo: 'stickPrince',
        precio: 2000,
        categoria: 'principiante',
    },
    {
        id: 4,
        marca: 'Vaporesso',
        modelo: 'skySolo',
        precio: 2000,
        categoria: 'principiante',
    },
    {
        id: 5,
        marca: 'Joytech',
        modelo: 'exceed',
        precio: 1800,
        categoria: 'principiante',
    },
    {
        id: 6,
        marca: 'Vaporesso',
        modelo: 'pod',
        precio: 1100,
        categoria: 'principiante',
    },
    {
        id: 7,
        marca: 'Voopoo',
        modelo: 'dragXPlus',
        precio: 2200,
        categoria: 'avanzados',
    },
    {
        id: 8,
        marca: 'Geekvape',
        modelo: 'aegisMax',
        precio: 2500,
        categoria: 'avanzados',
    },
    {
        id: 9,
        marca: 'Geekvape',
        modelo: 'boostPro',
        precio: 2100,
        categoria: 'avanzados',
    },
    {
        id: 10,
        marca: 'Vaporesso',
        modelo: 'genS',
        precio: 2800,
        categoria: 'avanzados',
    },
    {
        id: 11,
        marca: 'Ehpro',
        modelo: 'armor',
        precio: 2500,
        categoria: 'pro',
    },
    {
        id: 12,
        marca: 'Geekvape',
        modelo: 'drag3',
        precio: 3000,
        categoria: 'pro',
    },
    {
        id: 13,
        marca: 'Vaporesso',
        modelo: 'luxe',
        precio: 3000,
        categoria: 'pro',
    },
    {
        id: 14,
        marca: 'Desire',
        modelo: 'cut',
        precio: 2800,
        categoria: 'pro',
    },
    {
        id: 15,
        marca: 'Augvape',
        modelo: 'vx217',
        precio: 2800,
        categoria: 'pro',
    },
    {
        id: 16,
        marca: 'Hellvape',
        modelo: 'arez',
        precio: 2800,
        catalogo: 'pro',
    }
]

const Carrito = [];

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
    let arrayOrdenado = array.slice(0);

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
            let categoria = arrayOrdenado.sort((a, b) => a.categoria.localeCompare(b.titulo));
            return categoria;
        default:
            alert('No es un criterio válido');
            break;
    }
}


function mostrar (array){
    let info = '';
    array.forEach(element => {
        info += 'Marca: ' + element.marca + '\nModelo: ' + element.modelo + '\nPrecio: ' + element.precio + 'pesos' + '\nCategoria: ' + element.categoria + '\n \n' 
    });
    return info;
}

//console.log((mostrar(ordenar(criterioDeOrden, catalogoEquipos))));

alert(mostrar(ordenar(criterioDeOrden, catalogoEquipos)));

console.log(catalogoEquipos)