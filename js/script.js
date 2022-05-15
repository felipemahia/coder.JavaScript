let edad = prompt("Ingresá tu edad");

if (edad >= 18) {
    alert('Puede ingresar');
} else {
    alert('Afuera chiquito!')
}

function saludarEze() { //ya se que no era necesaria una función, con un alert daba y sobraba, pero quería probar// 
    alert('Buenas Eze, dale al enter y pasamos a una función zarpada (???) \n si, basada en lo que pasaste al chat grupal de coder xD');
}
saludarEze();

let ingreso = prompt("Bienvenido a VapeLife, qué estás buscando? \n1- Equipo\n2- Atomizador\n3- E-Liquids\n4- Salir")
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

total(); 




// SI PRIMERO LEES EL CÓDIO:
// ES IMPORTANTE QUE VAYAS AL LIVESERVER ANTES DE SEGUIR SCROLLEANDO
// SI FUISTE DE UNA AL LIVESERVER IGNORÁ ESTO :)




















// Si, es muy parecido... Ya se, y algo de culpa siento; entonces va otro, que me sirve para practicar a no robar xD:
alert('"Me re robaste guacho" habrás pensado y tenés razón \n Solo por culpa hago otro xD ');

let emailUser, passUser;

function validarUser(emailUser, passUser) {
    //Esto no será necesario luego, ya que con el DOM se indicará que los datos séan required y el email se de este tipo de dato
    while (emailUser == "" || passUser == "") {
        alert("Tiene que ingresar un email y/o una contraseña");
        emailUser = prompt("Ingrese su email");
        passUser = prompt("Ingrese su contraseña");
    }
    impresion(emailUser, passUser);
}

function impresion(emailUser, passUser) {
    console.log("User: " + emailUser);
    console.log("Contraseña: " + passUser);
    alert("Bienvenido: " + emailUser);
}

emailUser = prompt("Ingrese su email");
passUser = prompt("Ingrese su contraseña");

validarUser(emailUser, passUser);
